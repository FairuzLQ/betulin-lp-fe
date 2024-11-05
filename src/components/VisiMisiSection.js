import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/VisiMisiSection.css';
import { FaLightbulb, FaRocket } from 'react-icons/fa';
import axios from 'axios';

const VisiMisiSection = () => {
  const [activeTab, setActiveTab] = useState('visi');
  const [sectionTitle, setSectionTitle] = useState('Visi & Misi Kami');
  const [visionTitle, setVisionTitle] = useState('Visi Kami');
  const [missionTitle, setMissionTitle] = useState('Misi Kami');
  const [visionDescription, setVisionDescription] = useState(
    'Menjadi pemimpin global dalam inovasi, memberdayakan masyarakat untuk mencapai lebih banyak melalui teknologi dan solusi kreatif.'
  );
  const [missionItems, setMissionItems] = useState([
    '1. Memberikan solusi yang bermanfaat bagi masyarakat.',
    '2. Mengutamakan kualitas dan integritas.',
    '3. Menciptakan teknologi yang ramah lingkungan.',
  ]);
  const [visionButton, setVisionButton] = useState('Visi');
  const [missionButton, setMissionButton] = useState('Misi');
  const [visionIcon, setVisionIcon] = useState(<FaLightbulb />);
  const [missionIcon, setMissionIcon] = useState(<FaRocket />);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/visi-section?populate=*`)
      .then((response) => {
        const data = response.data.data;
        setSectionTitle(data.GeneralVisiMisiTitle || 'Visi & Misi Kami');
        setVisionTitle(data.VisiTitle || 'Visi Kami');
        setMissionTitle(data.MisiTitle || 'Misi Kami');
        setVisionDescription(
          data.VisiDescription ||
          'Menjadi pemimpin global dalam inovasi, memberdayakan masyarakat untuk mencapai lebih banyak melalui teknologi dan solusi kreatif.'
        );

        // Check and set mission items or fallback to default
        const missions = data.MisiSection
          ? data.MisiSection.filter((item) => item.type === 'paragraph' && item.children[0].text)
              .map((item) => item.children[0].text)
          : [
              '1. Memberikan solusi yang bermanfaat bagi masyarakat.',
              '2. Mengutamakan kualitas dan integritas.',
              '3. Menciptakan teknologi yang ramah lingkungan.',
            ];

        setMissionItems(missions);
        setVisionButton(data.VisiButton || 'Visi');
        setMissionButton(data.MisiButton || 'Misi');

        setVisionIcon(
          data.VisiIcon ? (
            <img src={`${process.env.REACT_APP_API_URL}${data.VisiIcon.url}`} alt="Ikon Visi" />
          ) : (
            <FaLightbulb />
          )
        );
        setMissionIcon(
          data.MisiIcon ? (
            <img src={`${process.env.REACT_APP_API_URL}${data.MisiIcon.url}`} alt="Ikon Misi" />
          ) : (
            <FaRocket />
          )
        );
      })
      .catch((error) => {
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
                <p>Data misi tidak tersedia.</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default VisiMisiSection;
