import React, { useState, useEffect } from 'react';
import '../styles/LayananHeroSection.css';
import { useLoading } from '../contexts/LoadingContext';

const LayananHeroSection = () => {
  const [heroData, setHeroData] = useState(null); // Start with null
  const [isFetched, setIsFetched] = useState(false); // Track if fetch has been attempted
  const [error, setError] = useState(null);
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    if (!isFetched) {
      const fetchHeroData = async () => {
        showLoading();

        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/api/layanan-hero-section?populate=*`);
          if (!response.ok) {
            throw new Error('Failed to fetch hero section data');
          }
          const data = await response.json();

          if (data.data) {
            const baseUrl = process.env.REACT_APP_API_URL;
            const imageUrl = data.data.LayananHeroImage?.url
              ? `${baseUrl}${data.data.LayananHeroImage.url}`
              : null;

            setHeroData({
              LayananHeroTitle: data.data.LayananHeroTitle,
              LayananHeroSubtitle: data.data.LayananHeroSubtitle,
              LayananHeroButton: data.data.LayananHeroButton,
              LayananHeroImage: { url: imageUrl },
            });
          }
        } catch (error) {
          console.error('Error fetching hero section data:', error);
          setError('Failed to load hero section data.');
        } finally {
          hideLoading();
          setIsFetched(true);
        }
      };

      fetchHeroData();
    }
  }, [isFetched, showLoading, hideLoading]);

  // Show loading spinner or message while data is being fetched
  if (!heroData) {
    return (
      <section className="layanan-hero-section">
        <div className="loading-placeholder">Loading...</div>
      </section>
    );
  }

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
