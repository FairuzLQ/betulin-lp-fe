import React from 'react';
import '../styles/HubungiKamiSection.css'; // Import the CSS for styling
import csImage from '../assets/images/cs-image.png'; // Import the customer service image

const HubungiKamiSection = () => {
  return (
    <section className="hubungi-kami-section">
      <div className="hubungi-kami-card">
        <div className="hubungi-kami-content">
          <h2 className="hubungi-kami-title">Butuh Bantuan? Customer Service Kami Siap Membantu Anda!</h2>
          <p className="hubungi-kami-subtitle">Kami selalu siap siaga 24 jam untuk Anda</p>
          <button className="hubungi-kami-btn">Hubungi Kami</button>
        </div>
        <div className="hubungi-kami-image">
          <img src={csImage} alt="Customer Service" />
        </div>
      </div>
    </section>
  );
};

export default HubungiKamiSection;
