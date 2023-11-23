import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default MainRouter;
