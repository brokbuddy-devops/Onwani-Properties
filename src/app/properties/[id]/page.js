'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';
import FadeInUp from '../../components/FadeInUp';
import PropertySidebar from '../../components/PropertySidebar';
import propertyDetails from '../propertyData';
import './PropertyDetails.css';

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const property = propertyDetails[id] || propertyDetails["1"];
  const [purchasePrice, setPurchasePrice] = useState(property.purchasePrice);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [loanPeriod, setLoanPeriod] = useState(25);
  const [interestRate, setInterestRate] = useState(4.5);

  const [tourDate, setTourDate] = useState('');
  const [tourType, setTourType] = useState('In Person');
  const [tourTime, setTourTime] = useState('');
  const [tourName, setTourName] = useState('');
  const [tourPhone, setTourPhone] = useState('');
  const [tourEmail, setTourEmail] = useState('');
  const [tourMessage, setTourMessage] = useState('');
  const [tourSubmitted, setTourSubmitted] = useState(false);

  useEffect(() => {
    setPurchasePrice(property.purchasePrice);
  }, [property.purchasePrice]);

  const downPaymentAmt = (purchasePrice * downPaymentPct) / 100;
  // Simple Mortgage calculation
  // M = P [ r(1 + r)^n ] / [ (1 + r)^n - 1]
  const calculateMortgage = () => {
    const P = purchasePrice - downPaymentAmt;
    const r = (interestRate / 100) / 12;
    const n = loanPeriod * 12;
    if (P <= 0 || r === 0) return 0;
    const M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(M);
  };

  const monthlyPayment = calculateMortgage();

  return (
    <main>
      <CustomCursor />
      <Navbar />

      <div className="property-details-wrapper">
        
        {/* Image Gallery */}
        <section className="gallery-grid">
          <div className="gallery-main">
            <img src={property.images[0]} alt={`${property.name} main view`} />
          </div>
          <div className="gallery-side">
            <div className="gallery-side-img">
              <img src={property.images[1]} alt={`${property.name} exterior view`} />
            </div>
            <div className="gallery-side-img">
              <img src={property.images[2]} alt={`${property.name} interior view`} />
              <button className="view-more-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                VIEW MORE
              </button>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="property-content-layout">
          <div className="main-column">
            
            <FadeInUp className="header-section">
              <div className="price">{property.price}</div>
              <div className="ref">Ref: {property.reference}</div>
              <h1>{property.beds} Bed {property.name} in {property.location}</h1>
              <div className="location">{property.location}</div>
              
              <div className="quick-specs">
                <div className="spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4v16M2 8h20M2 12h20M2 16h20M22 4v16"></path></svg>
                  {property.beds} Beds
                </div>
                <div className="spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  {property.baths} Baths
                </div>
                <div className="spec-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect></svg>
                  {property.sqft} sqft
                </div>
              </div>
            </FadeInUp>

            <FadeInUp className="description-section">
              <h2 className="section-title">Property Description</h2>
              <p className="description-text">
                {property.description}
                <br/><br/>
                {property.highlights.map((highlight) => (
                  <React.Fragment key={highlight}>- {highlight}<br/></React.Fragment>
                ))}
              </p>
            </FadeInUp>

            <FadeInUp className="validated-section">
              <div className="validated-info">
                <h2 className="section-title" style={{marginBottom: 0}}>Validated Information</h2>
                <div className="validated-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                </div>
              </div>
              <div className="info-grid">
                <div className="info-item">
                  <div className="label">Built-up Area</div>
                  <div className="value">{property.sqft} sqft</div>
                </div>
                <div className="info-item">
                  <div className="label">Ownership</div>
                  <div className="value">{property.ownership}</div>
                </div>
                <div className="info-item">
                  <div className="label">Usage</div>
                  <div className="value">{property.usage}</div>
                </div>
                <div className="info-item">
                  <div className="label">Plot Area</div>
                  <div className="value">{property.plotArea}</div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp className="features-section">
              <h2 className="section-title">Key Features</h2>
              <div className="features-grid">
                {property.features.map((feature) => (
                  <div className="feature-item" key={feature}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    {feature}
                  </div>
                ))}
              </div>
            </FadeInUp>

            <FadeInUp className="location-section">
              <h2 className="section-title">Location</h2>
              <div className="location-map"></div>
              <div className="location-label">{property.location}</div>
            </FadeInUp>

            <FadeInUp className="mortgage-section">
              <div className="mortgage-card">
                <div className="mortgage-sliders">
                  <h2 className="section-title" style={{letterSpacing: '0.1em', fontSize: '15px'}}>Explore your mortgage possibilities</h2>
                  
                  <div className="slider-group">
                    <div className="slider-header">
                      <span>Purchase Price (AED)</span>
                      <span>{purchasePrice.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="100000" 
                      max="2000000" 
                      step="1000" 
                      value={purchasePrice} 
                      onChange={(e) => setPurchasePrice(Number(e.target.value))} 
                      style={{ '--progress': `${((purchasePrice - 100000) / (2000000 - 100000)) * 100}%` }}
                    />
                  </div>

                  <div className="slider-group">
                    <div className="slider-header">
                      <span>Down Payment ({downPaymentPct}%)</span>
                      <span>{downPaymentAmt.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="80" 
                      step="1" 
                      value={downPaymentPct} 
                      onChange={(e) => setDownPaymentPct(Number(e.target.value))} 
                      style={{ '--progress': `${((downPaymentPct - 5) / (80 - 5)) * 100}%` }}
                    />
                  </div>

                  <div className="slider-group">
                    <div className="slider-header">
                      <span>Loan Period (Years)</span>
                      <span>{loanPeriod}</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="30" 
                      step="1" 
                      value={loanPeriod} 
                      onChange={(e) => setLoanPeriod(Number(e.target.value))} 
                      style={{ '--progress': `${((loanPeriod - 5) / (30 - 5)) * 100}%` }}
                    />
                  </div>

                  <div className="slider-group">
                    <div className="slider-header">
                      <span>Interest Rate (%)</span>
                      <span>{interestRate.toFixed(2)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      step="0.1" 
                      value={interestRate} 
                      onChange={(e) => setInterestRate(Number(e.target.value))} 
                      style={{ '--progress': `${((interestRate - 1) / (10 - 1)) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="mortgage-result">
                  <div className="label">Monthly Payment</div>
                  <div className="value">AED {monthlyPayment.toLocaleString()}</div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp>
              <h2 className="section-title" style={{marginTop: '20px', fontFamily: 'var(--font-instrument-serif), serif', fontSize: '24px', letterSpacing: '0', textTransform: 'none'}}>Regulatory Information</h2>
              <div className="regulatory-section">
                <div className="reg-left">
                  <div className="reg-item">
                    <div className="label">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                      Permit Number
                    </div>
                    <div className="value">{property.permit}</div>
                  </div>
                  <div className="reg-item">
                    <div className="label">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                      BRN
                    </div>
                    <div className="value">{property.reference}</div>
                  </div>
                </div>
                <div className="reg-right">
                  <div className="reg-card">
                    <div className="reg-card-title">TRAKHEESI PERMIT</div>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://dubailand.gov.ae/" alt="QR Code" className="reg-qr" />
                    <a href="#" className="reg-verify-link">Verify Permit &rarr;</a>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp className="tour-section">
              <div className="tour-image"></div>
              <div className="tour-form">
                <h2 className="section-title" style={{marginBottom: '25px', letterSpacing: 'normal', fontSize: '18px', textTransform: 'none', fontFamily: 'var(--font-instrument-serif), serif'}}>Schedule A Tour</h2>

                <h3 style={{fontSize: '14px', fontWeight: '600', marginBottom: '15px'}}>Tour Type</h3>
                <div className="type-toggle">
                  <button 
                    className={`type-btn ${tourType === 'In Person' ? 'active' : ''}`}
                    onClick={() => setTourType('In Person')}
                  >In Person</button>
                  <button 
                    className={`type-btn ${tourType === 'Video Chat' ? 'active' : ''}`}
                    onClick={() => setTourType('Video Chat')}
                  >Video Chat</button>
                </div>

                <div className="form-inputs">
                  <input type="date" value={tourDate} onChange={e => setTourDate(e.target.value)} required />
                  <input type="time" value={tourTime} onChange={e => setTourTime(e.target.value)} required />
                  <input type="text" placeholder="Name" value={tourName} onChange={e => setTourName(e.target.value)} />
                  <input type="tel" placeholder="Phone" value={tourPhone} onChange={e => setTourPhone(e.target.value)} />
                  <input type="email" placeholder="Email" value={tourEmail} onChange={e => setTourEmail(e.target.value)} />
                  <textarea placeholder="Enter your Message" value={tourMessage} onChange={e => setTourMessage(e.target.value)}></textarea>
                </div>

                <p className="terms-text">
                  By submitting this form I agree to <span>Terms of Use</span>
                </p>

                <button 
                  className="submit-tour" 
                  onClick={() => {
                    if (tourDate && tourTime && tourName && tourPhone && tourEmail) {
                      setTourSubmitted(true);
                      setTimeout(() => setTourSubmitted(false), 3000);
                      setTourName(''); setTourPhone(''); setTourEmail(''); setTourMessage(''); setTourTime(''); setTourDate('');
                    } else {
                      alert('Please fill out all required fields (Date, Time, Name, Phone, Email).');
                    }
                  }}
                  style={{ background: tourSubmitted ? '#10b981' : '', color: tourSubmitted ? '#fff' : '' }}
                >
                  {tourSubmitted ? 'Request Submitted!' : 'Submit a Tour Request'}
                </button>
              </div>
            </FadeInUp>

          </div>
          
          <div className="sidebar-column">
            <PropertySidebar />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
