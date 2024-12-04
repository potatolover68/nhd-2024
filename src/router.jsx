import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Effects from "./components/effects/Effects";

export default function RTer() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/effects" element={<Effects />} />
      </Routes>
    </Router>
  );
}
