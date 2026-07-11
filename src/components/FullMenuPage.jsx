import React, { useState, useEffect } from 'react';
import { COLORS, MENU_DATA } from '../data/constants';
import LogoMark from './LogoMark';
import WhatsAppButton from "./WhatsAppButton";

const GOLD  = COLORS.gold;
const BLACK = COLORS.black;

// ── Grouped Menu Structure ──
// Breakfast groups mein split hoga, baaki alag rahenge
const BREAKFAST_CATEGORIES = [
  'DC Special Breakfast',
  'Pratha',
  'Omelette',
  'South Indian',
  'Curry',
  'Sat-Sun Special',
];

const buildGrouped = () => {
  const breakfastItems = MENU_DATA.filter(c => BREAKFAST_CATEGORIES.includes(c.category));
  const otherItems     = MENU_DATA.filter(c => !BREAKFAST_CATEGORIES.includes(c.category));

  return [
    {
      id:            'breakfast-group',
      label:         'Breakfast',
      faIcon:        'fa-sun',
      isGroup:       true,
      subCategories: breakfastItems,
    },
    ...otherItems.map(c => ({
      id:      c.category,
      label:   c.category,
      faIcon:  c.faIcon,
      isGroup: false,
      data:    c,
    })),
  ];
};

const GROUPED = buildGrouped();

// ── Single Menu Card ──
const MenuCard = ({ item, categoryName }) => {
  const [hovered, setHovered] = useState(false);

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
          fontFamily: "'Libre Baskerville',serif",
        }}>{item.price}</div>
      </div>

      <div style={{ padding: '18px 20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 8, lineHeight: 1.25 }}>
          {item.name}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.6, fontWeight: 300, flex: 1 }}>
          {item.desc}
        </div>
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(242,187,60,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ display: 'flex', gap: 2 }}>
            {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star" style={{ color: GOLD, fontSize: 10 }} />)}
          </div>
          <WhatsAppButton item={item} categoryName={categoryName} />
        </div>
      </div>
    </div>
  );
};

// ── Main Full Menu Page ──
const FullMenuPage = ({ initialCategory = 0, onClose }) => {
  // Active group index (0 = Breakfast group, 1+ = other categories)
  const [activeGroupIdx,  setActiveGroupIdx]  = useState(0);
  // Active sub-category inside Breakfast group
  const [activeSubIdx,    setActiveSubIdx]    = useState(0);
  // Is breakfast dropdown open in sidebar
  const [breakfastOpen,   setBreakfastOpen]   = useState(true);
  const [sidebarOpen,     setSidebarOpen]     = useState(false);
  const [scrolled,        setScrolled]        = useState(false);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // If initialCategory is a breakfast sub-cat index, open breakfast group
  useEffect(() => {
    const bfLength = BREAKFAST_CATEGORIES.length;
    if (initialCategory < bfLength) {
      setActiveGroupIdx(0);
      setActiveSubIdx(initialCategory);
      setBreakfastOpen(true);
    } else {
      // Map to correct group index
      const otherIdx = initialCategory - bfLength;
      setActiveGroupIdx(otherIdx + 1);
    }
  }, [initialCategory]);

  const handleContainerScroll = (e) => setScrolled(e.target.scrollTop > 20);

  const goToContact = () => {
    onClose();
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
  };

  // Current display data
  const activeGroup = GROUPED[activeGroupIdx];
  const currentCat  = activeGroup?.isGroup
    ? activeGroup.subCategories[activeSubIdx]
    : activeGroup?.data;

  if (!currentCat) return null;

  const handleGroupClick = (gIdx) => {
    const group = GROUPED[gIdx];
    if (group.isGroup) {
      // Toggle breakfast dropdown
      if (activeGroupIdx === gIdx) {
        setBreakfastOpen(o => !o);
      } else {
        setActiveGroupIdx(gIdx);
        setActiveSubIdx(0);
        setBreakfastOpen(true);
      }
    } else {
      setActiveGroupIdx(gIdx);
      setSidebarOpen(false);
    }
  };

  const handleSubClick = (subIdx) => {
    setActiveGroupIdx(0);
    setActiveSubIdx(subIdx);
    setSidebarOpen(false);
  };

  const SidebarContent = () => (
    <>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 10, letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontWeight: 600, marginBottom: 5 }}>
          Browse By
        </div>
        <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 19, fontWeight: 700, color: '#fff' }}>
          Categories
        </div>
        <div style={{ width: 32, height: 1, background: `linear-gradient(90deg,${GOLD},transparent)`, marginTop: 10 }} />
      </div>

      {/* Nav */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {GROUPED.map((group, gIdx) => {
          const isActiveGroup = activeGroupIdx === gIdx;

          if (group.isGroup) {
            // ── Breakfast Group with dropdown ──
            return (
              <div key={group.id}>
                {/* Breakfast main button */}
                <div
                  className={`fm-sidebar-link${isActiveGroup ? ' active' : ''}`}
                  onClick={() => handleGroupClick(gIdx)}
                  style={{ justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                      background: isActiveGroup ? 'rgba(242,187,60,0.15)' : 'rgba(255,255,255,0.05)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isActiveGroup ? GOLD : 'rgba(255,255,255,0.38)',
                      transition: 'all 0.25s',
                    }}>
                      <i className={`fa-solid ${group.faIcon}`} style={{ fontSize: 14 }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: 13, fontWeight: isActiveGroup ? 700 : 500,
                        color: isActiveGroup ? GOLD : 'rgba(255,255,255,0.75)',
                        transition: 'color 0.2s',
                      }}>
                        {group.label}
                      </div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', marginTop: 1 }}>
                        {group.subCategories.length} categories
                      </div>
                    </div>
                  </div>
                  {/* Chevron */}
                  <i
                    className={`fa-solid fa-chevron-${(isActiveGroup && breakfastOpen) ? 'up' : 'down'}`}
                    style={{ color: GOLD, fontSize: 11, transition: 'transform 0.3s' }}
                  />
                </div>

                {/* Sub-categories dropdown */}
                {isActiveGroup && breakfastOpen && (
                  <div style={{
                    marginLeft: 16,
                    borderLeft: `1px solid rgba(242,187,60,0.15)`,
                    paddingLeft: 12,
                    marginTop: 4,
                    marginBottom: 4,
                    animation: 'fadeUp 0.3s ease',
                  }}>
                    {group.subCategories.map((sub, sIdx) => {
                      const isActiveSub = isActiveGroup && activeSubIdx === sIdx;
                      return (
                        <div
                          key={sub.category}
                          onClick={() => handleSubClick(sIdx)}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '9px 12px', borderRadius: 8,
                            cursor: 'pointer', transition: 'all 0.2s',
                            background: isActiveSub ? 'rgba(242,187,60,0.1)' : 'transparent',
                            border: `1px solid ${isActiveSub ? 'rgba(242,187,60,0.3)' : 'transparent'}`,
                            marginBottom: 2,
                          }}
                          onMouseEnter={e => { if (!isActiveSub) e.currentTarget.style.background = 'rgba(242,187,60,0.05)'; }}
                          onMouseLeave={e => { if (!isActiveSub) e.currentTarget.style.background = 'transparent'; }}
                        >
                          <i
                            className={`fa-solid ${sub.faIcon}`}
                            style={{ color: isActiveSub ? GOLD : 'rgba(255,255,255,0.3)', fontSize: 12, width: 16, textAlign: 'center' }}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={{
                              fontSize: 12, fontWeight: isActiveSub ? 600 : 400,
                              color: isActiveSub ? GOLD : 'rgba(255,255,255,0.55)',
                            }}>
                              {sub.category}
                            </div>
                            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>
                              {sub.items.length} items
                            </div>
                          </div>
                          {isActiveSub && (
                            <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, flexShrink: 0 }} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          // ── Normal category ──
          return (
            <div
              key={group.id}
              className={`fm-sidebar-link${isActiveGroup ? ' active' : ''}`}
              onClick={() => handleGroupClick(gIdx)}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                background: isActiveGroup ? 'rgba(242,187,60,0.15)' : 'rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: isActiveGroup ? GOLD : 'rgba(255,255,255,0.38)',
                transition: 'all 0.25s',
              }}>
                <i className={`fa-solid ${group.faIcon}`} style={{ fontSize: 14 }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 13, fontWeight: isActiveGroup ? 600 : 400,
                  color: isActiveGroup ? GOLD : 'rgba(255,255,255,0.6)',
                  transition: 'color 0.2s',
                }}>
                  {group.label}
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', marginTop: 1 }}>
                  {group.data.items.length} dishes
                </div>
              </div>
              {isActiveGroup && (
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD, flexShrink: 0 }} />
              )}
            </div>
          );
        })}
      </nav>

      {/* CTA Box */}
      <div style={{
        marginTop: 28, padding: '18px',
        background: 'rgba(242,187,60,0.055)',
        border: '1px solid rgba(242,187,60,0.14)',
        borderRadius: 12,
      }}>
        <i className="fa-solid fa-compass" style={{ color: GOLD, fontSize: 22, marginBottom: 10, display: 'block' }} />
        <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 6 }}>
          Can't decide?
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, marginBottom: 14 }}>
          Ask our chefs for today's special recommendations.
        </div>
        <button className="fm-reserve-btn" style={{ width: '100%', justifyContent: 'center', fontSize: 10, padding: '9px 14px' }} onClick={goToContact}>
          <i className="fa-solid fa-phone" /> Contact Us
        </button>
      </div>
    </>
  );

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgb(10,10,10)',
      fontFamily: "'Inter',sans-serif",
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes slideIn { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(12px)}  to{opacity:1;transform:translateY(0)} }

        .fm-sidebar-link {
          display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;
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
          clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
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
          .fm-main-pad{padding:24px 18px 60px !important;}
        }
      `}</style>

      {/* ── TOP BAR ── */}
      <div style={{
        flexShrink: 0,
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(242,187,60,0.12)',
        padding: '0 28px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        position: 'relative', zIndex: 10,
        transition: 'box-shadow 0.3s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button className="fm-back-btn" onClick={onClose}>
            <i className="fa-solid fa-arrow-left" style={{ fontSize: 11 }} /> Back
          </button>
          <div className="fm-topbar-title" style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 17, fontWeight: 700, color: '#fff' }}>
            Full <span style={{ color: GOLD }}>Menu</span>
          </div>
        </div>

        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <LogoMark />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
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
            {activeGroup?.isGroup ? `Breakfast › ${currentCat.category}` : activeGroup?.label}
            <i className="fa-solid fa-chevron-down" style={{ fontSize: 10 }} />
          </button>
          <button className="fm-reserve-btn" onClick={goToContact}>
            <i className="fa-solid fa-calendar-check" /> Contact Us
          </button>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* Desktop Sidebar */}
        <aside className="fm-sidebar" style={{
          width: 272, flexShrink: 0,
          background: 'rgba(255,255,255,0.018)',
          borderRight: '1px solid rgba(242,187,60,0.1)',
          display: 'flex', flexDirection: 'column',
        }}>
          <div className="fm-sidebar-scroll" style={{ flex: 1, padding: '24px 14px' }}>
            <SidebarContent />
          </div>
        </aside>

        {/* Mobile Drawer */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            style={{ position: 'absolute', inset: 0, zIndex: 50, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: 272,
                background: '#100a0b', borderRight: '1px solid rgba(242,187,60,0.15)',
                padding: '24px 14px', overflowY: 'auto',
                animation: 'slideIn 0.3s ease',
              }}
            >
              <SidebarContent />
            </div>
          </div>
        )}

        {/* ── MAIN CONTENT ── */}
        <div
          className="fm-content-scroll"
          onScroll={handleContainerScroll}
          style={{ flex: 1, minWidth: 0 }}
        >
          <main
            className="fm-main-pad"
            key={`${activeGroupIdx}-${activeSubIdx}`}
            style={{ padding: '44px 48px 80px', animation: 'fadeUp 0.4s ease' }}
          >
            {/* Breadcrumb */}
            {activeGroup?.isGroup && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                marginBottom: 20, fontSize: 12,
              }}>
                <span style={{ color: GOLD, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Breakfast</span>
                <i className="fa-solid fa-chevron-right" style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10 }} />
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>{currentCat.category}</span>
              </div>
            )}

            {/* Category Heading */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  border: `1.5px solid ${GOLD}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(242,187,60,0.07)', flexShrink: 0,
                }}>
                  <i className={`fa-solid ${currentCat.faIcon}`} style={{ color: GOLD, fontSize: 18 }} />
                </div>
                <div>
                  {activeGroup?.isGroup && (
                    <div style={{ fontSize: 10, letterSpacing: '3px', color: GOLD, textTransform: 'uppercase', fontWeight: 600, marginBottom: 3 }}>
                      Breakfast Menu
                    </div>
                  )}
                  <h1 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                    {currentCat.category}
                  </h1>
                </div>
                <div style={{ marginLeft: 'auto', fontSize: 13, color: 'rgba(255,255,255,0.22)', letterSpacing: '1px' }}>
                  {currentCat.items.length} dishes
                </div>
              </div>
              <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg,rgba(242,187,60,0.3),transparent)', marginTop: 14 }} />

              {/* Sub-category quick tabs (only inside breakfast) */}
              {activeGroup?.isGroup && (
                <div style={{ display: 'flex', gap: 8, marginTop: 18, flexWrap: 'wrap' }}>
                  {activeGroup.subCategories.map((sub, sIdx) => (
                    <button
                      key={sub.category}
                      onClick={() => setActiveSubIdx(sIdx)}
                      style={{
                        background: activeSubIdx === sIdx ? GOLD : 'rgba(242,187,60,0.07)',
                        border: `1px solid ${activeSubIdx === sIdx ? GOLD : 'rgba(242,187,60,0.2)'}`,
                        color: activeSubIdx === sIdx ? BLACK : 'rgba(255,255,255,0.55)',
                        fontSize: 11, fontWeight: activeSubIdx === sIdx ? 700 : 400,
                        letterSpacing: '1px', padding: '6px 14px', borderRadius: 20,
                        cursor: 'pointer', transition: 'all 0.2s',
                        fontFamily: "'Inter',sans-serif",
                      }}
                    >
                      {sub.category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 22,
            }}>
              {currentCat.items.map(item => (
                <MenuCard key={item.name} item={item} categoryName={currentCat.category} />
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
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 10 }}>
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
  );
};

export default FullMenuPage;