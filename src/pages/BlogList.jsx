import React from 'react';
import { BLOGS } from '../data/blogs';
import Footer from '../components/Footer';

const BlogList = ({ onOpenPost }) => {
  const heroImage = '/assets/pad.jpg';

  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', color: '#fff' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,10,0.6), rgba(10,10,10,0.6)), url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 20px',
        }}
      >
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <h1
            style={{
              fontSize: 'clamp(32px, 6vw, 52px)',
              margin: '0 0 10px 0',
              fontWeight: 700,
              letterSpacing: '1px',
            }}
          >
            Blog
          </h1>

          <div
            style={{
              fontSize: 'clamp(14px, 2vw, 18px)',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: 16,
            }}
          >
            Latest updates from Desi Compass.
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              fontSize: 14,
            }}
          >
            <a
              onClick={goHome}
              className="nav-link"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              Home
            </a>

            <span style={{ color: '#f2bb3c', fontWeight: 'bold' }}>/</span>

            <span style={{ fontWeight: 600, color: '#fff' }}>Blog</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-pad" style={{ padding: '120px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div
            className="blog-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 30,
            }}
          >
            {BLOGS.map((b) => (
              <article
                key={b.slug}
                className="menu-card"
                onClick={() => onOpenPost(b.slug)}
                style={{
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: '0.3s ease',
                  height: '100%',
                }}
              >
                {/* Blog Image */}
                {b.image && (
                  <div
                    style={{
                      overflow: 'hidden',
                      height: 200,
                    }}
                  >
                    <img
                      src={b.image}
                      alt={b.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: '0.4s',
                      }}
                    />
                  </div>
                )}

                {/* Blog Content */}
                <div
                  style={{
                    padding: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  {/* Title - Max 2 Lines */}
                  <h3
                    style={{
                      margin: '0 0 12px',
                      fontSize: 20,
                      color: '#fff',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      minHeight: 56,
                    }}
                  >
                    {b.title}
                  </h3>

                  {/* Description - Max 3 Lines */}
                  <p
                    style={{
                      color: '#cccccc',
                      fontSize: 14,
                      lineHeight: 1.7,
                      marginBottom: 20,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      minHeight: 72,
                      flexGrow: 1,
                    }}
                  >
                    {b.summary}
                  </p>

                  {/* Card Footer */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid #333',
                      paddingTop: 15,
                      marginTop: 'auto',
                    }}
                  >
                    <small
                      style={{
                        color: '#999',
                        fontSize: 12,
                      }}
                    >
                      {b.date}
                    </small>

                    <button
                      className="btn-gold"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenPost(b.slug);
                      }}
                      style={{
                        padding: '8px 18px',
                        backgroundColor: '#f2bb3c',
                        border: 'none',
                        borderRadius: 6,
                        color: '#000',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogList;