import { Box } from "@chakra-ui/react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  return (
    <Box minH={"100vh"}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
