import React from 'react';
import './PayrollServices.css';

const PayrollServices = () => {
  return (
    <div className="payroll-services">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Simplify Payroll. Empower Your Workforce.</h1>
          <p className="subtitle">Streamlined payroll solutions that save time and ensure compliance</p>
        </section>

        {/* What We Offer */}
        <section className="offer-section">
          <h2>What We Offer</h2>
          <ul className="features-list">
            <li>
              <span className="bullet-icon">✓</span>
              <span>Salary processing for in-house and remote staff</span>
            </li>
            <li>
              <span className="bullet-icon">✓</span>
              <span>Tax deductions, ESI, PF, and compliance management</span>
            </li>
            <li>
              <span className="bullet-icon">✓</span>
              <span>Contractor and freelance payroll support</span>
            </li>
            <li>
              <span className="bullet-icon">✓</span>
              <span>Customized payroll setup for startups & SMEs</span>
            </li>
          </ul>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <h2>Benefits for Employers</h2>
          <ul className="features-list">
            <li>
              <span className="bullet-icon">✓</span>
              <span>Save time, reduce errors</span>
            </li>
            <li>
              <span className="bullet-icon">✓</span>
              <span>Stay compliant with labor laws</span>
            </li>
            <li>
              <span className="bullet-icon">✓</span>
              <span>Focus on core business</span>
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <button className="cta-button">Request Free Payroll Consultation</button>
        </section>
      </div>
    </div>
  );
};

export default PayrollServices;