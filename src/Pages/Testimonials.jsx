import React from "react";
import "./Training.css"; // Assuming you'll create a matching CSS file

export default function TrainingPage() {
  return (
    <div className="training-page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Industry-Relevant Training with Real Placement Outcomes</h1>
          <p className="subheading">
            Gain practical skills, hands-on project experience, and placement assistance to launch or grow your career.
          </p>
          <div>
            <button className="primary-btn">Download Course Brochure</button>
            <button className="secondary-btn">Apply Now</button>
          </div>
        </div>
      </section>

      {/* Courses We Offer */}
      <section className="courses-section">
        <h2>Courses We Offer</h2>

        <div className="course-category">
          <h3>IT Programs</h3>
          <ul>
            <li>Full Stack Development</li>
            <li>Cloud &amp; DevOps</li>
            <li>Data Science &amp; AI</li>
            <li>Software Testing</li>
          </ul>
        </div>

        <div className="course-category">
          <h3>Non-IT Programs</h3>
          <ul>
            <li>HR Management</li>
            <li>Digital Marketing</li>
            <li>Business Analysis</li>
            <li>Finance &amp; Payroll</li>
          </ul>
        </div>
      </section>

      {/* Key Features */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Placement assistance after training</li>
          <li>Resume building &amp; mock interviews</li>
          <li>Real-time project experience</li>
          <li>Certification upon completion</li>
        </ul>
      </section>

      {/* Who Should Join */}
      <section className="who-should-join">
        <h2>Who Should Join?</h2>
        <ul>
          <li>Freshers</li>
          <li>Career Switchers</li>
          <li>Working Professionals</li>
        </ul>
      </section>

      {/* CTA Buttons */}
      <section className="center-btn">
        <button className="primary-btn">Download Course Brochure</button>
        <button className="secondary-btn">Apply Now</button>
      </section>
    </div>
  );
}
