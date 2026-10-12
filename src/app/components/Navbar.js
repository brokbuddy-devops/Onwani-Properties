"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition from header navbar to global sticky navbar past 40px
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'at-header'}`}>
      <div className="navbar-container">
        <div className="nav-left">
          <Link href="/" className="logo-link" onClick={() => setIsOpen(false)} aria-label="Onwani Properties">
            <div className={`logo-transition-container ${isScrolled ? 'is-scrolled' : 'is-header'}`}>
              {/* Header navbar logo: full.png (only for header state) */}
              <div className="logo-slot logo-full-slot" aria-hidden={isScrolled}>
                <Image
                  src="/full.png"
                  alt="Onwani Properties Logo"
                  width={140}
                  height={56}
                  priority
                  className="logo-img logo-full-img"
                />
              </div>

              {/* Global navbar logo: main.png (for scrolled global state) */}
              <div className="logo-slot logo-main-slot" aria-hidden={!isScrolled}>
                <Image
                  src="/main.png"
                  alt="Onwani Properties Mark"
                  width={42}
                  height={42}
                  priority
                  className="logo-img logo-main-img"
                />
              </div>
            </div>
            <span className="logo-text">Onwani Properties</span>
          </Link>
        </div>
        <div className="nav-center">
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link href="/buy" className="nav-link" onClick={() => setIsOpen(false)}>BUY</Link>
            <Link href="/rent" className="nav-link" onClick={() => setIsOpen(false)}>RENT</Link>
            <Link href="/sell" className="nav-link" onClick={() => setIsOpen(false)}>SELL</Link>
            <Link href="/off-plan" className="nav-link" onClick={() => setIsOpen(false)}>OFF-PLAN</Link>
            <Link href="/agents" onClick={() => setIsOpen(false)}>AGENTS</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link>
            <Link href="/map" onClick={() => setIsOpen(false)}>MAP</Link>
          </div>
        </div>
        <div className="nav-right">
          <Link href="/contact" className="btn-contact" onClick={() => setIsOpen(false)}>
            CONTACT US
          </Link>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
