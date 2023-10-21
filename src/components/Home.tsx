import { Box, Text } from "@chakra-ui/react";
import NavBar from "./NavBar";
import margarita from "../../public/imageHeader.jpeg";
import Image from "next/image";
("");

const Home = () => {
  return (
    <Box>
      <Image src={margarita} alt="header" priority />
      <Box marginLeft={5}>
        <Text>Products</Text>
      </Box>
    </Box>
  );
};

export default Home;
