import { OrgChart } from "../SchemaDemo";
import { departmentEdges, departmentNodes } from "./const";
import { DepartmentCard } from "./DepartmentCard";
import type { DepartmentData } from "./types";

export const DepartmentOrgChart = () => (
  <OrgChart<DepartmentData>
    initialNodes={departmentNodes}
    initialEdges={departmentEdges}
    nodeTypeName="department"
    background="#ffffff"
    renderNode={({ data }) => <DepartmentCard data={data} />}
  />
);
