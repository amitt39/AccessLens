import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Scan from "./pages/Scan";
import Results from "./pages/Results";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}
