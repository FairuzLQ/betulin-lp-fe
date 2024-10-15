import React from 'react';
import '../styles/HubungiKamiSection.css'; // Import the CSS for styling
import csImage from '../assets/images/cs-image.png'; // Import the customer service image

const HubungiKamiSection = () => {
  return (
    <section className="unique-hubungi-kami-section">
      <div className="unique-hubungi-kami-card">
        <div className="unique-hubungi-kami-content">
          <h2 className="unique-hubungi-kami-title">Butuh Bantuan? Customer Service Kami Siap Membantu Anda!</h2>
          <p className="unique-hubungi-kami-subtitle">Kami selalu siap siaga 24 jam untuk Anda</p>
          <button className="unique-hubungi-kami-btn">Hubungi Kami</button>
        </div>
        <div className="unique-hubungi-kami-image">
          <img src={csImage} alt="Customer Service" />
        </div>
      </div>
    </section>
  );
};

export default HubungiKamiSection;
