import { Container } from "@chakra-ui/react";

import { Home, ProjectDetail } from "./pages";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Footer } from "@components/Footer";

function App() {
  return (
    <Container maxW="100%" width={"100%"} padding={0}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects/:key" element={<ProjectDetail />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
