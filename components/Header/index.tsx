import React from "react";
import Link from "next/link";
import { NavBar } from "./style";
const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
