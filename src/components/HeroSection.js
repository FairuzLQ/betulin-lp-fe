import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHammer,
    faWrench,
    faScrewdriver,
    faBolt,
    faCogs,
    faToolbox,
    faDraftingCompass,
    faHardHat,
    faPencilRuler,
} from '@fortawesome/free-solid-svg-icons';
import { useLoading } from '../contexts/LoadingContext';

const HeroSection = () => {
    const { showLoading, hideLoading } = useLoading();

    // Default content for Hero Section
    const defaultHeroData = {
        berandaHeroTitle: '...',
        berandaHeroSubtitle: '...',
        berandaHeroButton1: '...',
        berandaHeroButtonLink1: '#', // Default link
        berandaHeroButton2: '...',
        berandaHeroButtonLink2: '#', // Default link
    };

    const [heroData, setHeroData] = useState(defaultHeroData);
    const [error, setError] = useState(null);

    const icons = [
        faHammer,
        faWrench,
        faScrewdriver,
        faBolt,
        faCogs,
        faToolbox,
        faDraftingCompass,
        faHardHat,
        faPencilRuler,
    ];

    // Fetch data from the API
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
                        berandaHeroButtonLink1,
                        berandaHeroButtonLink2,
                    } = response.data.data;

                    setHeroData({
                        berandaHeroTitle: berandaHeroTitle || defaultHeroData.berandaHeroTitle,
                        berandaHeroSubtitle: berandaHeroSubtitle || defaultHeroData.berandaHeroSubtitle,
                        berandaHeroButton1: berandaHeroButton1 || defaultHeroData.berandaHeroButton1,
                        berandaHeroButton2: berandaHeroButton2 || defaultHeroData.berandaHeroButton2,
                        berandaHeroButtonLink1: berandaHeroButtonLink1 || defaultHeroData.berandaHeroButtonLink1,
                        berandaHeroButtonLink2: berandaHeroButtonLink2 || defaultHeroData.berandaHeroButtonLink2,
                    });
                } else {
                    setHeroData(defaultHeroData);
                    setError('Invalid API response format');
                }
            } catch (err) {
                console.error('Error fetching hero section data:', err);
                setHeroData(defaultHeroData);
                setError('Failed to load hero section data.');
            }
            hideLoading();
        };

        fetchHeroData();
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <div className="hero-section__container icon-background">
            {/* Background Grid Pattern */}
            <div className="floating-icons">
                {icons.map((icon, index) => (
                    <div key={index} className={`floating-icon icon-${index}`}>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                ))}
            </div>

            {/* Hero Section Content */}
            <div className="hero-section__content" data-aos="fade-up">
                <h1 className="hero-section__title">{heroData.berandaHeroTitle}</h1>
                <p className="hero-section__subtitle">{heroData.berandaHeroSubtitle}</p>
                <div className="hero-section__buttons" data-aos="zoom-in">
                    <a href={heroData.berandaHeroButtonLink1} target="_blank" rel="noopener noreferrer">
                        <button className="hero-section__primary-btn">{heroData.berandaHeroButton1}</button>
                    </a>
                    <a href={heroData.berandaHeroButtonLink2} target="_blank" rel="noopener noreferrer">
                        <button className="hero-section__secondary-btn">{heroData.berandaHeroButton2}</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
