import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Effects from "./components/Effects";
import Background from "./components/Background";
import TTC from "./components/TTC";
import Bib from "./components/Bib";
import { ImagePreviewProvider } from "./context/ImagePreviewContext";
import Thesis from "./components/Thesis";

export default function RTer() {
  return (
    <ImagePreviewProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/effects" element={<Effects />} />
          <Route path="/background" element={<Background />} />
          <Route path="/ttc" element={<TTC />} />
          <Route path="/bib" element={<Bib />} />
          <Route path="/thesis" element={<Thesis />} />
        </Routes>
      </Router>
    </ImagePreviewProvider>
  );
}
