import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import margarita from "../../public/margarita.png";
import { NavBarMenuName } from "./NavBarMenuName";
import Link from "next/link";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex bg="#FFFFFF" height="50px" alignItems="center">
      <Flex>
        <HamburgerIcon onClick={onOpen} boxSize={5} marginLeft={5} />
      </Flex>
      <Flex w="calc(100vw - 80px)" justifyContent="center">
        <Image height={150} src={margarita} alt="margarita" priority />
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Flex justifyContent="start" flexDirection="column" marginTop={100}>
              {NavBarMenuName.map((menu) => (
                //onclick go to the menu page
                <Flex key={menu.name} justifyContent="start" height={45}>
                  <Link href={menu.path} passHref>
                    <Flex>{menu.name}</Flex>
                  </Link>
                </Flex>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default NavBar;
