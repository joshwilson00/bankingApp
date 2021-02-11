import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton";

import Logo from "./Logo";

const NavBar = (props) => {

  return (
    <NavBarContainer {...props}>
      <Logo/>
      <MenuLinks/>
    </NavBarContainer>
  );
};


const MenuLinks = ({ isOpen }) => {
    const { isAuthenticated } = useAuth0();

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bgGradient="linear(to-r, green.200, pink.500)"
      boxShadow="dark-lg"
      roundedBottomLeft="md"
      roundedBottomRight="md"
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
