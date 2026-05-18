import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from "./app/providers/provider";
import { ListDemo, OrgChart } from "./components";

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
            <NavLink to="/">Home</NavLink>
          </Button>

          <Button asChild colorPalette="green" rounded='md' variant="solid">
            <NavLink to="/list">List</NavLink>
          </Button>

          <Button asChild colorPalette="yellow" rounded='md' variant="solid">
            <NavLink to="/schema">Schema</NavLink>
          </Button>
        </Flex>
      </Flex>

      <Box p="6">
        <Outlet />
      </Box>
    </Box>
  );
}

function HomePage() {
  return (
    <Box p="6" bg="white" borderRadius="xl" shadow="sm">
      <Heading size="lg" color={"black"}>
        Home Page
      </Heading>
    </Box>
  );
}



function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="list" element={<ListDemo />} />
            <Route path="schema" element={<OrgChart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
