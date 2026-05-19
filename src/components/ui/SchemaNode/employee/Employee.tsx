import { employeeEdges, employeeNodes } from "./const";
import { EmployeeCard } from "./EmployeeCard";
import type { EmployeeNodeData } from "./types";
import { OrgChart } from "../SchemaDemo";

export const EmployeeOrgChart = () => (
  <OrgChart<EmployeeNodeData>
    initialNodes={employeeNodes}
    initialEdges={employeeEdges}
    nodeTypeName="employee"
    background="#ffffff"
    renderNode={({ data }) => <EmployeeCard data={data} />}
  />
);
