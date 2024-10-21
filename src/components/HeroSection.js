// src/components/HeroSection.js
import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import '../styles/HeroSection.css'; // Ensure you create this CSS file for the Hero Section

const HeroSection = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="hero-section__container">
            {/* Video Background */}
            <video autoPlay muted loop className="hero-section__video-background">
                <source src={require('../assets/videos/back.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Hero Section Content */}
            <div className="hero-section__content" data-aos="fade-up">
                <h1 className="hero-section__title">Panggil Tukang dari Rumah kapanpun</h1>
                <p className="hero-section__subtitle">Mudah, Cepat, dan Terpercaya</p>
                <div className="hero-section__buttons" data-aos="zoom-in">
                    <button className="hero-section__primary-btn">Pesan Sekarang</button>
                    <button className="hero-section__secondary-btn">Pelajari Lebih Lanjut</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
