import React from 'react';
import { BLOGS } from '../data/blogs';
import Footer from '../components/Footer';

const BlogPost = ({ slug, onBack }) => {
  const post = BLOGS.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '100px 48px' }}>
        <button className="btn-gold" onClick={onBack} style={{ marginBottom: 20 }}>Back</button>
        <h2>Post not found</h2>
        <p>We couldn't find the requested post.</p>
      </div>
    );
  }

  const heroImage = post.image || '/assets/pad.jpg';

  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', color: '#fff' }}>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,10,0.65), rgba(10,10,10,0.65)), url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 320,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 20px',
        }}
      >
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 42px)', margin: '0 0 10px 0', fontWeight: 700, letterSpacing: '1px' }}>{post.title}</h1>
          <div style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: 'rgba(255,255,255,0.85)', marginBottom: 16 }}>
            {post.summary}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 14 }}>
            <a
              onClick={goHome}
              className="nav-link"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'rgba(255,255,255,0.85)' }}
            >
              Home
            </a>
            <span style={{ color: '#f2bb3c', fontWeight: 'bold' }}>/</span>
            <span style={{ fontWeight: 600, color: '#fff' }}>Blog</span>
          </div>
        </div>
      </div>

      <div className="section-pad" style={{ padding: '120px 60px', maxWidth: 980, margin: '0 auto' }}>
       
        <div style={{ background: '#111', borderRadius: 16, padding: 28, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          <small style={{ color: '#888', display: 'block', marginBottom: 18 }}>{post.date}</small>
          <div style={{ color: '#ddd', lineHeight: 1.9, whiteSpace: 'pre-wrap', fontSize: 16 }}>
            {post.content}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
