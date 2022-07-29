import React, { useMemo } from "react";
import pokemon_logo from "../../../assets/Images/pokemon-logo.png";
import { IoChevronBackOutline } from "react-icons/io5";
import useIsMobile from "../../../hooks/useIsMobile";
import { MainHeader, NavDesktop, Item, HeaderTop } from "./Header.style";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isMobile = useIsMobile();

  const logo = useMemo(() => {
    return (
      <img
        src={pokemon_logo}
        alt="Pokemon Logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
    );
  }, [navigate]);

  const header = useMemo(() => {
    return pathname === "/" ? (
      <>
        <HeaderTop>
          <div />
          {logo}
          <div />
        </HeaderTop>
      </>
    ) : (
      <HeaderTop>
        <IoChevronBackOutline onClick={() => navigate("/")} />
        {logo}
        <div />
      </HeaderTop>
    );
  }, [logo, navigate, pathname]);

  const navDesktop = useMemo(() => {
    return (
      <NavDesktop>
        <Item to="/" isactive={pathname === "/" ? 1 : undefined}>
          Home
        </Item>
        <Item to="/my-pokemon" isactive={pathname === "/my-pokemon" ? 1 : undefined}>
          My Pokemon
        </Item>
      </NavDesktop>
    );
  }, [pathname]);

  return (
    <MainHeader>
      {header}
      {!isMobile && navDesktop}
    </MainHeader>
  );
};

export default Header;
