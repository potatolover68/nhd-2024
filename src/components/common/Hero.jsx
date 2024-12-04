import React, { useEffect, useState } from "react";

export function Hero(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const opacity = Math.max(0, Math.min(1, 1 - scrollPosition / 500));
  const translateY = scrollPosition * 0.5;

  const heroStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    overflow: 'hidden',
    opacity,
    pointerEvents: opacity === 0 ? 'none' : 'auto',
    zIndex: opacity === 0 ? -1 : 0,
  };

  const contentStyle = {
    position: 'relative',
    transform: `translateY(${translateY}px)`,
    width: '100%',
    textAlign: 'center',
    zIndex: 1,
  };

  const textStyle = {
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeight: 1000,
    fontSize: 'clamp(2rem, 20vw, 50rem)',
    color: 'transparent',
    backgroundImage: 'url(/assets/geneva.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    lineHeight: 0.9,
    letterSpacing: '-0.05em',
    margin: 0,
  };

  const spacerStyle = {
    width: '100%',
    height: '100vh',
  };

  return (
    <>
      <div style={heroStyle}>
        <div style={contentStyle}>
          <h1 style={textStyle}>{props.children}</h1>
        </div>
      </div>
      <div style={spacerStyle} />
    </>
  );
}
