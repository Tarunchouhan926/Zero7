// Blog.jsx
import React from 'react';
import './Blog.css';

const Blog = () => {
  const handleReadMore = (articleId) => {
    // In a real application, this would navigate to the article page
    console.log(`Navigating to article ${articleId}`);
    alert(`Navigating to article: ${articleId}`);
  };

  const handleSubscribe = () => {
    // In a real application, this would open a subscription form
    console.log('Opening newsletter subscription');
    alert('Opening newsletter subscription form');
  };

  return (
    <div className="blog-container">
      {/* Header Section */}
      <header className="blog-header">
        <h1>Insights, Tips & Career Resources</h1>
        <p>Build authority with useful content.</p>
      </header>

      {/* Blog Cards Section */}
      <div className="blog-grid">
        <div className="blog-card">
          <div className="card-image">
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" 
              alt="IT Skills in 2025" 
            />
            <div className="image-overlay"></div>
          </div>
          <div className="card-content">
            <h3>Top 5 In-Demand IT Skills in 2025</h3>
            <p>Discover the most valuable IT skills that will dominate the job market in 2025 and how you can start learning them today to future-proof your career.</p>
            <button 
              className="read-more" 
              onClick={() => handleReadMore('it-skills-2025')}
              aria-label="Read more about Top 5 In-Demand IT Skills in 2025"
            >
              Read More <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="blog-card">
          <div className="card-image">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" 
              alt="Campus to Corporate transition" 
            />
            <div className="image-overlay"></div>
          </div>
          <div className="card-content">
            <h3>Campus to Corporate: How to Prepare for Placement</h3>
            <p>Essential tips and strategies for college students to successfully transition from campus life to the corporate world during placement season.</p>
            <button 
              className="read-more" 
              onClick={() => handleReadMore('campus-to-corporate')}
              aria-label="Read more about Campus to Corporate preparation"
            >
              Read More <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="blog-card">
          <div className="card-image">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" 
              alt="Payroll outsourcing benefits" 
            />
            <div className="image-overlay"></div>
          </div>
          <div className="card-content">
            <h3>Why Payroll Outsourcing Saves Startups Time & Money</h3>
            <p>Learn how outsourcing payroll operations can help startups reduce costs, ensure compliance, and focus on their core business activities.</p>
            <button 
              className="read-more" 
              onClick={() => handleReadMore('payroll-outsourcing')}
              aria-label="Read more about Payroll Outsourcing benefits"
            >
              Read More <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Stay Updated with Our Latest Insights</h2>
          <p>Subscribe to our newsletter and never miss out on career tips, industry trends, and professional advice.</p>
          <button className="cta-button" onClick={handleSubscribe}>
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;