'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FadeInUp from '../components/FadeInUp';
import Link from 'next/link';
import PropertyFilter from '../components/PropertyFilter';
import './OffPlanPage.css';

export default function OffPlanPage() {
  const [viewMode, setViewMode] = React.useState('grid');

  const properties = [
    {
      id: 1,
      title: "Emaar Beachfront Phase 2",
      price: "Starting from 1,850,000 AED",
      beds: "1-4",
      handover: "Q3 2027",
      developer: "Emaar",
      image: "https://picsum.photos/seed/offplan1/800/600"
    },
    {
      id: 2,
      title: "Damac Lagoons - Venice",
      price: "Starting from 3,200,000 AED",
      beds: "4-6",
      handover: "Q1 2026",
      developer: "Damac Properties",
      image: "https://picsum.photos/seed/offplan2/800/600"
    },
    {
      id: 3,
      title: "Dubai Hills Estate - The Club",
      price: "Starting from 2,100,000 AED",
      beds: "2-3",
      handover: "Q4 2026",
      developer: "Emaar",
      image: "https://picsum.photos/seed/offplan3/800/600"
    },
    {
      id: 4,
      title: "Meydan District One West",
      price: "Starting from 8,500,000 AED",
      beds: "4-7",
      handover: "Q2 2028",
      developer: "Nakheel",
      image: "https://picsum.photos/seed/offplan4/800/600"
    },
    {
      id: 5,
      title: "Creek Beach - Lotus",
      price: "Starting from 1,250,000 AED",
      beds: "1-3",
      handover: "Q1 2026",
      developer: "Emaar",
      image: "https://picsum.photos/seed/offplan5/800/600"
    },
    {
      id: 6,
      title: "Sobha Hartland II Villas",
      price: "Starting from 22,000,000 AED",
      beds: "5-6",
      handover: "Q4 2025",
      developer: "Sobha Realty",
      image: "https://picsum.photos/seed/offplan6/800/600"
    }
  ];

  const [filteredProperties, setFilteredProperties] = React.useState(properties);

  return (
    <main>
      <CustomCursor />
      <Navbar />
      
      <div className="offplan-page-wrapper">
        <FadeInUp className="offplan-header">
          <h1 className="offplan-title">Explore Upcoming<br/>Off-Plan Projects</h1>
          <p className="offplan-subtitle">Invest in the future with exclusive pre-launch opportunities across Dubai's most anticipated developments.</p>
        </FadeInUp>

        <div className="offplan-main-content">
          
          <PropertyFilter 
            properties={properties} 
            onFilter={setFilteredProperties}
            statusOptions={['Pre-Launch', 'Under Construction']}
            priceOptions={[
              { label: '0 - 2,000,000', value: '0-2m', min: 0, max: 2000000 },
              { label: '2,000,000 - 5,000,000', value: '2m-5m', min: 2000000, max: 5000000 },
              { label: '5,000,000+', value: '5m+', min: 5000000, max: Infinity }
            ]}
          />

          <div className="view-toggles-container">
            <h3 className="results-count">Showing {filteredProperties.length} Projects</h3>
            <div className="view-toggles">
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                title="List View"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </button>
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Grid View"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </button>
            </div>
          </div>

          {/* Properties Container */}
          <div className={`properties-container ${viewMode}-view`}>
            {filteredProperties.map((prop, index) => (
              <FadeInUp key={prop.id} delay={0.1 + (index * 0.05)} className="property-card">
                <Link href={`/properties/${prop.id}`} style={{textDecoration: 'none', color: 'inherit', display: 'contents'}}>
                  <div className="property-image-wrapper">
                    <img src={prop.image} alt={prop.title} />
                  </div>
                  <div className="property-details">
                    <div className="property-header-row">
                      <div className="property-title-group">
                        <h3 className="property-title">{prop.title}</h3>
                        <p className="property-location">Dubai, UAE</p>
                      </div>
                      <span className="property-price">{prop.price}</span>
                    </div>
                    <p className="property-description">
                      A stunning property located in a prime area offering luxury, comfort, and an incredible lifestyle. Features state-of-the-art amenities and excellent connectivity to the city.
                    </p>
                    <div className="property-specs">
                      <span>{prop.beds} Beds</span>
                      <span className="spec-divider"></span>
                      <span>Handover: {prop.handover}</span>
                      <span className="spec-divider"></span>
                      <span>By {prop.developer}</span>
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
