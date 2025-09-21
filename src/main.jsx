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
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} /> 
        <Route path="/appartement/:id" element={<Appartement />} />
      </Routes>
    </Router>
  </StrictMode>
);