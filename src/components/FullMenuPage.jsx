import React, { useState, useEffect } from 'react';
import { COLORS, MENU_DATA } from '../data/constants';
import LogoMark from './LogoMark';
import WhatsAppButton from "./WhatsAppButton";

const GOLD = COLORS.gold;
const BLACK = COLORS.black;


// ── Single Menu Card ──
const MenuCard = ({ item, categoryName }) => {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(242,187,60,0.5)' : 'rgba(242,187,60,0.12)'}`,
        borderRadius: 16, overflow: 'hidden',
        transition: 'all 0.4s',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.5),0 0 30px rgba(242,187,60,0.12)' : 'none',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: 200 }}>
        <img
          src={item.img} alt={item.name} loading="lazy"
          onError={(e) => { e.target.style.display = 'none'; }}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transition: 'transform 0.5s',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
          }}
        />
        <div style={{
          position: 'absolute', top: 12, left: 12,
          background: GOLD, color: BLACK,
          fontSize: 10, fontWeight: 700, letterSpacing: '1.5px',
          padding: '4px 10px', borderRadius: 3, textTransform: 'uppercase',
        }}>{item.tag}</div>
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: 'rgba(26,15,16,0.88)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(242,187,60,0.35)',
          color: GOLD, fontSize: 14, fontWeight: 700,
          padding: '4px 12px', borderRadius: 4,
          fontFamily: "'Playfair Display',serif",
        }}>{item.price}</div>
      </div>

      {/* Info */}
      <div style={{ padding: '18px 20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 8, lineHeight: 1.25 }}>
          {item.name}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6, fontWeight: 300, flex: 1 }}>
          {item.desc}
        </div>
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(242,187,60,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ display: 'flex', gap: 2 }}>
            {[1, 2, 3, 4, 5].map(s => <i key={s} className="fa-solid fa-star" style={{ color: GOLD, fontSize: 10 }} />)}
          </div>
          <WhatsAppButton
          onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            item={item}
            categoryName={categoryName}
          />
        </div>
      </div>
    </div>
  );
};

// ── Main Full Menu Page ──
const FullMenuPage = ({ initialCategory = 0, onClose }) => {
  const [activeIdx, setActiveIdx] = useState(initialCategory);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cat = MENU_DATA[activeIdx];

  // ── Lock body scroll when this page is open ──
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Track scroll inside our container for header shadow
  const handleContainerScroll = (e) => {
    setScrolled(e.target.scrollTop > 20);
  };

  const goToContact = () => {
    onClose();
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgb(10,10,10)',
          fontFamily: "'Inter',sans-serif",
          display: 'flex', flexDirection: 'column',
          // The page itself does NOT scroll — only inner content area scrolls
          overflow: 'hidden',
        }}
      >
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Inter:wght@300;400;500;600&display=swap');
        @keyframes slideIn { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(16px)}  to{opacity:1;transform:translateY(0)} }

        .fm-sidebar-link {
          display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:10px;
          cursor:pointer;transition:all 0.25s;border:1px solid transparent;
        }
        .fm-sidebar-link:hover { background:rgba(242,187,60,0.07);border-color:rgba(242,187,60,0.2); }
        .fm-sidebar-link.active { background:rgba(242,187,60,0.12);border-color:rgba(242,187,60,0.4); }

        .fm-reserve-btn {
          background:linear-gradient(135deg,#F2BB3C,#d4940c,#F2BB3C);background-size:200% auto;
          color:#1A0F10;border:none;font-size:11px;font-weight:700;letter-spacing:2px;
          text-transform:uppercase;cursor:pointer;font-family:'Inter',sans-serif;
          padding:10px 22px;border-radius:6px;display:flex;align-items:center;gap:8px;
          transition:all 0.3s;white-space:nowrap;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }
        .fm-reserve-btn:hover { transform:translateY(-1px);box-shadow:0 6px 20px rgba(242,187,60,0.35); }

        .fm-back-btn {
          display:flex;align-items:center;gap:8px;color:rgba(255,255,255,0.55);background:none;
          border:1px solid rgba(255,255,255,0.12);cursor:pointer;font-size:11px;
          letter-spacing:1.5px;text-transform:uppercase;padding:8px 16px;border-radius:6px;
          font-family:'Inter',sans-serif;transition:all 0.3s;
        }
        .fm-back-btn:hover { color:#fff;border-color:rgba(255,255,255,0.35); }

        .fm-content-scroll { overflow-y:auto;height:100%; }
        .fm-content-scroll::-webkit-scrollbar { width:4px; }
        .fm-content-scroll::-webkit-scrollbar-thumb { background:#F2BB3C;border-radius:2px; }

        .fm-sidebar-scroll { overflow-y:auto;height:100%; }
        .fm-sidebar-scroll::-webkit-scrollbar { width:3px; }
        .fm-sidebar-scroll::-webkit-scrollbar-thumb { background:rgba(242,187,60,0.3);border-radius:2px; }

        @media(max-width:768px){
          .fm-sidebar{display:none !important;}
          .fm-mobile-catbtn{display:flex !important;}
          .fm-topbar-title{display:none !important;}
          .fm-main-pad{padding:28px 20px 60px !important;}
        }
      `}</style>

        {/* ══ TOP BAR ══ */}
        <div style={{
          flexShrink: 0,
          // background: scrolled ? 'rgba(15,8,9,0.98)' : 'rgba(15,8,9,0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(242,187,60,0.12)',
          padding: '0 28px', height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'box-shadow 0.3s',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
          position: 'relative',
          zIndex: 10,
        }}>
          {/* Left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <button className="fm-back-btn" onClick={onClose}>
              <i className="fa-solid fa-arrow-left" style={{ fontSize: 11 }} /> Back
            </button>
            <div className="fm-topbar-title" style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: '#fff' }}>
              Full <span style={{ color: GOLD }}>Menu</span>
            </div>
          </div>

          {/* Center Logo */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <LogoMark />
          </div>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Mobile: category dropdown button */}
            <button
              className="fm-mobile-catbtn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                display: 'none', alignItems: 'center', gap: 6,
                background: 'rgba(242,187,60,0.1)', border: '1px solid rgba(242,187,60,0.3)',
                color: GOLD, padding: '8px 14px', borderRadius: 6,
                cursor: 'pointer', fontSize: 11, fontFamily: 'Inter', fontWeight: 600,
              }}
            >
              <i className="fa-solid fa-layer-group" style={{ fontSize: 12 }} />
              {cat.category}
              <i className="fa-solid fa-chevron-down" style={{ fontSize: 10 }} />
            </button>
            <button className="fm-reserve-btn" onClick={goToContact}>
              <i className="fa-solid fa-calendar-check" /> Reserve
            </button>
          </div>
        </div>

        {/* ══ BODY ══ */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

          {/* ── SIDEBAR ── */}
          <aside
            className="fm-sidebar"
            style={{
              width: 264, flexShrink: 0,
              background: 'rgba(255,255,255,0.018)',
              borderRight: '1px solid rgba(242,187,60,0.1)',
              display: 'flex', flexDirection: 'column',
            }}
          >
            <div className="fm-sidebar-scroll" style={{ flex: 1, padding: '28px 16px' }}>
              {/* Sidebar header */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 10, letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontWeight: 600, marginBottom: 5 }}>
                  Browse By
                </div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, fontWeight: 700, color: '#fff' }}>
                  Categories
                </div>
                <div style={{ width: 32, height: 1, background: `linear-gradient(90deg,${GOLD},transparent)`, marginTop: 10 }} />
              </div>

              {/* Category list */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {MENU_DATA.map((c, i) => {
                  const isActive = activeIdx === i;
                  return (
                    <div
                      key={i}
                      className={`fm-sidebar-link${isActive ? ' active' : ''}`}
                      onClick={() => { setActiveIdx(i); setSidebarOpen(false); }}
                    >
                      <div style={{
                        width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                        background: isActive ? 'rgba(242,187,60,0.15)' : 'rgba(255,255,255,0.05)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: isActive ? GOLD : 'rgba(255,255,255,0.38)',
                        transition: 'all 0.25s',
                      }}>
                        <i className={`fa-solid ${c.faIcon}`} style={{ fontSize: 14 }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: 13, fontWeight: isActive ? 600 : 400,
                          color: isActive ? GOLD : 'rgba(255,255,255,0.6)',
                          transition: 'color 0.2s',
                        }}>{c.category}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', marginTop: 1 }}>
                          {c.items.length} dishes
                        </div>
                      </div>
                      {isActive && (
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, flexShrink: 0 }} />
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Sidebar CTA */}
              <div style={{
                marginTop: 32, padding: '18px',
                background: 'rgba(242,187,60,0.055)',
                border: '1px solid rgba(242,187,60,0.14)',
                borderRadius: 12,
              }}>
                <i className="fa-solid fa-compass" style={{ color: GOLD, fontSize: 22, marginBottom: 10, display: 'block' }} />
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 6 }}>
                  Can't decide?
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, marginBottom: 14 }}>
                  Ask our chefs for today's special recommendations.
                </div>
                <button className="fm-reserve-btn" style={{ width: '100%', justifyContent: 'center', fontSize: 10, padding: '9px 14px' }} onClick={goToContact}>
                  <i className="fa-solid fa-phone" /> Contact Us
                </button>
              </div>
            </div>
          </aside>

          {/* ── Mobile Category Drawer ── */}
          {sidebarOpen && (
            <div
              onClick={() => setSidebarOpen(false)}
              style={{ position: 'absolute', inset: 0, zIndex: 50, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
            >
              <div
                onClick={e => e.stopPropagation()}
                style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: 260,
                  background: '#140b0c', borderRight: '1px solid rgba(242,187,60,0.15)',
                  padding: '24px 16px', overflowY: 'auto',
                  animation: 'slideIn 0.3s ease',
                }}
              >
                <div style={{ fontSize: 10, letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontWeight: 600, marginBottom: 18 }}>
                  Categories
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {MENU_DATA.map((c, i) => {
                    const isActive = activeIdx === i;
                    return (
                      <div
                        key={i}
                        className={`fm-sidebar-link${isActive ? ' active' : ''}`}
                        onClick={() => { setActiveIdx(i); setSidebarOpen(false); }}
                      >
                        <div style={{
                          width: 34, height: 34, borderRadius: 8,
                          background: isActive ? 'rgba(242,187,60,0.15)' : 'rgba(255,255,255,0.05)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: isActive ? GOLD : 'rgba(255,255,255,0.4)',
                        }}>
                          <i className={`fa-solid ${c.faIcon}`} style={{ fontSize: 13 }} />
                        </div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: isActive ? 600 : 400, color: isActive ? GOLD : 'rgba(255,255,255,0.7)' }}>
                            {c.category}
                          </div>
                          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>{c.items.length} dishes</div>
                        </div>
                      </div>
                    );
                  })}
                </nav>
              </div>
            </div>
          )}

          {/* ── MAIN CONTENT — only this scrolls ── */}
          <div
            className="fm-content-scroll"
            onScroll={handleContainerScroll}
            style={{ flex: 1, minWidth: 0 }}
          >
            <main className="fm-main-pad" style={{ padding: '44px 48px 80px', animation: 'fadeUp 0.4s ease' }} key={activeIdx}>

              {/* Category heading */}
              <div style={{ marginBottom: 40 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    border: `1.5px solid ${GOLD}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(242,187,60,0.07)', flexShrink: 0,
                  }}>
                    <i className={`fa-solid ${cat.faIcon}`} style={{ color: GOLD, fontSize: 18 }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontWeight: 600, marginBottom: 3 }}>
                      Our Selection
                    </div>
                    <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(26px,4vw,44px)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                      {cat.category}
                    </h1>
                  </div>
                  <div style={{ marginLeft: 'auto', fontSize: 13, color: 'rgba(255,255,255,0.22)', letterSpacing: '1px' }}>
                    {cat.items.length} dishes
                  </div>
                </div>
                <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg,rgba(242,187,60,0.3),transparent)', marginTop: 18 }} />

                {/* WhatsApp hint */}
                {/* <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                marginTop: 16, padding: '7px 14px',
                background: 'rgba(37,211,102,0.07)',
                border: '1px solid rgba(37,211,102,0.2)',
                borderRadius: 8,
              }}>
                <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: 14 }} />
                <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>
                  Click <strong style={{ color: '#25D366' }}>Order Now</strong> to place your order via WhatsApp
                </span>
              </div> */}
              </div>

              {/* Cards grid — only active category */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: 22,
              }}>
                {cat.items.map(item => (
                  <MenuCard key={item.name} item={item} categoryName={cat.category} />
                ))}
              </div>

              {/* Bottom CTA */}
              <div style={{
                textAlign: 'center', padding: '52px 32px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(242,187,60,0.1)',
                borderRadius: 20, marginTop: 60,
              }}>
                <i className="fa-solid fa-compass" style={{ color: GOLD, fontSize: 36, marginBottom: 14, display: 'block', opacity: 0.5 }} />
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 10 }}>
                  Ready to <span style={{ color: GOLD, fontStyle: 'italic' }}>Navigate</span>?
                </div>
                <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 14, maxWidth: 360, margin: '0 auto 26px', lineHeight: 1.7 }}>
                  Reserve your table and let us guide you through an unforgettable taste journey.
                </p>
                <button className="fm-reserve-btn" style={{ margin: '0 auto', padding: '12px 34px', fontSize: 12 }} onClick={goToContact}>
                  <i className="fa-solid fa-calendar-check" /> Reserve Your Table
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullMenuPage;