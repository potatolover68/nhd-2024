import React, { useEffect } from 'react';

export const ImagePreview = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.45)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '90vw',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: '8px',
    cursor: 'default',
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={imageContainerStyle}>
        <img 
          src={src} 
          alt={alt} 
          style={imageStyle} 
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};
