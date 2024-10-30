import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/HeroSection.css';
import { useLoading } from '../contexts/LoadingContext';

const HeroSection = () => {
    const { showLoading, hideLoading } = useLoading();
    // State to store data from API
    const [heroData, setHeroData] = useState({
        berandaHeroTitle: 'Loading...',
        berandaHeroSubtitle: '...',
        berandaHeroButton1: '',
        berandaHeroButton2: ''
    });

    // State for error handling
    const [error, setError] = useState(null);

    // Fetch data from the Strapi API
    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL; // Access the environment variable

        // Log the API URL to check if it's working
        // console.log('API URL:', apiUrl);
        showLoading();
        const fetchHeroData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/beranda-hero-section`); // Use the API URL from env

                // Directly access the fields from response.data.data
                if (response.data && response.data.data) {
                    const {
                        berandaHeroTitle,
                        berandaHeroSubtitle,
                        berandaHeroButton1,
                        berandaHeroButton2,
                    } = response.data.data;

                    setHeroData({
                        berandaHeroTitle,
                        berandaHeroSubtitle,
                        berandaHeroButton1,
                        berandaHeroButton2
                    });
                } else {
                    throw new Error('Invalid API response format');
                }
            } catch (err) {
                console.error('Error fetching hero section data:', err);
                setError('Failed to load hero section data.');
            }
            hideLoading();
        };

        fetchHeroData();
    }, []);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="hero-section__container">
            {/* Video Background */}
            <video autoPlay muted loop className="hero-section__video-background">
                <source src={require('../assets/videos/back.mp4')} type="video/mp4" />
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
