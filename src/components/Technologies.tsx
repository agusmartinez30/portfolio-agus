import React, { useState } from "react";
import {
  Box,
  Text,
  Card,
  CardBody,
  Image,
  Grid,
} from "@chakra-ui/react";
import { CARDS_TECHNOLOGIES } from "../tools/data";

const Technologies = () => {
  const [technlogies, setTechnologies] = useState(CARDS_TECHNOLOGIES);
  return (
    <Box>
      <Text fontSize="22px" fontWeight={600} color="#03001C">
        Stack Tecnologico
      </Text>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} paddingY={6}>
        {technlogies.map((tech) => (
          <Card display={"flex"} flexDirection={"row"} alignItems={"center"} paddingX={2}>
            <CardBody>
              <Text>{tech.titulo}</Text>
            </CardBody>
          <Image  boxSize='50px' src={tech.imagen}  />
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default Technologies;
