'use client';

import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';
import FadeInUp from './FadeInUp';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-overlay"></div>
      <div className="footer-content">
        <FadeInUp delay={0.1}>
          <div className="footer-grid">
            
            {/* Left Column - Branding */}
            <div className="footer-brand">
              <Link href="/" className="footer-logo-link" aria-label="Onwani Properties">
                <div className="footer-logo">
                  <Image
                    src="/full-footer.png"
                    alt="Onwani Properties"
                    width={56}
                    height={56}
                    className="footer-logo-img"
                  />
                  <h3 className="footer-logo-text">Onwani Properties</h3>
                </div>
              </Link>
              <p className="footer-tagline">Helping buyers, sellers, and investors move with confidence.</p>
              
              <div className="social-icons">
                <a href="#" aria-label="X (Twitter)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>

              <button className="back-to-top" onClick={scrollToTop}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                BACK TO TOP
              </button>
            </div>

            {/* Middle Column - Site Map */}
            <div className="footer-links-group sitemap">
              <h4>Site Map</h4>
              <ul>
                <li><Link href="/">Homepage</Link></li>
                <li><Link href="/buy">Buy</Link></li>
                <li><Link href="/rent">Rent</Link></li>
                <li><Link href="/sell">Sell</Link></li>
                <li><Link href="/off-plan">Off Plan</Link></li>
                <li><Link href="/map">Map</Link></li>
                <li><Link href="/agents">Agents</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Right Column - Legal */}
            <div className="footer-links-group legal">
              <h4>Legal</h4>
              <ul>
                <li><Link href="#privacy">Privacy Policy</Link></li>
                <li><Link href="#terms">Terms of Services</Link></li>
                <li><Link href="#lawyer">Lawyer's Corners</Link></li>
              </ul>
            </div>

          </div>
        </FadeInUp>
      </div>
    </footer>
  );
}
