import React, { useState } from "react";

export function Cite({ title, year, source, url, children }) {
  const [isHovered, setIsHovered] = useState(false);

  const citeStyle = {
    padding: "1.5rem",
    background: isHovered ? "rgba(31, 31, 35, 0.4)" : "transparent",
    backdropFilter: isHovered ? "blur(20px)" : "none",
    WebkitBackdropFilter: isHovered ? "blur(20px)" : "none",
    borderRadius: "1.5rem",
    border: isHovered
      ? "1px solid rgba(255, 255, 255, 0.1)"
      : "1px solid transparent",
    boxShadow: isHovered ? "0 25px 50px -12px rgba(0, 0, 0, 0.3)" : "none",
    marginBottom: "0.75rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    textDecoration: "none",
    display: "block",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
  };

  const titleStyle = {
    color: "#fff",
    fontWeight: "800",
  };

  const metaStyle = {
    color: "#ddd",
  };
  const annotationStyle = {
    color: "#aaa",
    paddingLeft: "3rem",
  };

  const hangingIndentStyle = {
    textIndent: "-3rem",
    paddingLeft: "3rem",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={citeStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={hangingIndentStyle}>
        <span style={titleStyle}>"{title}"</span>{" "}
        <span style={metaStyle}>
          {year && <span>{year}. </span>}
          {source && <span>{source}</span>}
          <br />
          {url && (
            <span>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}.
              </a>
            </span>
          )}
        </span>
      </div>
      <br />
      {children && <div style={annotationStyle}>{children}</div>}
    </a>
  );
}
