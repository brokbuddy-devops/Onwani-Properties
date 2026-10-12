'use client';

import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FadeInUp from '../components/FadeInUp';
import Link from 'next/link';
import PropertyFilter from '../components/PropertyFilter';
import './BuyPage.css';

export default function BuyPage() {
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

  const [filteredProperties, setFilteredProperties] = React.useState(properties);

  return (
    <main>
      <CustomCursor />
      <Navbar />
      
      <div className="buy-page-wrapper">
        <FadeInUp className="buy-header">
          <h1 className="buy-title">Explore Our Exclusive<br/>Properties for Sale</h1>
          <p className="buy-subtitle">Find your next dream home from our carefully curated selection of properties.</p>
        </FadeInUp>

        <div className="buy-main-content">
          
          <PropertyFilter properties={properties} onFilter={setFilteredProperties} />

          <div className="view-toggles-container">
            <h3 className="results-count">Showing {filteredProperties.length} Properties</h3>
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
