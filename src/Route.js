import { Route, Routes } from "react-router-dom";
import PokemonDetail from "./pages/pokemon-detail";
import PokemonCollection from "./pages/pokemon-collection";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/not-found";
import PrivateRoute from "./configs/privateRoute";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/my-pokemon"
        element={
          <PrivateRoute>
            <PokemonCollection />
          </PrivateRoute>
        }
      />
      <Route
        path="/pokemon/:name"
        element={
          <PrivateRoute>
            <PokemonDetail />
          </PrivateRoute>
        }
      />

      <Route path="/auth" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutePage;
