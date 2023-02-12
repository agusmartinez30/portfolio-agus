import { CARDS_PROJECTS } from "@base/data/data";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import { calcLength } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
export interface ProjectDetailInterface {}

const ProjectDetail: React.FC<ProjectDetailInterface> = () => {
  const [technologies, setTechnologies] = useState([]);

  const { key } = useParams();

  const oneProject: any = CARDS_PROJECTS.find(
    (project) => project.url == String(`${key}`)
  );

  useEffect(() => {
    let technology = oneProject.stack.map((e: any) => e.imagen);
    console.log(technology);
    setTechnologies(technology);
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
        <Box paddingY={4}  >
          <Text fontSize="36px" fontWeight={600}>
            {oneProject.titulo}
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ base: "column-reverse", md: "row" }}
          justifyContent="space-between"
          gap={8}
        >
          <Box
            width={{ base: "100%", md: "100%" }}
            display={"flex"}
            flexDirection="column"
            justifyContent={"space-between"}
          >
            <Text fontSize="26px">{oneProject.descripcion}</Text>
            <Box
              as="ul"
              display={"flex"}
              gap={6}
              paddingY={6}
              listStyleType="none"
            >
              <li>
                <a href={oneProject.enlaces?.repo} target="_blank">
                  <Button>Repositorio</Button>
                </a>
              </li>
              <li>
                <a href={oneProject.enlaces?.deploy} target="_blank">
                  <Button>Deploy</Button>
                </a>
              </li>
            </Box>

            <Box>
              <Text fontSize="26px">Tecnologias Utilizadas</Text>
              <Box
                as="ul"
                display={"flex"}
                gap={6}
                paddingY={4}
                listStyleType="none"
              >
                {technologies.map((tech) => (
                  <li>
                    <Image
                      boxSize={"50px"}
                      objectFit="contain"
                      borderRadius={"md"}
                      src={tech}
                      alt="imagen"
                    />
                  </li>
                ))}
              </Box>
            </Box>
          </Box>
          <Image
            src={oneProject.imagen}
            alt={oneProject?.titulo}
            width="350px"
            height={"400px"}
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
      </Container>
    </>
  );
};

export default ProjectDetail;
