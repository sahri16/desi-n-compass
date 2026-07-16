import React, { useEffect, useState } from 'react';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import MenuPage from './pages/MenuPage';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import ReservationCTA from './components/ReservationCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import WhatsAppFloat from './components/WhatsAppFloat';
import CustomCursor from './components/CustomCursor';
import { getMenuPathFromCategoryIndex, getMenuRouteStateFromPath } from './data/constants';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [location, setLocation] = useState(
    () => `${window.location.pathname}${window.location.search}`
  );

  const pathname = location.split('?')[0].toLowerCase();
  const menuRoute = getMenuRouteStateFromPath(location);

  useEffect(() => {
    const onPopState = () =>
      setLocation(`${window.location.pathname}${window.location.search}`);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const getSectionIdFromPath = (path = pathname) => {
    const cleanPath = path.split('?')[0].toLowerCase().replace(/\/+$/, '');

    if (cleanPath === '/about') return 'about';
    if (cleanPath === '/gallery') return 'gallery';
    if (cleanPath === '/contact' || cleanPath === '/contact-us') return 'contact';
    if (cleanPath === '/why-us') return 'why-us';
    if (cleanPath === '/reviews') return 'reviews';
    if (cleanPath === '/reservation') return 'reservation';
    if (cleanPath === '/hero') return 'hero';
    if (cleanPath === '/menu') return 'menu';

    return null;
  };

  const navigate = (path) => {
    const current = `${window.location.pathname}${window.location.search}`;

    if (current === path) return;

    window.history.pushState({}, '', path);
    setLocation(path);
  };

  const navigateToSection = (id) => {
    if (id === 'blog') {
      navigate('/blog');
      return;
    }

    if (id === 'home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (id === 'menu') {
      navigate(getMenuPathFromCategoryIndex(0));
      return;
    }

    navigate(`/${id}`);
  };

  // Get slug from clean URL: /blog/slug
  const getSlugFromPath = () => {
    const currentPath = location.split('?')[0];
    if (currentPath.startsWith('/blog/')) {
      return currentPath.replace('/blog/', '');
    }
    return null;
  };

  const sectionId = getSectionIdFromPath(pathname);
  const isMenuRoute = menuRoute.isMenuRoute;
  const isBlogListRoute = pathname === '/blog';
  const isBlogPostRoute = pathname.startsWith('/blog/');
  const postSlug = getSlugFromPath();

  useEffect(() => {
    if (!loaded) return;

    if (sectionId && !isMenuRoute && !isBlogPostRoute && !isBlogListRoute) {
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [loaded, sectionId, isMenuRoute, isBlogPostRoute, isBlogListRoute, location]);

  return (
    <>
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
          background: '#0a0a0a',
          color: '#fff',
          overflowX: 'hidden',
        }}
      >
        <CustomCursor />
        <Navbar
          onNavigateMenu={() => navigate(getMenuPathFromCategoryIndex(0))}
          navigate={navigate}
          navigateToSection={navigateToSection}
        />
        <Breadcrumbs />

        {isMenuRoute ? (
          <MenuPage
            initialCategory={menuRoute.initialCategory}
            initialSubCategory={menuRoute.initialSubCategory}
            onBack={() => navigate('/')}
            onNavigate={navigate}
          />
        ) : isBlogPostRoute ? (
          <BlogPost slug={postSlug} onBack={() => navigate('/blog')} />
        ) : isBlogListRoute ? (
          <BlogList onOpenPost={(slug) => navigate(`/blog/${slug}`)} onBack={() => navigate('/')} />
        ) : (
          <>
            <section id="hero"><Hero /></section>
            <section id="about"><About /></section>
            <section id="menu"><Menu openFullMenu={(categoryIndex) => navigate(getMenuPathFromCategoryIndex(categoryIndex))} /></section>
            <section id="gallery"><Gallery /></section>
            <section id="why-us"><WhyUs /></section>
            <section id="reviews"><Reviews /></section>
            <section id="reservation"><ReservationCTA /></section>
            <section id="contact"><Contact /></section>
            <Footer navigateToSection={navigateToSection} />
            <WhatsAppFloat />
          </>
        )}
      </div>
    </>
  );
}

export default App;