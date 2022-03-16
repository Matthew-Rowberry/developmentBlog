import React from "react";
import Link from "next/link";
import { NavBar } from "./style";
import { Box, Flex } from "rebass";
import LinkText from "../LinkText";
const Header: React.FC = () => {
  return (
    <Flex as={"header"}>
      <NavBar>
        <Box>
          <LinkText href="/">Matthew Rowberry</LinkText>
        </Box>

        <Box>
          <Box>
            <LinkText href="/">My Link</LinkText>
          </Box>
        </Box>
      </NavBar>
    </Flex>
  );
};

export default Header;
