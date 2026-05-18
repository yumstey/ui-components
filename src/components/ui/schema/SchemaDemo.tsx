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
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useState } from "react";
import { DepartmentCard } from "./DepartmentCard";

interface DepartmentData extends Record<string, unknown> {
  name: string;
  type: string;
  staffCount: number;
  avatars: string[];
  extraCount: number;
}

type DepartmentNode = Node<DepartmentData>;

const nodeTypes: NodeTypes = {
  department: DepartmentCard,
};

const initialNodes: DepartmentNode[] = [
  {
    id: "root",
    type: "department",
    position: { x: 250, y: 0 },
    data: {
      name: "Отдел мяса и костей человека",
      type: "Администрация",
      staffCount: 24,
      avatars: ["DI", "SE", "AR"],
      extraCount: 16,
    },
  },
  {
    id: "left",
    type: "department",
    position: { x: 0, y: 220 },
    data: {
      name: "Отдел мяса и костей человека 1",
      type: "Администрация",
      staffCount: 24,
      avatars: ["DI", "SE", "AR"],
      extraCount: 16,
    },
  },
  {
    id: "center",
    type: "department",
    position: { x: 250, y: 400 },
    data: {
      name: "Отдел мяса и костей человека 2",
      type: "Администрация",
      staffCount: 24,
      avatars: ["DI", "SE", "AR"],
      extraCount: 16,
    },
  },
  {
    id: "right",
    type: "department",
    position: { x: 500, y: 220 },
    data: {
      name: "Отдел мяса и костей человека 3",
      type: "Администрация",
      staffCount: 24,
      avatars: ["DI", "SE", "AR"],
      extraCount: 16,
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: "root-left",
    source: "root",
    target: "left",
    type: "smoothstep",
    style: { stroke: "#a0aec0", strokeWidth: 1.5 },
  },
  {
    id: "root-center",
    source: "root",
    target: "center",
    type: "smoothstep",
    style: { stroke: "#a0aec0", strokeWidth: 1.5 },
  },
  {
    id: "root-right",
    source: "root",
    target: "right",
    type: "smoothstep",
    style: { stroke: "#a0aec0", strokeWidth: 1.5 },
  },
];

export const OrgChart = () => {
  const [nodes, setNodes] = useState<DepartmentNode[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) =>
      setNodes((prev) => applyNodeChanges(changes, prev) as DepartmentNode[]),
    [],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((prev) => applyEdgeChanges(changes, prev)),
    [],
  );

  const onConnect = useCallback(
    (connection: Connection) => setEdges((prev) => addEdge(connection, prev)),
    [],
  );

  return (
    <div style={{ width: "100%", height: "100vh", background: "#f7f8fc" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 1 }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={16}
          size={2}
          color="#d1d5e8"
        />
      </ReactFlow>
    </div>
  );
};