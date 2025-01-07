import React, { Children, useState, useEffect, useCallback } from "react";

export function Carousel(props) {
  const children = Children.toArray(props.children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [mouseTimer, setMouseTimer] = useState(null);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, children.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, children.length]);

  const handleMouseMove = () => {
    setControlsVisible(true);

    // Clear existing timer
    if (mouseTimer) {
      clearTimeout(mouseTimer);
    }

    // Set new timer to hide controls after 2 seconds of no movement
    const timer = setTimeout(() => {
      setControlsVisible(false);
    }, 2000);

    setMouseTimer(timer);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setSlideDirection("next");
        nextSlide();
      }
    }, 7000); // Auto advance every 7 seconds

    return () => clearInterval(timer);
  }, [isAnimating, nextSlide]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (mouseTimer) {
        clearTimeout(mouseTimer);
      }
    };
  }, [mouseTimer]);

  const carouselStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100vw",
    height: "100%",
    margin: "auto",
    overflow: "hidden",
    willChange: "transform",
    backfaceVisibility: "hidden",
  };

  const buttonBaseStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(31, 31, 35, 0.85)",
    color: "white",
    border: "2px solid rgba(255, 255, 255, 0.15)",
    cursor: "pointer",
    zIndex: 10,
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.15)",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "50%",
    padding: 0,
    opacity: controlsVisible ? 1 : 0,
    pointerEvents: controlsVisible ? "auto" : "none",
    "&:hover": {
      background: "#E18091",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      transform: "translateY(-50%) scale(1.1)",
      boxShadow: "0 8px 40px rgba(225, 128, 145, 0.3)",
    },
    "&:active": {
      transform: "translateY(-50%) scale(0.95)",
      background: "#c46d7d",
    },
  };

  const prevButtonStyle = {
    ...buttonBaseStyle,
    left: "30px",
  };

  const nextButtonStyle = {
    ...buttonBaseStyle,
    right: "30px",
  };

  const buttonIconStyle = {
    width: "24px",
    height: "24px",
    display: "block",
    margin: "auto",
    filter: "brightness(2)",
  };

  const carouselItemStyle = (index) => {
    const isActive = index === currentIndex;
    const isPrev =
      (currentIndex === 0 && index === children.length - 1) ||
      index === currentIndex - 1;
    const isNext =
      (currentIndex === children.length - 1 && index === 0) ||
      index === currentIndex + 1;

    let transform = "translateX(100%)";
    if (isActive) transform = "translateX(0)";
    else if (isPrev) transform = "translateX(-100%)";

    return {
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: isActive ? 1 : 0,
      transform,
      transition: isAnimating
        ? "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
        : "none",
      display: isActive || isPrev || isNext ? "block" : "none",
      willChange: "transform, opacity",
      backfaceVisibility: "hidden",
    };
  };

  const indicatorContainerStyle = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
    zIndex: 10,
    padding: "10px",
    borderRadius: "20px",
    background: "rgba(31, 31, 35, 0.75)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    opacity: controlsVisible ? 1 : 0,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const indicatorStyle = (index) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: index === currentIndex ? "#E18091" : "rgba(255, 255, 255, 0.5)",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    border: "none",
    padding: 0,
    margin: "0 4px",
    "&:hover": {
      transform: "scale(1.2)",
      background:
        index === currentIndex ? "#E18091" : "rgba(255, 255, 255, 0.8)",
    },
  });

  return (
    <div
      style={carouselStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setControlsVisible(false)}
    >
      <button
        style={prevButtonStyle}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <img src="/assets/l-arrow.svg" alt="Previous" style={buttonIconStyle} />
      </button>
      {children.map((child, index) => (
        <div key={index} style={carouselItemStyle(index)}>
          {child}
        </div>
      ))}
      <button
        style={nextButtonStyle}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <img src="/assets/r-arrow.svg" alt="Next" style={buttonIconStyle} />
      </button>
      <div style={indicatorContainerStyle}>
        {children.map((_, index) => (
          <button
            key={index}
            style={indicatorStyle(index)}
            onClick={() => {
              if (!isAnimating) {
                setSlideDirection(index > currentIndex ? "next" : "prev");
                setCurrentIndex(index);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
