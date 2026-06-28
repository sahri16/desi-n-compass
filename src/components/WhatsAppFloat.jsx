import React, { useState } from 'react';

const WHATSAPP_NUMBER = '971552214549'; // ← apna number yahan

const WhatsAppFloat = () => {
  const [hovered, setHovered] = useState(false);

  const openWhatsApp = () => {
    const message = `🧭 *DESI N COMPASS*\n\nHello! I'd like to know more about your restaurant and make a reservation. 😊`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          70%  { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        @keyframes waFadeIn {
          from { opacity:0; transform:translateX(10px); }
          to   { opacity:1; transform:translateX(0); }
        }
      `}</style>

      {/* Tooltip */}
      {hovered && (
        <div style={{
          position: 'fixed',
          bottom: 90,
          right: 24,
          background: '#1f1f1f',
          color: '#fff',
          fontSize: 13,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          padding: '8px 14px',
          borderRadius: 8,
          whiteSpace: 'nowrap',
          zIndex: 9999,
          border: '1px solid rgba(37,211,102,0.25)',
          animation: 'waFadeIn 0.2s ease',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          pointerEvents: 'none',
        }}>
          💬 Chat with us on WhatsApp
          {/* Arrow */}
          <div style={{
            position: 'absolute',
            bottom: -6, right: 22,
            width: 12, height: 12,
            background: '#1f1f1f',
            border: '1px solid rgba(37,211,102,0.25)',
            borderTop: 'none', borderLeft: 'none',
            transform: 'rotate(45deg)',
          }} />
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={openWhatsApp}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: hovered
            ? 'linear-gradient(135deg, #25D366, #128C7E)'
            : '#25D366',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: hovered
            ? '0 8px 30px rgba(37,211,102,0.5)'
            : '0 4px 16px rgba(37,211,102,0.35)',
          transition: 'all 0.3s ease',
          transform: hovered ? 'scale(1.12) translateY(-2px)' : 'scale(1)',
          animation: 'waPulse 2s infinite',
        }}
        aria-label="Chat on WhatsApp"
      >
        <i
          className="fa-brands fa-whatsapp"
          style={{
            fontSize: 30,
            color: '#fff',
            lineHeight: 1,
          }}
        />
      </button>
    </>
  );
};

export default WhatsAppFloat;