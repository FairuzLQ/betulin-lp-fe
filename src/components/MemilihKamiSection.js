import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/MemilihKamiSection.css'; // Custom CSS for this section
import axios from 'axios';
import { FaCrown, FaHandshake, FaShieldAlt, FaRegSmile } from 'react-icons/fa'; // Icons

// Mapping of icons to use as placeholders
const icons = [<FaCrown className="reason-icon" />, <FaHandshake className="reason-icon" />, <FaShieldAlt className="reason-icon" />, <FaRegSmile className="reason-icon" />];

const MemilihKamiSection = () => {
  const [reasons, setReasons] = useState([]); // Initialize reasons as an empty array

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    const fetchReasonsData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/kenapa-memilih-kami-sections?populate=*`);
        const fetchedData = response.data.data;

        if (fetchedData.length > 0) {
          // Map API data to include icons for each reason
          const updatedReasons = fetchedData.map((item, index) => ({
            title: item.KenapaMemilihKamiTitle,
            subtitle: item.KenapaMemilihKamiSubtitle,
            icon: icons[index % icons.length] // Cycle through icons as needed
          }));
          setReasons(updatedReasons);
        }
      } catch (error) {
        console.error('Error fetching reasons data:', error);
      }
    };

    fetchReasonsData();
  }, []);

  return (
    <section className="memilih-kami-section">
      <h2 className="section-title" data-aos="fade-up">Kenapa Memilih Kami?</h2>
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card" data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}>
            {reason.icon}
            <h3>{reason.title}</h3>
            <p>{reason.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemilihKamiSection;
