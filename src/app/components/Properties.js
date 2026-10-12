'use client';

import './Properties.css';
import FadeInUp from './FadeInUp';
import Link from 'next/link';
import { featuredProperties } from '../properties/propertyData';

export default function Properties({ properties = featuredProperties, showViewAll = true }) {

  return (
    <section className="section container" id="properties">
      <FadeInUp className="properties-header">
        <div>
          <div className="section-label">Listings</div>
          <h2 className="properties-title">Explore Properties</h2>
          <p className="properties-subtitle">
            Luxury villas, smart apartments, commercial<br/>
            spaces. All verified and ready for you.
          </p>
        </div>
        {showViewAll && (
          <Link href="/properties" className="btn-light btn-view-all">
            View All
            <span className="btn-icon" style={{width: '20px', height: '20px', backgroundColor: 'var(--foreground)'}}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </span>
          </Link>
        )}
      </FadeInUp>

      <div className="properties-grid">
        {properties.map((property, index) => (
          <FadeInUp key={property.slug} delay={index * 0.15} className="property-card">
            <Link href={`/properties/${property.slug}`} style={{textDecoration: 'none', color: 'inherit', display: 'contents'}}>
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
    </section>
  );
}
