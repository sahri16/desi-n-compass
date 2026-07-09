import React, { useState, useEffect } from 'react';
import logo from '../../public/assets/logo.png';
const PageLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut]   = useState(false);

  useEffect(() => {
    // Progress bar fill karo smoothly
    const duration = 2600; // ms
    const interval = 18;
    const steps    = duration / interval;
    let current    = 0;

    const timer = setInterval(() => {
      current += 1;
      // Ease out — fast start, slow finish
      const pct = Math.min(100, Math.round((1 - Math.pow(1 - current / steps, 2)) * 100));
      setProgress(pct);

      if (current >= steps) {
        clearInterval(timer);
        // Fade out loader
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => onComplete && onComplete(), 700);
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position:       'fixed',
        inset:          0,
        zIndex:         99999,
        background:     'rgba(10,10,10,0.95)',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        opacity:        fadeOut ? 0 : 1,
        transition:     'opacity 0.7s ease',
        pointerEvents:  fadeOut ? 'none' : 'all',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@300;400;600&display=swap');

        @keyframes logoSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes textBlink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.25; }
        }
        @keyframes goldFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes progressGlow {
          0%,100% { box-shadow: 0 0 8px rgba(242,187,60,0.4); }
          50%      { box-shadow: 0 0 20px rgba(242,187,60,0.8); }
        }
        @keyframes dotsAnim {
          0%   { content: '.';   }
          33%  { content: '..';  }
          66%  { content: '...'; }
          100% { content: '.';   }
        }
        @keyframes particleFloat {
          0%   { transform: translateY(0px) scale(1);   opacity: 0.6; }
          100% { transform: translateY(-80px) scale(0); opacity: 0;   }
        }
      `}</style>

      {/* Background subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(242,187,60,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(242,187,60,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Gold particles */}
      {[...Array(10)].map((_, i) => (
        <div key={i} style={{
          position:   'absolute',
          left:       `${10 + i * 9}%`,
          bottom:     `${20 + (i % 4) * 15}%`,
          width:      `${2 + (i % 3)}px`,
          height:     `${2 + (i % 3)}px`,
          borderRadius: '50%',
          background: '#F2BB3C',
          animation:  `particleFloat ${3 + i * 0.4}s ${i * 0.3}s infinite ease-out`,
          opacity:    0.4,
          zIndex:     1,
        }} />
      ))}

      {/* ── Main Content ── */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>

        {/* Logo — spinning */}
        <div style={{
          width:          110,
          height:         110,
          margin:         '0 auto 28px',
          
          filter:         'drop-shadow(0 0 20px rgba(242,187,60,0.35))',
        }}>
          <img
            src={logo}
            alt="Desi Compass"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        {/* Restaurant Name */}
        <div style={{
          animation: 'goldFadeIn 0.8s ease 0.3s both',
        }}>
          <div style={{
            fontFamily:    "'Libre Baskerville', serif",
            fontSize:      '28px',
            fontWeight:    900,
            letterSpacing: '6px',
            color:         '#F2BB3C',
            textTransform: 'uppercase',
            lineHeight:    1,
            marginBottom:  6,
          }}>
            Desi Compass
          </div>
          
        </div>

        {/* Progress Bar */}
        <div style={{
          width:        260,
          margin:       '0 auto 18px',
          animation:    'goldFadeIn 0.8s ease 0.5s both',
        }}>
          {/* Track */}
          <div style={{
            width:        '100%',
            height:       2,
            background:   'rgba(255,255,255,0.08)',
            borderRadius: 4,
            overflow:     'hidden',
            position:     'relative',
          }}>
            {/* Fill */}
            <div style={{
              height:       '100%',
              width:        `${progress}%`,
              background:   'linear-gradient(90deg, #8a6200, #F2BB3C, #ffe08a)',
              borderRadius: 4,
              transition:   'width 0.05s linear',
              animation:    'progressGlow 1.5s infinite',
              position:     'relative',
            }}>
              {/* Moving glow tip */}
              <div style={{
                position:     'absolute',
                right:        0, top: '50%',
                transform:    'translateY(-50%)',
                width:        8, height: 8,
                borderRadius: '50%',
                background:   '#F2BB3C',
                boxShadow:    '0 0 10px 3px rgba(242,187,60,0.7)',
              }} />
            </div>
          </div>

          {/* Percent */}
          <div style={{
            marginTop:     10,
            display:       'flex',
            justifyContent:'space-between',
            alignItems:    'center',
          }}>
            <span style={{
              fontFamily:    "'Montserrat', sans-serif",
              fontSize:      11,
              color:         'rgba(255,255,255,0.25)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}>
              Loading
            </span>
            <span style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize:   14,
              fontWeight: 700,
              color:      '#F2BB3C',
            }}>
              {progress}%
            </span>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default PageLoader;