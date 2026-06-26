import React from 'react';
import { COLORS } from '../data/constants';

const LogoMark = ({ size = 'md' }) => {
  const sm = size === 'sm';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: sm ? 8 : 12 }}>
      <div
        style={{
          width: sm ? 36 : 46,
          height: sm ? 36 : 46,
          border: `1.5px solid ${COLORS.gold}`,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(242,187,60,0.06)',
        }}
      >
        
        <img src="./assets/logo.png" alt="Logo" width={sm ? 30 : 40} />
      </div>
      <div>
        <div
          style={{
            color: COLORS.gold,
            fontFamily: "'Playfair Display', serif",
            fontSize: sm ? 13 : 16,
            fontWeight: 700,
            letterSpacing: '3px',
            lineHeight: 1,
          }}
        >
          DESI
        </div>
        <div
          style={{
            color: '#fff',
            fontFamily: "'Playfair Display', serif",
            fontSize: sm ? 13 : 16,
            fontWeight: 400,
            letterSpacing: '4px',
            lineHeight: 1.2,
          }}
        >
          COMPASS
        </div>
      </div>
    </div>
  );
};

export default LogoMark;
