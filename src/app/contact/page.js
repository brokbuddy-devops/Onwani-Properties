'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FadeInUp from '../components/FadeInUp';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <main>
      <CustomCursor />
      <Navbar />

      <div className="contact-page-wrapper">
        
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-overlay"></div>
          <FadeInUp className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>We're here to help. Reach out to Onwani Properties for any inquiries or to start your property<br/>journey.</p>
          </FadeInUp>
        </section>

        <div className="content-wrapper">
        {/* Contact Info & Form */}
        <section className="contact-main">
          <div className="contact-container">
            
            {/* Left Column */}
            <FadeInUp className="contact-left">
              <h2>Get In Touch</h2>
              <p className="contact-desc">
                Whether you're looking to buy, sell, or simply have a question, our team of experts is ready to assist you.
              </p>

              <div className="contact-info-list">
                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="info-text">
                    <h4>Our Office</h4>
                    <p>7th, 8th & 20th Floor, Control Tower, Motor City, Dubai, UAE.</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className="info-text">
                    <h4>Phone</h4>
                    <p>+971 4 876 2333</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="info-text">
                    <h4>Email</h4>
                    <p>contact@onwaniproperties.com</p>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Right Column */}
            <FadeInUp delay={0.2} className="contact-right">
              <div className="contact-form-box">
                <h3>Send us a Message</h3>
                
                <form className="c-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="c-form-row">
                    <div className="c-form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="John Doe" />
                    </div>
                    <div className="c-form-group">
                      <label>Email</label>
                      <input type="email" placeholder="john.doe@example.com" />
                    </div>
                  </div>

                  <div className="c-form-row">
                    <div className="c-form-group">
                      <label>Phone</label>
                      <input type="tel" placeholder="+971..." />
                    </div>
                    <div className="c-form-group">
                      <label>Subject</label>
                      <input type="text" placeholder="e.g., Inquiry about Property" />
                    </div>
                  </div>

                  <div className="c-form-group">
                    <label>Message</label>
                    <textarea placeholder="Your message here..." rows="5"></textarea>
                  </div>

                  <button type="submit" className="c-submit-btn">Send Message</button>
                </form>
              </div>
            </FadeInUp>

          </div>
        </section>

        {/* Map Section */}
        <section className="contact-map-section">
          <FadeInUp>
            <h2>Find Us Here</h2>
          </FadeInUp>
          <FadeInUp delay={0.2} className="map-container">
            {/* Embedding a generic google maps iframe of Dubai as placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115598.68114420847!2d55.17835105273438!3d25.120612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b29d4db48f7%3A0x8677c73db2f2eb19!2sMotor%20City%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </FadeInUp>
        </section>
        </div>

      </div>

      <Footer />
    </main>
  );
}
