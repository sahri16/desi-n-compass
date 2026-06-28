import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
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
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', overflowX: 'hidden' }}>
      <Navbar />
      <CustomCursor />
      <Breadcrumbs />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="menu">
        <Menu />
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
    </div>
  );
}

export default App;
