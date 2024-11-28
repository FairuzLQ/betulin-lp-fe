import React, { useEffect, useState } from 'react';
import '../styles/KarirHeroSection.css'; // Custom CSS for the section
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import axios from 'axios';
import { useLoading } from '../contexts/LoadingContext';

const KarirHeroSection = () => {
  const [heroData, setHeroData] = useState(null); // Start with null
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false); // Track if data has been fetched once
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    if (!isFetched) {
      showLoading();

      axios
        .get(`${process.env.REACT_APP_API_URL}/api/karir-hero-section?populate=*`)
        .then((response) => {
          const data = response.data.data;
          if (data) {
            setHeroData({
              title: data.KarirTitle || 'Bergabung dengan kami!',
              subtitle: data.KarirSubtitle || 'Bergabunglah dengan tim kami dan ciptakan masa depan yang gemilang.',
              buttonText: data.KarirButton || 'Lihat Lowongan',
              imageUrl: data.KarirImage?.url
                ? `${process.env.REACT_APP_API_URL}${data.KarirImage.url}`
                : null,
            });
          }
        })
        .catch((error) => {
          console.error('Error fetching Karir Hero data:', error);
          setError('Failed to load Karir Hero section.'); // Set error if fetch fails
        })
        .finally(() => {
          hideLoading();
          setIsFetched(true); // Mark as fetched so it won't retry
        });
    }
  }, [isFetched, showLoading, hideLoading]);

  if (!heroData) {
    // Show placeholder while loading
    return (
      <section className="karir-hero-section">
        <div className="loading-placeholder">Loading...</div>
      </section>
    );
  }

  return (
    <section className="karir-hero-section">
      <div className="karir-hero-content" data-aos="fade-right">
        <h1 className="karir-hero-title">{heroData.title}</h1>
        <p className="karir-hero-subtitle">{heroData.subtitle}</p>
        <a href="#lowonganAda" className="karir-hero-btn">{heroData.buttonText}</a>
      </div>
      {heroData.imageUrl && (
        <div className="karir-hero-image" data-aos="fade-left">
          <img src={heroData.imageUrl} alt="Karir" />
        </div>
      )}
    </section>
  );
};

export default KarirHeroSection;
