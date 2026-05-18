import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom"
import { Box, Flex, Heading, Button } from "@chakra-ui/react"
import { Provider } from "./app/components/ui/provider"
import { ListDemo } from "./components/ui"

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
        <Heading size="md" color={'black'}>Custom Component</Heading>

        <Flex gap="3">
          <Button asChild colorPalette="blue" variant="solid">
            <NavLink to="/">Home</NavLink>
          </Button>

          <Button asChild colorPalette="green" variant="solid">
            <NavLink to="/list">List</NavLink>
          </Button>

          <Button asChild colorPalette="purple" variant="solid">
            <NavLink to="/schema">Schema</NavLink>
          </Button>
        </Flex>
      </Flex>

      <Box p="6">
        <Outlet />
      </Box>
    </Box>
  )
}

function HomePage() {
  return (
    <Box
      p="6"
      bg="white"
      borderRadius="xl"
      shadow="sm"
    >
      <Heading size="lg" color={'black'}>Home Page</Heading>
    </Box>
  )
}



function SchemaPage() {
  return (
    <Box
      p="6"
      bg="white"
      borderRadius="xl"
      shadow="sm"
    >
      <Heading size="lg" color={'black'}>Schema Page</Heading>
    </Box>
  )
}

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="list" element={<ListDemo />} />
            <Route path="schema" element={<SchemaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App