import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BLOGS } from '../data/blogs';
import Footer from '../components/Footer';

const BlogPost = ({ slug, onBack }) => {
  const post = BLOGS.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '100px 48px', minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
        <button className="btn-gold" onClick={onBack} style={{ marginBottom: 20, padding: '10px 24px', backgroundColor: '#ffffff', border: 'none', borderRadius: 6, color: '#000', fontWeight: 600, cursor: 'pointer' }}>← Back</button>
        <h2 style={{ color: '#fff' }}>Post not found</h2>
        <p style={{ color: '#999' }}>We couldn't find the requested post.</p>
      </div>
    );
  }

  const heroImage = '/assets/pad.jpg';

  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Custom styles for blog content
  const blogStyles = `
    .blog-content h1 {
      font-size: 1.8rem;
      color: #ffffff;
      margin: 0 0 1.5rem 0;
      line-height: 1.5;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    
    .blog-content h2 {
      font-size: 1.5rem;
      color: #ffffff;
      margin: 2.5rem 0 1rem 0;
      line-height: 1.5;
      font-weight: 600;
      border-bottom: 2px solid rgba(242, 187, 60, 0.3);
      padding-bottom: 0.5rem;
    }
    
    .blog-content h3 {
      font-size: 1.5rem;
      color: #ffffff;
      margin: 1.8rem 0 0.8rem 0;
      line-height: 1.5;
      font-weight: 600;
    }
    
    .blog-content p {
      font-size: 1.05rem;
      line-height: 1.9;
      color: rgb(198 200 201);
      margin: 0 0 1.2rem 0;
    }
    
    .blog-content ul {
      margin: 0.8rem 0 1.5rem 0;
      padding-left: 2rem;
      list-style: none;
    }
    
    .blog-content ul li {
      font-size: 1.05rem;
      line-height: 1.9;
      color: rgb(198 200 201);
      padding: 0.3rem 0 0.3rem 1.5rem;
      position: relative;
    }
    
    .blog-content ul li::before {
      content: "✦";
      color: #f2bb3c;
      position: absolute;
      left: 0;
      font-size: 1.1rem;
    }
    
    .blog-content ul li strong {
      color: #ffffff;
      font-weight: 600;
    }
    
    .blog-content strong {
      color: #ffffff;
      font-weight: 600;
    }
    
    .blog-content blockquote {
      border-left: 4px solid #ffffff;
      padding-left: 1.5rem;
      margin: 1.5rem 0;
      color: #bbb;
      font-style: italic;
    }
    
    .blog-content img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 1.5rem 0;
    }
    
    @media (max-width: 768px) {
      .blog-content h1 {
        font-size: 1.2rem;
      }
      .blog-content h2 {
        font-size: 1.1rem;
      }
      .blog-content h3 {
        font-size: 1.1rem;
      }
      .blog-content p,
      .blog-content ul li {
        font-size: 0.9rem;
      }
    }
  `;

  return (
    <div style={{ 
      minHeight: '100vh', 
      color: '#fff', 
      background: '#0a0a0a' 
    }}>
   
      <Helmet>
        <title>{post.metaTitle || post.title}</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.metaTitle || post.title} />
        <meta property="og:description" content={post.metaDescription} />
        {post.image && <meta property="og:image" content={window.location.origin + post.image} />}
        <link rel="canonical" href={window.location.origin + window.location.pathname} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Helmet>
      
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,10,0.7), rgba(10,10,10,0.7)), url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 350,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 20px',
          position: 'relative',
        }}
      >
        <div style={{ textAlign: 'center', color: '#fff', maxWidth: 800 }}>
          <h1 style={{ 
            fontSize: 'clamp(20px, 5vw, 28px)', 
            margin: '0 0 12px 0', 
            fontWeight: 700,
            letterSpacing: '1px',
            color: '#fff',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)'
          }}>
            {post.title}
          </h1>
          {/* <div style={{ 
            fontSize: 'clamp(14px, 1.5vw, 18px)', 
            color: 'rgba(255,255,255,0.85)', 
            marginBottom: 16,
            fontWeight: 300,
            lineHeight: 1.6
          }}>
            {post.summary}
          </div> */}

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

      {/* Blog Content */}
      <div style={{ 
        padding: '60px 24px 80px',
        maxWidth: 900,
        margin: '0 auto',
        width: '100%'
      }}>
        <div style={{ 
         
        }}>
          {/* Inject styles */}
          <style>{blogStyles}</style>
          
          {/* Render HTML content */}
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share/Divider Section */}
          <div style={{
            marginTop: 50,
            paddingTop: 30,
            borderTop: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 15
            }}>
              <div style={{ color: '#666', fontSize: 14 }}>
                Posted on {post.date}
              </div>
              
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <button 
          className="btn-gold"
            onClick={onBack}
            style={{
             padding: '8px 18px',
                        backgroundColor: '#f2bb3c',
                        border: 'none',
                        borderRadius: 6,
                        color: '#000',
                        fontWeight: 600,
                        cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#ffffff';
              e.target.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#ffffff';
            }}
          >
            ← Back to All Blogs
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;