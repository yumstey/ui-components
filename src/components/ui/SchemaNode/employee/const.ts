import type { EmployeeNode } from "./types";
import type { Edge } from "@xyflow/react";

export const employeeNodes: EmployeeNode[] = [
  {
    id: "hr-director",
    type: "employee",
    position: { x: 500, y: 0 },
    data: {
      fullName: "Анна Петрова",
      position: "HR Director",
      department: "Human Resources",
      experience: "12 лет",
      salary: 4500,
      status: "active",
      avatar: "AP",
    },
  },

  {
    id: "hr-assistant",
    type: "employee",
    position: { x: 500, y: 240 },
    data: {
      fullName: "Екатерина Смирнова",
      position: "HR Assistant",
      department: "Human Resources",
      experience: "3 года",
      salary: 1600,
      status: "active",
      avatar: "ES",
    },
  },

  {
    id: "recruiter-1",
    type: "employee",
    position: { x: 180, y: 480 },
    data: {
      fullName: "Дмитрий Иванов",
      position: "Senior Recruiter",
      department: "Recruitment",
      experience: "6 лет",
      salary: 2200,
      status: "active",
      avatar: "DI",
    },
  },

  {
    id: "recruiter-2",
    type: "employee",
    position: { x: 500, y: 480 },
    data: {
      fullName: "Алина Садыкова",
      position: "HR Manager",
      department: "Employee Relations",
      experience: "4 года",
      salary: 2000,
      status: "vacation",
      avatar: "AS",
    },
  },

  {
    id: "trainer",
    type: "employee",
    position: { x: 820, y: 480 },
    data: {
      fullName: "Тимур Каримов",
      position: "L&D Specialist",
      department: "Learning & Development",
      experience: "5 лет",
      salary: 2100,
      status: "active",
      avatar: "TK",
    },
  },

  {
    id: "payroll-manager",
    type: "employee",
    position: { x: 1140, y: 480 },
    data: {
      fullName: "Марина Кузнецова",
      position: "Payroll Manager",
      department: "Payroll",
      experience: "8 лет",
      salary: 2600,
      status: "offline",
      avatar: "MK",
    },
  },
];

export const employeeEdges: Edge[] = [
  {
    id: "director-assistant",
    source: "hr-director",
    target: "hr-assistant",
    type: "smoothstep",
    style: {
      stroke: "#cbd5e0",
      strokeWidth: 2,
    },
  },

  {
    id: "assistant-rec1",
    source: "hr-assistant",
    target: "recruiter-1",
    type: "smoothstep",
    style: {
      stroke: "#cbd5e0",
      strokeWidth: 2,
    },
  },

  {
    id: "assistant-rec2",
    source: "hr-assistant",
    target: "recruiter-2",
    type: "smoothstep",
    style: {
      stroke: "#cbd5e0",
      strokeWidth: 2,
    },
  },

  {
    id: "assistant-trainer",
    source: "hr-assistant",
    target: "trainer",
    type: "smoothstep",
    style: {
      stroke: "#cbd5e0",
      strokeWidth: 2,
    },
  },

  {
    id: "assistant-payroll",
    source: "hr-assistant",
    target: "payroll-manager",
    type: "smoothstep",
    style: {
      stroke: "#cbd5e0",
      strokeWidth: 2,
    },
  },
];