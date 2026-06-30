import React from 'react';
import { COLORS } from '../data/constants';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Hero = () => (
  <section
    id="home"
    style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}
  >
    {/* Video Background: place your file at public/hero-bg.mp4 */}
    <video
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%', objectFit: 'cover',
        zIndex: 1,
      }}
    >
      <source src="/assets/hero-bg.mp4" type="video/mp4" />
    </video>
 {/* Black Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.55)", // 👈 opacity adjust karo
      zIndex: 2,
    }}
  />
    {/* Content */}
    <div
      className="hero-pad"
      style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '800px',
        padding: '0 60px',
        paddingTop: '90px',
        textAlign: 'left',
      }}
    >
      {/* Badge */}
      {/* <div
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(242,187,60,0.08)',
          border: '1px solid rgba(242,187,60,0.3)',
          padding: '7px 18px', marginBottom: '26px', borderRadius: '3px',
          animation: 'fadeIn 1s ease 0.3s both',
        }}
      >
        <i className="fa-solid fa-star" style={{ color: COLORS.gold, fontSize: 10 }} />
        <span
          style={{
            color: COLORS.gold, fontSize: '11px',
            letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600,
          }}
        >
          Dubai's Premier Dining Destination
        </span>
      </div> */}

      {/* Heading */}
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(42px, 4.8vw, 90px)',
          fontWeight: 900, lineHeight: 1.0, color: '#fff',
          animation: 'heroIn 1s ease 0.5s both',
          textAlign: 'left',
        }}
      >
       Authentic Desi Flavors. <br />
        <span style={{ color: COLORS.gold, fontStyle: 'italic' }}>Global Experiences</span>
      </h1>

      {/* Subheading */}
      <p
        style={{
          marginTop: '22px', marginBottom: '38px',
          color: 'rgba(255,255,255,0.6)', fontSize: '16px',
          lineHeight: 1.75, maxWidth: '500px',
          animation: 'heroIn 1s ease 0.75s both', fontWeight: 300,
        }}
      >
        Where timeless South Asian heritage meets Dubai’s most refined dining. Proudly partnered with our experts to deliver premium, authentic flavors that captivate your senses and warm your soul.
      </p>

      {/* Buttons */}
      <div className="hero-btns" style={{ display: 'flex', gap: 14, animation: 'heroIn 1s ease 1s both' }}>
        <button className="btn-gold" onClick={() => scrollTo('menu')}>
          <i className="fa-solid fa-utensils" /> Explore Our Menu
        </button>
        <button className="btn-outline" onClick={() => scrollTo('contact')}>
          <i className="fa-regular fa-calendar" /> Contact US
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll"
        style={{
          marginTop: '60px', display: 'flex', alignItems: 'center', gap: 12,
          animation: 'fadeIn 1s ease 1.5s both',
        }}
      >
        <i
          className="fa-solid fa-chevron-down"
          style={{ color: COLORS.gold, fontSize: 14, animation: 'bounce 1.5s infinite' }}
        />
        <span
          style={{
            color: 'rgba(255,255,255,0.3)', fontSize: '11px',
            letterSpacing: '2px', textTransform: 'uppercase',
          }}
        >
          Scroll to explore
        </span>
      </div>
    </div>

    {/* Compass Dial */}
    <div
      style={{
        position: 'absolute', right: '5%', top: '50%',
        transform: 'translateY(-50%)', zIndex: 5,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 280, height: 280,
          border: '1px solid rgba(242,187,60,0.12)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'absolute',
          animation: 'spinSlow 80s linear infinite',
        }}
      >
        {['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'].map((d, i) => (
          <span
            key={d}
            style={{
              position: 'absolute',
              transform: `rotate(${i * 45}deg) translateY(-138px)`,
              color: 'rgba(242,187,60,0.3)', fontSize: '10px', fontWeight: 700,
            }}
          >
            {d}
          </span>
        ))}
      </div>
      <i
        className="fa-solid fa-compass"
        style={{
          color: COLORS.gold, fontSize: 90,
          opacity: 0.18,
          filter: `drop-shadow(0 0 30px ${COLORS.gold})`,
        }}
      />
    </div>
  </section>
);

export default Hero;
