import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}
