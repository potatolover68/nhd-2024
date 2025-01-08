import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { nav } from "./Nav";

const Credits = () => {
  const currentYear = 2024;
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentIndex = () => {
    return nav.findIndex(([_, path]) => path === location.pathname);
  };

  const handleNavigation = (direction) => {
    const currentIndex = getCurrentIndex();
    const nextIndex = direction === 'forward' 
      ? (currentIndex + 1) % nav.length 
      : (currentIndex - 1 + nav.length) % nav.length;
    navigate(nav[nextIndex][1]);
  };

  return (
    <footer
      className="credits-footer"
      style={{
        padding: "20px",
        textAlign: "center",
        color: "rgba(255, 255, 255, 0.67)",
      }}
    >
      <div className="credits-content">
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "20px",
          marginBottom: "20px" 
        }}>
          <button
            onClick={() => handleNavigation('back')}
            style={{
              background: "rgba(31, 31, 35, 0.75)",
              border: "none",
              color: "rgba(255, 255, 255, 0.67)",
              padding: "8px 16px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            ← Back
          </button>
          <button
            onClick={() => handleNavigation('forward')}
            style={{
              background: "rgba(31, 31, 35, 0.75)",
              border: "none",
              color: "rgba(255, 255, 255, 0.67)",
              padding: "8px 16px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Forward →
          </button>
        </div>
        <p>
          nhd24.dunce.party (c) {currentYear} Hansong Zhu & PotatoLover68(Justin
          Sun). All Rights Reserved.
        </p>
        <p>
          <a href="http://nhd24.dunce.party">CONTENT of nhd24.dunce.party</a> by{" "}
          <a href="http://dunce.party">PotatoLover68 and Hansong Zhu</a> is
          licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
            target="_blank"
            rel="license noopener noreferrer"
            style={{ display: "inline-block" }}
          >
            CC BY-NC-SA 4.0
          </a>
        </p>
        <p>Created for National History Day 2024</p>
      </div>
    </footer>
  );
};

export default Credits;
