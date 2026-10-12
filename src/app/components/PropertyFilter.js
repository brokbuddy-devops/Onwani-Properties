'use client';

import React, { useState, useEffect } from 'react';

export default function PropertyFilter({ 
  properties, 
  onFilter,
  statusOptions = ['Ready', 'Off-plan'],
  typeOptions = ['Villa', 'Apartment', 'Townhouse'],
  priceOptions = [
    { label: '0 - 1,000,000', value: '0-1m', min: 0, max: 1000000 },
    { label: '1,000,000 - 3,000,000', value: '1m-3m', min: 1000000, max: 3000000 },
    { label: '3,000,000+', value: '3m+', min: 3000000, max: Infinity }
  ]
}) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [type, setType] = useState('');
  const [beds, setBeds] = useState('');
  const [price, setPrice] = useState('');
  const [minSqft, setMinSqft] = useState('');
  const [maxSqft, setMaxSqft] = useState('');
  const [isAiSearching, setIsAiSearching] = useState(false);

  useEffect(() => {
    const filtered = properties.filter(p => {
      // text search
      if (search) {
        const titleMatch = p.title?.toLowerCase().includes(search.toLowerCase());
        const nameMatch = p.name?.toLowerCase().includes(search.toLowerCase());
        const devMatch = p.developer?.toLowerCase().includes(search.toLowerCase());
        if (!titleMatch && !nameMatch && !devMatch) return false;
      }
      
      // status
      if (status !== 'All') {
        const pStatus = p.status || 'Ready'; // default if missing
        // simple hack for rent: if Long Term / Short Term, check price string
        if (status === 'Short Term') {
           if (!p.price?.includes('Day') && !p.price?.includes('Month')) return false;
        } else if (status === 'Long Term') {
           if (p.price?.includes('Day') || p.price?.includes('Month')) return false;
        } else {
           if (pStatus.toLowerCase() !== status.toLowerCase()) return false;
        }
      }

      // type
      if (type) {
        const pType = (p.type || 'villa').toLowerCase(); // default if missing
        if (pType !== type.toLowerCase()) return false;
      }

      // beds
      if (beds) {
        const pBedsStr = p.beds?.toString() || "0";
        const pBeds = parseInt(pBedsStr) || 0;
        if (pBeds < parseInt(beds)) return false;
      }

      // price
      if (price && p.price) {
        const pPrice = parseInt(p.price.toString().replace(/[^0-9]/g, ''));
        const option = priceOptions.find(o => o.value === price);
        if (option) {
          if (pPrice < option.min || pPrice > option.max) return false;
        }
      }

      // sqft
      if (minSqft || maxSqft) {
        const pSqft = parseInt((p.sqft || '0').toString().replace(/[^0-9]/g, ''));
        if (minSqft && pSqft < parseInt(minSqft)) return false;
        if (maxSqft && pSqft > parseInt(maxSqft)) return false;
      }

      return true;
    });

    onFilter(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, status, type, beds, price, minSqft, maxSqft]);

  const handleAiSearch = () => {
    if (!search.trim()) return;

    setIsAiSearching(true);
    const currentQuery = search;

    // Mock AI processing delay
    setTimeout(() => {
      const lower = currentQuery.toLowerCase();
      
      if (lower.includes('villa')) setType('villa');
      else if (lower.includes('apartment')) setType('apartment');
      else if (lower.includes('townhouse')) setType('townhouse');

      if (lower.includes('1 bed')) setBeds('1');
      else if (lower.includes('2 bed')) setBeds('2');
      else if (lower.includes('3 bed')) setBeds('3');

      if (lower.includes('ready')) setStatus('Ready');
      else if (lower.includes('off-plan') || lower.includes('off plan')) setStatus('Off-plan');

      setIsAiSearching(false);
    }, 1500);
  };

  return (
    <div className="horizontal-search-bar">
      <div className="search-top-row">
        <div className="filter-search-row main-search-input">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search by area, building, or keyword..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button 
          className={`ai-search-btn ${isAiSearching ? 'searching' : ''}`} 
          onClick={handleAiSearch}
          disabled={isAiSearching}
        >
          {isAiSearching ? (
            <svg className="spinner" viewBox="0 0 50 50" style={{ animation: 'spin 1s linear infinite', width: '18px', height: '18px' }}>
              <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="31.4 31.4" strokeLinecap="round"></circle>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3z"></path>
            </svg>
          )}
          {isAiSearching ? 'Processing...' : 'AI Search'}
        </button>
      </div>

      <div className="search-bottom-row">
        <div className="status-toggle">
          <button className={`status-btn ${status === 'All' ? 'active' : ''}`} onClick={() => setStatus('All')}>All</button>
          {statusOptions.map(opt => (
            <button key={opt} className={`status-btn ${status === opt ? 'active' : ''}`} onClick={() => setStatus(opt)}>{opt}</button>
          ))}
        </div>

        <button className="filter-btn" onClick={() => { setSearch(''); setStatus('All'); setType(''); setBeds(''); setPrice(''); setMinSqft(''); setMaxSqft(''); }}>
          RESET
        </button>

        <select className="filter-dropdown" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Property Type</option>
          {typeOptions.map(opt => (
            <option key={opt} value={opt.toLowerCase()}>{opt}</option>
          ))}
        </select>

        <select className="filter-dropdown" value={beds} onChange={(e) => setBeds(e.target.value)}>
          <option value="">Beds & Baths</option>
          <option value="1">1+ Beds</option>
          <option value="2">2+ Beds</option>
          <option value="3">3+ Beds</option>
        </select>

        <select className="filter-dropdown" value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="">Price</option>
          {priceOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        <div className="filter-row">
          <input type="number" placeholder="Min Sq. Ft." value={minSqft} onChange={(e) => setMinSqft(e.target.value)} />
          <input type="number" placeholder="Max Sq. Ft." value={maxSqft} onChange={(e) => setMaxSqft(e.target.value)} />
        </div>

        <button className="find-btn">Find</button>
      </div>
    </div>
  );
}
