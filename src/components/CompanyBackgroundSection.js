import React, { useEffect } from 'react';
import '../styles/CompanyBackgroundSection.css';
import ComBackImage from '../assets/images/com-background.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CompanyBackgroundSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <section className="company-background-section">
      <div className="company-background-content">
        {/* Left Column with AOS Animation */}
        <div className="left-column" data-aos="fade-right">
          <h2 data-aos="fade-up">Siapa Kami?</h2>
          <p data-aos="fade-up">
            Kami adalah platform yang berfokus pada penyediaan informasi dan sumber daya bagi teman-teman difabel.
            Kami percaya bahwa setiap individu berhak mendapatkan akses yang sama terhadap kesempatan.
          </p>

          {/* New Row for Image with AOS */}
          <div className="image-row" data-aos="fade-left">
            <img src={ComBackImage} alt="Company Overview" className="company-image" />
          </div>
        </div>

        {/* Right Column with AOS Animation */}
        <div className="right-column" data-aos="fade-left">
          <div className="row" data-aos="zoom-in">
            <h3>Prinsip Kami</h3>
            <p>Kami percaya bahwa inklusi adalah dasar dari setiap langkah kami. Menciptakan dunia yang lebih adil bagi semua.</p>
          </div>
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <h3>Inovasi</h3>
            <p>Selalu berinovasi untuk memberikan solusi yang mempermudah hidup teman-teman difabel dalam kehidupan sehari-hari.</p>
          </div>
          <div className="row" data-aos="zoom-in" data-aos-delay="200">
            <h3>Empati</h3>
            <p>Kami berusaha untuk memahami dan mendengarkan kebutuhan serta tantangan yang dihadapi oleh teman-teman difabel.</p>
          </div>
          <div className="row" data-aos="zoom-in" data-aos-delay="300">
            <h3>Komitmen</h3>
            <p>Berkomitmen untuk selalu meningkatkan kualitas hidup dan memberikan kesempatan yang setara bagi setiap individu.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBackgroundSection;
