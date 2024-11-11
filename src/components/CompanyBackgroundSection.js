import React from 'react';
import '../styles/CompanyBackgroundSection.css';

const CompanyBackgroundSection = () => {
  return (
    <section className="company-background-section">
      <div className="company-background-content">
        {/* Left Column */}
        <div className="left-column">
          <h2>Siapa Kami?</h2>
          <p>
            Kami adalah platform yang berfokus pada penyediaan informasi dan sumber daya bagi teman-teman difabel.
            Kami percaya bahwa setiap individu berhak mendapatkan akses yang sama terhadap kesempatan.
          </p>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="row">
            <h3>Prinsip Kami</h3>
            <p>Kami percaya bahwa inklusi adalah dasar dari setiap langkah kami. Menciptakan dunia yang lebih adil bagi semua.</p>
          </div>
          <div className="row">
            <h3>Inovasi</h3>
            <p>Selalu berinovasi untuk memberikan solusi yang mempermudah hidup teman-teman difabel dalam kehidupan sehari-hari.</p>
          </div>
          <div className="row">
            <h3>Empati</h3>
            <p>Kami berusaha untuk memahami dan mendengarkan kebutuhan serta tantangan yang dihadapi oleh teman-teman difabel.</p>
          </div>
          <div className="row">
            <h3>Komitmen</h3>
            <p>Berkomitmen untuk selalu meningkatkan kualitas hidup dan memberikan kesempatan yang setara bagi setiap individu.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBackgroundSection;
