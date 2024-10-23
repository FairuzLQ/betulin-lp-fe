import React, { useState, useEffect } from 'react';
import '../styles/LayananHeroSection.css'; // Custom CSS for this section

const LayananHeroSection = () => {
  const [heroData, setHeroData] = useState(null); // State to store API data
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Fetch data from the API when the component loads
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/layanan-hero-section?populate=*`);
        if (!response.ok) {
          throw new Error('Failed to fetch hero section data');
        }
        const data = await response.json();
        setHeroData(data.data); // Set the fetched data
        setIsLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error.message); // Set error message if the fetch fails
        setIsLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  // While the data is loading
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // If there is an error
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Extract data from the heroData state
  const { LayananHeroTitle, LayananHeroSubtitle, LayananHeroButton, LayananHeroImage } = heroData;

  return (
    <section className="layanan-hero-section">
      <div className="layanan-hero-content">
        <h1 className="layanan-hero-title">
          {LayananHeroTitle.split(' ').map((word, index) => (
            <span key={index} className={word.toLowerCase() === 'terbaik' ? 'highlight-text' : ''}>
              {word + ' '}
            </span>
          ))}
        </h1>
        <p className="layanan-hero-subtitle">
          {LayananHeroSubtitle}
        </p>
        <a href="#services" className="layanan-hero-btn">{LayananHeroButton}</a>
      </div>
      <div className="layanan-hero-image">
        <img src={`${process.env.REACT_APP_API_URL}${LayananHeroImage.url}`} alt="Layanan Hero" />
      </div>
    </section>
  );
};

export default LayananHeroSection;
