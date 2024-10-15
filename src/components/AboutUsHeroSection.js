import React from 'react';
import '../styles/AboutUsHeroSection.css'; // Custom CSS for this component

const AboutUsHeroSection = () => {
  return (
    <section className="about-us-hero-section">
      <div className="hero-content">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-subtitle">
          We are committed to delivering the best services to help you thrive in your journey.
        </p>
        <img
          src={require('../assets/images/tim.png')} // Adjust this path to your image
          alt="About Us"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
