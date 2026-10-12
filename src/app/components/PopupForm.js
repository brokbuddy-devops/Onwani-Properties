'use client';

import React, { useState, useEffect } from 'react';
import './PopupForm.css';

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show initially after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    // Show every 3 minutes (180,000 ms)
    const intervalTimer = setInterval(() => {
      setIsOpen(true);
    }, 180000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={() => setIsOpen(false)}>
      <div className="popup-container" role="dialog" aria-modal="true" aria-labelledby="popup-title" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-btn" type="button" aria-label="Close contact form" onClick={() => setIsOpen(false)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
        
        <div className="popup-left">
          <div className="popup-advisory">PRIVATE ADVISORY</div>
          <h2 id="popup-title">A quieter<span className="popup-title-break"><br/></span> way to<span className="popup-title-break"><br/></span> begin.</h2>
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" alt="Luxury Home" className="popup-image" />
          <p className="popup-brief">
            Share your brief and a specialist will respond with a tailored next step.
          </p>
        </div>
        
        <div className="popup-right">
          <h2>CONTACT US</h2>
          <p>Tell us what you are looking for and our advisory team will follow up discreetly.</p>
          
          <form className="popup-form" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
            <div className="form-row">
              <input type="text" placeholder="Full name" required />
              <input type="email" placeholder="Email address" required />
            </div>
            <input type="tel" placeholder="+971 50 123 4567" required />
            <textarea placeholder="Tell us about your property interest..." rows="4" required></textarea>
            <button type="submit" className="popup-submit-btn">Send Request</button>
          </form>
        </div>
      </div>
    </div>
  );
}
