import React, { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Theme } from "./styles/Theme";
import { useThemeMode } from "./hooks/useThemeMode";
import { AppProvider } from "./contexts/AppContext";
import Router from "./Route";
import Layout from "./components/Layouts";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [theme, isMounted] = useThemeMode();

  const themeMode = useMemo(() => (theme === "light" ? Theme.light : Theme.dark), [theme]);

  if (!isMounted) return <div />;

  return (
    <AppProvider>
      <ThemeProvider theme={themeMode}>
        <BrowserRouter>
          <Layout>
            <GlobalStyles />
            <Router />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
