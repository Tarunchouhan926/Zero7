import React from "react";
import "./Ittraining.css";

const Ittraining= () => {
  const itPrograms = [
    { id: 1, title: "Full Stack Development", description: "Master front-end and back-end technologies", price: "₹15,000", icon: "💻" },
    { id: 2, title: "Cloud & DevOps", description: "Learn cloud infrastructure and CI/CD pipelines", price: "₹40,000", icon: "☁️" },
    { id: 3, title: "Data Science & AI", description: "Explore machine learning and data analysis", price: "₹45,000", icon: "📊" },
    { id: 4, title: "Software Testing", description: "Become an expert in QA and automation", price: "₹30,000", icon: "🔍" }
  ];

  return (
    <div className="digital-courses-container">
      <header className="page-header">
        <h1>IT Training Programs</h1>
        <p>Enhance your tech skills with our industry-relevant IT courses</p>
      </header>

      <section className="programs-section">
        <div className="courses-grid">
          {itPrograms.map((course) => (
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

export default Ittraining;
