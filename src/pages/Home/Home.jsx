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
  Container,
  Tag,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CARDS_PROJECTS, CARDS_TECHNOLOGIES } from "@base/data/data";
import img from "../../assets/images/profile.jpg";
import { StackTech } from "@components/StackTech";



const Home = () => {
  const [technlogies, setTechnologies] = useState(CARDS_TECHNOLOGIES);
  const [cards, setCards] = useState(CARDS_PROJECTS);

  return (
    <>
      <Container
        maxW='960px'
        margin="0 auto"
        height="100%"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        paddingY={6}
        bg={'#fff'}
      >
        <Text
          fontSize={{ base: "6xl", md: "6em" }}
          fontWeight={900}
          textTransform="capitalize"
          fontFamily={'Poppins'}
          color={'#000'}
        >
          Agustín Martínez
        </Text>

        <Box paddingY={4}>
          <Tag
            fontSize={"1.5rem"}
            fontWeight={600}
            padding={2}
            bgColor={"gray.900"}
            transition={"all .3s ease-in"}
            _hover={{ bgColor: "#CFEFF2", color: "#000" }}
            color={"#fff"}
          >
            👩‍💻 Fullstack Developer
          </Tag>
        </Box>
        <Box >
          <Text fontSize={"1.6rem"} paddingY={4} color={'#000'} >
            Desde 2021, comencé mi carrera como desarrollador y desde entonces me he enfrentado diversos retos que me han enseñado la importancia de la perseverancia en esta tarea. Cada día, busco aprender y fortalecer mis habilidades para crear aplicaciones impresionantes. Estoy emocionado/a por el futuro y me mantengo abierto/a a nuevas oportunidades de aprendizaje. Mi pasión por el desarrollo es cada vez mayor, y estoy listo/a para seguir creciendo y contribuyendo al emocionante mundo de la tecnología. ¡Sigamos construyendo un futuro tecnológico increíble juntos!
          </Text>
          <StackTech />
        </Box>
      </Container >
      <Container maxW={"100%"} padding={2}>
        <Box
          maxW='960px'
          margin="0 auto"
          paddingY={6}

        >
          <Text fontSize="32px" fontWeight={400} color={"blackAlpha.900"} fontFamily={'Poppins'}>
            Principales proyectos que desarrollé.
          </Text>

          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            templateRows='repeat(2, 1fr)'
            gap={6}
            paddingY={6}
          >
            {cards.map((card) => (
              <Link to={`projects/${card.url}`}>
                <GridItem>
                  <Card
                    h={"450px"}
                    display="grid"
                    padding={2}
                    gap={2}
                    placeContent={"flex-end"}
                    justifyContent="center"
                    bgImage={card.imagen}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize={"cover"}
                    borderRadius="xl"
                    transition="transform 0.3s ease"
                    filter={{ base: 'grayscale(0)', md: 'grayscale(100%)' }}
                    _hover={{ filter: 'grayscale(0)' }}
                  >
                    <Box width={"100%"} height={"200px"} bg={"rgba(0,0,0,0.8)"} borderRadius="9px">
                      <CardHeader>
                        <Heading fontSize={"24px"} color={"white"} fontFamily={'Poppins'}>
                          {card.titulo}
                        </Heading>
                      </CardHeader>
                      <CardBody>
                        <Box width={"100%"} height={"60px"} textOverflow={"ellipsis"} overflow={"hidden"}>
                          <Text fontSize={"18px"} color={"white"} >
                            {card.descripcion}...
                          </Text>
                        </Box>

                      </CardBody>
                    </Box>
                  </Card>

                </GridItem>

              </Link>
            ))}
          </Grid>

        </Box>
      </Container>

    </>
  );
};

export default Home;
