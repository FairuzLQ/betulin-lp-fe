import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/AboutUsHeroSection.css';
import axios from 'axios';
import { useLoading } from '../contexts/LoadingContext';

const AboutUsHeroSection = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Show loading before the request
    showLoading();

    // Fetch data from the API
    axios.get(`${process.env.REACT_APP_API_URL}/api/tentang-kami-hero-section?populate=*`)
      .then(response => {
        const data = response.data.data;
        setTitle(data.TentangKamiTitle);
        setSubtitle(data.TentangKamiSubtitle);
        setImageUrl(`${process.env.REACT_APP_API_URL}${data.TentangKamiImage.url}`);
      })
      .catch(error => {
        console.error('Error fetching About Us data:', error);
      })
      .finally(() => {
        // Hide loading after the request is complete, whether successful or failed
        hideLoading();
      });
  });

  return (
    <section className="about-us-hero-section">
      <div className="hero-content" data-aos="fade-up">
        <h1 className="hero-title" data-aos="fade-down">{title || 'About Us'}</h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
          {subtitle || 'We are committed to delivering the best services to help you thrive in your journey.'}
        </p>
        <img
          src={imageUrl || require('../assets/images/tim.png')}
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
