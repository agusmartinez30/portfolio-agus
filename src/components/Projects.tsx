import React, { useState } from "react";
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
import { CARDS_PROJECTS } from "../tools/data";
import { Link } from "react-router-dom";

const Projects = () => {
  const [cards, setCards] = useState(CARDS_PROJECTS);

  return (
    <Box paddingY={4}>
      <Text fontSize="32px" fontWeight={600} color="#03001C">
        Proyectos que he creado.
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
  );
};

export default Projects;
