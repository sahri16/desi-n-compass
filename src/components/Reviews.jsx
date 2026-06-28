import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';
import { COLORS, REVIEWS } from '../data/constants';

const Reviews = () => {
  const [idx, setIdx] = useState(0);
const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

useEffect(() => {
  setExpanded(false);
}, [idx]);

  const review = REVIEWS[idx];

  return (
    <section className="section-pad" style={{ padding: '100px 60px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

        {/* Header */}
        <Reveal>
          <span className="section-badge">What Guests Say</span>
          <h2 className="section-title">
            Guest <span style={{ color: COLORS.gold, fontStyle: 'italic' }}>Reviews</span>
          </h2>
          <div className="gold-line" style={{ margin: '18px auto 48px' }} />
        </Reveal>

        {/* Card */}
        <div
          key={idx}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(242,187,60,0.22)',
            borderRadius: 20, padding: '50px 60px',
            animation: 'fadeIn 0.6s ease',
          }}
        >
          <i
            className="fa-solid fa-quote-left"
            style={{ color: COLORS.gold, fontSize: 36, opacity: 0.3, marginBottom: 20, display: 'block' }}
          />
         <p
  style={{
    fontFamily: "'Playfair Display',serif",
    fontSize: 18,
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.82)",
    fontStyle: "italic",
    marginBottom: 28,
  }}
>
  <span
    style={{
      display: "-webkit-inline-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: expanded ? "unset" : 3,
      overflow: "hidden",
    }}
  >
    {review.text}
  </span>

  {!expanded && review.text.length > 120 && (
    <>
      {" "}
      ...
      <span
        onClick={() => setExpanded(true)}
        style={{
          color: COLORS.gold,
          cursor: "pointer",
          fontWeight: 600,
          marginLeft: 6,
        }}
      >
        Read More
      </span>
    </>
  )}

  {expanded && (
    <span
      onClick={() => setExpanded(false)}
      style={{
        color: COLORS.gold,
        cursor: "pointer",
        fontWeight: 600,
        marginLeft: 8,
      }}
    >
      Read Less
    </span>
  )}
</p>

          {/* Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 3, marginBottom: 20 }}>
            {Array(review.stars).fill(0).map((_, i) => (
              <i key={i} className="fa-solid fa-star" style={{ color: COLORS.gold, fontSize: 14 }} />
            ))}
          </div>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <div
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: `linear-gradient(135deg,${COLORS.brown},${COLORS.gold})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 700, color: COLORS.black,
              }}
            >
              {review.avatar}
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 600, color: '#fff' }}>
                {review.name}
              </div>
              
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              style={{
                width: i === idx ? 22 : 7, height: 7, borderRadius: 4,
                background: i === idx ? COLORS.gold : 'rgba(255,255,255,0.18)',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
