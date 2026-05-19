import type { Edge } from "@xyflow/react";
import type { OrgChartNode } from "../types";
// in type file
import type { DepartmentData } from "./types";

export const departmentNodes: OrgChartNode<DepartmentData>[] = [
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

export const departmentEdges: Edge[] = [
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
