import { Container } from "@chakra-ui/react";

import { Home, ProjectDetail, Projects } from "./pages";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Container maxW="1420px" width={"100%"} paddingX={8}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:key" element={<ProjectDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
