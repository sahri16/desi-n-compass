import React from 'react';
import useScrollReveal from './useScrollReveal';

const Reveal = ({ children, delay = 0, style = {}, className = '' }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(36px)',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
