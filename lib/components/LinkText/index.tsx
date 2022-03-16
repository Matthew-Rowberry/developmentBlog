import React from "react";
import { Link as RebassLink } from "rebass";
import Link from "next/link";

const LinkText: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <RebassLink>{children}</RebassLink>
    </Link>
  );
};

export default LinkText;
