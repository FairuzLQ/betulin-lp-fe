import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import '../styles/HubungiKamiSection.css'; // Import the CSS for styling
import csImage from '../assets/images/cs-image.png'; // Import the customer service image

const HubungiKamiSection = () => {
  // State to store the fetched data
  const [hubungiKamiData, setHubungiKamiData] = useState({
    HubungiKamiTitle: 'Loading...',
    HubungiKamiSubtitle: '',
    HubungiKamiButton: '',
    HubungiKamiButtonSmall: '',
  });

  // State for handling errors
  const [error, setError] = useState(null);

  // Fetch data from the Strapi API
  useEffect(() => {
    const fetchHubungiKamiData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/hubungi-kami-section`
        );

        if (response.data && response.data.data) {
          const {
            HubungiKamiTitle,
            HubungiKamiSubtitle,
            HubungiKamiButton,
            HubungiKamiButtonSmall,
          } = response.data.data;

          setHubungiKamiData({
            HubungiKamiTitle,
            HubungiKamiSubtitle,
            HubungiKamiButton,
            HubungiKamiButtonSmall,
          });
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (err) {
        console.error('Error fetching Hubungi Kami section data:', err);
        setError('Failed to load data.');
      }
    };

    fetchHubungiKamiData();
  }, []);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Trigger animation only once when scrolled into view
    });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="unique-hubungi-kami-section" data-aos="fade-up">
      <div className="unique-hubungi-kami-card">
        <div className="unique-hubungi-kami-content" data-aos="fade-right">
          <h2 className="unique-hubungi-kami-title">{hubungiKamiData.HubungiKamiTitle}</h2>
          <p className="unique-hubungi-kami-subtitle">{hubungiKamiData.HubungiKamiSubtitle}</p>
          <button className="unique-hubungi-kami-btn">{hubungiKamiData.HubungiKamiButton}</button>
        </div>
        <div className="unique-hubungi-kami-image" data-aos="fade-left">
          <img src={csImage} alt="Customer Service" />
        </div>
      </div>
    </section>
  );
};

export default HubungiKamiSection;
