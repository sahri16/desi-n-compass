import React from 'react';
import Reveal from './Reveal';
import { COLORS, WHY_US } from '../data/constants';

const WhyUs = () => (
  <section className="section-pad" style={{ padding: '100px 60px', background: 'rgba(255,255,255,0.01)' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

      {/* Header */}
      <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
        <span className="section-badge">Our Promise</span>
        <h2 className="section-title">
          Why Choose <span style={{ color: COLORS.gold, fontStyle: 'italic' }}>Desi Compass</span>
        </h2>
        <div className="gold-line" style={{ margin: '18px auto' }} />
      </Reveal>

      {/* Cards */}
      <div className="why-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
        {WHY_US.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div className="why-card">
              <div
                style={{
                  width: 58, height: 58, borderRadius: '50%',
                  border: '1px solid rgba(242,187,60,0.28)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  background: 'rgba(242,187,60,0.07)',
                }}
              >
                <i className={`fa-solid ${item.icon}`} style={{ color: COLORS.gold, fontSize: 22 }} />
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 10,
                }}
              >
                {item.title}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.7, fontWeight: 300 }}>
                {item.desc}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
