import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import '../styles/ContactUsSection.css';

const ContactUsSection = () => {
  const [contactData, setContactData] = useState({
    title: 'Kontak Kami',
    subtitle: 'Jangan ragu untuk menghubungi kami. Kami siap membantu Anda dengan sepenuh hati.',
    phone: '+1 234 567 890',
    email: 'betulin.official@gmail.com',
    location: 'DKI Jakarta',
  });

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/kontak-section`);
        const data = await response.json();

        if (data.data) {
          setContactData({
            title: data.data.KontakTitle || 'Kontak Kami',
            subtitle: data.data.KontakSubtitle || 'Jangan ragu untuk menghubungi kami. Kami siap membantu Anda dengan sepenuh hati.',
            phone: data.data.KontakHP || '+1 234 567 890',
            email: data.data.KontakEmail || 'betulin.official@gmail.com',
            location: data.data.KontakLocation || 'DKI Jakarta',
          });
        }
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContactData();
  }, []);

  return (
    <section className="contact-us-section">
      <div className="contact-us-wrapper">
        <h2>{contactData.title}</h2>
        <p>{contactData.subtitle}</p>

        <div className="contact-info">
          <div className="contact-item">
            <a href={`https://wa.me/${contactData.phone}`} target="_blank" rel="noopener noreferrer">
              <FaPhoneAlt className="contact-icon" />
              <h3>Phone Number</h3>
              <p>{contactData.phone}</p>
            </a>
          </div>

          <div className="contact-item">
            <a href={`mailto:${contactData.email}`} target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p>{contactData.email}</p>
            </a>
          </div>

          <div className="contact-item">
            <a href={`https://www.google.com/maps?q=${contactData.location}`} target="_blank" rel="noopener noreferrer">
              <FaMapMarkerAlt className="contact-icon" />
              <h3>Location</h3>
              <p>{contactData.location}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
