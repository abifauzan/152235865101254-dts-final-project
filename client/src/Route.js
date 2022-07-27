import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/not-found";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
