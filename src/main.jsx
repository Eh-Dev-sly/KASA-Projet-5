import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./pages/home/index.jsx";
import About from "./pages/about/about.jsx";
import Error from "./Components/Error/error.jsx";
import Appartement from "./pages/appartement/appartement.jsx";
import './main.scss';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router basename="/KASA-Projet-5">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/appartement/:id" element={<Appartement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </StrictMode>
);
