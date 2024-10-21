import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import '../styles/VisiMisiSection.css'; // Custom CSS for the section
import { FaLightbulb, FaRocket, FaCheckCircle } from 'react-icons/fa'; // Icons for creativity

const VisiMisiSection = () => {
  const [activeTab, setActiveTab] = useState('visi'); // State to manage tab switching

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation only occurs once
    });
  }, []);

  return (
    <section className="unique-visi-misi-section">
      <div className="unique-section-header" data-aos="fade-down">
        <h2 className="unique-section-title">Our Vision & Mission</h2>
        <div className="unique-tabs" data-aos="fade-up" data-aos-delay="200">
          <button
            className={`unique-tab-button ${activeTab === 'visi' ? 'active' : ''}`}
            onClick={() => setActiveTab('visi')}
          >
            Vision
          </button>
          <button
            className={`unique-tab-button ${activeTab === 'misi' ? 'active' : ''}`}
            onClick={() => setActiveTab('misi')}
          >
            Mission
          </button>
        </div>
      </div>
      <div className="unique-content">
        {activeTab === 'visi' && (
          <div className="unique-visi-content" data-aos="fade-right">
            <FaLightbulb className="unique-icon" />
            <h3 className="unique-content-title">Our Vision</h3>
            <p className="unique-content-text">
              To be a global leader in innovation, empowering people to achieve more through cutting-edge technology and creative solutions.
            </p>
          </div>
        )}
        {activeTab === 'misi' && (
          <div className="unique-misi-content" data-aos="fade-left">
            <FaRocket className="unique-icon" />
            <h3 className="unique-content-title">Our Mission</h3>
            <ul className="unique-mission-list">
              <li data-aos="fade-up" data-aos-delay="200">
                <div className="unique-number">1</div>
                <p>Foster a collaborative environment that empowers creativity and innovation globally.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                <div className="unique-number">2</div>
                <p>Provide sustainable, forward-thinking solutions that drive societal and business growth.</p>
              </li>
              <li data-aos="fade-up" data-aos-delay="600">
                <div className="unique-number">3</div>
                <p>Empower individuals and communities by providing tools and platforms to improve their lives.</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default VisiMisiSection;
