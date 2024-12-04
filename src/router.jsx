import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Effects from "./components/Effects";
import Background from "./components/Background";
import TTC from './components/TTC';
export default function RTer() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/effects" element={<Effects />} />
        <Route path="/background" element={<Background />} />
        <Route path="/ttc" element={<TTC />} />
      </Routes>
    </Router>
  );
}
