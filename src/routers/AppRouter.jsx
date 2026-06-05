import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
}

export default AppRouter;