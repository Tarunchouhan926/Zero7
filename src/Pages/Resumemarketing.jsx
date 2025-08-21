import React from 'react';
import './Resumemarketing.css';

const Resumemarketing = () => {
  return (
    <div className="resume-marketing-container">
      <div className="hero-section">
        <h1 className="hero-title">
          Get Your Resume <span className="highlight">In Front of the Right Eyes</span>
        </h1>
        <p className="hero-subtitle">
          We bridge the gap between your resume and hiring managers
        </p>
      </div>

      <div className="card-grid">
        {/* Why Section */}
        <div className="feature-card">
          <div className="card-header">
            <div className="icon-circle">💎</div>
            <h2>Why Resume Marketing?</h2>
          </div>
          <ul className="benefit-list">
            <li className="benefit-item">
              <span className="check-icon">✓</span>
              Stand out in crowded job portals
            </li>
            <li className="benefit-item">
              <span className="check-icon">✓</span>
              Direct visibility with hiring managers
            </li>
            <li className="benefit-item">
              <span className="check-icon">✓</span>
              3x more interview calls (on average)
            </li>
          </ul>
        </div>

        {/* How Section */}
        <div className="feature-card">
          <div className="card-header">
            <div className="icon-circle">⚙️</div>
            <h2>How It Works</h2>
          </div>
          <ol className="process-steps">
            <li className="step">
              <span className="step-number">1</span>
              Professional resume audit & enhancement
            </li>
            <li className="step">
              <span className="step-number">2</span>
              Targeted submission to 50+ recruiters
            </li>
            <li className="step">
              <span className="step-number">3</span>
              Active follow-ups & interview coaching
            </li>
          </ol>
        </div>
      </div>

      <div className="cta-section">
        <button className="primary-cta">
          Upload Resume <span className="arrow">→</span>
        </button>
        <button className="secondary-cta">
          See Pricing Options
        </button>
        <div className="trust-badge">
          <span className="stars">★★★★★</span>
          Trusted by 5,000+ professionals
        </div>
      </div>
    </div>
  );
};

export default Resumemarketing;