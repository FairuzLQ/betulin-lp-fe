import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import '../styles/ContactUsSection.css';

const ContactUsSection = () => {
  return (
    <section className="contact-us-section">
      <div className="contact-us-wrapper">
        <h2>Kontak Kami</h2>
        <p>Jangan ragu untuk menghubungi kami. Kami siap membantu Anda dengan sepenuh hati.</p>

        <div className="contact-info">
          <div className="contact-item">
            <a href="https://wa.me/+1234567890" target="_blank" rel="noopener noreferrer">
              <FaPhoneAlt className="contact-icon" />
              <h3>Phone Number</h3>
              <p>+1 234 567 890</p>
            </a>
          </div>

          <div className="contact-item">
            <a href="mailto:betulin.official@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p>betulin.official@gmail.com</p>
            </a>
          </div>

          <div className="contact-item">
            <a href="https://www.google.com/maps?q=DKI+Jakarta" target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt className="contact-icon" />
              <h3>Location</h3>
              <p>DKI Jakarta</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
