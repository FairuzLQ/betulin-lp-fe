import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/KarirBenefitSection.css'; // Custom CSS for this section

const KarirBenefitSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true }); // Initialize AOS with 'once' set to true
  }, []);

  return (
    <section className="karir-benefit-section">
      <div className="karir-benefit-image" data-aos="fade-right">
        <img src={require('../assets/images/karir-benefit.png')} alt="Benefit" />
      </div>
      <div className="karir-benefit-content" data-aos="fade-left">
        <h2 className="benefit-title">Kenapa Bergabung dengan Kami?</h2>
        <ul className="benefit-list">
          <li>✔️ Lingkungan kerja yang dinamis dan mendukung perkembangan karir.</li>
          <li>✔️ Program pengembangan keterampilan dan pelatihan profesional.</li>
          <li>✔️ Kesempatan untuk bekerja dengan tim yang inovatif dan kreatif.</li>
          <li>✔️ Fasilitas dan tunjangan yang kompetitif.</li>
          <li>✔️ Ruang bagi ide dan kreativitas untuk berkembang.</li>
        </ul>
      </div>
    </section>
  );
};

export default KarirBenefitSection;
