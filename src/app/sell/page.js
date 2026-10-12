'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FadeInUp from '../components/FadeInUp';
import './SellPage.css';

export default function SellPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How much does a property valuation cost?",
      a: "Our initial property valuation and market assessment is completely complimentary and comes with no obligation to list with us."
    },
    {
      q: "How long does it take to get my valuation?",
      a: "Typically, we can provide a comprehensive, data-driven valuation report within 24 to 48 hours of viewing your property."
    },
    {
      q: "What factors affect my property's value?",
      a: "Key factors include location, recent comparable sales, current market conditions, property size, condition, and unique upgrades or amenities."
    },
    {
      q: "Do I need to prepare anything before the valuation?",
      a: "While not strictly necessary, ensuring your property is tidy and providing any records of recent upgrades or maintenance can help us provide the most accurate valuation."
    },
    {
      q: "How will my property be marketed?",
      a: "We use a multi-channel approach including premium photography, virtual tours, listing on top portals, targeted digital advertising, and leveraging our extensive private network of serious buyers."
    },
    {
      q: "What happens after I list my property?",
      a: "Once listed, your dedicated agent handles everything from marketing and viewings to negotiations and final closing paperwork, keeping you informed every step of the way."
    }
  ];

  return (
    <main>
      <CustomCursor />
      <Navbar />

      <div className="sell-page-wrapper">
        
        {/* Section 1: Hero */}
        <section className="sell-hero">
          <div className="sell-hero-overlay"></div>
          <FadeInUp className="sell-hero-content">
            <h1>Achieve the True Value of Your Property</h1>
            <p>Partner with Onwani Properties to navigate the market with confidence and secure an<br/>exceptional result.</p>
          </FadeInUp>
        </section>

        <div className="content-wrapper">
        {/* Section 2: Commitment */}
        <section className="sell-commitment">
          <FadeInUp>
            <h2 className="section-title">Our Commitment to You</h2>
          </FadeInUp>
          <div className="commitment-grid">
            <FadeInUp delay={0.1} className="commitment-card">
              <div className="commitment-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3>Precision Marketing</h3>
              <p>We use data-driven strategies to target the right buyers for your property, ensuring maximum exposure and optimal pricing.</p>
            </FadeInUp>
            <FadeInUp delay={0.2} className="commitment-card">
              <div className="commitment-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
              </div>
              <h3>Expert Negotiation</h3>
              <p>Our seasoned agents are masters of negotiation, dedicated to securing the best possible terms and price for your sale.</p>
            </FadeInUp>
            <FadeInUp delay={0.3} className="commitment-card">
              <div className="commitment-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15l-2 5l9-9l-9-9l2 5l-10 4z"/></svg>
              </div>
              <h3>Unrivaled Service</h3>
              <p>From staging to closing, we provide a seamless, white-glove experience, handling every detail with professionalism and care.</p>
            </FadeInUp>
          </div>
        </section>

        {/* Section 3: Valuation Form */}
        <section className="sell-valuation">
          <div className="valuation-overlay"></div>
          <div className="valuation-content">
            <FadeInUp className="valuation-left">
              <h2>Ready to Begin Your Selling Journey?</h2>
              <p className="valuation-subtitle">Receive a complimentary, data-driven valuation of your property from one of our expert agents. Simply fill out the form, and we'll be in touch to provide you with an accurate market assessment and a tailored selling strategy.</p>
              
              <ul className="valuation-benefits">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  No-obligation valuation
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Expert market insights
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Confidential consultation
                </li>
              </ul>
              
              <button className="contact-agent-btn">Or, Contact an Agent Directly</button>
            </FadeInUp>

            <FadeInUp delay={0.2} className="valuation-right">
              <div className="valuation-form-card">
                <h3>Get a Free Property Valuation</h3>
                <p>Fill in the details below to get started.</p>
                
                <form className="v-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="v-form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  
                  <div className="v-form-row">
                    <div className="v-form-group">
                      <label>Email</label>
                      <input type="email" placeholder="john.doe@example.com" />
                    </div>
                    <div className="v-form-group">
                      <label>Phone</label>
                      <input type="tel" placeholder="+971..." />
                    </div>
                  </div>

                  <div className="v-form-group">
                    <label>Property Address</label>
                    <input type="text" placeholder="e.g., Apt 101, Downtown Views, Dubai" />
                  </div>

                  <div className="v-form-row">
                    <div className="v-form-group">
                      <label>Property Type</label>
                      <select>
                        <option>Villa</option>
                        <option>Apartment</option>
                        <option>Townhouse</option>
                      </select>
                    </div>
                    <div className="v-form-group">
                      <label>Bedrooms</label>
                      <select>
                        <option>1 Bedroom</option>
                        <option>2 Bedrooms</option>
                        <option>3 Bedrooms</option>
                        <option>4+ Bedrooms</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="v-submit-btn">Get My Valuation</button>
                </form>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Section 4: Why Sell With Us */}
        <section className="sell-why-us">
          <FadeInUp>
            <h2 className="section-title">Why Sell With Us?</h2>
            <p className="section-subtitle">At Onwani Properties, selling your property is more than a transaction. It's a partnership built on trust, transparency, and results. Our mission is to deliver the smoothest, most rewarding selling experience in the Dubai property market.</p>
          </FadeInUp>
          
          <div className="why-us-grid">
            <FadeInUp delay={0.1} className="why-card">
              <h4>Accurate, Market-Led Valuations</h4>
              <p>Valuations based on real-time data and local insight to help you price your property right.</p>
            </FadeInUp>
            <FadeInUp delay={0.2} className="why-card">
              <h4>Serious Buyers, Ready to Move</h4>
              <p>Access one of Dubai's largest buyer networks actively searching for homes just like yours.</p>
            </FadeInUp>
            <FadeInUp delay={0.3} className="why-card">
              <h4>Marketing That Makes an Impact</h4>
              <p>Professional photography, premium listings, and paid campaigns designed to attract attention and drive enquiries.</p>
            </FadeInUp>
            <FadeInUp delay={0.4} className="why-card">
              <h4>Personal Service, Start to Sold</h4>
              <p>Your dedicated agent handles everything — from viewings to negotiation — ensuring a seamless sales journey.</p>
            </FadeInUp>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="sell-faqs">
          <div className="faq-left">
            <FadeInUp>
              <h2>Valuation FAQs</h2>
            </FadeInUp>
          </div>
          <div className="faq-right">
            {faqs.map((faq, index) => (
              <FadeInUp key={index} delay={0.1 * index} className="faq-item">
                <button 
                  className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  {faq.q}
                </button>
                <div 
                  className="faq-answer-wrapper"
                  style={{ maxHeight: activeFaq === index ? '200px' : '0' }}
                >
                  <p className="faq-answer">{faq.a}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </section>
        </div>

      </div>
      <Footer />
    </main>
  );
}
