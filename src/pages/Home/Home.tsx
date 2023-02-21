import React, { useState } from "react";
import {
  Heading,
  Text,
  Box,
  Grid,
  Card,
  CardBody,
  Image,
  Button,
  CardHeader,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CARDS_PROJECTS, CARDS_TECHNOLOGIES } from "@base/data/data";
import img from "../../assets/images/profile.jpg";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const [technlogies, setTechnologies] = useState(CARDS_TECHNOLOGIES);
  const [cards, setCards] = useState(CARDS_PROJECTS);

  return (
    <>
      {/* <Box height="calc(100vh - 50px)" display="flex" alignItems={"center"} >
        <Heading paddingY={6} color="#f12">
          <Text>Bienvenidos a mi portfolio.</Text>
        </Heading>
      </Box> */}
      <Box height="100%" minHeight={"100vh"}>
        <Box
          position={"relative"}
          top="-5px"
          left="0"
          height="100%"
          minHeight={"100vh"}
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          gap={4}
        >
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text
              fontSize={{ base: "4xl", md: "8xl" }}
              textTransform="uppercase"
            >
              Frontend <br /> Developer
            </Text>
            <Image src={img} boxSize={"350px"} objectFit="cover" />
          </Box>
          <Box
            display={"flex"}
            flexDirection={{ base: "column-reverse", md: "row" }}
            justifyContent={"space-between"}
            alignItems={{ base: "none", md: "center" }}
          >
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Impulsado por la creatividad
            </Text>
            <Text fontSize={{ base: "5xl", md: "6xl" }}>Agustin Martinez</Text>
          </Box>
        </Box>
        <Box
          height="100%"
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          paddingY={8}
        >
          <Box paddingY={4} borderRadius="md">
            <Text
              fontSize="32px"
              fontWeight={600}
              color="#34333d"
              textTransform={"uppercase"}
            >
              Sobre Mi
            </Text>
            <Box
              display={"flex"}
              flexFlow="row wrap"
              gap={4}
              paddingY={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box width={{ base: "100%", md: "100%" }} paddingY={6}>
                <Text fontSize="20px" fontWeight="300" color="black" lineHeight={"1.7rem"}>
                Me dedico al desarrollo frontend desde 2021. En mi camino me enfrenté a diversos retos, de los cuales aprendí que ser programador no es tarea fácil.
                  <br />
                  Como experiencia laboral, he trabajado en una agencia de marketing como desarrollador frontend. Allí diseñé y desarrollé diversos sitios y e-commerce, así como algunas cartas digitales para restaurantes.
                  <br />
                  Diariamente estoy aprendiendo y reforzando las tecnologías que me gustan para desarrollar aplicaciones increíbles.
                </Text>
              </Box>
              {/* <Box
                width={{ base: "100%", md: "30%" }}
                display={"flex"}
                justifyContent="center"
              >
                <Image
                  borderRadius="full"
                  boxSize="200px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Box> */}
            </Box>
            <Box>
              <Text fontSize="22px" fontWeight={600} color="#03001C">
                Stack Tecnologico
              </Text>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(5, 1fr)",
                }}
                gap={6}
                paddingY={6}
              >
                {technlogies.map((tech, id) => (
                  <Card
                    key={id}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    paddingX={2}
                  >
                    <CardBody>
                      <Text>{tech.titulo}</Text>
                    </CardBody>
                    <Image boxSize="50px" src={tech.imagen} />
                  </Card>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box paddingY={4}>
        <Text fontSize="32px" fontWeight={600} color="#03001C">
          Principales proyectos que desarrollé.
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
          paddingY={6}
        >
          {cards.slice(0, 3).map((card) => (
            <Link to={`projects/${card.url}`}>
              <Card
                h={"600px"}
                display="grid"
                padding={4}
                gap={2}
                placeContent={"flex-end"}
                justifyContent="center"
                bgImage={card.imagen}
                backgroundPosition="centrer"
                backgroundRepeat="no-repeat"
                backgroundSize={"cover"}
                borderRadius="xl"
              >
                <Box bg={"rgba(0,0,0,0.4)"} borderRadius="md">
                  <CardHeader>
                    <Heading fontSize={"32px"} color={"white"}>
                      {card.titulo}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Text fontSize={"18px"} color={"white"}>
                      {card.descripcion}
                    </Text>
                  </CardBody>
                </Box>
              </Card>
            </Link>
          ))}
        </Grid>
        <Box display={"grid"} placeItems="center">
          <Link to="/projects">
            <Button width={"250px"} border={"1px"} _hover={{ bg: "#86EE60" }}>
              Ver todos
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Home;
