import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/AboutUsHeroSection.css';
import axios from 'axios';
import { useLoading } from '../contexts/LoadingContext';
import defaultImage from '../assets/images/tim.png';

const AboutUsHeroSection = () => {
  const [heroData, setHeroData] = useState({
    title: 'About Us', // Default title
    subtitle: 'We are committed to delivering the best services to help you thrive in your journey.', // Default subtitle
    imageUrl: defaultImage, // Default image
  });
  const [error, setError] = useState(null); // Error state to capture fetch issues
  const [isFetched, setIsFetched] = useState(false); // Track if data has been fetched once
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const fetchHeroData = async () => {
      showLoading();
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tentang-kami-hero-section?populate=*`);
        const data = response.data.data;
        
        if (data) {
          setHeroData({
            title: data.TentangKamiTitle || 'About Us',
            subtitle: data.TentangKamiSubtitle || 'We are committed to delivering the best services to help you thrive in your journey.',
            imageUrl: data.TentangKamiImage ? `${process.env.REACT_APP_API_URL}${data.TentangKamiImage.url}` : defaultImage,
          });
        }
      } catch (error) {
        console.error('Error fetching About Us data:', error);
        setError('Failed to load About Us section.');
      } finally {
        hideLoading();
        setIsFetched(true); // Mark fetch as completed after first attempt, regardless of success or failure
      }
    };

    // Only fetch data if not fetched previously
    if (!isFetched) {
      fetchHeroData();
    }
  }, [showLoading, hideLoading, isFetched]);

  return (
    <section className="about-us-hero-section">
      <div className="hero-content" data-aos="fade-up">
        <h1 className="hero-title" data-aos="fade-down">{heroData.title}</h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          {heroData.subtitle}
        </p>
        <img
          src={heroData.imageUrl}
          alt="About Us"
          className="hero-image"
          data-aos="zoom-in"
          data-aos-delay="400"
        />
      </div>
      
    </section>
  );
};

export default AboutUsHeroSection;
