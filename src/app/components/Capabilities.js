'use client';

import { motion } from 'framer-motion';
import './Capabilities.css';

import FadeInUp from './FadeInUp';

export default function Capabilities() {
  const capabilities = [
    {
      id: "01",
      title: "Property\nBuying &\nSelling",
      image: "https://picsum.photos/seed/cap1/600/400",
      description: "End-to-end support for smooth, secure buying and selling of residential and commercial properties."
    },
    {
      id: "02",
      title: "Property\nRental",
      image: "https://picsum.photos/seed/cap2/600/400",
      description: "We help clients find the perfect rental property in Dubai, from apartments to villas, ensuring hassle-free leasing, transparent agreements."
    },
    {
      id: "03",
      title: "Property\nManagement",
      image: "https://picsum.photos/seed/cap3/600/400",
      description: "Full-service management—tenants, maintenance, and rent—keeping your property profitable and stress-free."
    },
    {
      id: "04",
      title: "Real Estate\nDocumentation",
      image: "https://picsum.photos/seed/cap4/600/400",
      description: "Assistance with all property paperwork, approvals, and legal formalities for a smooth process."
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="section container capabilities-section" id="capabilities">
      <FadeInUp className="capabilities-header">
        <div className="section-label">Our expertise</div>
        <h2 className="capabilities-main-title">
          Meet With Our Crystal<br/>Clear Capabilities.
        </h2>
      </FadeInUp>

      <div className="capabilities-list">
        {capabilities.map((item, index) => (
          <motion.div 
            key={index} 
            className="capability-row"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="capability-left">
              <span className="capability-id">{`{${item.id}}`}</span>
              <h3 className="capability-title">
                {item.title.split('\n').map((line, i) => (
                  <span key={i}>{line}<br/></span>
                ))}
              </h3>
            </div>
            
            <div className="capability-center">
              <div className="capability-image-wrapper">
                <img src={item.image} alt={item.title.replace('\n', ' ')} />
              </div>
            </div>

            <div className="capability-right">
              <p className="capability-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
