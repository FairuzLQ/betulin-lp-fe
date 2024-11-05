import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/HeroSection.css';
import { useLoading } from '../contexts/LoadingContext';

const HeroSection = () => {
    const { showLoading, hideLoading } = useLoading();

    // Default content for Hero Section in Indonesian
    const defaultHeroData = {
        berandaHeroTitle: 'Selamat Datang di Betulin',
        berandaHeroSubtitle: 'Solusi modern untuk kebutuhan rumah Anda',
        berandaHeroButton1: 'Lihat Layanan Kami',
        berandaHeroButton2: 'Hubungi Kami'
    };

    // State to store API data or fallback to defaults
    const [heroData, setHeroData] = useState(defaultHeroData);

    // State for error handling
    const [error, setError] = useState(null);

    // Fetch data from the Strapi API
    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;

        showLoading();
        const fetchHeroData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/beranda-hero-section`);

                if (response.data && response.data.data) {
                    const {
                        berandaHeroTitle,
                        berandaHeroSubtitle,
                        berandaHeroButton1,
                        berandaHeroButton2,
                    } = response.data.data;

                    setHeroData({
                        berandaHeroTitle: berandaHeroTitle || defaultHeroData.berandaHeroTitle,
                        berandaHeroSubtitle: berandaHeroSubtitle || defaultHeroData.berandaHeroSubtitle,
                        berandaHeroButton1: berandaHeroButton1 || defaultHeroData.berandaHeroButton1,
                        berandaHeroButton2: berandaHeroButton2 || defaultHeroData.berandaHeroButton2
                    });
                } else {
                    setHeroData(defaultHeroData); // Fallback to defaults
                    setError('Invalid API response format');
                }
            } catch (err) {
                console.error('Error fetching hero section data:', err);
                setHeroData(defaultHeroData); // Fallback to defaults
                setError('Failed to load hero section data.');
            }
            hideLoading();
        };

        fetchHeroData();
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <div className="hero-section__container">
            {/* Video Background */}
            <video autoPlay muted loop className="hero-section__video-background">
                <source src={require('../assets/videos/hero-background.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Hero Section Content */}
            <div className="hero-section__content" data-aos="fade-up">
                <h1 className="hero-section__title">{heroData.berandaHeroTitle}</h1>
                <p className="hero-section__subtitle">{heroData.berandaHeroSubtitle}</p>
                <div className="hero-section__buttons" data-aos="zoom-in">
                    <button className="hero-section__primary-btn">{heroData.berandaHeroButton1}</button>
                    <button className="hero-section__secondary-btn">{heroData.berandaHeroButton2}</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
