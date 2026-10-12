'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AgentsPage.css';
import Link from 'next/link';
import { agentsData } from './data';
import FadeInUp from '../components/FadeInUp';

export default function AgentsPage() {
  return (
    <>
      <Navbar />
      <div className="agents-page">
        <div className="agents-header">
        <FadeInUp>
          <h1 className="agents-title">Meet Our Expert Agents</h1>
          <p className="agents-subtitle">
            Our team of dedicated professionals is here to guide you through every step of your real estate journey.
          </p>
        </FadeInUp>
      </div>

      <div className="agents-grid">
        {agentsData.map((agent, index) => (
          <FadeInUp key={agent.id} delay={index * 0.1}>
            <Link href={`/agents/${agent.id}`} style={{ textDecoration: 'none' }}>
              <div className="agent-card-large">
                <div style={{overflow: 'hidden'}}>
                  <img src={agent.image} alt={agent.name} className="agent-card-image" />
                </div>
                <div className="agent-card-content">
                  <h3 className="agent-card-name">{agent.name}</h3>
                  <p className="agent-card-title">{agent.title}</p>
                  
                  <div className="agent-card-socials" onClick={(e) => e.stopPropagation()}>
                    <a href={agent.socials.linkedin} className="agent-social-link" aria-label="LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href={agent.socials.twitter} className="agent-social-link" aria-label="Twitter">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                    </a>
                    <a href={agent.socials.instagram} className="agent-social-link" aria-label="Instagram">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          </FadeInUp>
        ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
