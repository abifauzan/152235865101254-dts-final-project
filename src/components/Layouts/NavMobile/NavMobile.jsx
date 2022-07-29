import React from "react";
import { useLocation } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { Item, Nav } from "./NavMobile.style";

const NavMobile = () => {
  const { pathname } = useLocation();

  return (
    <Nav>
      <Item to="/" isactive={pathname === "/" ? 1 : undefined}>
        <BiHomeAlt />
      </Item>
      <Item to="/my-pokemon" isactive={pathname === "/my-pokemon" ? 1 : undefined}>
        <AiOutlineUser />
      </Item>
    </Nav>
  );
};

export default NavMobile;
