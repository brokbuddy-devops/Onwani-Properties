'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { use } from 'react';
import './AgentDetails.css';
import Link from 'next/link';
import { agentsData, allProperties } from '../data';
import FadeInUp from '../../components/FadeInUp';
import '../../components/Properties.css';

export default function AgentDetails({ params }) {
  const { id } = use(params);
  
  const agent = agentsData.find(a => a.id === id);
  
  if (!agent) {
    return (
      <>
        <Navbar />
        <div style={{paddingTop: '150px', textAlign: 'center', minHeight: '60vh'}}>
          <h1>Agent Not Found</h1>
          <Link href="/agents" style={{textDecoration: 'underline'}}>Back to Agents</Link>
        </div>
        <Footer />
      </>
    );
  }

  const agentProperties = allProperties.filter(prop => agent.propertyIds.includes(prop.id));

  return (
    <>
      <Navbar />
      <div className="agent-details-page">
        <div className="agent-profile-section">
        <FadeInUp>
          <img src={agent.image} alt={agent.name} className="agent-profile-image" />
        </FadeInUp>
        
        <FadeInUp delay={0.2} className="agent-profile-info">
          <h1 className="agent-profile-name">{agent.name}</h1>
          <p className="agent-profile-title">{agent.title}</p>
          <p className="agent-profile-bio">{agent.bio}</p>
          
          <div className="agent-contact-info">
            <div className="contact-item">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              {agent.phone}
            </div>
            <div className="contact-item">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              {agent.email}
            </div>
          </div>
          
          <div className="agent-contact-form">
            <h4>Contact {agent.name.split(' ')[0]}</h4>
            <form onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea className="form-textarea" placeholder="Your Message" required defaultValue={`Hi ${agent.name.split(' ')[0]}, I would like to inquire about your services...`}></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </FadeInUp>
      </div>

      {agentProperties.length > 0 && (
        <div className="agent-listings-section">
          <FadeInUp>
            <h2 className="agent-listings-title">Listings by {agent.name}</h2>
          </FadeInUp>
          <div className="properties-grid">
            {agentProperties.map((property, index) => (
              <FadeInUp key={property.id} delay={index * 0.1} className="property-card">
                <Link href={`/properties/${property.id}`} style={{textDecoration: 'none', color: 'inherit', display: 'contents'}}>
                  <div className="property-image-wrapper">
                    <img src={property.image} alt={property.name} className="property-image" />
                    <div className="property-overlay">
                      <button className="btn-light" style={{pointerEvents: 'none'}}>View Details</button>
                    </div>
                  </div>
                  <div className="property-info">
                    <div className="property-header-row">
                      <h3 className="property-name">{property.name}</h3>
                      <span className="property-price">{property.price}</span>
                    </div>
                    <div className="property-specs">{property.specs}</div>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}
