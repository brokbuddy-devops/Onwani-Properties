'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';
import FadeInUp from './FadeInUp';

const faqs = [
  {
    question: "Can I get help with paperwork and registration?",
    answer: "Yes, our team provides full support for all paperwork, legal documentation, and registration processes to ensure a hassle-free experience."
  },
  {
    question: "What if I'm looking for a home loan?",
    answer: "We partner with leading financial institutions to help you secure the best mortgage rates and home loan options suited to your needs."
  },
  {
    question: "How quickly can I schedule a property visit?",
    answer: "You can schedule a property visit almost immediately. Contact our team, and we will arrange a viewing at your earliest convenience."
  },
  {
    question: "Are your listings updated regularly?",
    answer: "Absolutely. We update our property listings daily to ensure you have access to the most current availability and pricing."
  },
  {
    question: "Can I sell my property here?",
    answer: "Yes, you can list your property with us. Our expert agents will help market your property effectively to find the right buyer quickly."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        
        {/* Left Side: Header & CTA */}
        <div className="faq-left">
          <FadeInUp delay={0.1}>
            <div className="faq-tag">
              <span className="dot"></span>
              FAQs
            </div>
            <h2 className="faq-title">
              Got Questions?<br />
              We've Got Answers
            </h2>
            <p className="faq-description">
              Everything you need to know about buying,<br />
              selling, and renting with confidence.
            </p>
            <button className="faq-btn">
              Get in Touch
              <span className="btn-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="19" x2="19" y2="5"></line>
                  <polyline points="9 5 19 5 19 15"></polyline>
                </svg>
              </span>
            </button>
          </FadeInUp>
        </div>

        {/* Right Side: Accordion */}
        <div className="faq-right">
          <FadeInUp delay={0.3}>
            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="faq-question">
                    <h3>{faq.question}</h3>
                    <div className="faq-toggle">
                      {activeIndex === index ? '−' : '+'}
                    </div>
                  </div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="faq-answer"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>

      </div>
    </section>
  );
}
