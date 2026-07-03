import React, { useState, useEffect } from 'react';
import LogoMark from './LogoMark';
import { COLORS, NAV_LINKS } from '../data/constants';

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = ({ onNavigateMenu, navigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className="nav-pad"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: '0 48px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? '#0a0a0a' : 'rgba(26,15,16,0.25)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(242,187,60,0.18)'
            : '1px solid transparent',
          transition: 'all 0.4s',
        }}
      >
        {/* Logo */}
        <div onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
          <LogoMark />
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '36px' }}>
          {NAV_LINKS.map((link) => (
            <span
              key={link.id}
              className="nav-link"
              onClick={() => {
                const isBlogPage = window.location.pathname.toLowerCase() === '/blog';
                if (link.id === 'blog' && typeof navigate === 'function') {
                  navigate('/blog');
                } else if (isBlogPage && typeof navigate === 'function') {
                  navigate('/');
                  setTimeout(() => scrollTo(link.id), 120);
                } else {
                  scrollTo(link.id);
                }
              }}
            >
              {link.label}
            </span>
          ))}
        </div>

        {/* Reserve Button */}
        <button
          className="btn-gold nav-btn"
          style={{ padding: '13px 34px', fontSize: '11px' }}
          onClick={onNavigateMenu}
        >
          <i className="fa-solid fa-utensils" />
         Explore Our Menu
        </button>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setNavOpen(!navOpen)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <div style={{ width: 22, height: 1.5, background: COLORS.gold }} />
          <div style={{ width: 22, height: 1.5, background: COLORS.gold }} />
          <div style={{ width: 22, height: 1.5, background: COLORS.gold }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {navOpen && (
        <div
          style={{
            position: 'fixed',
            top: 68, left: 0, right: 0,
            zIndex: 999,
            background: '#000000cf',
            backdropFilter: 'blur(20px)',
            padding: '28px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            borderBottom: '1px solid rgba(242,187,60,0.15)',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          {NAV_LINKS.map((link) => (
            <span
              key={link.id}
              className="nav-link"
              style={{ fontSize: '14px' }}
              onClick={() => {
                const isBlogPage = window.location.pathname.toLowerCase() === '/blog';
                if (link.id === 'blog' && typeof navigate === 'function') {
                  navigate('/blog');
                  setNavOpen(false);
                } else if (isBlogPage && typeof navigate === 'function') {
                  navigate('/');
                  setNavOpen(false);
                  setTimeout(() => scrollTo(link.id), 120);
                } else {
                  scrollTo(link.id);
                  setNavOpen(false);
                }
              }}
            >
              {link.label}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
