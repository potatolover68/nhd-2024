import React, { useState, useEffect } from "react";
import { ImagePreview } from "./ImagePreview";
import { useImagePreview } from "../../context/ImagePreviewContext";

export function Section({
  header,
  children,
  image,
  hasBackground = true,
  imagePosition = "right",
  hasImage = true,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { showPreview } = useImagePreview();

  const sectionStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto 4rem",
    background: hasBackground ? "rgba(31, 31, 35, 0.4)" : "transparent",
    backdropFilter: hasBackground ? "blur(20px)" : "none",
    WebkitBackdropFilter: hasBackground ? "blur(20px)" : "none",
    borderRadius: "1.5rem",
    boxShadow: hasBackground ? "0 25px 50px -12px rgba(0, 0, 0, 0.3)" : "none",
    overflow: "hidden",
    color: "#fff",
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: hasImage
      ? `${imagePosition === "left" ? "300px" : "1fr"} ${
          imagePosition === "left" ? "1fr" : "300px"
        }`
      : "1fr",
    gap: "2rem",
    padding: "3rem",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      padding: "2rem",
    },
  };

  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: "200px",
    borderRadius: "1rem",
    overflow: "hidden",
    order: imagePosition === "left" ? 0 : 1,
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "1rem",
    transition: "transform 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  };

  const headerStyle = {
    fontSize: "clamp(1.2rem, 5vw, 1.5rem)",
    fontWeight: "800",
    margin: "0",
    background: "linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.8))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    marginBottom: "1.5rem",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {hasImage && image && (
          <div
            style={imageContainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => showPreview(image, header || "")}
          >
            <img src={image} alt="" style={imageStyle} />
          </div>
        )}
        <div style={contentStyle}>
          {header && <h2 style={headerStyle}>{header}</h2>}
          {children}
        </div>
      </div>
    </section>
  );
}

export function SectionLarge({
  header,
  children,
  image,
  hasBackground = true,
  hasImage = true,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { showPreview } = useImagePreview();

  const sectionStyle = {
    position: "relative",
    display: "grid",
    gap: "2rem",
    padding: "3rem",
    margin: "0 auto 4rem",
    background: hasBackground ? "rgba(31, 31, 35, 0.4)" : "transparent",
    backdropFilter: hasBackground ? "blur(20px)" : "none",
    WebkitBackdropFilter: hasBackground ? "blur(20px)" : "none",
    borderRadius: "1.5rem",
    boxShadow: hasBackground ? "0 25px 50px -12px rgba(0, 0, 0, 0.3)" : "none",
    overflow: "hidden",
    color: "#fff",
  };

  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: "300px",
    borderRadius: "1rem",
    overflow: "hidden",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "1rem",
    transition: "transform 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  };

  const contentContainerStyle = {
    padding: "2rem",
    width: "100%",
  };

  const headerStyle = {
    fontSize: "clamp(1.2rem, 5vw, 1.5rem)",
    fontWeight: "800",
    margin: "0",
    background: "linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.8))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    marginBottom: "1.5rem",
  };

  const contentStyle = {
    color: "#fff",
    fontSize: "1rem",
    lineHeight: 1.7,
  };

  return (
    <section style={sectionStyle}>
      {image && (
        <div
          style={imageContainerStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => showPreview(image, header || "")}
        >
          <img src={image} alt="" style={imageStyle} />
        </div>
      )}
      <div style={contentContainerStyle}>
        {header && <h2 style={headerStyle}>{header}</h2>}
        <div style={contentStyle}>{children}</div>
      </div>
    </section>
  );
}

export function SectionNoImage({ header, children, hasBackground = true }) {
  const sectionStyle = {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr",
    padding: "3rem",
    margin: "4rem 0",
    background: hasBackground ? "rgba(31, 31, 35, 0.4)" : "transparent",
    backdropFilter: hasBackground ? "blur(20px)" : "none",
    WebkitBackdropFilter: hasBackground ? "blur(20px)" : "none",
    borderRadius: "1.5rem",
    boxShadow: hasBackground ? "0 25px 50px -12px rgba(0, 0, 0, 0.3)" : "none",
    overflow: "hidden",
    color: "#fff",
  };

  const contentContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    zIndex: 2,
  };

  const headerStyle = {
    fontSize: "clamp(1.2rem, 5vw, 1.5rem)",
    fontWeight: "800",
    margin: "0",
    background: "linear-gradient(135deg, #fff, rgba(255, 255, 255, 0.8))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    letterSpacing: "-0.02em",
    lineHeight: "1.2",
  };

  const contentStyle = {
    fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
    lineHeight: "1.7",
    color: "rgba(255, 255, 255, 0.9)",
  };

  const glowStyle = {
    position: "absolute",
    width: "200px",
    height: "200px",
    background:
      "radial-gradient(circle, rgba(225, 128, 145, 0.15) 0%, rgba(225, 128, 145, 0) 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
  };

  return (
    <section style={sectionStyle}>
      <div style={contentContainerStyle}>
        <h2 style={headerStyle}>{header}</h2>
        <div style={contentStyle}>{children}</div>
        {hasBackground && (
          <>
            <div style={{ ...glowStyle, top: "-100px", left: "20%" }} />
            <div style={{ ...glowStyle, bottom: "-100px", right: "20%" }} />
          </>
        )}
      </div>
    </section>
  );
}
