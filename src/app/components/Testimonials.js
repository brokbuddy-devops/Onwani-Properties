'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import './Testimonials.css';

const AnimatedCard = ({ review, row, col, scrollYProgress, mobileOrder }) => {
  // Calculate stagger based on row and column index.
  // Each row starts 0.15 later. Within each row, each column pops up 0.05 later.
  const start = mobileOrder === undefined
    ? 0.15 + (row * 0.15) + (col * 0.05)
    : 0.14 + mobileOrder * 0.105;
  const end = start + (mobileOrder === undefined ? 0.08 : 0.06);

  // Opacity, scale, and y transforms to create a "pop upwards" effect
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
  const y = useTransform(scrollYProgress, [start, end], [50, 0]);

  return (
    <motion.div 
      className={`review-card ${review.theme}`}
      style={{ opacity, scale, y }}
    >
      <div className="stars">★★★★★</div>
      <p className="review-text">"{review.text}"</p>
      <div className="review-footer">
        <div className="review-author">
          <h4>{review.name}</h4>
          <span>{review.role}</span>
        </div>
        <div className="quote-icon">“</div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Text container comes in from the right quickly (0 to 0.15) and stays centered
  const textContainerX = useTransform(
    scrollYProgress, 
    [0, 0.15], 
    ["100vw", "0vw"]
  );
  
  // Cards slide up from below the screen.
  // Column 1 and Column 3 perfectly aligned.
  // Column 2 is statically shifted upwards to match the masonry look in the screenshot.
  // All columns travel the exact same distance (250vh) so they don't drift apart.
  const sideColsY = useTransform(scrollYProgress, [0.15, 0.9], ["100vh", "-150vh"]);
  const centerColY = useTransform(scrollYProgress, [0.15, 0.9], ["calc(100vh - 80px)", "calc(-150vh - 80px)"]);
  const mobileCardsY = useTransform(scrollYProgress, [0.1, 0.9], ["100vh", "-250vh"]);

  // Marquee appears much earlier, at the bottom of the section
  const marqueeY = useTransform(scrollYProgress, [0.7, 0.85], ["100%", "0%"]);
  const marqueeOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

  const reviews = [
    // Column 1
    [
      { name: "James T.", text: "Vahedna Real Estate helped me find a beautiful home in Dubai. The process was smooth and well organized.", role: "House Owner", theme: "white" },
      { name: "Sophia J.", text: "Responsive, knowledgeable, and genuinely helpful. I would definitely recommend them to anyone looking to buy or sell a property.", role: "House Owner", theme: "brown" },
      { name: "Ahmed R.", text: "The team made my Dubai property investment journey extremely smooth. They understood my requirements, suggested the right opportunities, and guided me through every step. Their market knowledge and professionalism are outstanding.", role: "Investor", theme: "white" }
    ],
    // Column 2
    [
      { name: "Sarah M.", text: "I appreciated how transparent they were regarding costs, timelines, and investment potential.", role: "Investor", theme: "dark" },
      { name: "Amelia K.", text: "Great experience from the initial consultation to completion. Everything was handled professionally.", role: "House Owner", theme: "white" },
      { name: "Sarah W.", text: "Finding a property in Dubai from overseas seemed complicated, but their team handled everything professionally. They provided honest advice, regular updates, and helped me secure a property that matched my goals.", role: "House Owner", theme: "white" }
    ],
    // Column 3
    [
      { name: "Ahmed K.", text: "Very professional service with excellent communication. They understood exactly what we were looking for and helped us find the right property.", role: "House Owner", theme: "white" },
      { name: "Isabella F.", text: "Excellent customer service and honest advice throughout the process. We couldn't be happier with the outcome.", role: "House Owner", theme: "white" },
      { name: "Mohammed Al H.", text: "Excellent service from start to finish. The team listened to my needs instead of just trying to sell.", role: "Property Buyer", theme: "dark" }
    ]
  ];
  const mobileReviews = reviews.slice(0, 2).flat();

  return (
    <section className="testimonials-section" ref={containerRef} id="testimonials">
      <div className="testimonials-sticky">
        
        {/* Background Text */}
        <motion.div className="testimonials-bg-text-container" style={{ x: textContainerX }}>
          <span>Happy clients</span>
        </motion.div>

        {/* Cards */}
        <div className="testimonials-cards-container">
          {reviews.map((col, i) => (
            <motion.div 
              key={i} 
              className={`testimonials-col col-${i}`}
              style={{ y: i === 1 ? centerColY : sideColsY }}
            >
              {col.map((review, j) => (
                <AnimatedCard 
                  key={j} 
                  review={review} 
                  row={j} 
                  col={i} 
                  scrollYProgress={scrollYProgress} 
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div className="mobile-testimonials-cards-container" style={{ y: mobileCardsY }}>
          {mobileReviews.map((review, index) => (
            <AnimatedCard
              key={`${review.name}-${index}`}
              review={review}
              row={index}
              col={0}
              scrollYProgress={scrollYProgress}
              mobileOrder={index}
            />
          ))}
        </motion.div>

        {/* Marquee at the end */}
        <motion.div 
          className="marquee-container" 
          style={{ y: marqueeY, opacity: marqueeOpacity }}
        >
          <motion.div 
            className="company-outline-text marquee-content"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            Onwani Properties real estate • Onwani Properties real estate • Onwani Properties real estate • Onwani Properties real estate • 
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
