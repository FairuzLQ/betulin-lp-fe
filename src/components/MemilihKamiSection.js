import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/MemilihKamiSection.css'; // Custom CSS for this section
import { FaCrown, FaHandshake, FaShieldAlt, FaRegSmile } from 'react-icons/fa'; // Using icons to make it more creative

const MemilihKamiSection = () => {
  // Initialize AOS inside useEffect to make sure it runs when the component is mounted
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the animation duration here
      once: true, // Ensure animations occur only once
    });
  }, []);

  return (
    <section className="memilih-kami-section">
      <h2 className="section-title" data-aos="fade-up">Kenapa Memilih Kami?</h2>
      <div className="reasons-container">
        <div className="reason-card" data-aos="flip-left">
          <FaCrown className="reason-icon" />
          <h3>Terpercaya & Berpengalaman</h3>
          <p>Kami memiliki pengalaman bertahun-tahun dalam menyediakan layanan terbaik untuk Anda.</p>
        </div>
        <div className="reason-card" data-aos="flip-right">
          <FaHandshake className="reason-icon" />
          <h3>Profesional & Ramah</h3>
          <p>Tim kami adalah profesional terlatih yang selalu ramah dan siap membantu Anda.</p>
        </div>
        <div className="reason-card" data-aos="flip-left">
          <FaShieldAlt className="reason-icon" />
          <h3>Keamanan & Kualitas</h3>
          <p>Kami menjamin keamanan dan kualitas dalam setiap layanan yang kami berikan.</p>
        </div>
        <div className="reason-card" data-aos="flip-right">
          <FaRegSmile className="reason-icon" />
          <h3>Kepuasan Pelanggan</h3>
          <p>Kepuasan Anda adalah prioritas kami, layanan kami dirancang untuk membuat Anda tersenyum.</p>
        </div>
      </div>
    </section>
  );
};

export default MemilihKamiSection;
