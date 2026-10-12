'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FadeInUp from '../components/FadeInUp';
import { Target, Compass, CheckCircle2, ArrowUpRight, Globe } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <main className="about-main">
      <CustomCursor />
      <Navbar />

      <div className="about-page-wrapper">
        
        {/* 1. HERO SECTION */}
        <section className="about-hero-section section container">
          <div className="hero-grid">
            <FadeInUp className="hero-left">
              <span className="section-label">ABOUT US</span>
              <h1>Your Strategic Advisory Partner In Dubai</h1>
              <p>
                Delivering bespoke business advisory, corporate structuring, and strategic growth solutions designed to navigate complex markets with absolute confidence and compliance.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2} className="hero-right">
              <div className="hero-image-wrapper">
                <img alt="Dubai Skyline" className="hero-img" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"/>
                <div className="hero-badge">
                  <div className="badge-text">
                    <span className="badge-label">Client Success Rate</span>
                    <strong className="badge-value">100% Guaranteed</strong>
                  </div>
                  <div className="badge-icon">
                    <CheckCircle2 size={24} />
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* 2. MISSION & VISION SECTION */}
        <section className="about-mission-vision container section">
          <div className="mv-grid">
            <FadeInUp className="mv-card">
              <span className="mv-number">01</span>
              <div className="mv-icon-wrapper"><Target className="mv-icon" size={24}/></div>
              <h3>Our Mission</h3>
              <p>
                To empower enterprises and visionary entrepreneurs with uncompromised strategic guidance, frictionless regulatory compliance, and sustainable long-term growth structures.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2} className="mv-card dark-card">
              <span className="mv-number">02</span>
              <div className="mv-icon-wrapper dark-icon"><Compass className="mv-icon" size={24}/></div>
              <h3>Our Vision</h3>
              <p>
                To be recognized globally as the premier consultancy benchmark across the Middle East, synonymous with integrity, execution excellence, and elite corporate partnership.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* 3. CORE VALUES */}
        <section className="about-values bg-surface section">
          <div className="container">
            <FadeInUp className="text-center mb-16">
              <span className="section-label">OUR VALUES</span>
              <h2>The principles that drive our execution</h2>
            </FadeInUp>

            <div className="values-grid">
              {[
                { title: "Integrity", desc: "Uncompromising ethical standards in every transaction, report, and advisory session." },
                { title: "Excellence", desc: "Delivering top-tier precision and meticulous analytical depth for every client portfolio." },
                { title: "Strategic Thinking", desc: "Forward-looking roadmaps designed to anticipate shifts and capture market advantage." },
                { title: "Client-Centric Approach", desc: "Tailored frameworks built completely around your unique operational goals." },
                { title: "Cost Transparency", desc: "Clear fee structures with zero hidden overheads or unexpected regulatory surprises." },
                { title: "Commitment to Growth", desc: "We measure our success strictly by the scaling milestones achieved by our partners." }
              ].map((val, idx) => (
                <FadeInUp delay={idx * 0.1} key={idx} className="value-card">
                  <span className="value-number">0{idx + 1}</span>
                  <h4>{val.title}</h4>
                  <p>{val.desc}</p>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* 4. STRATEGY & COMPLIANCE */}
        <section className="about-strategy container section">
          <div className="strategy-wrapper">
            <div className="strategy-grid">
              <FadeInUp className="strategy-content">
                <span className="section-label">STRATEGY & COMPLIANCE</span>
                <h2>Navigating regulatory complexity with absolute certainty</h2>
                <p>
                  Our multidisciplinary specialists combine legal acumen with deep financial structuring insights to protect your corporate assets while maximizing regional tax efficiencies.
                </p>
                <div className="strategy-checks">
                  {['Risk Mitigation', 'Tax Optimization', 'Legal Advisory', 'Asset Protection'].map((item, i) => (
                    <div key={i} className="check-item">
                      <CheckCircle2 className="check-icon"/> {item}
                    </div>
                  ))}
                </div>
              </FadeInUp>
              <FadeInUp delay={0.2} className="strategy-image">
                <img alt="Team Meeting" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"/>
              </FadeInUp>
            </div>
          </div>
        </section>

        {/* 5. OUR APPROACH */}
        <section className="about-approach bg-surface section">
          <div className="container">
            <FadeInUp className="text-center mb-16">
              <span className="section-label">METHODOLOGY</span>
              <h2>Our Approach</h2>
            </FadeInUp>
            <div className="approach-grid">
              {[
                { step: "01", title: "Consultation", desc: "Deep dive into your business objectives and regulatory requirements." },
                { step: "02", title: "Strategy & Process", desc: "Designing customized compliance and corporate frameworks." },
                { step: "03", title: "Execution", desc: "Seamless implementation across legal, financial, and operational tracks." },
                { step: "04", title: "Review & Assess", desc: "Continuous monitoring and performance optimization checks." }
              ].map((app, idx) => (
                <FadeInUp delay={idx * 0.1} key={idx} className="approach-card">
                  <span className="approach-step">{app.step}</span>
                  <h4>{app.title}</h4>
                  <p>{app.desc}</p>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* 6. OUR SERVICES */}
        <section className="about-services container section">
          <FadeInUp className="text-center mb-16">
            <span className="section-label">CAPABILITIES</span>
            <h2>Our Services</h2>
          </FadeInUp>
          <div className="services-grid">
            {[
              { title: "Corporate Structuring", desc: "Establishing onshore and free zone entities optimized for asset protection and operational agility." },
              { title: "Market Entry", desc: "End-to-end guidance for international corporations expanding operations into the UAE market." },
              { title: "Financial Advisory", desc: "Advanced capital structuring, audit readiness, and cash-flow forecasting solutions." },
              { title: "Compliance Audit", desc: "Rigorous diagnostic audits ensuring full alignment with local and international regulatory frameworks." }
            ].map((srv, idx) => (
              <FadeInUp delay={idx * 0.1} key={idx} className="service-card">
                <div className="service-content">
                  <span className="service-number">Service 0{idx + 1}</span>
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                </div>
                <div className="service-link">
                  Learn more <ArrowUpRight size={18}/>
                </div>
              </FadeInUp>
            ))}
          </div>
        </section>

        {/* 7. MARKET PRESENCE */}
        <section className="about-market bg-surface section">
          <div className="container">
            <div className="market-wrapper">
              <div className="market-grid">
                <FadeInUp className="market-content">
                  <span className="section-label">GLOBAL REACH</span>
                  <h2>Market Presence & Expansion Vision</h2>
                  <p>
                    Strategically positioned in Dubai with active operational corridors connecting Europe, Asia, and Africa. We help multinational clients bridge regional markets with frictionless efficiency.
                  </p>
                  <div className="market-stats">
                    <div className="market-stat">
                      <strong>15+</strong>
                      <span>Global Offices</span>
                    </div>
                    <div className="market-stat">
                      <strong>500+</strong>
                      <span>Active Cases</span>
                    </div>
                    <div className="market-stat">
                      <strong>$2B+</strong>
                      <span>Managed Assets</span>
                    </div>
                  </div>
                </FadeInUp>
                <FadeInUp delay={0.2} className="market-visual">
                  <div className="market-globe-wrapper">
                    <Globe className="globe-icon"/>
                    <h4>Dubai HQ & Regional Hubs</h4>
                    <p>Connecting international capital with Middle Eastern growth.</p>
                  </div>
                </FadeInUp>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA BANNER */}
        <section className="about-cta container section">
          <FadeInUp className="cta-wrapper">
            <h2>Ready to experience the difference?</h2>
            <p>
              Schedule a confidential consultation with our senior advisory partners and discover how we can elevate your corporate growth trajectory.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Make Your Consultation</button>
              <button className="btn-outline-light">Contact Us</button>
            </div>
          </FadeInUp>
        </section>

      </div>

      <Footer />
    </main>
  );
}
