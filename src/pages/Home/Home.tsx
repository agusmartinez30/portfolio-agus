import React, { useState } from 'react';
import { Heading, Text, Box, Grid, Card, CardBody, Image, Button, CardHeader } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CARDS_PROJECTS, CARDS_TECHNOLOGIES } from '@base/data/data';

export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {

	const [technlogies, setTechnologies] = useState(CARDS_TECHNOLOGIES);
	const [cards, setCards] = useState(CARDS_PROJECTS);

	return <>
	 <Box height="calc(100vh - 50px)" display="flex" alignItems={"center"}>
      <Heading  paddingY={6} color="#03001C" >
        <Text>Bienvenidos a mi portfolio.</Text>
      </Heading>
    </Box>
	<Box height="100vh">
	<Box paddingY={8}>
      <Text fontSize="32px" fontWeight={600} color="#03001C" paddingY={4}>
        Sobre Mi
      </Text>
      <Text fontSize="20px" color="black">
        Soy Agustin Martinez, tengo +3 años de experiencia en el desarrollo frontend utilizando React.js. <br/>
		Tengo conocimientos de UX/UI para crear interfaces empaticas y humanas.
      </Text>
    </Box>
	<Box>
      <Text fontSize="22px" fontWeight={600} color="#03001C">
        Stack Tecnologico
      </Text>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} paddingY={6}>
        {technlogies.map((tech, id) => (
          <Card key={id} display={"flex"} flexDirection={"row"} alignItems={"center"} paddingX={2}>
            <CardBody>
              <Text>{tech.titulo}</Text>
            </CardBody>
          <Image  boxSize='50px' src={tech.imagen}  />
          </Card>
        ))}
      </Grid>
    </Box>

	</Box>
	<Box paddingY={4}>
      <Text fontSize="32px" fontWeight={600} color="#03001C">
        Principales proyectos que he creado.
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} paddingY={6}>
        {cards.slice(0, 3).map((card) => (
          <Link to={`projects/${card.url}`}>
            <Card
              h={"600px"}
              display="grid"
              padding={4}
              gap={2}
              placeContent={"flex-end"}
              bgImage={card.imagen}
              backgroundPosition="centrer"
              backgroundRepeat="no-repeat"
              backgroundSize={"cover"}
              borderRadius="xl"
            >
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
            </Card>
          </Link>
        ))}
      </Grid>
      <Box display={"grid"} placeItems="center">
        <Link to="/projects">
          <Button width={"250px"} border={"1px"} bg="transparent">
            Ver todos
          </Button>
        </Link>
      </Box>
    </Box>
	</>
};

export default Home;
