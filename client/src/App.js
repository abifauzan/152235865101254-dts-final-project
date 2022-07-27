import tw, { styled } from "twin.macro";
import SpotifyDetail from "./SpotifyDetail";
import Spotify from "./Spotify";
import GlobalStyles from "./styles/GlobalStyles";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { useMemo } from "react";

const App = () => {
  const [searchParams] = useSearchParams();

  console.log("searchParams", searchParams.get("code"));

  const token = useMemo(() => {
    return searchParams.get("code");
  }, [searchParams]);

  if (token === null) return <Navigate to="/login" />;

  return (
    <main className="App">
      <GlobalStyles />
      <h1>Header</h1>
      {/* <Spotify /> */}
      {/* <SpotifyDetail /> */}

      <Outlet context={{ token }} />
    </main>
  );
};

export default App;
