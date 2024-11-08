import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/SyaratKetentuanSection.css';

const defaultTerms = {
  SubtitleSyaratKetentuan: 'Mohon baca dengan seksama sebelum menggunakan layanan kami.',
  UpdatedSyaratKetentuan: new Date(),
  DetailSyaratKetentuan: [
    { children: [{ text: '1. PENGANTAR' }] },
    { children: [{ text: 'Selamat datang di Betulin, aplikasi perbaikan dan perawatan utilitas rumah yang dikelola oleh PT. Rumah Masa Kini. Dengan mengakses dan menggunakan aplikasi Betulin, Anda setuju untuk mematuhi syarat dan ketentuan yang tercantum di bawah ini. Jika Anda tidak setuju dengan syarat dan ketentuan ini, mohon untuk berhenti menggunanakan layanan pada aplikasi kami.' }] },
    { children: [{ text: '2. RUANG LINGKUP' }] },
    { children: [{ text: 'Betulin menyediakan platform digital untuk jasa perbaikan dan perawatan utilitas rumah yang menghubungkan Klien dengan Tenaga Ahli (Teknisi/Tukang). Platform ini berfungsi sebagai perantara antara Tenaga Ahli dan Klien, memfasilitasi kesepakatan pekerjaan jasa dan penyelesaian pesanan.' }] },
    { children: [{ text: '3. PENGGUNAAN UNTUK TUJUAN ILEGAL DAN TERLARANG' }] },
    { children: [{ text: 'Klien dilarang mengubah, memodifikasi, atau melakukan intervensi terhadap aplikasi Betulin untuk tujuan apapun yang bersifat ilegal. Kami memiliki otoritas untuk membatasi akses atau memblokir akun Klien tanpa pemberitahuan terlebih dahulu jika terdapat bukti bahwa Klien terlibat dalam kegiatan ilegal menggunakan aplikasi Betulin. Pelanggaran terhadap ketentuan ini akan menyebabkan tindakan hukum yang sesuai.' }] },
    { children: [{ text: '4. AKUN' }] },
    { children: [{ text: 'Klien wajib membuat akun untuk menggunakan layanan Betulin. Pendaftaran akun dilakukan melalui halaman pendaftaran di dalam aplikasi Betulin dengan mengisi detail yang diperlukan. Klien wajib menjaga kerahasiaan informasi akun seperti username dan password. Kelalaian dalam menjaga kerahasiaan informasi akun menjadi tanggung jawab Klien.' }] },
    { children: [{ text: '5. LAYANAN (JELASIN PER LAYANAN MISAL LAYANAN CUCI, MENCAKUP FREON, SERVIS' }] },
    { children: [{ text: 'Pengguna pada Aplikasi Betulin: "Klien" merupakan pelanggan jasa Betulin. "Tenaga Ahli/Teknisi" mencakup mitra Betulin. "Admin" mencakup admin Betulin yang bekerja untuk PT. Rumah Masa Kini. Klien dapat memilih layanan yang tersedia sesuai dengan kebutuhan. Klien wajib menjelaskan secara detail semua kerusakan dan perbaikan yang diperlukan kepada Tenaga Ahli. Klien mengizinkan Tenaga Ahli untuk mengunjungi kediaman Klien untuk melakukan survei dan perbaikan sesuai dengan pesanan. Setelah layanan selesai, Klien akan menerima hasil jasa berupa perbaikan dan invoice.' }] },
    { children: [{ text: '6. KONSULTASI DAN KUNJUNGAN PERBAIKAN/SERVIS' }] },
    { children: [{ text: 'Klien dapat memilih Tenaga Ahli yang sesuai dengan kebutuhan perbaikan. Setiap Tenaga Ahli memiliki keahlian dan portofolio sendiri. Klien disarankan untuk memilih dengan cermat. Klien wajib memberikan informasi yang akurat mengenai lokasi dan detail pekerjaan kepada Tenaga Ahli. Klien atau perwakilan resmi Klien diharapkan hadir selama sesi perbaikan/servis berlangsung untuk memberikan informasi atau klarifikasi yang diperlukan.' }] },
    { children: [{ text: '7. PEMBAYARAN' }] },
    { children: [{ text: 'Klien dapat membayar layanan melalui metode pembayaran yang tersedia di aplikasi. Pembayaran harus dilakukan sesuai dengan nominal yang tertera pada laman pembayaran. Jika terjadi kesalahan transfer atau nominal, Klien dapat menghubungi tim Betulin untuk penyelesaian. Jika ada kelebihan pembayaran, nominal lebih akan dikembalikan kepada Klien. Jika ada kekurangan pembayaran, pesanan akan dibatalkan dan nominal yang dibayarkan akan dikembalikan.' }] },
    { children: [{ text: '8. KEPEMILIKAN INTELEKTUAL DAN HAK CIPTA' }] },
    { children: [{ text: 'Seluruh konten dalam aplikasi Betulin merupakan milik PT. Rumah Masa Kini atau pemberi lisensinya dan dilindungi oleh hukum hak cipta. Segala bentuk penggunaan yang tidak sah atas konten Betulin sangat dilarang dan dapat dikenakan tindakan hukum sesuai dengan peraturan yang berlaku.' }] },
    { children: [{ text: '9. GARANSI LAYANAN' }] },
    { children: [{ text: 'Klien memiliki garansi terhadap layanan selama 1 hari setelah layanan selesai. Jika Klien mengeluh mengenai hasil layanan dan keluhan tersebut dinyatakan valid oleh Betulin, maka Betulin akan melakukan perbaikan ulang tanpa biaya tambahan.' }] },
    { children: [{ text: '10. RESOLUSI SENGKETA DAN KETENTUAN LAINNYA' }] },
    { children: [{ text: 'Prosedur Penyelesaian Konflik: Perselisihan antara Klien dan Tenaga Ahli, atau antara Klien dan PT. Rumah Masa Kini, akan diselesaikan terlebih dahulu melalui mediasi informal. Jika mediasi tidak berhasil, perselisihan akan dilanjutkan ke Pengadilan Negeri Jakarta Selatan. PT. Rumah Masa Kini berhak memperbarui atau mengubah syarat dan ketentuan ini dari waktu ke waktu tanpa pemberitahuan sebelumnya. Klien disarankan untuk secara berkala meninjau syarat dan ketentuan guna memahami perubahan yang mungkin terjadi.' }] },
    { children: [{ text: '11. KEWAJIBAN BANTUAN LOKASI' }] },
    { children: [{ text: 'Dalam keadaan dimana Tenaga Ahli mengalami kesulitan dalam menemukan alamat atau tersesat, Klien wajib memberikan bantuan petunjuk atau navigasi yang tepat untuk memastikan Tenaga Ahli dapat tiba di lokasi sesuai jadwal.' }] },
    { children: [{ text: '12. KESELAMATAN DAN KEAMANAN' }] },
    { children: [{ text: 'Jika Tenaga Ahli melakukan pelecehan atau kekerasan fisik, atau pelecehan verbal terhadap Klien, Klien berhak menempuh jalur hukum sendiri dengan bukti yang valid, dan PT. Rumah Masa Kini akan berperan sebagai penengah dalam proses tersebut.' }] },
  ],
};

const SyaratKetentuanSection = () => {
  const [terms, setTerms] = useState(defaultTerms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });

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

  return (
    <section className="syarat-ketentuan-section">
      <div className="syarat-ketentuan-header">
        <h2>Syarat dan Ketentuan</h2>
        <p className="header-subtitle">{terms.SubtitleSyaratKetentuan}</p>
        <p className="last-update">
          Terakhir diperbarui: {new Date(terms.UpdatedSyaratKetentuan).toLocaleDateString()}
        </p>
      </div>

      <div className="syarat-ketentuan-content">
        {terms.DetailSyaratKetentuan.reduce((acc, item, index) => {
          const text = item.children[0]?.text?.trim() || '';

          if (/^\d+\.\s/.test(text)) { // If it's a numbered title
            acc.push(
              <div className="terms-item card" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                <h3>{text}</h3>
                {terms.DetailSyaratKetentuan[index + 1]?.children[0]?.text?.trim() && (
                  <p>{terms.DetailSyaratKetentuan[index + 1].children[0].text.trim()}</p>
                )}
              </div>
            );
          }
          return acc;
        }, [])}
      </div>
    </section>
  );
};

export default SyaratKetentuanSection;
