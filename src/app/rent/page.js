'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FadeInUp from '../components/FadeInUp';
import Link from 'next/link';
import PropertyFilter from '../components/PropertyFilter';
import './RentPage.css';

export default function RentPage() {
  const [viewMode, setViewMode] = React.useState('grid');

  const properties = [
    {
      id: 1,
      title: "Downtown Luxury Rental",
      type: "Apartment",
      price: "120,000 AED / year",
      beds: 2,
      baths: 3,
      sqft: "1,500",
      image: "https://picsum.photos/seed/rent1/800/600"
    },
    {
      id: 2,
      title: "Marina Sea View Apartment",
      type: "Apartment",
      price: "180,000 AED / year",
      beds: 3,
      baths: 4,
      sqft: "2,200",
      image: "https://picsum.photos/seed/rent2/800/600"
    },
    {
      id: 3,
      title: "Cozy Studio in JVC",
      type: "Apartment",
      price: "55,000 AED / year",
      beds: 1,
      baths: 1,
      sqft: "650",
      image: "https://picsum.photos/seed/rent3/800/600"
    },
    {
      id: 4,
      title: "Palm Jumeirah Villa",
      type: "Villa",
      price: "600,000 AED / year",
      beds: 5,
      baths: 6,
      sqft: "6,000",
      image: "https://picsum.photos/seed/rent4/800/600"
    },
    {
      id: 5,
      title: "Business Bay High-Rise",
      type: "Apartment",
      price: "140,000 AED / year",
      beds: 2,
      baths: 3,
      sqft: "1,400",
      image: "https://picsum.photos/seed/rent5/800/600"
    },
    {
      id: 6,
      title: "Arabian Ranches Townhouse",
      type: "Townhouse",
      price: "220,000 AED / year",
      beds: 4,
      baths: 4,
      sqft: "3,100",
      image: "https://picsum.photos/seed/rent6/800/600"
    }
  ];
  const [filteredProperties, setFilteredProperties] = React.useState(properties);

  return (
    <main>
      <CustomCursor />
      <Navbar />
      
      <div className="rent-page-wrapper">
        <FadeInUp className="rent-header">
          <h1 className="rent-title">Explore Our Exclusive<br/>Properties for Rent</h1>
          <p className="rent-subtitle">Discover premium long-term and short-term rentals tailored to your lifestyle.</p>
        </FadeInUp>

        <div className="rent-main-content">
          
          <PropertyFilter 
            properties={properties} 
            onFilter={setFilteredProperties}
            statusOptions={['Long Term', 'Short Term']}
            priceOptions={[
              { label: '0 - 100,000', value: '0-100k', min: 0, max: 100000 },
              { label: '100,000 - 300,000', value: '100k-300k', min: 100000, max: 300000 },
              { label: '300,000+', value: '300k+', min: 300000, max: Infinity }
            ]}
          />

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
