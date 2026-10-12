'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FadeInUp from '../components/FadeInUp';
import PropertyFilter from '../components/PropertyFilter';
import '../buy/BuyPage.css'; // Reusing the search bar styles
import './MapPage.css';

export default function MapPage() {
  const mapPins = [
    { id: 1, top: '40%', left: '30%', price: '$2.3M' },
    { id: 2, top: '60%', left: '50%', price: '$1.6M' },
    { id: 3, top: '35%', left: '70%', price: '$3.1M' },
    { id: 4, top: '75%', left: '25%', price: '$1.2M' },
    { id: 5, top: '55%', left: '80%', price: '$4.2M' },
    { id: 6, top: '45%', left: '45%', price: '$5.5M' },
    { id: 7, top: '65%', left: '35%', price: '$2.8M' },
  ];

  const [filteredProperties, setFilteredProperties] = React.useState(mapPins);

  return (
    <main>
      <CustomCursor />
      <Navbar />
      
      <div className="map-page-wrapper">
        <div className="map-search-overlay">
          <FadeInUp>
            <PropertyFilter 
              properties={mapPins} 
              onFilter={setFilteredProperties} 
            />
          </FadeInUp>
        </div>

        <div className="map-container">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
            alt="Map View" 
            className="map-image"
          />
          
          {filteredProperties.map((pin) => (
            <div 
              key={pin.id} 
              className="map-pin" 
              style={{ top: pin.top, left: pin.left }}
              title={`Property for ${pin.price}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
          ))}
        </div>
      </div>
      
    </main>
  );
}
