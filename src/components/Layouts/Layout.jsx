import React, { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import NavMobile from "./NavMobile";
import useIsMobile from "../../hooks/useIsMobile";
import LoadingPage from "../../components/LoadingPage";
import useAppContext from "../../hooks/useAppContext";
import { MainLayout, MainContainer, BlurTop, BlurBottom } from "./Layout.style";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  const isMobile = useIsMobile();
  const { pathname } = useLocation();
  const { theme } = useAppContext();

  const isPokemonDetail = useMemo(() => pathname.split("/")[1] === "pokemon", [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <MainLayout className="font-TitilliumWeb">
      <MainContainer>
        <Header />
        {isMobile && <NavMobile />}
        {children}
      </MainContainer>
      {isPokemonDetail && isMobile && theme !== "" && (
        <div>
          <BlurTop theme={theme} />
          <BlurBottom theme={theme} />
        </div>
      )}
    </MainLayout>
  ) : (
    <LoadingPage />
  );
};

export default Layout;
