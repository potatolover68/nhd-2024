import React from "react";

export function Quote({ children, author, hasBackground = true }) {
  const containerStyle = {
    position: "relative",
    margin: "6rem 0",
    padding: "4rem 2rem",
    background: hasBackground
      ? "linear-gradient(135deg, rgba(31, 31, 35, 0.95), rgba(31, 31, 35, 0.8))"
      : "transparent",
    backdropFilter: hasBackground ? "blur(10px)" : "none",
    borderRadius: "1rem",
    boxShadow: hasBackground ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "none",
    overflow: "hidden",
  };

  const quoteStyle = {
    position: "relative",
    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
    fontWeight: "600",
    lineHeight: "1.4",
    color: "#fff",
    margin: "0",
    textAlign: "center",
    fontFamily: '"Nunito Sans", sans-serif',
    letterSpacing: "-0.02em",
  };

  const authorStyle = {
    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
    color: "#714043",
    textAlign: "center",
    marginTop: "2rem",
    fontWeight: "500",
    opacity: "0.9",
    fontStyle: "italic",
  };

  const quotationMarkStyle = {
    position: "absolute",
    fontSize: "15rem",
    fontFamily: "Georgia, serif",
    opacity: "0.1",
    color: "#E18091",
    lineHeight: "1",
    pointerEvents: "none",
  };

  const leftQuoteStyle = {
    ...quotationMarkStyle,
    top: "-2rem",
    left: "-2rem",
  };

  const rightQuoteStyle = {
    ...quotationMarkStyle,
    bottom: "-8rem",
    right: "-2rem",
    transform: "rotate(180deg)",
  };

  const glowStyle = {
    position: "absolute",
    width: "150px",
    height: "150px",
    background:
      "radial-gradient(circle, rgba(225, 128, 145, 0.2) 0%, rgba(225, 128, 145, 0) 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
  };

  const topGlowStyle = {
    ...glowStyle,
    top: "-75px",
    right: "20%",
  };

  const bottomGlowStyle = {
    ...glowStyle,
    bottom: "-75px",
    left: "20%",
  };

  return (
    <div style={containerStyle}>
      {hasBackground && (
        <>
          <div style={leftQuoteStyle}>"</div>
          <div style={rightQuoteStyle}>"</div>
          <div style={topGlowStyle} />
          <div style={bottomGlowStyle} />
        </>
      )}
      <blockquote style={quoteStyle}>{children}</blockquote>
      <p style={authorStyle}>{author}</p>
    </div>
  );
}

export function InlineQuote({ children, author }) {
  const containerStyle = {
    display: "block",
    margin: "1rem 0",
    padding: "1rem",
    background: "rgba(31, 31, 35, 0.4)",
    borderRadius: "0.5rem",
    border: "0.1px solid rgba(255, 255, 255, 0.1)",
    color: "#fff",
    fontSize: "1rem",
    lineHeight: "1.6",
    backdropFilter: "blur(10px)",
  };

  const quoteStyle = {
    display: "block",
    marginBottom: author ? "0.5rem" : 0,
    fontStyle: "italic",
  };

  const authorStyle = {
    display: "block",
    fontSize: "0.9rem",
    color: "#e18093",
    opacity: 1,
  };

  return (
    <div style={containerStyle}>
      <div style={quoteStyle}>{children}</div>
      {author && <div style={authorStyle}>— {author}</div>}
    </div>
  );
}
