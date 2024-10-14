import React from 'react';
import '../styles/AnotherHeroSection.css'; // The CSS will be unique and cool.

const AnotherHeroSection = () => {
  return (
    <section className="another-hero-section">
      <div className="another-hero-overlay">
        <div className="another-hero-content">
          <h1 className="another-hero-title">
            Welcome to <span className="highlight-text">Your Future</span>
          </h1>
          <p className="another-hero-subtitle">
            Discover endless possibilities with our unique solutions.
          </p>
          <a href="#cta" className="another-hero-btn">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default AnotherHeroSection;
