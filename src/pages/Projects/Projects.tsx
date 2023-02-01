import { CARDS_PROJECTS } from "@base/data/data";
import { Link } from "react-router-dom";
import {
  Heading,
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  Grid,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
export interface ProjectsInterface {}

const Projects: React.FC<ProjectsInterface> = () => {
  const [cards, setCards] = useState(CARDS_PROJECTS);

  return (
    <Box paddingY={4}>
      <Text fontSize="32px" fontWeight={600} color="#03001C">
        Mira todo mis proyectos.
      </Text>
	  <Box  display="flex" justifyContent={"center"} gap={4}>
	  <Text fontSize={"xl"} _hover={{color: "#86EE60"}}>All</Text>
		<Text fontSize={"xl"} _hover={{color: "#86EE60"}}>Web</Text>
		<Text  fontSize="xl" _hover={{color: "#86EE60"}}>Design</Text>
	  </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} paddingY={6}>
        {cards.map((card, id) => (
          <Link to={card.url} key={id}>
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
    </Box>
  );
};

export default Projects;
