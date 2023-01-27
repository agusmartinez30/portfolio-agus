import { Container } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DetailProjects from "./components/DetailProjects";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Container maxW="1420px" width={"100%"} paddingX={8}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
          <Route path="/projects/:key" element={<DetailProjects />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
