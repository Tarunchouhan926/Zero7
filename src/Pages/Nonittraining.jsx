import React from "react";
import "./Nonittraining.css";

const Nonittraining = () => {
  const nonItPrograms = [
    { id: 5, title: "HR Management", description: "Modern HR practices and talent management", price: "₹25,000", icon: "👥" },
    { id: 6, title: "Digital Marketing", description: "Master SEO, social media, and online campaigns", price: "₹28,000", icon: "📱" },
    { id: 7, title: "Business Analysis", description: "Develop strategic business insights", price: "₹32,000", icon: "📈" },
    { id: 8, title: "Finance & Payroll", description: "Financial management and payroll systems", price: "₹27,000", icon: "💰" }
  ];

  return (
    <div className="digital-courses-container">
      <header className="page-header">
        <h1>Non-IT Training Programs</h1>
        <p>Boost your professional skills with our specialized Non-IT courses</p>
      </header>

      <section className="programs-section">
        <div className="courses-grid">
          {nonItPrograms.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-icon">{course.icon}</div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-price">{course.price}</div>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Nonittraining;
