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
          height="100%"
          minHeight={"100%"}
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          paddingY={8}
        >
          <Box display={{base: "column", md: "flex"}} justifyContent={"space-between"}>
            <Text fontSize={{base: "3xl", md: "8xl"}} textTransform="uppercase">
              Fullstack <br /> Developer
            </Text>
            <Image
              boxSize={"250px"}
              objectFit="cover"
              src="https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?s=612x612&w=0&k=20&c=-twL1NKKad6S_EPrGSniewjh6776A0Ju27ExMh7v_kI="
            />
          </Box>
          <Box display={{base: "column", md: "flex"}}  alignItems={"center"} justifyContent={"space-between"}>
          <Text fontSize={"2xl"}>
          Pienso, diseño y desarrollo productos del mañana.
            </Text>
            <Text fontSize={{base: "5xl", md: "6xl"}}>
              Agustin <br /> Martinez
            </Text>
          </Box>
        </Box>
        <Box
          height="100%"
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          paddingY={8}
        >
          <Box padding={4} borderRadius="md">
            <Text fontSize="32px" fontWeight={600} color="#34333d">
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
              <Box width={{ base: "100%", md: "60%" }}>
                <Text fontSize="20px" color="black">
                  Soy Agustin Martinez, tengo +3 años de experiencia en el
                  desarrollo frontend utilizando React.js. <br />
                  Tengo conocimientos de UX/UI para crear interfaces empaticas y
                  humanas.
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
          Principales proyectos que he creado.
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
