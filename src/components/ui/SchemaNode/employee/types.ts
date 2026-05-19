import type { Node } from "@xyflow/react";

export type EmployeeNode = Node<EmployeeNodeData>;

export type EmployeeNodeData = Record<string, unknown> & {
  fullName: string;
  position: string;
  department: string;
  experience: string;
  salary: number;
  status: "active" | "vacation" | "offline";
  avatar: string;
};
