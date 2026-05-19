export interface DepartmentData extends Record<string, unknown> {
  name: string;
  type: string;
  staffCount: number;
  avatars: string[];
  extraCount: number;
}
