import React, { useEffect, useState } from 'react';
import '../styles/KarirHeroSection.css'; // Custom CSS for the section
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import axios from 'axios';

const KarirHeroSection = () => {
  const [title, setTitle] = useState('Bergabung dengan kami!');
  const [subtitle, setSubtitle] = useState('Bergabunglah dengan tim kami dan ciptakan masa depan yang gemilang.');
  const [buttonText, setButtonText] = useState('Lihat Lowongan');
  const [imageUrl, setImageUrl] = useState(require('../assets/images/karir-tim-hero.png')); // Default image

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation occurs only once
    });

    // Fetch data from the API
    axios.get(`${process.env.REACT_APP_API_URL}/api/karir-hero-section?populate=*`)
      .then(response => {
        const data = response.data.data;
        setTitle(data.KarirTitle || title);
        setSubtitle(data.KarirSubtitle || subtitle);
        setButtonText(data.KarirButton || buttonText);

        // Set image URL if it exists in the API data, else use default
        if (data.KarirImage && data.KarirImage.url) {
          setImageUrl(`${process.env.REACT_APP_API_URL}${data.KarirImage.url}`);
        }
      })
      .catch(error => {
        console.error('Error fetching Karir Hero data:', error);
      });
  }, []);

  return (
    <section className="karir-hero-section">
      <div className="karir-hero-content" data-aos="fade-right">
        <h1 className="karir-hero-title">{title}</h1>
        <p className="karir-hero-subtitle">{subtitle}</p>
        <a href="#lowonganAda" className="karir-hero-btn">{buttonText}</a>
      </div>
      <div className="karir-hero-image" data-aos="fade-left">
        <img src={imageUrl} alt="Karir" />
      </div>
    </section>
  );
};

export default KarirHeroSection;
