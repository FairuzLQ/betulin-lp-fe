import React, { useState, useEffect } from 'react';
import '../styles/LayananHeroSection.css';
import { useLoading } from '../contexts/LoadingContext';
import layananHeroSectionImage from '../assets/hero-default/layanan-hero-img.svg';

const LayananHeroSection = () => {
  const [heroData, setHeroData] = useState({
    LayananHeroTitle: 'Layanan Terbaik Kami', // Default title
    LayananHeroSubtitle: 'Kami siap memberikan layanan terbaik dengan kualitas terjamin.', // Default subtitle
    LayananHeroButton: 'Jelajahi Layanan Kami', // Default button text
    LayananHeroImage: { url: layananHeroSectionImage }, // Default image
  });
  const [isFetched, setIsFetched] = useState(false); // Track if fetch has been attempted
  const [error, setError] = useState(null);
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    // Only fetch if we haven't fetched yet
    if (!isFetched) {
      const fetchHeroData = async () => {
        showLoading();
        
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/api/layanan-hero-section?populate=*`);
          if (!response.ok) {
            throw new Error('Failed to fetch hero section data');
          }
          const data = await response.json();
          
          // Check if API data is valid
          if (data.data) {
            setHeroData({
              LayananHeroTitle: data.data.LayananHeroTitle || 'Layanan Terbaik Kami',
              LayananHeroSubtitle: data.data.LayananHeroSubtitle || 'Kami siap memberikan layanan terbaik dengan kualitas terjamin.',
              LayananHeroButton: data.data.LayananHeroButton || 'Jelajahi Layanan Kami',
              LayananHeroImage: data.data.LayananHeroImage || { url: layananHeroSectionImage },
            });
          }
        } catch (error) {
          console.error('Error fetching hero section data:', error);
          setError('Failed to load hero section data.');
        } finally {
          hideLoading();
          setIsFetched(true); // Mark fetch as completed
        }
      };

      fetchHeroData();
    }
  }, [isFetched, showLoading, hideLoading]);

  return (
    <section className="layanan-hero-section">
      <div className="layanan-hero-content">
        <h1 className="layanan-hero-title">
          {heroData.LayananHeroTitle.split(' ').map((word, index) => (
            <span key={index} className={word.toLowerCase() === 'terbaik' ? 'highlight-text' : ''}>
              {word + ' '}
            </span>
          ))}
        </h1>
        <p className="layanan-hero-subtitle">{heroData.LayananHeroSubtitle}</p>
        <a href="#services" className="layanan-hero-btn">{heroData.LayananHeroButton}</a>
      </div>
      <div className="layanan-hero-image">
        <img src={heroData.LayananHeroImage.url} alt="Layanan Hero" />
      </div>
      
      
    </section>
  );
};

export default LayananHeroSection;
