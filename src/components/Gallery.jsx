import React, { useState } from 'react';
import Reveal from './Reveal';
import { COLORS, GALLERY_IMAGES } from '../data/constants';

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="section-pad" style={{ padding: '100px 60px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-badge">Visual Journey</span>
          <h2 className="section-title">
            Gallery & <span style={{ color: COLORS.gold, fontStyle: 'italic' }}>Ambience</span>
          </h2>
          <div className="gold-line" style={{ margin: '18px auto' }} />
        </Reveal>

        {/* Masonry Grid */}
        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gridTemplateRows: '220px 220px',
            gap: 12,
          }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{ gridColumn: img.span ? `span ${img.span}` : 'span 1' }}
              onClick={() => setLightbox(i)}
            >
              <img src={img.url} alt={img.label} />
              <div className="gallery-overlay">
                <i className="fa-solid fa-magnifying-glass-plus" style={{ color: COLORS.gold, fontSize: 24 }} />
                <span style={{ color: '#fff', fontSize: 12, letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 2000,
            background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20,
          }}
        >
          <div
            style={{ maxWidth: 800, width: '100%', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[lightbox].url.replace('w=500', 'w=900').replace('w=800', 'w=900')}
              alt={GALLERY_IMAGES[lightbox].label}
              loading="lazy"
              style={{
                width: '100%', height: '70vh',     objectFit: 'cover', borderRadius: 12, display: 'block',
                border: '1px solid rgba(242,187,60,0.25)',
              }}
            />
            {/* Caption */}
            <div
              style={{
                position: 'absolute', bottom: '45px', left: 0, right: 0,
                background: 'linear-gradient(to top,rgba(26,15,16,0.9),transparent)',
                padding: '20px 24px', borderRadius: '0 0 12px 12px',
              }}
            >
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 20, color: '#fff' }}>
                {GALLERY_IMAGES[lightbox].label}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, letterSpacing: '2px', marginTop: 3 }}>
                Desi Compass — DUBAI
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: -44, right: 0,
                background: 'rgba(242,187,60,0.15)',
                border: '1px solid rgba(242,187,60,0.3)',
                color: COLORS.gold, width: 36, height: 36,
                borderRadius: '50%', cursor: 'pointer', fontSize: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <i className="fa-solid fa-xmark" />
            </button>

            {/* Prev / Next */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
              <button
                onClick={() => setLightbox((lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)}
                style={{
                  background: 'rgba(242,187,60,0.1)',
                  border: '1px solid rgba(242,187,60,0.25)',
                  color: COLORS.gold, padding: '8px 20px', cursor: 'pointer',
                  borderRadius: 6, fontSize: 13, fontFamily: 'Inter',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                <i className="fa-solid fa-chevron-left" /> Prev
              </button>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, display: 'flex', alignItems: 'center' }}>
                {lightbox + 1} / {GALLERY_IMAGES.length}
              </span>
              <button
                onClick={() => setLightbox((lightbox + 1) % GALLERY_IMAGES.length)}
                style={{
                  background: 'rgba(242,187,60,0.1)',
                  border: '1px solid rgba(242,187,60,0.25)',
                  color: COLORS.gold, padding: '8px 20px', cursor: 'pointer',
                  borderRadius: 6, fontSize: 13, fontFamily: 'Inter',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                Next <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
