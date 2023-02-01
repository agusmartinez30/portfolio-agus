import { CARDS_PROJECTS } from "@base/data/data";
import { Box, Container, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export interface ProjectDetailInterface {}

const ProjectDetail: React.FC<ProjectDetailInterface> = () => {
  const [tecno, setTecno] = useState([]);

  const { key } = useParams();

  const oneProject: any = CARDS_PROJECTS.find((e) => e.url == String(`${key}`));

  useEffect(() => {
    let { stack } = oneProject;
    console.log(stack);

    setTecno(stack);
  }, []);

  return (
    <>
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
    </>
  );
};

export default ProjectDetail;
