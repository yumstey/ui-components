import { Avatar, Box , Text , Icon, Grid } from "@chakra-ui/react";
import { staffList } from "./const";
import { ListSection } from './index';
import { TbChevronRight } from "react-icons/tb";

export const ListDemo = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={2}>
      <ListSection>
        <ListSection.Header>Сотрудники клиники</ListSection.Header>
        <ListSection.Content>
          {staffList.map((member, i) => (
            <ListSection.Item key={i} >
              <Avatar.Root size="md" colorPalette="brand" variant="solid">
                {member.avatarSrc
                  ? <Avatar.Image src={member.avatarSrc} />
                  : <Avatar.Fallback name={member.name} />}
              </Avatar.Root>
              <Box>
                <Text fontSize="sm" color='black'>{member.name}</Text>
                <Text fontSize="xs" color="#969cc0">{member.role}</Text>
              </Box>
            </ListSection.Item>
          ))}
        </ListSection.Content>
      </ListSection>
      <ListSection>
        <ListSection.Header>Menyu</ListSection.Header>
        <ListSection.Content>
          {["Profil", "Sozlamalar", "Yordam"].map((label, i) => (
            <ListSection.Item key={i}>
              <Text flex={1} fontSize="sm"  color='black'>{label}</Text>
              <Icon as={TbChevronRight} color="gray.400" />
            </ListSection.Item>
          ))}
        </ListSection.Content>
      </ListSection>
      <ListSection>
        <ListSection.Header>Xabarlar</ListSection.Header>
        <ListSection.Content>
          {["Bugun uchrashuv bor", "Yangi bemor qo'shildi"].map((msg, i) => (
            <ListSection.Item key={i}>
              <Text fontSize="sm" color='black'>{msg}</Text>
            </ListSection.Item>
          ))}
        </ListSection.Content>
      </ListSection>
    </Grid>
  );
};