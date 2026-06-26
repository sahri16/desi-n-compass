import React from 'react';
import { COLORS } from '../data/constants';

const GoldParticles = () => (
  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 3 }}>
    {Array.from({ length: 18 }, (_, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          left: `${5 + i * 5.5}%`,
          bottom: '-10px',
          width:  `${2 + (i % 3)}px`,
          height: `${2 + (i % 3)}px`,
          borderRadius: '50%',
          background: COLORS.gold,
          animation: `floatUp ${5 + (i % 5)}s ${i * 0.3}s infinite linear`,
          opacity: 0.25 + (i % 4) * 0.1,
          boxShadow: `0 0 6px ${COLORS.gold}`,
        }}
      />
    ))}
  </div>
);

export default GoldParticles;
