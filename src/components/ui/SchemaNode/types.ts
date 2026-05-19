import { type Edge, type Node, type NodeProps } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export type OrgChartNode<TData extends Record<string, unknown>> = Node<TData>;

type RenderNodeFn<TData extends Record<string, unknown>> = (
  props: NodeProps<Node<TData>>,
) => React.ReactNode;

export interface OrgChartProps<TData extends Record<string, unknown>> {
  initialNodes: OrgChartNode<TData>[];
  initialEdges: Edge[];
  renderNode: RenderNodeFn<TData>;
  nodeTypeName?: string;
  height?: string | number;
  background?: string;
  dotColor?: string;
  fitViewPadding?: number;
  onNodesChange?: (nodes: OrgChartNode<TData>[]) => void;
  onEdgesChange?: (edges: Edge[]) => void;
  onConnect?: (edges: Edge[]) => void;
}
