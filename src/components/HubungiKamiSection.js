import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import '../styles/HubungiKamiSection.css'; // Import the CSS for styling
import csImage from '../assets/images/cs-image.png'; // Import the customer service image

const HubungiKamiSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Trigger animation only once when scrolled into view
    });
  }, []);

  return (
    <section className="unique-hubungi-kami-section" data-aos="fade-up">
      <div className="unique-hubungi-kami-card">
        <div className="unique-hubungi-kami-content" data-aos="fade-right">
          <h2 className="unique-hubungi-kami-title">
            Butuh Bantuan? Customer Service Kami Siap Membantu Anda!
          </h2>
          <p className="unique-hubungi-kami-subtitle">Kami selalu siap siaga 24 jam untuk Anda</p>
          <button className="unique-hubungi-kami-btn">Hubungi Kami</button>
        </div>
        <div className="unique-hubungi-kami-image" data-aos="fade-left">
          <img src={csImage} alt="Customer Service" />
        </div>
      </div>
    </section>
  );
};

export default HubungiKamiSection;
