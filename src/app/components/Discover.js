'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Discover.css';

export default function Discover() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  
  // Track the scroll progress through the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Stage 1: Initial 4 images popping up
  const imageScale = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  // Stage 2: Outer images and text move OUT as scroll continues
  const img1X = useTransform(scrollYProgress, [0.3, 0.7], [0, -1500]);
  const img2X = useTransform(scrollYProgress, [0.3, 0.7], [0, 1500]);
  const img3X = useTransform(scrollYProgress, [0.3, 0.7], [0, -1500]);
  const img4X = useTransform(scrollYProgress, [0.3, 0.7], [0, 1500]);

  const textTopX = useTransform(scrollYProgress, [0.3, 0.7], [0, -1500]);
  const textBottomX = useTransform(scrollYProgress, [0.3, 0.7], [0, 1500]);

  // Stage 2.5: The 5th central image pops up while others are moving out
  const centerImageScale = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  
  // Stage 3: The 5th central image expands smoothly — mobile-friendly values
  const centerImageWidth = useTransform(
    scrollYProgress,
    [0.4, 0.9],
    isMobile ? ["60vw", "94vw"] : ["25vw", "95vw"]
  );
  const centerImageHeight = useTransform(
    scrollYProgress,
    [0.4, 0.9],
    isMobile ? ["25vh", "80vh"] : ["30vh", "85vh"]
  );
  
  // Fade out the text and 4 images
  const generalOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);

  // Stage 4: Property details fade in when the center image covers the screen
  const propertyDetailsOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const propertyDetailsY = useTransform(scrollYProgress, [0.8, 1], [20, 0]);

  return (
    <section className="discover-wrapper" ref={containerRef} id="discover">
      <div className="discover-sticky-container">
        
        <div className="discover-content" style={{ zIndex: 10 }}>
          <motion.h2 
            className="discover-title-part" 
            style={{ opacity: generalOpacity, x: textTopX, display: 'block', marginBottom: '8px' }}
          >
            Discover Spaces
          </motion.h2>
          <motion.h2 
            className="discover-title-part" 
            style={{ opacity: generalOpacity, x: textBottomX, display: 'block' }}
          >
            That Speak to You
          </motion.h2>
        </div>

        {/* 4 Outer Images */}
        <motion.div className="floating-img img-1" style={{ scale: imageScale, opacity: generalOpacity, x: img1X, y: 0 }}>
          <img src="https://picsum.photos/seed/real1/600/400" alt="Discover space" />
        </motion.div>
        
        <motion.div className="floating-img img-2" style={{ scale: imageScale, opacity: generalOpacity, x: img2X, y: 0 }}>
          <img src="https://picsum.photos/seed/real2/600/400" alt="Discover space" />
        </motion.div>
        
        <motion.div className="floating-img img-3" style={{ scale: imageScale, opacity: generalOpacity, x: img3X, y: 0 }}>
          <img src="https://picsum.photos/seed/real3/600/400" alt="Discover space" />
        </motion.div>
        
        <motion.div className="floating-img img-4" style={{ scale: imageScale, opacity: generalOpacity, x: img4X, y: 0 }}>
          <img src="https://picsum.photos/seed/real4/600/400" alt="Discover space" />
        </motion.div>

        {/* 5th Center Image that will scale up to fill screen (with margins) */}
        <motion.div 
          className="floating-img center-img" 
          style={{ 
            opacity: centerImageScale,
            scale: centerImageScale,
            width: centerImageWidth,
            height: centerImageHeight,
            zIndex: 5
          }}
        >
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" alt="Hero full screen space" />
        </motion.div>

        {/* Property Details that appear at the very end */}
        <motion.div 
          className="discover-property-details"
          style={{ opacity: propertyDetailsOpacity, y: propertyDetailsY, zIndex: 20 }}
        >
          <h3 className="discover-property-title">Hrizon Villa</h3>
          <p className="discover-property-location">Mystic Falls, Azure Ridge</p>
        </motion.div>
        
      </div>
    </section>
  );
}
