import React from 'react';
import '../styles/LayananHeroSection.css'; // Custom CSS for this section
import layananImage from '../assets/images/search-service.svg'; // Importing the image

const LayananHeroSection = () => {
  return (
    <section className="layanan-hero-section">
      <div className="layanan-hero-content">
        <h1 className="layanan-hero-title">
          Solusi Layanan <span className="highlight-text">Terbaik</span> untuk Anda
        </h1>
        <p className="layanan-hero-subtitle">
          Kami menyediakan berbagai layanan rumah dan kantor dengan tenaga ahli profesional. Percayakan kepada kami!
        </p>
        <a href="#services" className="layanan-hero-btn">Lihat Layanan Kami</a>
      </div>
      <div className="layanan-hero-image">
        <img src={layananImage} alt="Layanan Hero" />
      </div>
    </section>
  );
};

export default LayananHeroSection;
