'use client';

import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FadeInUp from '../components/FadeInUp';
import Link from 'next/link';
import './CommercialPage.css';

export default function CommercialPage() {
  const [viewMode, setViewMode] = React.useState('grid');

  const properties = [
    {
      id: 1,
      title: "Horizon Villa",
      price: "$2,350,000",
      beds: 3,
      baths: 7,
      sqft: "5000",
      image: "https://picsum.photos/seed/horizon/800/600"
    },
    {
      id: 2,
      title: "Cedarwood Estates",
      price: "$1,600,000",
      beds: 5,
      baths: 6,
      sqft: "4,500",
      image: "https://picsum.photos/seed/cedarwood/800/600"
    },
    {
      id: 3,
      title: "Oasis Penthouse",
      price: "$3,100,000",
      beds: 4,
      baths: 4,
      sqft: "3,800",
      image: "https://picsum.photos/seed/oasis/800/600"
    },
    {
      id: 4,
      title: "Palm Meadows",
      price: "$1,200,000",
      beds: 3,
      baths: 3,
      sqft: "2,400",
      image: "https://picsum.photos/seed/palm/800/600"
    },
    {
      id: 5,
      title: "Downtown Loft",
      price: "$850,000",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image: "https://picsum.photos/seed/loft/800/600"
    },
    {
      id: 6,
      title: "Marina Penthouse",
      price: "$4,200,000",
      beds: 4,
      baths: 5,
      sqft: "6,000",
      image: "https://picsum.photos/seed/marina/800/600"
    }
  ];

  return (
    <main>
      <CustomCursor />
      <Navbar />
      
      <div className="commercial-page-wrapper">
        <FadeInUp className="commercial-header">
          <h1 className="commercial-title">Explore Our Commercial<br/>Properties</h1>
          <p className="commercial-subtitle">Find the perfect office, retail space, or warehouse for your business.</p>
        </FadeInUp>

        <div className="commercial-main-content">
          
          {/* Horizontal Sticky Search Bar */}
          <div className="horizontal-search-bar">
            
            <div className="search-top-row">
              <div className="filter-search-row main-search-input">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" placeholder="Search by area, building, or keyword..." />
              </div>
              <button className="ai-search-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3z"></path>
                </svg>
                AI Search
              </button>
            </div>

            <div className="search-bottom-row">
              <div className="status-toggle">
                <button className="status-btn active">All</button>
                <button className="status-btn">Ready</button>
                <button className="status-btn">Off-plan</button>
              </div>

              <button className="filter-btn">
                <span>+</span> AMENITIES
              </button>

              <select className="filter-dropdown">
                <option value="">Property Type</option>
                <option value="villa">Villa</option>
                <option value="apartment">Apartment</option>
                <option value="townhouse">Townhouse</option>
              </select>

              <select className="filter-dropdown">
                <option value="">Beds & Baths</option>
                <option value="1">1+ Beds</option>
                <option value="2">2+ Beds</option>
                <option value="3">3+ Beds</option>
              </select>

              <select className="filter-dropdown">
                <option value="">Price (AED)</option>
                <option value="0-1m">0 - 1,000,000</option>
                <option value="1m-3m">1,000,000 - 3,000,000</option>
                <option value="3m+">3,000,000+</option>
              </select>

              <div className="filter-row">
                <input type="number" placeholder="Min Sq. Ft." />
                <input type="number" placeholder="Max Sq. Ft." />
              </div>

              <button className="find-btn">Find</button>
            </div>

          </div>

          <div className="view-toggles-container">
            <h3 className="results-count">Showing {properties.length} Properties</h3>
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
            {properties.map((prop, index) => (
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
                      <span>{prop.beds} Bedrooms</span>
                      <span className="spec-divider"></span>
                      <span>{prop.baths} Bathrooms</span>
                      <span className="spec-divider"></span>
                      <span>{prop.sqft} SQ.FT</span>
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
