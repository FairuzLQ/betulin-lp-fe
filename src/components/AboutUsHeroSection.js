import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import '../styles/AboutUsHeroSection.css'; // Custom CSS for this component

const AboutUsHeroSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once while scrolling
    });
  }, []);

  return (
    <section className="about-us-hero-section">
      <div className="hero-content" data-aos="fade-up">
        <h1 className="hero-title" data-aos="fade-down">About Us</h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          We are committed to delivering the best services to help you thrive in your journey.
        </p>
        <img
          src={require('../assets/images/tim.png')} // Adjust this path to your image
          alt="About Us"
          className="hero-image"
          data-aos="zoom-in" data-aos-delay="400"
        />
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
