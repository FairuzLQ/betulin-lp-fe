import React, { useEffect } from 'react';
import '../styles/KarirHeroSection.css'; // Custom CSS for the section
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const KarirHeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Animation occurs only once
    });
  }, []);

  return (
    <section className="karir-hero-section">
      <div className="karir-hero-content" data-aos="fade-right">
        <h1 className="karir-hero-title">Bergabung dengan kami!</h1>
        <p className="karir-hero-subtitle">Bergabunglah dengan tim kami dan ciptakan masa depan yang gemilang.</p>
        <a href="#karir" className="karir-hero-btn">Lihat Lowongan</a>
      </div>
      <div className="karir-hero-image" data-aos="fade-left">
        <img src={require('../assets/images/karir-tim-hero.png')} alt="Karir" />
      </div>
    </section>
  );
};

export default KarirHeroSection;
