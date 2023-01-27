import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Technologies from "./Technologies";
import { Container, VStack, Heading, Box, Text } from "@chakra-ui/react";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Technologies />
      <Projects />
    </>
  );
};

export default Home;
