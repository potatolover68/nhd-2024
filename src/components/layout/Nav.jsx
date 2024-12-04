import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export const nav = [
  ["Effects", "/effects"],
  ["Background", "/background"],
  ["Theme Topic Connections", "/ttc"],
  ["Home", "/"],
];

export function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: '12px',
    left: '50%',
    transform: `translateX(-50%) translateY(${mounted ? '0' : '-20px'})`,
    width: '90%',
    maxWidth: '1000px',
    padding: '0.5rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: scrolled 
      ? 'rgba(31, 31, 35, 0.85)' 
      : 'rgba(31, 31, 35, 0.75)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: scrolled 
      ? '0 8px 32px rgba(0, 0, 0, 0.2)' 
      : '0 4px 30px rgba(0, 0, 0, 0.15)',
    zIndex: 1000,
    transition: 'all 0.3s ease-in-out, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: mounted ? 1 : 0,
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 500,
    padding: '0.35rem 0.75rem',
    borderRadius: '6px',
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      transform: 'translateY(-2px)',
      color: '#fff',
    },
  };

  const logoStyle = {
    ...linkStyle,
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#fff',
  };

  const LinkComponent = ({ to, style, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const combinedStyle = {
      ...style,
      transform: isHovered ? 'translateY(-2px)' : 'none',
      backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    };

    return (
      <Link
        to={to}
        style={combinedStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav style={navStyle}>
      <div style={linkContainerStyle}>
        {props.pages.map((page) => (
          <LinkComponent
            key={page[1]}
            to={page[1]}
            style={linkStyle}
          >
            {page[0]}
          </LinkComponent>
        ))}
      </div>
    </nav>
  );
}

export default nav;
