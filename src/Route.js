import { Route, Routes } from "react-router-dom";
import PokemonDetail from "./pages/pokemon-detail";
import PokemonCollection from "./pages/pokemon-collection";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/not-found";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/pokemon/:name" element={<PokemonDetail />} exact />
      <Route path="/my-pokemon" element={<PokemonCollection />} exact />

      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutePage;
