import React from 'react';
import LogoMark from './LogoMark';
import { COLORS, SOCIAL_LINKS } from '../data/constants';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const NAV_COLS = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home',    id: 'home'    },
      { label: 'Menu',    id: 'menu'    },
      { label: 'Gallery', id: 'gallery' },
      { label: 'Contact', id: 'contact' },
    ],
  },
  {
    title: 'Menu',
    links: [
      { label: 'Desi Specials',   id: 'menu' },
      { label: 'BBQ Collection',  id: 'menu' },
      { label: 'International',   id: 'menu' },
      { label: 'Beverages',       id: 'menu' },
    ],
  },
];

const Footer = () => (
  <footer className='footer' style={{ background: '#0a0a0a', borderTop: '1px solid rgba(242,187,60,0.1)', padding: '60px 60px 28px' }}>
    <div
      className="footer-grid"
      style={{ display: 'flex', justifyContent: 'space-between', gap: 40, maxWidth: '1200px', margin: '0 auto 40px' }}
    >
      {/* Brand */}
      <div style={{ maxWidth: 260 }}>
        <div onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
          <LogoMark />
        </div>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.8, marginTop: 16, fontWeight: 300 }}>
          Dubai's premier South Asian fine dining destination. Every dish, a new compass direction of flavour.
        </p>
        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
          {SOCIAL_LINKS.map((s) => (
            <a key={s.label} href={s.href} className="social-btn" aria-label={s.label}>
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Nav Columns */}
      {NAV_COLS.map((col) => (
        <div key={col.title}>
          <div style={{ color: COLORS.gold, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 18, fontWeight: 600 }}>
            {col.title}
          </div>
          {col.links.map((link) => (
            <div
              key={link.label}
              onClick={() => scrollTo(link.id)}
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 10, cursor: 'pointer', fontWeight: 300, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.gold)}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
            >
              {link.label}
            </div>
          ))}
        </div>
      ))}

      {/* Contact */}
      <div>
        <div style={{ color: COLORS.gold, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 18, fontWeight: 600 }}>
          Contact
        </div>
        {[
          { icon: 'fa-location-dot', text: 'B8 Building - Al Barsha First - Al Barsha - Dubai' },
          { icon: 'fa-envelope',     text: 'desicompass1@gmail.com' },
          { icon: 'fa-phone',        text: '+971 55 221 4549' },
          { icon: 'fa-clock',        text: 'Daily 07:00 AM – 02:00 AM' },
        ].map((c) => (
          <div key={c.text} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
            <i className={`fa-solid ${c.icon}`} style={{ color: COLORS.gold, fontSize: 13, width: 16 }} />
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 300 }}>{c.text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Bar */}
    <div className='copyright'
      style={{
        borderTop: '1px solid rgba(242,187,60,0.07)',
        paddingTop: 22,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        flexWrap: 'wrap',
        gap: 10,
      }}
    >
      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>
        © 2026 Desi Compass. All rights reserved. Dubai, UAE.
      </div>
      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
        Crafted with <i className="fa-solid fa-compass" style={{ color: COLORS.gold, fontSize: 11 }} /> for the finest dining
      </div>
    </div>
  </footer>
);

export default Footer;
