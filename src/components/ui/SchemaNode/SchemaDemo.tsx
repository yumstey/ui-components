import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  ReactFlow,
  type Connection,
  type Edge,
  type EdgeChange,
  type Node,
  type NodeChange,
  type NodeProps,
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useMemo, useRef, useState , useEffect } from "react";
import type { OrgChartNode, OrgChartProps } from "./types";

export function OrgChart<TData extends Record<string, unknown>>({
  initialNodes,
  initialEdges,
  renderNode,
  nodeTypeName = "custom",
  height = "100vh",
  background = "#f7f8fc",
  dotColor = "#d1d5e8",
  fitViewPadding = 0.8,
  onNodesChange: onNodesChangeProp,
  onEdgesChange: onEdgesChangeProp,
  onConnect: onConnectProp,
}: OrgChartProps<TData>) {
  const [nodes, setNodes] = useState<OrgChartNode<TData>[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const renderNodeRef = useRef(renderNode);

  useEffect(() => {
  renderNodeRef.current = renderNode;
}, [renderNode]);

  const nodeTypes = useMemo<NodeTypes>(
    () => ({
      [nodeTypeName]: (props: NodeProps<Node<Record<string, unknown>>>) =>
        renderNodeRef.current(props as NodeProps<Node<TData>>),
    }),
    [nodeTypeName],
  );

  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) => {
      setNodes((prev) => {
        const next = applyNodeChanges(changes, prev) as OrgChartNode<TData>[];
        onNodesChangeProp?.(next);
        return next;
      });
    },
    [onNodesChangeProp],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges((prev) => {
        const next = applyEdgeChanges(changes, prev);
        onEdgesChangeProp?.(next);
        return next;
      });
    },
    [onEdgesChangeProp],
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((prev) => {
        const next = addEdge(connection, prev);
        onConnectProp?.(next);
        return next;
      });
    },
    [onConnectProp],
  );

  return (
    <div style={{ width: "100%", height, background }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: fitViewPadding }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={16}
          size={2}
          color={dotColor}
        />
      </ReactFlow>
    </div>
  );
}
