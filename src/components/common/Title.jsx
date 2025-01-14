import React from "react";
import { FadeIn } from "./ScrollAnimation";

export const Title = ({ children, image, subtitle }) => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "6rem 0 3rem",
    marginBottom: "3rem",
  };

  const titleStyle = {
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    fontWeight: "200",
    textAlign: "center",
    color: "#fff",
    margin: 0,
    padding: "0.75rem 3rem",
    position: "relative",
    fontFamily: '"Nunito Sans", sans-serif',
    letterSpacing: "0.05em",
    borderBottom: subtitle ? "none" : "1px solid rgba(255, 255, 255, 0.1)",
  };

  const subtitleStyle = {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    fontWeight: "300",
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.8)",
    margin: "1rem auto 0",
    padding: "0.5rem 3rem 0.75rem",
    maxWidth: "800px",
    fontFamily: '"Nunito Sans", sans-serif',
    letterSpacing: "0.02em",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    lineHeight: 1.6,
  };

  const accentStyle = {
    position: "absolute",
    content: '""',
    bottom: "-2px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "40%",
    height: "2px",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)",
  };

  const imageStyle = image
    ? {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: 0.15,
        filter: "blur(4px)",
        zIndex: -1,
      }
    : {};

  return (
    <FadeIn>
      <div style={containerStyle}>
        {image && <img src={image} alt="" style={imageStyle} />}
        <div>
          <h1 style={titleStyle}>
            {children}
            {!subtitle && <div style={accentStyle} />}
          </h1>
          {subtitle && (
            <p style={subtitleStyle}>
              {subtitle}
              <div style={accentStyle} />
            </p>
          )}
        </div>
      </div>
    </FadeIn>
  );
};
export const Subtitle = ({ children }) => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 0 3rem",
    marginBottom: "3rem",
  };

  const subtitleStyle = {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    fontWeight: "300",
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.8)",
    margin: "0 auto",
    padding: "0.5rem 3rem 0.75rem",
    maxWidth: "800px",
    fontFamily: '"Nunito Sans", sans-serif',
    letterSpacing: "0.02em",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    lineHeight: 1.6,
  };

  const accentStyle = {
    position: "absolute",
    content: '""',
    bottom: "-2px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "40%",
    height: "2px",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)",
  };

  return (
    <FadeIn>
      <div style={containerStyle}>
        <div>
          <h2 style={subtitleStyle}>
            {children}
            <div style={accentStyle} />
          </h2>
        </div>
      </div>
    </FadeIn>
  );
};
