import { Heading, Text, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logotipo from "../components/logo.png";

const Navbar = () => {
  // const logoTipo = "<AgusDev/>";

  return (
    <Heading
      height="60px"
      display="flex"
      alignItems="center"
      justifyContent={"space-between"}
      paddingY={6}
      borderBottom="1px solid #CBD5E0"
    >
      <Link to="/">
        <Image width={"150px"} objectFit="contain" src={logotipo} />
      </Link>
      <Box>
        <Box as="ul" display="flex" listStyleType={"none"} gap={4}>
          <li>
            <Link to="projects">
              <Text
                fontSize={"16px"}
                fontWeight={500}
                textTransform="uppercase"
                _hover={{ color: "#86EE60" }}
              >
                {" "}
                Proyectos
              </Text>
            </Link>
          </li>
          <li>
            <Link to="projects">
              <Text
                fontSize={"16px"}
                textTransform="uppercase"
                fontWeight={500}
                _hover={{ color: "#86EE60" }}
              >
                Contacto
              </Text>
            </Link>
          </li>
        </Box>
      </Box>
      <Box>
       
      </Box>
    </Heading>
  );
};

export default Navbar;
