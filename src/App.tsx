import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from "./app/providers/provider";
import { ListDemo, DepartmentOrgChart,  EmployeeOrgChart} from "./components";

function Layout() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Flex
        as="header"
        justify="space-between"
        align="center"
        px="6"
        py="4"
        bg="white"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Heading size="md" color={"black"}>
          Custom Component
        </Heading>
        <Flex gap="3">
          <Button asChild colorPalette="blue" rounded='md' variant="solid">
            <NavLink to="/schema">Schema 1</NavLink>
          </Button>
          <Button asChild colorPalette="blue" rounded='md' variant="solid">
            <NavLink to="/employee">Schema 2</NavLink>
          </Button>
        </Flex>
      </Flex>

      <Box p="6">
        <Outlet />
      </Box>
    </Box>
  );
}



function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<ListDemo />} />
            <Route path="schema" element={<DepartmentOrgChart />} />
            <Route path="employee" element={<EmployeeOrgChart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
