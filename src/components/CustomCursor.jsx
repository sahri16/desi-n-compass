import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const [onButton, setOnButton] = useState(false);
  const [clicked,  setClicked]  = useState(false);

  useEffect(() => {
    // ── Force hide ALL cursors globally ──
    // const style = document.createElement('style');
    // style.id = 'custom-cursor-style';
    // style.innerHTML = `
    //   html, body, * {
    //     cursor: none !important;
    //   }
    // `;
    // document.head.appendChild(style);

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let raf;
    let visible = false;

    const show = () => {
      if (!visible) {
        if (dotRef.current)  dotRef.current.style.opacity  = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
        visible = true;
      }
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      show();

      // Dot — instant
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px';
        dotRef.current.style.top  = mouseY + 'px';
      }

      // Detect clickable
      const el = document.elementFromPoint(mouseX, mouseY);
      if (el) {
        const tag = el.tagName;
        const cur = window.getComputedStyle(el).cursor;
        const isBtn =
          tag === 'BUTTON' || tag === 'A' ||
          tag === 'INPUT'  || tag === 'SELECT' ||
          tag === 'TEXTAREA' ||
          cur === 'pointer' ||
          el.closest('button, a, [role="button"]');
        setOnButton(!!isBtn);
      }
    };

    // Ring — smooth lag
    const animate = () => {
      ringX += (mouseX - ringX) * 0.10;
      ringY += (mouseY - ringY) * 0.10;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px';
        ringRef.current.style.top  = ringY + 'px';
      }
      raf = requestAnimationFrame(animate);
    };

    const onDown = () => setClicked(true);
    const onUp   = () => setClicked(false);

    // Hide when cursor leaves window
    const onLeave = () => {
      if (dotRef.current)  dotRef.current.style.opacity  = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
      visible = false;
    };

    window.addEventListener('mousemove',  onMove);
    window.addEventListener('mousedown',  onDown);
    window.addEventListener('mouseup',    onUp);
    document.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
    //   const s = document.getElementById('custom-cursor-style');
    //   if (s) s.remove();
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(242,187,60,0.6); }
          50%      { box-shadow: 0 0 0 5px rgba(242,187,60,0); }
        }
        @keyframes ringExpand {
          from { transform: translate(-50%,-50%) scale(0.8); opacity:0; }
          to   { transform: translate(-50%,-50%) scale(1);   opacity:1; }
        }
      `}</style>

      {/* ── Outer Ring (lags) ── */}
      <div
        ref={ringRef}
        style={{
          position:      'fixed',
          pointerEvents: 'none',
          zIndex:        999999,
          opacity:       0,
          // center on cursor
          transform:     'translate(-50%, -50%)',

          width:         onButton ? 52 : 38,
          height:        onButton ? 52 : 38,
          borderRadius:  '50%',

          // Normal = thin gold ring | Pointer = filled glow ring
          border:     onButton
            ? '2px solid #F2BB3C'
            : '1.5px solid rgba(242,187,60,0.5)',
          background: onButton
            ? 'rgba(242,187,60,0.1)'
            : 'transparent',
          boxShadow:  onButton
            ? '0 0 20px rgba(242,187,60,0.3), inset 0 0 10px rgba(242,187,60,0.1)'
            : 'none',

          transition: 'width .22s ease, height .22s ease, border .22s, background .22s, box-shadow .22s',
          willChange: 'left, top',
        }}
      />

      {/* ── Inner Dot (instant) ── */}
      <div
        ref={dotRef}
        style={{
          position:      'fixed',
          pointerEvents: 'none',
          zIndex:        999999,
          opacity:       0,
          transform:     'translate(-50%, -50%)',

          // Normal = small gold circle | Pointer = compass cross shape
          width:      onButton ? 10 : clicked ? 5 : 7,
          height:     onButton ? 10 : clicked ? 5 : 7,
          borderRadius: onButton ? '2px' : '50%',

          background: '#F2BB3C',
          boxShadow:  clicked
            ? '0 0 18px rgba(242,187,60,1)'
            : onButton
              ? '0 0 12px rgba(242,187,60,0.8)'
              : '0 0 6px rgba(242,187,60,0.7)',

          transition: 'width .15s, height .15s, border-radius .15s, box-shadow .15s',
          animation:  onButton ? 'none' : 'dotPulse 2s infinite',
          willChange: 'left, top',
        }}
      />
    </>
  );
};

export default CustomCursor;