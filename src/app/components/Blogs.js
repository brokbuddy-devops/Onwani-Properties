'use client';

import './Blogs.css';
import FadeInUp from './FadeInUp';

export default function Blogs() {
  const articles = [
    {
      id: 1,
      title: "Your Luxury Sanctuary: Quick Home Design Tips",
      image: "https://picsum.photos/seed/blog1/800/600",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Home for Your Family",
      image: "https://picsum.photos/seed/blog2/800/600",
    }
  ];

  return (
    <section className="section container blogs-section" id="blogs">
      <FadeInUp className="blogs-header">
        <div className="blogs-header-left">
          <div className="section-label">
            <span className="dot"></span>
            Blogs
          </div>
          <h2 className="blogs-title">
            Your Guide to Smart<br/>Home Buying
          </h2>
          <p className="blogs-subtitle">
            Read our latest articles on market trends,<br/>financing tips, and home improvement ideas.
          </p>
        </div>
        <div className="blogs-header-right">
          <a href="#view-all" className="view-all-btn">
            View All 
            <span className="arrow-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </FadeInUp>

      <div className="blogs-grid">
        {articles.map((article, index) => (
          <FadeInUp key={article.id} delay={index * 0.4} className="blog-card">
            <div className="blog-image-wrapper">
              <img src={article.image} alt={article.title} />
            </div>
            <h3 className="blog-card-title">{article.title}</h3>
          </FadeInUp>
        ))}
      </div>
    </section>
  );
}
