import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import MenuPage from './pages/MenuPage';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import ReservationCTA from './components/ReservationCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import WhatsAppFloat from './components/WhatsAppFloat';
import CustomCursor from './components/CustomCursor';

function App() {
  const [location, setLocation] = useState(() => `${window.location.pathname}${window.location.search}`);

  useEffect(() => {
    const onPopState = () => setLocation(`${window.location.pathname}${window.location.search}`);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setLocation(`${window.location.pathname}${window.location.search}`);
  };

  const getQueryParam = (name) => {
    const params = new URLSearchParams(location.split('?')[1]);
    return params.get(name);
  };

  const openMenuPage = (categoryIndex = 0) => {
    navigate(`/Menu?cat=${categoryIndex}`);
  };

  const isMenuRoute = location.split('?')[0].toLowerCase() === '/menu';
  const initialCategory = Number(getQueryParam('cat')) || 0;

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', overflowX: 'hidden' }}>
      <Navbar onNavigateMenu={() => openMenuPage(0)} />
      <CustomCursor />
      <Breadcrumbs />

      {isMenuRoute ? (
        <MenuPage initialCategory={initialCategory} onBack={() => navigate('/')} />
      ) : (
        <>
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="menu">
            <Menu openFullMenu={openMenuPage} />
          </section>
          <section id="gallery">
            <Gallery />
          </section>
          <section id="why-us">
            <WhyUs />
          </section>
          <section id="reviews">
            <Reviews />
          </section>
          <section id="reservation">
            <ReservationCTA />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Footer />
          <WhatsAppFloat />
        </>
      )}
    </div>
  );
}

export default App;
