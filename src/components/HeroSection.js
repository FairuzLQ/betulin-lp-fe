// src/components/HeroSection.js
import React from 'react';
import '../styles/HeroSection.css'; // Ensure you create this CSS file for the Hero Section

const HeroSection = () => {
    return (
        <div className="hero-section__container">
            {/* Video Background */}
            <video autoPlay muted loop className="hero-section__video-background">
                <source src={require('../assets/videos/back.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Hero Section Content */}
            <div className="hero-section__content">
                <h1 className="hero-section__title">Panggil Tukang dari Rumah kapanpun</h1>
                <p className="hero-section__subtitle">Mudah, Cepat, dan Terpercaya</p>
                <div className="hero-section__buttons">
                    <button className="hero-section__primary-btn">Pesan Sekarang</button>
                    <button className="hero-section__secondary-btn">Pelajari Lebih Lanjut</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
