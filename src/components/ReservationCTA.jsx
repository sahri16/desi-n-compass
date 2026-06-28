import React from 'react';
import GoldParticles from './GoldParticles';
import Reveal from './Reveal';
import { COLORS } from '../data/constants';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const ReservationCTA = () => (
  <section
    className="section-pad"
    style={{
      padding: '100px 60px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Background Image */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('/assets/pad.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1,
      }}
    />

    {/* Black Overlay */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.6)',
        zIndex: 2,
      }}
    />
    <GoldParticles />

    <div style={{ position: 'relative', zIndex: 5 }}>
      <Reveal>
        <div
          style={{
            display: 'inline-block',
            border: '1px solid rgba(242,187,60,0.3)',
            padding: '5px 18px', marginBottom: 18,
            fontSize: 10, letterSpacing: '3px',
            color: COLORS.gold, textTransform: 'uppercase', borderRadius: 3,
          }}
        >
          Secure Your Seat
        </div>

        <h2 className="section-title" style={{ marginBottom: 18 }}>
          Reserve Your Table<br />
          <span style={{ color: COLORS.gold, fontStyle: 'italic' }}>Today</span>
        </h2>

        <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 420, margin: '0 auto 38px', lineHeight: 1.7, fontSize: 15 }}>
          Experience the finest authentic Desi dining in Dubai at Desi Compass. Fresh Indian, Pakistani & fusion flavors in a warm, luxurious ambiance.
          Reservations are highly recommended. Tables fill up fast.
        </p>

        <button
          className="btn-gold"
          style={{ padding: '15px 50px', fontSize: 13, animation: 'goldGlow 2.5s infinite' }}
          onClick={() => scrollTo('contact')}
        >
          <i className="fa-solid fa-calendar-check" /> Book Now
        </button>
      </Reveal>
    </div>
  </section>
);

export default ReservationCTA;
