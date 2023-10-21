import { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh">
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
