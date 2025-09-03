import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./pages/home/index.jsx";
import About from "./pages/about/about.jsx"; // il faut importer About si tu l'utilises
import Error from "./Components/Error/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} /> {/* page 404 */}
      </Routes>
    </Router>
  </StrictMode>
);
