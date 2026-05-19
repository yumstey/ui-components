import { Icon } from "@absc_company/synapse-icons";
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Handle, Position } from "@xyflow/react";
import { type DepartmentData } from "./types";

const AVATAR_BG_COLORS = ["blue.400", "teal.400", "purple.400", "orange.400"];

export const DepartmentCard = ({ data }: { data: DepartmentData }) => {
  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="#223b77"
      borderRadius="3xl"
      p={4}
      minW="258px"
      position="relative"
    >
      <Handle
        type="target"
        position={Position.Top}
        style={{
          background: "#969cc0",
          width: 8,
          height: 8,
          border: "none",
        }}
      />
      <Flex align="flex-start" gap="8px">
        <Text fontSize="lg">
          <Icon name="ConvertShape2" size={"md"} color="#223b77" />
        </Text>
        <Flex gap="4px" flexDirection="column">
          <Text fontWeight="medium" fontSize="xs" color="#000">
            {data.name}
          </Text>

          <Text fontWeight="medium" fontSize="2xs" color="#929292">
            {data.type}
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" gap="10px" mt="10px">
        <Text fontSize="12px" color="#929292">
          {data.staffCount} сотрудника
        </Text>
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <AvatarGroup spaceX="-2">
              {data.avatars.map((initials, i) => (
                <Avatar.Root
                  key={i}
                  size="2xs"
                  bg={AVATAR_BG_COLORS[i % AVATAR_BG_COLORS.length]}
                  color="white"
                  variant="solid"
                  border="none"
                >
                  <Avatar.Fallback
                    name={initials}
                    fontSize="9px"
                    fontWeight="700"
                  />
                </Avatar.Root>
              ))}
            </AvatarGroup>
            {data.extraCount > 0 && (
              <Text fontSize="2xs" color="#d9d9d9" ml={2}>
                ещё {data.extraCount}
              </Text>
            )}
          </Flex>
          <IconButton
            size="xs"
            color="#223b77"
            borderColor="#223b77"
            variant="outline"
            rounded="full"
          >
            <Icon name="Trade" />
          </IconButton>
        </Flex>
      </Flex>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ opacity: "0" }}
      />
    </Box>
  );
};
