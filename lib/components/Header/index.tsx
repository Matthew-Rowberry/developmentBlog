import React from "react";
import Link from "next/link";
import { HeaderContainer, NavBar } from "./style";
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavBar>
        <div>
          <Link href="/">
            <a>Matthew Rowberry</a>
          </Link>
        </div>

        <div>
          <div>
            <a>Link</a>
          </div>
        </div>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
