import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import '../styles/VisiMisiSection.css'; // Custom CSS for the section
import { FaLightbulb, FaRocket } from 'react-icons/fa'; // Default icons
import axios from 'axios';

const VisiMisiSection = () => {
  const [activeTab, setActiveTab] = useState('visi');
  const [sectionTitle, setSectionTitle] = useState('');
  const [visionTitle, setVisionTitle] = useState('');
  const [missionTitle, setMissionTitle] = useState('');
  const [visionDescription, setVisionDescription] = useState('');
  const [missionItems, setMissionItems] = useState([]);
  const [visionButton, setVisionButton] = useState('Vision');
  const [missionButton, setMissionButton] = useState('Mission');
  const [visionIcon, setVisionIcon] = useState(<FaLightbulb />);
  const [missionIcon, setMissionIcon] = useState(<FaRocket />);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Fetch data from the API
    axios.get(`${process.env.REACT_APP_API_URL}/api/visi-section?populate=*`)
      .then(response => {
        const data = response.data.data;

        setSectionTitle(data.GeneralVisiMisiTitle || 'Our Vision & Mission');
        setVisionTitle(data.VisiTitle || 'Our Vision');
        setMissionTitle(data.MisiTitle || 'Our Mission');
        setVisionDescription(data.VisiDescription || 'To be a global leader in innovation, empowering people to achieve more through cutting-edge technology and creative solutions.');

        // Map through mission items to only include those with valid text
        const missions = data.MisiSection
          .filter(item => item.type === 'paragraph' && item.children[0].text)
          .map(item => item.children[0].text);
        
        setMissionItems(missions);

        setVisionButton(data.VisiButton || 'Visi');
        setMissionButton(data.MisiButton || 'Misi');

        // Check if icons are provided, otherwise use default icons
        setVisionIcon(data.VisiIcon ? <img src={data.VisiIcon.url} alt="Vision Icon" /> : <FaLightbulb />);
        setMissionIcon(data.MisiIcon ? <img src={data.MisiIcon.url} alt="Mission Icon" /> : <FaRocket />);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <section className="unique-visi-misi-section">
      <div className="unique-section-header" data-aos="fade-down">
        <h2 className="unique-section-title">{sectionTitle}</h2>
        <div className="unique-tabs" data-aos="fade-up" data-aos-delay="200">
          <button
            className={`unique-tab-button ${activeTab === 'visi' ? 'active' : ''}`}
            onClick={() => setActiveTab('visi')}
          >
            {visionButton}
          </button>
          <button
            className={`unique-tab-button ${activeTab === 'misi' ? 'active' : ''}`}
            onClick={() => setActiveTab('misi')}
          >
            {missionButton}
          </button>
        </div>
      </div>
      <div className="unique-content">
        {activeTab === 'visi' && (
          <div className="unique-visi-content" data-aos="fade-right">
            <span className="unique-icon">{visionIcon}</span>
            <h3 className="unique-content-title">{visionTitle}</h3>
            <p className="unique-content-text">{visionDescription}</p>
          </div>
        )}
        {activeTab === 'misi' && (
          <div className="unique-misi-content" data-aos="fade-left">
            <span className="unique-icon">{missionIcon}</span>
            <h3 className="unique-content-title">{missionTitle}</h3>
            <ul className="unique-mission-list">
              {missionItems.length > 0 ? (
                missionItems.map((item, index) => {
                  const [number, ...text] = item.split('. ');
                  return (
                    <li key={index} data-aos="fade-up" data-aos-delay={`${(index + 1) * 200}`}>
                      <div className="unique-number">{number}</div>
                      <p>{text.join('. ')}</p>
                    </li>
                  );
                })
              ) : (
                <p>No mission items available.</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default VisiMisiSection;
