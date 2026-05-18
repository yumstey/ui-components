import { ListSectionHeader } from "./ListSection.Header"
import { ListSectionItem } from "./ListSection.Item"
import { ListSectionContent } from "./ListSection.Content"
import { ListSectionRoot } from "./ListSection"

export const ListSection = Object.assign(ListSectionRoot, {
  Header: ListSectionHeader,
  Content: ListSectionContent,
  Item: ListSectionItem,
})