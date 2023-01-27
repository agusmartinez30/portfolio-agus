import React from "react";
import { Container, VStack, Heading, Box, Text } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box paddingY={8}>
      <Text fontSize="32px" fontWeight={600} color="#03001C" paddingY={4}>
        Sobre Mi
      </Text>
      <Text fontSize="20px" color="black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        urna mauris. Quisque aliquam leo ut nisi blandit, vitae ornare mauris
        aliquet. Nam vitae tortor in purus condimentum accumsan vel id lacus.
        Etiam tempor finibus ligula, sed varius libero ornare laoreet. Phasellus
        aliquam pellentesque velit ac consectetur. Aenean dolor massa, viverra
        non odio nec, feugiat malesuada neque. Quisque consequat elit id maximus
        bibendum
      </Text>
    </Box>
  );
};

export default AboutMe;
