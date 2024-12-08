import React, { useState } from 'react';

export function Cite({ title, year, source, url, children }) {
  const [isHovered, setIsHovered] = useState(false);

  const citeStyle = {
    padding: '1.5rem',
    background: isHovered ? 'rgba(31, 31, 35, 0.4)' : 'transparent',
    backdropFilter: isHovered ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: isHovered ? 'blur(20px)' : 'none',
    borderRadius: '1.5rem',
    border: isHovered ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
    boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.3)' : 'none',
    marginBottom: '0.75rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'block',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
  };

  const titleStyle = {
    color: '#fff',
    marginBottom: '0.75rem',
    fontSize: '1.1rem',
    lineHeight: 1.6,
  };

  const annotationStyle = {
    color: '#a3a3a3',
    fontSize: '0.95rem',
    lineHeight: 1.6,
  };

  const metaStyle = {
    color: '#666',
    fontSize: '0.9rem',
    marginTop: '0.5rem',
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
      <div style={titleStyle}>{title}</div>
      <div style={metaStyle}>
        {year && <span>{year}</span>}
        {source && <span> • {source}</span>}
      </div>
      {children && <div style={annotationStyle}>{children}</div>}
    </a>
  );
}
