import React from 'react';

export const InlineImage = ({ 
  src, 
  alt = "", 
  caption, 
  float = "right", // "left", "right", or "none"
  width = "300px"
}) => {
  const containerStyle = {
    float: float,
    margin: float === 'left' 
      ? '0 2rem 1rem 0'
      : float === 'right'
        ? '0 0 1rem 2rem'
        : '1rem 0',
    maxWidth: width,
    width: '100%',
    background: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const captionStyle = {
    padding: '0.75rem',
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    fontStyle: 'italic',
  };

  return (
    <figure style={containerStyle}>
      <img src={src} alt={alt} style={imageStyle} />
      {caption && <figcaption style={captionStyle}>{caption}</figcaption>}
    </figure>
  );
};
