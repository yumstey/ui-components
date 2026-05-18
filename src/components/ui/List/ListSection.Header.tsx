import { Box, Heading } from "@chakra-ui/react"
import type { ListSectionHeaderProps } from "./types"

export const ListSectionHeader = ({ children }: ListSectionHeaderProps) => (
  <Box bg="blue.800" p="5">
    <Heading size="md" color="white">
      {children}
    </Heading>
  </Box>
)