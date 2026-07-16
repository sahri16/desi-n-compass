import React from 'react';
import Reveal from './Reveal';
import { COLORS } from '../data/constants';

const About = () => (
  <section id="about" className="section-pad" style={{ padding: '120px 60px' }}>
    <div
      className="about-grid"
      style={{
        display: 'flex', gap: '80px',
        alignItems: 'center',
        maxWidth: '1200px', margin: '0 auto',
      }}
    >
      {/* Left – Image */}
      <Reveal style={{ flex: 1 }}>
        <div
          style={{
            position: 'relative',
            aspectRatio: '4/5', maxWidth: '440px',
            borderRadius: 20, overflow: 'hidden',
            border: '1px solid rgba(242,187,60,0.2)',
            background: 'linear-gradient(135deg,#2a1505,#1a0f10)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
            alt="Fine dining interior"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }}
          />
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(26,15,16,0.8) 0%, transparent 50%)',
            }}
          />
          {/* Corner accents */}
          {[
            { top: 14, left: 14,  borderTop: true,  borderLeft: true  },
            { top: 14, right: 14, borderTop: true,  borderRight: true },
            { bottom: 14, left: 14,  borderBottom: true, borderLeft: true  },
            { bottom: 14, right: 14, borderBottom: true, borderRight: true },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: c.top, bottom: c.bottom,
                left: c.left, right: c.right,
                width: 22, height: 22,
                borderTop:    c.borderTop    ? `2px solid ${COLORS.gold}` : 'none',
                borderBottom: c.borderBottom ? `2px solid ${COLORS.gold}` : 'none',
                borderLeft:   c.borderLeft   ? `2px solid ${COLORS.gold}` : 'none',
                borderRight:  c.borderRight  ? `2px solid ${COLORS.gold}` : 'none',
              }}
            />
          ))}
          {/* Label */}
          <div
            style={{
              position: 'absolute', bottom: 24, left: 24, right: 24,
              background: 'rgba(242,187,60,0.1)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(242,187,60,0.25)',
              padding: '14px 18px', borderRadius: 8,
            }}
          >
            <div style={{ color: COLORS.gold, fontFamily: "'Libre Baskerville',serif", fontSize: 13, fontWeight: 600 }}>
              Est. in Dubai
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, letterSpacing: '1px', marginTop: 2 }}>
              WHERE EVERY DISH IS A JOURNEY
            </div>
          </div>
        </div>
      </Reveal>

      {/* Right – Text */}
      <Reveal delay={0.2} style={{ flex: 1 }}>
        <span className="section-badge">Our Story</span>
        <h2 className="section-title">
          Where Every Direction<br />
          <span style={{ color: COLORS.gold, fontStyle: 'italic' }}>Leads to Flavor</span>
        </h2>
        <div className="gold-line" />
        <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.9, fontSize: 15, marginBottom: 20, fontWeight: 300 }}>
        Desi Compass was founded in March 2026 to bring authentic Desi flavors and global cuisines together under one roof. Inspired by the meaning of a 360° compass, we offer a journey through Indian, Pakistani, Indo-Chinese, Filipino, Continental, Arabic, and BBQ specialties.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.9, fontSize: 15, fontWeight: 300 }}>
         Every dish is freshly prepared to order using premium ingredients and traditional recipes, delivering the true taste of home with every bite.
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 40, marginTop: 40 }}>
          {[['100+', 'SIGNATURE DISHES'], ['10+', 'GLOBAL CUISINE STYLES'], ['100%', 'FRESHLY MADE TO ORDER']].map(([num, label]) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "'Libre Baskerville',serif",
                  fontSize: 36, fontWeight: 700,
                  color: COLORS.gold, lineHeight: 1,
                }}
              >
                {num}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 4 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
