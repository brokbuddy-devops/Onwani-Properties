import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <video 
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Find Your Dream<br />Home Today
        </h1>
        <p className="hero-subtitle">
          Start your exciting journey to<br />homeownership right here
        </p>
        <button className="btn-light hero-btn">
          Explore More
          <span className="btn-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="19" x2="19" y2="5"></line>
              <polyline points="9 5 19 5 19 15"></polyline>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
