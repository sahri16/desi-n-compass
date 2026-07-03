import React, { useState } from 'react';
import Reveal from './Reveal';
import { COLORS, CONTACT_INFO, SOCIAL_LINKS } from '../data/constants';

// Use a relative path so Vite can proxy /api to the Express server in development.
const API_URL = import.meta.env.VITE_API_URL || '';

const EMPTY = { name: '', email: '', phone: '', date: '', guests: '', msg: '' };

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const Contact = () => {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [serverMsg, setServerMsg] = useState('');

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.LOADING);
    setServerMsg('');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus(STATUS.SUCCESS);
        setServerMsg(data.message);
        setForm(EMPTY);
      } else {
        setStatus(STATUS.ERROR);
        setServerMsg(
          data.errors?.join(', ') ||
          data.message ||
          'Something went wrong. Please try again.'
        );
      }
    } catch {
      setStatus(STATUS.ERROR);
      setServerMsg('Cannot connect to server. Please call us directly.');
    }

    setTimeout(() => {
      setStatus(STATUS.IDLE);
      setServerMsg('');
    }, 6000);
  };

  const isLoading = status === STATUS.LOADING;

  return (
    <section id="contact"  style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className='section-pad' style={{ maxWidth: '1200px', padding: '100px 60px', margin: '0 auto' }}>

        {/* Header */}
        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Contact <span style={{ color: COLORS.gold, fontStyle: 'italic' }}>Us</span>
          </h2>
          <div className="gold-line" style={{ margin: '18px auto' }} />
        </Reveal>

        <div className="contact-grid" style={{ display: 'flex', gap: 60 }}>

          {/* ── Left — Info ── */}
          <Reveal style={{ flex: '0 0 320px' }}>
            {CONTACT_INFO.map((c) => (
              <div key={c.label} className="contact-info-card">
                <div
                  style={{
                    width: 40, height: 40, borderRadius: 8,
                    background: 'rgba(242,187,60,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <i className={`fa-solid ${c.icon}`} style={{ color: COLORS.gold, fontSize: 16 }} />
                </div>
                <div>
                  <div style={{ color: COLORS.gold, fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 4 }}>
                    {c.label}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>{c.value}</div>
                </div>
              </div>
            ))}

      
          </Reveal>

          {/* ── Right — Form ── */}
          <Reveal delay={0.2} style={{ flex: 1 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

              <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <input
                  className="input-field"
                  placeholder="Your Name *"
                  required
                  disabled={isLoading}
                  value={form.name}
                  onChange={set('name')}
                />
                <input
                  className="input-field"
                  placeholder="Email Address *"
                  type="email"
                  required
                  disabled={isLoading}
                  value={form.email}
                  onChange={set('email')}
                />
              </div>

              <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <input
                  className="input-field"
                  placeholder="Phone Number"
                  disabled={isLoading}
                  value={form.phone}
                  onChange={set('phone')}
                />
                <input
                  className="input-field"
                  placeholder="Preferred Date"
                  type="date"
                  disabled={isLoading}
                  value={form.date}
                  onChange={set('date')}
                  style={{
                    color: form.date ? "#fff" : "rgba(255,255,255,0.25)"
                  }}
                />
              </div>

              <select
                className="input-field"
                disabled={isLoading}
                value={form.guests}
                onChange={set('guests')}
                style={{ appearance: 'none', cursor: 'pointer', color: form.guests ? "#fff" : "rgba(255,255,255,0.25)" }}
              >
                <option value="" disabled>Number of Guests</option>
                {['1-2', '3-4', '5-6', '7-10', '10+'].map((g) => (
                  <option key={g} value={g}>{g} Guests</option>
                ))}
              </select>

              <textarea
                className="input-field"
                placeholder="Special requests or message..."
                rows={4}
                disabled={isLoading}
                value={form.msg}
                onChange={set('msg')}
                style={{ resize: 'vertical' }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-gold"
                disabled={isLoading}
                style={{
                  padding: '15px',
                  fontSize: 13,
                  letterSpacing: '3px',
                  justifyContent: 'center',
                  opacity: isLoading ? 0.7 : 1,
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                }}
              >
                {isLoading ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane" />
                    Confirm Reservation
                  </>
                )}
              </button>

              {/* Success */}
              {status === STATUS.SUCCESS && (
                <div
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    background: 'rgba(34,197,94,0.08)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 8, padding: '16px 20px',
                    animation: 'fadeIn 0.5s ease',
                  }}
                >
                  <i className="fa-solid fa-circle-check" style={{ color: '#22c55e', fontSize: 18, marginTop: 2 }} />
                  <div>
                    <div style={{ color: '#22c55e', fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
                      Reservation Received!
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>
                      {serverMsg}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 4 }}>
                      Check your email for a confirmation copy.
                    </div>
                  </div>
                </div>
              )}

              {/* Error */}
              {status === STATUS.ERROR && (
                <div
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: 8, padding: '16px 20px',
                    animation: 'fadeIn 0.5s ease',
                  }}
                >
                  <i className="fa-solid fa-circle-exclamation" style={{ color: '#ef4444', fontSize: 18, marginTop: 2 }} />
                  <div>
                    <div style={{ color: '#ef4444', fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
                      Something went wrong
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>
                      {serverMsg}
                    </div>
                  </div>
                </div>
              )}

            </form>
          </Reveal>
        </div>
      </div>

      {/* ── Google Map ── */}
      <div style={{ height: '80vh', position: 'relative', overflow: 'hidden' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.658862774137!2d55.200433174077595!3d25.113406635091938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b9525409653%3A0xc0a0a7e1d1ea2481!2sB8%20Building%20-%20Al%20Barsha%20First%20-%20Al%20Barsha%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1782641047082!5m2!1sen!2s"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          loading="lazy"
          title="Desi Compass Location"
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.18)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      </div>
    </section>
  );
};

export default Contact;