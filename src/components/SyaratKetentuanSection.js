import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css';
import '../styles/SyaratKetentuanSection.css'; // Custom CSS for styling

const SyaratKetentuanSection = () => {
  
  // Initialize AOS and set it to run only once
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="syarat-ketentuan-section">
      <div className="syarat-ketentuan-header">
        <h2>Syarat dan Ketentuan</h2>
        <p className="header-subtitle">Mohon baca dengan seksama sebelum menggunakan layanan kami.</p>
        <p className="last-update">Terakhir diperbarui: 14 Oktober 2024</p>
      </div>

      <div className="syarat-ketentuan-content">
        <div className="terms-item" data-aos="fade-up">
          <h3>1. Penggunaan Layanan</h3>
          <p>Dengan menggunakan layanan kami, Anda setuju untuk mematuhi semua peraturan yang berlaku serta syarat dan ketentuan yang kami tetapkan.</p>
        </div>

        <div className="terms-item" data-aos="fade-up" data-aos-delay="300">
          <h3>2. Kewajiban Pengguna</h3>
          <p>Pengguna diharuskan memberikan informasi yang benar dan akurat serta bertanggung jawab atas setiap aktivitas yang dilakukan di platform ini.</p>
        </div>

        <div className="terms-item" data-aos="fade-up" data-aos-delay="300">
          <h3>3. Pembayaran dan Pengembalian Dana</h3>
          <p>Semua transaksi pembayaran harus dilakukan sesuai dengan ketentuan yang berlaku, dan pengembalian dana dapat dilakukan dalam kondisi tertentu.</p>
        </div>

        <div className="terms-item" data-aos="fade-up" data-aos-delay="300">
          <h3>4. Kebijakan Privasi</h3>
          <p>Data pribadi yang Anda berikan akan kami lindungi sesuai dengan kebijakan privasi yang berlaku.</p>
        </div>

        <div className="terms-item" data-aos="fade-up" data-aos-delay="300">
          <h3>5. Pembaruan Syarat dan Ketentuan</h3>
          <p>Kami berhak untuk mengubah syarat dan ketentuan sewaktu-waktu tanpa pemberitahuan terlebih dahulu.</p>
        </div>
      </div>
    </section>
  );
};

export default SyaratKetentuanSection;
