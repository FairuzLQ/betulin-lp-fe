import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitization
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/SyaratKetentuanSection.css';

// Default terms data
const defaultTerms = {
  SubtitleSyaratKetentuan: 'Mohon baca dengan seksama sebelum menggunakan layanan kami.',
  UpdatedSyaratKetentuan: new Date(),
  DetailSyaratKetentuan: [
    { type: 'heading', text: '1. PENGANTAR' },
    { type: 'paragraph', text: 'Selamat datang di Betulin, aplikasi perbaikan dan perawatan utilitas rumah yang dikelola oleh PT. Rumah Masa Kini. Dengan mengakses dan menggunakan aplikasi Betulin, Anda setuju untuk mematuhi syarat dan ketentuan yang tercantum di bawah ini. Jika Anda tidak setuju dengan syarat dan ketentuan ini, mohon untuk berhenti menggunanakan layanan pada aplikasi kami.' },
    { type: 'heading', text: '2. RUANG LINGKUP' },
    { type: 'paragraph', text: 'Betulin menyediakan platform digital untuk jasa perbaikan dan perawatan utilitas rumah yang menghubungkan Klien dengan Tenaga Ahli (Teknisi/Tukang). Platform ini berfungsi sebagai perantara antara Tenaga Ahli dan Klien, memfasilitasi kesepakatan pekerjaan jasa dan penyelesaian pesanan.' },
    { type: 'heading', text: '3. PENGGUNAAN UNTUK TUJUAN ILEGAL DAN TERLARANG' },
    { type: 'paragraph', text: 'Klien dilarang mengubah, memodifikasi, atau melakukan intervensi terhadap aplikasi Betulin untuk tujuan apapun yang bersifat ilegal. Kami memiliki otoritas untuk membatasi akses atau memblokir akun Klien tanpa pemberitahuan terlebih dahulu jika terdapat bukti bahwa Klien terlibat dalam kegiatan ilegal menggunakan aplikasi Betulin.' },
    { type: 'heading', text: '4. AKUN' },
    { type: 'paragraph', text: 'Klien wajib membuat akun untuk menggunakan layanan Betulin. Pendaftaran akun dilakukan melalui halaman pendaftaran di dalam aplikasi Betulin dengan mengisi detail yang diperlukan.' },
    { type: 'heading', text: '5. LAYANAN' },
    { type: 'paragraph', text: 'Pengguna pada Aplikasi Betulin: "Klien" merupakan pelanggan jasa Betulin. "Tenaga Ahli/Teknisi" mencakup mitra Betulin. "Admin" mencakup admin Betulin yang bekerja untuk PT. Rumah Masa Kini.' },
    { type: 'heading', text: '6. KONSULTASI DAN KUNJUNGAN PERBAIKAN/SERVIS' },
    { type: 'paragraph', text: 'Klien dapat memilih Tenaga Ahli yang sesuai dengan kebutuhan perbaikan. Klien wajib memberikan informasi yang akurat mengenai lokasi dan detail pekerjaan kepada Tenaga Ahli.' },
    { type: 'heading', text: '7. PEMBAYARAN' },
    { type: 'paragraph', text: 'Klien dapat membayar layanan melalui metode pembayaran yang tersedia di aplikasi. Pembayaran harus dilakukan sesuai dengan nominal yang tertera pada laman pembayaran.' },
    { type: 'heading', text: '8. KEPEMILIKAN INTELEKTUAL DAN HAK CIPTA' },
    { type: 'paragraph', text: 'Seluruh konten dalam aplikasi Betulin merupakan milik PT. Rumah Masa Kini atau pemberi lisensinya dan dilindungi oleh hukum hak cipta.' },
    { type: 'heading', text: '9. GARANSI LAYANAN' },
    { type: 'paragraph', text: 'Klien memiliki garansi terhadap layanan selama 1 hari setelah layanan selesai. Jika Klien mengeluh mengenai hasil layanan dan keluhan tersebut dinyatakan valid oleh Betulin, maka Betulin akan melakukan perbaikan ulang tanpa biaya tambahan.' },
    { type: 'heading', text: '10. RESOLUSI SENGKETA' },
    { type: 'paragraph', text: 'Prosedur Penyelesaian Konflik: Perselisihan antara Klien dan Tenaga Ahli akan diselesaikan terlebih dahulu melalui mediasi informal. Jika mediasi tidak berhasil, perselisihan akan dilanjutkan ke Pengadilan Negeri Jakarta Selatan.' },
  ]
};

const SyaratKetentuanSection = () => {
  const [terms, setTerms] = useState(defaultTerms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchLatestTerms = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/syarat-ketentuans?sort=UpdatedSyaratKetentuan:desc&pagination[limit]=1`);
        const data = await response.json();

        if (data.data.length > 0) {
          setTerms(data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching the latest terms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestTerms();
  }, []);

  if (loading) return <p>Loading...</p>;

  // Function to render the content dynamically based on its type
  const renderContent = (content, index) => {
    switch (content.type) {
      case 'paragraph':
        return (
          <p key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.text) }} />
        );
      case 'heading':
        return (
          <h3 key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.text) }} />
        );
      case 'list':
        return (
          <ul key={index}>
            {content.items.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section className="syarat-ketentuan-section" data-aos="fade-up">
      <div className="syarat-ketentuan-header" data-aos="fade-up">
        <h2>Syarat dan Ketentuan</h2>
        <p className="header-subtitle">{terms?.SubtitleSyaratKetentuan}</p>
        <p className="last-update">
          Terakhir diperbarui: {new Date(terms?.UpdatedSyaratKetentuan).toLocaleDateString()}
        </p>
      </div>

      <div className="syarat-ketentuan-content">
        {terms?.DetailSyaratKetentuan.map((content, index) => renderContent(content, index))}
      </div>
    </section>
  );
};

export default SyaratKetentuanSection;
