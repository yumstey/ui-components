import { Flex } from "@chakra-ui/react"
import type { ListSectionItemProps } from "./types"

export const ListSectionItem = ({ children }: ListSectionItemProps) => (
  <Flex align="center" gap="4" p="2" borderBottom="xs" borderColor="#ced3e6">
    {children}
  </Flex>
)