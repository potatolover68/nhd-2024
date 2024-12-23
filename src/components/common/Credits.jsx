import React from "react";

const Credits = () => {
  const currentYear = 2024;

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
        <p>
          nhd24.dunce.party (c) {currentYear} Hansong Zhu & PotatoLover68(Justin
          Sun). All Rights Reserved.
        </p>
        <p>
          <a href="http://nhd24.dunce.party">CONTENT of nhd24.dunce.party</a> by
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
