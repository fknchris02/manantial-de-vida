import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sermons from "../pages/Sermons";
import Events from "../pages/Events";
import Login from "../pages/Login";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sermons" element={<Sermons />} />
      <Route path="/events" element={<Events />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
