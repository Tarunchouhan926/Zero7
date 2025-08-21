import React, { useState, useEffect } from "react";
import "./Home.css";
import Context from "./Context.jsx";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
];

// ✅ Change this value to control how long image stays
const SLIDE_DURATION = 10000; // 10s per image

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto slide
  useEffect(() => {
    const timer = setTimeout(goToNext, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Progress bar animation
  useEffect(() => {
    let start = Date.now();
    let frame;

    const animate = () => {
      let elapsed = Date.now() - start;
      let percentage = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(percentage);

      if (percentage < 100) {
        frame = requestAnimationFrame(animate);
      }
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [currentIndex]);

  return (
    <div>
      {/* Image Slider */}
      <div className="slider">
        {/* Progress bar */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="slide"
            className={`slider-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}

        <button className="prev" onClick={goToPrev}>❮</button>
        <button className="next" onClick={goToNext}>❯</button>
      </div>

      {/* Rest of content */}
      <Context />
    </div>

  );
};

export default Home;
