import { Box } from "@chakra-ui/react";
import type { ListSectionProps } from "./types";

export const ListSectionRoot = ({
  children,
  maxW = "400px",
}: ListSectionProps) => (
  <Box maxW={maxW}>
    <Box borderRadius="3xl" overflow="hidden" bg="white">
      {children}
    </Box>
  </Box>
);
