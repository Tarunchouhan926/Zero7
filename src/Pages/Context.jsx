import React from "react";
import { 
  FaCheckCircle, 
  FaRocket, 
  FaUserCheck, 
  FaBuilding, 
  FaChalkboardTeacher, 
  FaUsersCog, 
  FaUserTie,
  FaFileAlt,
  FaUniversity 
} from "react-icons/fa";
import "./Context.css";

export default function Context() {
  return (
    <section className="context-wrapper">
      <div className="intro">
        <h1>Empowering Careers. Enabling Organizations.</h1>
        <p className="subheading">
          Your trusted partner for Training, Staffing, and Placement Excellence. 
          With over a decade of experience, we bridge the gap between talent and opportunity.
        </p>
      </div>

      <div className="image-container">
        <div className="image-box">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="Team collaboration" />
        </div>
        <div className="image-box">
          <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="Training session" />
        </div>
        <div className="image-box">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="Career growth" />
        </div>
      </div>

      <h2 className="section-title">What We Offer</h2>

      <div className="service-grid">
        <div className="service-card">
          <div className="icon-box"><FaChalkboardTeacher /></div>
          <h3>Industry-Focused Training Programs</h3>
          <ul>
            <li>IT & Non-IT Courses with industry experts</li>
            <li>Hands-on Projects and real-world scenarios</li>
            <li>100% Placement Support with our partner network</li>
            <li>Certification guidance and exam preparation</li>
            <li>Continuous learning and skill upgrade paths</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaUsersCog /></div>
          <h3>Payroll and Staffing Services</h3>
          <ul>
            <li>Hassle-free payroll management for companies of all sizes</li>
            <li>Contractor payment support and compliance management</li>
            <li>Flexible staffing solutions for project-based needs</li>
            <li>Employee benefits administration</li>
            <li>Multi-state payroll tax compliance</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaUserTie /></div>
          <h3>Job-Ready Support</h3>
          <ul>
            <li>Bench Recruitment for immediate placement</li>
            <li>Resume Marketing to top employers</li>
            <li>Interview Preparation with mock sessions</li>
            <li>Career counseling and path guidance</li>
            <li>Soft skills and communication training</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="icon-box"><FaUniversity /></div>
          <h3>Campus Hiring Drives</h3>
          <ul>
            <li>College Collaborations for talent pipeline</li>
            <li>Bulk Hiring Campaigns for large organizations</li>
            <li>Internship-to-Hire Programs for experience and evaluation</li>
            <li>Career fair organization and management</li>
            <li>Industry-academia partnership programs</li>
          </ul>
        </div>
        <div className="service-card">
  <div className="icon-box"><FaFileAlt /></div>
  <h3>Resume Marketing Services</h3>
  <ul>
    <li>Professional resume creation tailored to your target roles</li>
    <li>Resume distribution across leading job portals</li>
    <li>Keyword optimization for better ATS visibility</li>
    <li>Customized cover letters for impactful applications</li>
    <li>Personalized guidance to improve job search results</li>
  </ul>
</div>
<div className="service-card">
  <div className="icon-box"><FaUniversity /></div>
  <h3>College Connect</h3>
  <ul>
    <li>Bridging the gap between students and industry opportunities</li>
    <li>Campus recruitment drives and placement support</li>
    <li>Skill development workshops and career guidance</li>
    <li>Internship programs with top companies</li>
    <li>Networking sessions with industry experts</li>
  </ul>
</div>

      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2 className="section-title">Why Choose Us</h2>        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaRocket />
            </div>
            <h3>Placement-Driven Approach</h3>
            <ul>
              <li><FaCheckCircle /> Dedicated placement cell</li>
              <li><FaCheckCircle /> 300+ recruiter network</li>
              <li><FaCheckCircle /> Weekly interview opportunities</li>
              <li><FaCheckCircle /> Personalized career roadmap</li>
              <li><FaCheckCircle /> Post-placement support</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaUserCheck />
            </div>
            <h3>Real-Time Projects & Expert Mentorship</h3>
            <ul>
              <li><FaCheckCircle /> Project-based training</li>
              <li><FaCheckCircle /> Corporate trainers with </li>
              <li><FaCheckCircle /> Industry-relevant curriculum</li>
              <li><FaCheckCircle /> One-on-one mentorship sessions</li>
              <li><FaCheckCircle /> Portfolio development guidance</li>
            </ul>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaBuilding />
            </div>
            <h3>Trusted by Companies & Colleges</h3>
            <ul>
              <li><FaCheckCircle /> Partnerships with 50+ institutions</li>
              <li><FaCheckCircle /> Corporate tie-ups across IT & Non-IT</li>
              <li><FaCheckCircle /> Proven track record of success</li>
              <li><FaCheckCircle /> Industry recognition and awards</li>
              <li><FaCheckCircle /> Long-standing reputation</li>
            </ul>
          </div>
        </div>
        
        <div className="career-consultation">
          <h3>Ready to Transform Your Career?</h3>
          <p>Schedule a free consultation with our career experts</p>
          <button className="btn-primary btn-large">
            <FaRocket /> Schedule Free Career Consultation
          </button>
        </div>
      </div>

      <div className="testimonial-section">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">Hear from our candidates and partners about their experiences</p>
        
        <div className="testimonial-grid">
          <div className="testimonial-card" style={{animationDelay: '0.1s'}}>
            <div className="testimonial-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="Rahul Sharma" />
              <div className="quote-icon">"</div>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">The training program completely transformed my career path. I went from a fresh graduate to a employed software engineer in just 3 months!</p>
              <div className="testimonial-author">
                <span className="testimonial-name">Rahul Sharma</span>
                <span className="testimonial-role">Software Developer at TechSolutions</span>
              </div>
              <div className="testimonial-rating">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
            </div>
          </div>

          <div className="testimonial-card" style={{animationDelay: '0.2s'}}>
            <div className="testimonial-image">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="Priya Mehta" />
              <div className="quote-icon">"</div>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">As a hiring manager, I've found their pre-screened candidates to be exceptionally well-prepared. It's cut our recruitment time by half.</p>
              <div className="testimonial-author">
                <span className="testimonial-name">Priya Mehta</span>
                <span className="testimonial-role">HR Director at InnovateTech</span>
              </div>
              <div className="testimonial-rating">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
            </div>
          </div>

          <div className="testimonial-card" style={{animationDelay: '0.3s'}}>
            <div className="testimonial-image">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="Arjun Kapoor" />
              <div className="quote-icon">"</div>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">Their payroll services have simplified our contractor management significantly. Now we can focus on our core business without administrative headaches.</p>
              <div className="testimonial-author">
                <span className="testimonial-name">Arjun Kapoor</span>
                <span className="testimonial-role">CEO at StartUp Ventures</span>
              </div>
              <div className="testimonial-rating">
                {Array(4).fill().map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
                <span className="star">☆</span>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-cta">
          <p>Ready to create your success story?</p>
          <button className="btn-primary">Share Your Experience</button>
        </div>
      </div>

      
    </section>
  );
}