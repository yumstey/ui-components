export interface StaffMember {
  name: string;
  role: string;
  avatarSrc?: string;
}
export interface StaffItemProps {
  member: StaffMember;
}
export interface ListSectionProps {
  children: React.ReactNode
  maxW?: string
}

export interface ListSectionHeaderProps {
  children: React.ReactNode
}

export interface ListSectionContentProps {
  children: React.ReactNode
}

export interface ListSectionItemProps {
  children: React.ReactNode  // ← endi member emas, children
}