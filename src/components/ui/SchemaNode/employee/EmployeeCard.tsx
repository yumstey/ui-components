import { Icon } from "@absc_company/synapse-icons";
import { Avatar, Badge, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { Handle, Position } from "@xyflow/react";
import { useEffect, useRef, useState } from "react";
import type { EmployeeNodeData } from "./types";

const STATUS_COLORS = {
  active: "green",
  vacation: "orange",
  offline: "gray",
};

const MENU_ITEMS = [
  { icon: "User", label: "View profile", action: "view_profile" },
  { icon: "Edit", label: "Edit employee", action: "edit_employee" },
  { icon: "Mail", label: "Send message", action: "send_message" },
  { icon: "ChartBar", label: "View analytics", action: "view_analytics" },
  { divider: true },
  {
    icon: "Trash",
    label: "Remove employee",
    action: "remove_employee",
    danger: true,
  },
];

export const EmployeeCard = ({ data }: { data: EmployeeNodeData }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleMenuItemClick = (action: string) => {
    setMenuOpen(false);
    console.log("Action:", action, data);
  };

  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="#223b77"
      borderRadius="3xl"
      p={4}
      minW="280px"
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
      <Flex align="center" justify="space-between">
        <Flex align="center" gap="10px">
          <Avatar.Root size="md" bg="#223b77" color="white">
            <Avatar.Fallback
              name={data.avatar}
              fontSize="12px"
              fontWeight="700"
            />
          </Avatar.Root>
          <Flex direction="column" gap="2px">
            <Text fontWeight="600" fontSize="sm" color="#000" lineHeight="1">
              {data.fullName}
            </Text>
            <Text fontWeight="500" fontSize="xs" color="#929292">
              {data.position}
            </Text>
          </Flex>
        </Flex>
        <Box position="relative">
          <IconButton
            ref={btnRef}
            size="xs"
            color="#223b77"
            borderColor="#223b77"
            variant="outline"
            rounded="full"
            onClick={() => setMenuOpen((prev) => !prev)}
            _hover={{ bg: "none" }}
          >
            <Icon name="More" />
          </IconButton>
          {menuOpen && (
            <Box
              ref={menuRef}
              position="absolute"
              top="calc(100% + 6px)"
              right="0"
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="xl"
              py="6px"
              minW="190px"
              zIndex={1000}
              boxShadow="0 4px 20px rgba(0,0,0,0.10)"
            >
              {MENU_ITEMS.map((item, index) => {
                if ("divider" in item && item.divider) {
                  return (
                    <Box
                      key={`divider-${index}`}
                      h="1px"
                      bg="gray.100"
                      my="4px"
                      mx="8px"
                    />
                  );
                }
                return (
                  <Flex
                    key={item.action}
                    as="button"
                    align="center"
                    gap="10px"
                    px="12px"
                    py="8px"
                    w="100%"
                    fontSize="13px"
                    fontWeight="400"
                    color={item.danger ? "red.500" : "gray.700"}
                    bg="transparent"
                    border="none"
                    cursor="pointer"
                    textAlign="left"
                    _hover={{ bg: item.danger ? "red.50" : "gray.50" }}
                    onClick={() => handleMenuItemClick(item.action!)}
                  >
                    <Icon
                      name={"AaveAave"}
                      style={{
                        fontSize: "16px",
                        color: item.danger ? "currentColor" : "#223b77",
                        flexShrink: 0,
                      }}
                    />
                    <Text fontSize="13px" color="inherit">
                      {item.label}
                    </Text>
                  </Flex>
                );
              })}
            </Box>
          )}
        </Box>
      </Flex>
      <Flex direction="column" gap="10px" mt="14px">
        <Flex align="center" justify="space-between">
          <Text fontSize="12px" color="#929292">
            Отдел
          </Text>
          <Text fontSize="12px" fontWeight="500" color="#223b77">
            {data.department}
          </Text>
        </Flex>
        <Flex align="center" justify="space-between">
          <Text fontSize="12px" color="#929292">
            Опыт
          </Text>
          <Text fontSize="12px" fontWeight="500" color="#223b77">
            {data.experience}
          </Text>
        </Flex>
        <Flex align="center" justify="space-between">
          <Text fontSize="12px" color="#929292">
            Зарплата
          </Text>
          <Text fontSize="12px" fontWeight="600" color="#223b77">
            ${data.salary}
          </Text>
        </Flex>
        <Flex align="center" justify="space-between">
          <Text fontSize="12px" color="#929292">
            Статус
          </Text>
          <Badge
            colorPalette={STATUS_COLORS[data.status]}
            borderRadius="full"
            px="2"
            py="0.5"
            fontSize="10px"
            textTransform="capitalize"
          >
            {data.status}
          </Badge>
        </Flex>
      </Flex>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          opacity: 0,
        }}
      />
    </Box>
  );
};
