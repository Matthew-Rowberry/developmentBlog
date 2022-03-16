import React from "react";
import { ContainerDiv } from "./styles";

const Container: React.FC = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;
