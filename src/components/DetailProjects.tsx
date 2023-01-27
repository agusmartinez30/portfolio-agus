import React, { useEffect, useState } from "react";
import {
  Heading,
  Box,
  Text,
  Card,
  Container,
  Image,
  Grid,
  Button,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { CARDS_PROJECTS } from "../tools/data";
import { ICard } from "../types";

const DetailProjects = () => {
  const [tecno, setTecno] = useState([]);

  const { key } = useParams();

  const oneProject: any = CARDS_PROJECTS.find((e) => e.url == String(`${key}`));

  useEffect(() => {
    let { tecnologias } = oneProject;

    setTecno(tecnologias);
  }, []);

  return (
    <Container
      maxW="100%"
      height="calc(100vh - 60px)"
      display={"grid"}
      placeItems="center"
      paddingY={4}
    >
      <Box paddingY={4}>
        <Text fontSize="36px" fontWeight={600}>
          {oneProject.titulo}
        </Text>
      </Box>
      <Box display={"flex"} justifyContent="space-between" gap={8}>
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent={"space-between"}
        >
          <Text fontSize="26px">{oneProject.descripcion}</Text>

          <a href={oneProject.enlaces}>Git</a>

          <Box>
            <Text fontSize="26px">Tecnologias Utilizadas</Text>

            {tecno?.map((e) => (
              <Text>{e}</Text>
            ))}
          </Box>
        </Box>
        <Image
          src={oneProject.imagen}
          alt={oneProject?.titulo}
          width="350px"
          height={"400px"}
          objectFit="cover"
        />
      </Box>
    </Container>
  );
};

export default DetailProjects;
