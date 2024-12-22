import React from 'react';
import { FadeIn } from './ScrollAnimation';

export const Title = ({ children, image }) => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6rem 0 3rem',
    marginBottom: '3rem',
  };

  const titleStyle = {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: '200',
    textAlign: 'center',
    color: '#fff',
    margin: 0,
    padding: '0.75rem 3rem',
    position: 'relative',
    fontFamily: '"Nunito Sans", sans-serif',
    letterSpacing: '0.05em',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  };

  const accentStyle = {
    position: 'absolute',
    content: '""',
    bottom: '-2px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
  };

  const imageStyle = image ? {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.15,
    filter: 'blur(4px)',
    zIndex: -1,
  } : {};

  return (
    <FadeIn>
      <div style={containerStyle}>
        {image && <img src={image} alt="" style={imageStyle} />}
        <h1 style={titleStyle}>
          {children}
          <div style={accentStyle} />
        </h1>
      </div>
    </FadeIn>
  );
};
