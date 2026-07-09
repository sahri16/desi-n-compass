import React, { useEffect, useRef, useState } from 'react';
import { COLORS } from '../data/constants';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Hero = () => {
  const videoRef           = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to play immediately
    video.load();

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    // Mark ready as soon as first frame is available
    const onReady = () => {
      setVideoReady(true);
      tryPlay();
    };

    video.addEventListener('loadedmetadata', onReady);
    video.addEventListener('canplay',        onReady);
    video.addEventListener('loadeddata',     onReady);

    // Fallback: show video after 1.5s even if events didn't fire
    const fallback = setTimeout(() => setVideoReady(true), 1500);

    return () => {
      video.removeEventListener('loadedmetadata', onReady);
      video.removeEventListener('canplay',        onReady);
      video.removeEventListener('loadeddata',     onReady);
      clearTimeout(fallback);
    };
  }, []);

  return (
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
      {/* ── Poster / Fallback image — always visible under video ── */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 1,
          backgroundImage: "url('/assets/pad.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* ── Video — fades in as soon as ready ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"          /* auto = browser fetches video aggressively */
        poster="/assets/pad.jpg"
        style={{
          position:   'absolute', inset: 0,
          width:      '100%', height: '100%',
          objectFit:  'cover',
          zIndex:     2,
          opacity:    videoReady ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        {/*
          Tip: agar video large hai tu compress karo:
          ffmpeg -i hero-bg.mp4 -vcodec libx264 -crf 28 -preset fast
                 -vf "scale=1280:-2" -movflags +faststart hero-bg.mp4
          "+faststart" flag lagao — video pehle frame se play hogi
        */}
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay ── */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: 3,
        }}
      />

      {/* ── Hero Content ── */}
      <div
        className="hero-pad"
        style={{
          position: 'relative', zIndex: 10,
          maxWidth: '800px',
          padding: '0 60px',
          paddingTop: '90px',
          textAlign: 'left',
        }}
      >
        <h1
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 'clamp(42px, 4.8vw, 90px)',
            fontWeight: 900, lineHeight: 1.0, color: '#fff',
            animation: 'heroIn 1s ease 0.5s both',
            textAlign: 'left',
          }}
        >
          Authentic Desi Flavors. <br />
          <span style={{ color: COLORS.gold, fontStyle: 'italic' }}>Global Experiences</span>
        </h1>

        <p
          style={{
            marginTop: '22px', marginBottom: '38px',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '16px', lineHeight: 1.75,
            maxWidth: '500px',
            animation: 'heroIn 1s ease 0.75s both', fontWeight: 300,
          }}
        >
          Where timeless South Asian heritage meets Dubai's most refined dining.
          Proudly partnered with our experts to deliver premium, authentic flavors
          that captivate your senses and warm your soul.
        </p>

        <div className="hero-btns" style={{ display: 'flex', gap: 14, animation: 'heroIn 1s ease 1s both' }}>
          <button className="btn-gold" onClick={() => scrollTo('menu')}>
            <i className="fa-solid fa-utensils" /> Explore Our Menu
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            <i className="fa-regular fa-calendar" /> Contact US
          </button>
        </div>

        <div
          style={{
            marginTop: '60px', display: 'flex', alignItems: 'center', gap: 12,
            animation: 'fadeIn 1s ease 1.5s both',
          }}
        >
          <i className="fa-solid fa-chevron-down" style={{ color: COLORS.gold, fontSize: 14, animation: 'bounce 1.5s infinite' }} />
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Scroll to explore
          </span>
        </div>
      </div>

      {/* ── Compass Dial ── */}
      <div
        style={{
          position: 'absolute', right: '5%', top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <div style={{
          width: 280, height: 280,
          border: '1px solid rgba(242,187,60,0.12)', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'absolute',
          animation: 'spinSlow 80s linear infinite',
        }}>
          {['N','NE','E','SE','S','SW','W','NW'].map((d, i) => (
            <span key={d} style={{
              position: 'absolute',
              transform: `rotate(${i * 45}deg) translateY(-138px)`,
              color: 'rgba(242,187,60,0.3)', fontSize: '10px', fontWeight: 700,
            }}>{d}</span>
          ))}
        </div>
        <i className="fa-solid fa-compass" style={{
          color: COLORS.gold, fontSize: 90,
          opacity: 0.18,
          filter: `drop-shadow(0 0 30px ${COLORS.gold})`,
        }} />
      </div>
    </section>
  );
};

export default Hero;