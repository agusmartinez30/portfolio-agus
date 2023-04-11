import { CARDS_PROJECTS } from "@base/data/data";
import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import { calcLength } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
export interface ProjectDetailInterface {}

const ProjectDetail: React.FC<ProjectDetailInterface> = () => {
  const [technologies, setTechnologies] = useState([]);
  const { key } = useParams();
  const navigate = useNavigate()

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
        position={"relative"}
        maxW="990px"
        height={"100%"}
        minH={"100vh"}
        display={"grid"}
        placeItems="center"
        paddingY={4}
      >
        <Box w={"100%"} position={"relative"} top={0} left={0}>
          <Button onClick={() => {navigate('/')}}>
            <ArrowLeft />
          </Button>
        </Box>
        <Heading fontSize="42px" fontWeight={600} paddingY={4} fontFamily={'Poppins'}>
          {oneProject.titulo}
        </Heading>
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
            width="460px"
            height={"450px"}
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
      </Container>
    </>
  );
};

const ArrowLeft: any = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-chevron-left"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#597e8d"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="15 6 9 12 15 18" />
    </svg>
  );
};

export default ProjectDetail;
