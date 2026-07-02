import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import Reveal from './Reveal';
import { COLORS, MENU_DATA } from '../data/constants';
import WhatsAppButton from "./WhatsAppButton";

const Menu = ({ openFullMenu }) => {
  const [activeTab, setActiveTab] = useState(0);

  // ── Sirf pehle 4 items dikhao ──
  const visibleItems = MENU_DATA[activeTab].items.slice(0, 4);

  return (
    <>
      <Helmet>
    <title>Desi Compass Menu | Authentic Pakistani & Indian Dishes</title>

    <meta
      name="description"
      content="Browse the Desi Compass menu featuring authentic Pakistani and Indian dishes, BBQ, biryani, curries, fresh breads, desserts, and refreshing beverages in Dubai."
    />

    <meta
      name="keywords"
      content="Desi Compass Menu, Pakistani Food Menu Dubai, Indian Food Menu Dubai, Restaurant Menu Dubai, Halal Food Menu, BBQ Menu Dubai, Biryani Dubai, Karahi Dubai, Curry Menu, Tandoori Menu, Fresh Naan, South Asian Cuisine, Pakistani Cuisine, Indian Cuisine, Family Dining Dubai, Authentic Halal Food, Best Restaurant Menu Dubai, Traditional Food Dubai, Premium Dining Menu, Desi Food Menu"
    />

    <link rel="canonical" href="https://desicompass.ae/menu" />

    <meta property="og:title" content="Desi Compass Menu | Authentic Pakistani & Indian Dishes" />

    <meta
      property="og:description"
      content="Browse authentic Pakistani & Indian dishes at Desi Compass Dubai."
    />

    <meta property="og:url" content="https://desicompass.ae/menu" />

    <meta property="og:image" content="https://desicompass.ae/menu-banner.jpg" />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Menu",
        name: "Desi Compass Menu",
        url: "https://desicompass.ae/menu"
      })}
    </script>
  </Helmet>
  
      <section id="menu" className="section-pad" style={{ padding: '100px 60px', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          {/* Header */}
          <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-badge">Culinary Craftsmanship</span>
            <h2 className="section-title">
              Our Signature <span style={{ color: COLORS.gold, fontStyle: 'italic' }}>Menu</span>
            </h2>
            <div className="gold-line" style={{ margin: '18px auto' }} />
          </Reveal>

          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 48, flexWrap: 'wrap' }}>
            {MENU_DATA.map((cat, i) => (
              <button
                key={i}
                className={`tab-btn${activeTab === i ? ' active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                <i className={`fa-solid ${cat.faIcon}`} style={{ fontSize: 13 }} />
                {cat.category}
              </button>
            ))}
          </div>

          {/* Cards Grid — sirf 4 */}
          <div
            className="menu-grid-4"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}
          >
            {visibleItems.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <div className="menu-card" style={{ height: '100%' }}>

                  {/* Image */}
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      className="menu-img"
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    {/* Tag */}
                    <div style={{
                      position: 'absolute', top: 12, left: 12,
                      background: COLORS.gold, color: COLORS.black,
                      fontSize: 10, fontWeight: 700, letterSpacing: '1.5px',
                      padding: '4px 10px', borderRadius: 3, textTransform: 'uppercase',
                    }}>
                      {item.tag}
                    </div>
                    {/* Price */}
                    <div style={{
                      position: 'absolute', top: 12, right: 12,
                      background: 'rgba(26,15,16,0.85)', backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(242,187,60,0.35)',
                      color: COLORS.gold, fontSize: 14, fontWeight: 700,
                      padding: '4px 12px', borderRadius: 4,
                      fontFamily: "'Playfair Display',serif",
                    }}>
                      {item.price}
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: '18px 20px 22px' }}>
                    <div style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: 18, fontWeight: 600,
                      color: '#fff', marginBottom: 8, lineHeight: 1.25,
                    }}>
                      {item.name}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, fontWeight: 300 }}>
                      {item.desc}
                    </div>

                    {/* Footer */}
                    <div style={{
                      marginTop: 16, paddingTop: 14,
                      borderTop: '1px solid rgba(242,187,60,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                      <div style={{ display: 'flex', gap: 2 }}>
                        {[1,2,3,4,5].map(s => (
                          <i key={s} className="fa-solid fa-star" style={{ color: COLORS.gold, fontSize: 10 }} />
                        ))}
                      </div>
                      <WhatsAppButton
                        item={item}
                        categoryName={MENU_DATA[activeTab].category}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Count hint + CTA */}
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, marginBottom: 18 }}>
              Showing 4 of{' '}
              <span style={{ color: COLORS.gold, fontWeight: 600 }}>
                {MENU_DATA[activeTab].items.length}
              </span>{' '}
              dishes in {MENU_DATA[activeTab].category}
            </p>
            <button className="btn-gold" 
            onClick={() => openFullMenu(activeTab)}
            >
              <i className="fa-solid fa-book-open" /> View Full Menu
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Menu;