import { Routes, Route } from "react-router-dom";
import Catalogo from "../Pages/Catalogo";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Catalogo />} />
    </Routes>
  );
}

export default AppRouter;