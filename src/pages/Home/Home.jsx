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
      >
        <Text
          fontSize={{ base: "4xl", md: "6em" }}
          fontWeight={900}
          textTransform="capitalize"
        
        >
          Agustín Martinez
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
            👩‍💻 Frontend Developer
          </Tag>
        </Box>
        <Box >
          <Text fontSize={"1.6rem"} paddingY={4}>
            Me dedico al desarrollo frontend desde 2021. En mi camino me
            enfrenté a diversos retos, de los cuales aprendí que ser
            programador no es tarea fácil.
            <br />
            Diariamente estoy aprendiendo y reforzando las tecnologías que
            me gustan para desarrollar aplicaciones increíbles.
          </Text>
          <StackTech />

        </Box>






      </Container >
      <Container maxW={"100%"} padding={0} bgColor={"#CFEFF2"}>
        <Box
          maxW='960px'
          margin="0 auto"
          paddingY={6}
          
        >
          <Text fontSize="32px" fontWeight={600} color={"blackAlpha.900"}>
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
                    backgroundPosition="centrer"
                    backgroundRepeat="no-repeat"
                    backgroundSize={"cover"}
                    borderRadius="xl"
                  >
                    <Box bg={"rgba(0,0,0,0.6)"} borderRadius="9px">
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
