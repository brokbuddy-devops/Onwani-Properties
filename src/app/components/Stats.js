'use client';

import { useEffect, useState, useRef } from 'react';
import './Stats.css';
import FadeInUp from './FadeInUp';

function CountUp({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let startTime = null;
    let animationFrame = null;
    const duration = 2500; // 2.5 seconds for smoothness

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // easeOutExpo for very smooth deceleration
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(easeProgress * end));
            
            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate);
            }
          };
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect(); // only run once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { label: "Property delivered", end: 5000, suffix: "+", icon: "🏠" },
    { label: "Client served worldwide", end: 2000, suffix: "+", icon: "👥" },
    { label: "Awards", end: 100, suffix: "+", icon: "🏆" },
    { label: "Years of experience", end: 12, suffix: "+", icon: "🏢" }
  ];

  return (
    <section className="section container" id="about">
      <FadeInUp className="stats-header">
        <div className="section-label">Who Are We?</div>
        <h2 className="stats-title">
          At Onwani Properties, we believe a home is life's most important foundation. 
          Our mission is to find your perfect habitat so you can comfortably 
          build your future and best life.
        </h2>
      </FadeInUp>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <FadeInUp key={index} delay={index * 0.15} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">
              <CountUp end={stat.end} suffix={stat.suffix} />
            </div>
            <div className="stat-label">{stat.label}</div>
          </FadeInUp>
        ))}
      </div>
    </section>
  );
}
