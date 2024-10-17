import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import '../styles/KebijakanPrivasiSection.css'; // Custom CSS for styling

const KebijakanPrivasiSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true       // Ensures the animation only happens once
    });
  }, []);

  return (
    <section className="privacy-policy-section">
      <div className="privacy-header">
        <h2>Kebijakan Privasi</h2>
        <p>Privasi Anda adalah prioritas kami. Pelajari cara kami melindungi informasi Anda.</p>
      </div>

      <div className="privacy-timeline">
        <div className="timeline-item" data-aos="fade-right">
          <div className="timeline-icon">
            <span>1</span>
          </div>
          <div className="timeline-content">
            <h3>Pengumpulan Informasi</h3>
            <p>Kami mengumpulkan data yang Anda berikan secara sukarela saat menggunakan layanan kami, termasuk nama, email, dan detail pembayaran.</p>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-left" data-aos-delay="100">
          <div className="timeline-icon">
            <span>2</span>
          </div>
          <div className="timeline-content">
            <h3>Penggunaan Informasi</h3>
            <p>Informasi yang dikumpulkan digunakan untuk memproses transaksi dan meningkatkan pengalaman layanan Anda.</p>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-right" data-aos-delay="200">
          <div className="timeline-icon">
            <span>3</span>
          </div>
          <div className="timeline-content">
            <h3>Keamanan Data</h3>
            <p>Kami menerapkan enkripsi dan langkah-langkah keamanan untuk melindungi informasi pribadi Anda dari akses yang tidak sah.</p>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-left" data-aos-delay="300">
          <div className="timeline-icon">
            <span>4</span>
          </div>
          <div className="timeline-content">
            <h3>Pengungkapan kepada Pihak Ketiga</h3>
            <p>Data Anda tidak akan dibagikan tanpa persetujuan Anda, kecuali diperlukan oleh hukum atau peraturan pemerintah.</p>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-right" data-aos-delay="400">
          <div className="timeline-icon">
            <span>5</span>
          </div>
          <div className="timeline-content">
            <h3>Hak Akses dan Penghapusan Data</h3>
            <p>Anda memiliki hak untuk mengakses, memperbarui, atau meminta penghapusan informasi pribadi Anda kapan saja.</p>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-left" data-aos-delay="500">
          <div className="timeline-icon">
            <span>6</span>
          </div>
          <div className="timeline-content">
            <h3>Perubahan Kebijakan</h3>
            <p>Kami berhak untuk memperbarui kebijakan ini kapan saja dan akan memberikan pemberitahuan jika terjadi perubahan besar.</p>
          </div>
        </div>
      </div>

      <div className="last-updated">
        <p>Terakhir diperbarui: 15 Oktober 2024</p>
      </div>
    </section>
  );
};

export default KebijakanPrivasiSection;
