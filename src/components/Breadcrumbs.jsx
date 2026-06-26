import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'menu', 'gallery', 'why-us', 'reviews', 'reservation', 'contact'];
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionLabels = {
    home: 'Home',
    hero: 'Welcome',
    about: 'About Us',
    menu: 'Menu',
    gallery: 'Gallery',
    'why-us': 'Why Us',
    reviews: 'Reviews',
    reservation: 'Reservation',
    contact: 'Contact',
  };

  const breadcrumbs = [
    { id: 'home', label: 'Home' },
    { id: activeSection, label: sectionLabels[activeSection] },
  ];

  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 hidden md:flex items-center gap-2 bg-opacity-80 bg-black px-4 py-2 rounded-lg border border-amber-600 border-opacity-30">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.id} className="flex items-center gap-2">
            {index > 0 && <ChevronRight size={16} className="text-amber-600" />}
            <button
              onClick={() => handleNavigation(crumb.id)}
              className={`transition-colors ${
                crumb.id === activeSection
                  ? 'text-amber-600 font-semibold'
                  : 'text-gray-400 hover:text-amber-600'
              }`}
            >
              {crumb.label}
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
