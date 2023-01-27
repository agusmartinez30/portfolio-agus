import { Heading, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box height="calc(100vh - 50px)" display="flex" alignItems={"center"}>
      <Heading  paddingY={6} color="#03001C" >
        <Text>Bienvenidos a mi portfolio.</Text>
      </Heading>
    </Box>
  );
};

export default Header;
