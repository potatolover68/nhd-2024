import React from "react";

export function Title(props) {
  const titleStyle = {
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeight: 1000,
    fontSize: 'clamp(2rem, 8vw, 6rem)',
    color: '#fff',
    textAlign: 'center',
    padding: '4rem 2rem',
    lineHeight: 1.1,
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
  };

  const containerStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    height: '50vh',
    zIndex: 1,
    paddingTop: '4rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        {props.children}
      </h1>
    </div>
  );
}
