import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/KebijakanPrivasiSection.css';

const defaultPolicy = {
  SubtitleKebijakanPrivasi: 'Privasi Anda adalah prioritas kami. Pelajari cara kami melindungi informasi Anda.',
  UpdatedKebijakanPrivasi: new Date(),
  Content: `
    <h3>1. Pengenalan</h3>
    <p>PT. Rumah Masa Kini ("kami") mengelola aplikasi Betulin untuk menyediakan layanan perbaikan dan perawatan rumah bagi pengguna ("Klien"). Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi Anda saat Anda menggunakan aplikasi Betulin.</p>
    
    <h3>2. Pengumpulan Informasi Pribadi</h3>
    <p>Kami mengumpulkan informasi pribadi yang Anda berikan secara langsung kepada kami ketika mendaftar akun dan menggunakan layanan Betulin, termasuk:</p>
    <ul>
      <li><strong>Informasi Identitas</strong>: Nama lengkap, alamat email, dan nomor telepon.</li>
      <li><strong>Informasi Akun</strong>: Username, password, dan detail akun lainnya.</li>
      <li><strong>Informasi Lokasi</strong>: Alamat lengkap lokasi layanan yang diperlukan untuk tujuan survei dan perbaikan.</li>
      <li><strong>Informasi Layanan</strong>: Detail layanan yang Anda pilih, deskripsi perbaikan, serta preferensi layanan lainnya.</li>
    </ul>
    <p>Kami juga dapat mengumpulkan data teknis seperti riwayat interaksi Anda dengan aplikasi kami, yang digunakan untuk meningkatkan layanan dan keamanan.</p>

    <h3>3. Penggunaan Informasi Pribadi</h3>
    <p>Informasi pribadi yang kami kumpulkan digunakan untuk tujuan berikut:</p>
    <ul>
      <li><strong>Penyediaan Layanan</strong>: Menghubungkan Klien dengan Tenaga Ahli yang sesuai berdasarkan kebutuhan perbaikan atau perawatan rumah.</li>
      <li><strong>Komunikasi</strong>: Memberikan informasi terkait status pesanan, pembaruan layanan, dan menghubungi Anda mengenai permintaan atau masalah yang muncul.</li>
      <li><strong>Keamanan Akun</strong>: Melindungi data login dan riwayat layanan, serta memastikan penggunaan aplikasi secara aman dan sah.</li>
      <li><strong>Peningkatan Layanan</strong>: Mengembangkan, menguji, dan meningkatkan aplikasi serta layanan Betulin untuk memberikan pengalaman yang lebih baik bagi Klien.</li>
    </ul>

    <h3>4. Pengungkapan Informasi Pribadi</h3>
    <p>Kami dapat mengungkapkan informasi pribadi Anda kepada pihak ketiga dalam kondisi tertentu:</p>
    <ul>
      <li><strong>Tenaga Ahli (Teknisi/Tukang)</strong>: Untuk memenuhi pesanan dan memastikan Tenaga Ahli memiliki informasi yang cukup untuk menyelesaikan layanan.</li>
      <li><strong>Penyedia Layanan Pihak Ketiga</strong>: Kami mungkin bekerja sama dengan penyedia layanan yang membantu operasional kami, termasuk penyedia pembayaran atau penyedia hosting data. Mereka terikat untuk menjaga kerahasiaan informasi Anda.</li>
      <li><strong>Pihak Berwenang</strong>: Jika diwajibkan oleh hukum atau jika diperlukan untuk melindungi hak, properti, atau keselamatan PT. Rumah Masa Kini, pengguna aplikasi, atau publik.</li>
    </ul>

    <h3>5. Keamanan Data Pengguna</h3>
    <p>Kami berkomitmen untuk melindungi informasi pribadi Anda dari akses, pengungkapan, atau penggunaan yang tidak sah. Kami menggunakan berbagai langkah keamanan termasuk enkripsi, firewall, dan protokol keamanan lainnya untuk menjaga data Anda. Meski demikian, perlu diketahui bahwa tidak ada metode pengiriman data melalui internet atau metode penyimpanan elektronik yang sepenuhnya aman, namun kami selalu berupaya untuk melindungi informasi Anda semaksimal mungkin.</p>

    <h3>6. Hak Pengguna terhadap Informasi Pribadi</h3>
    <p>Anda memiliki hak atas informasi pribadi Anda yang kami simpan. Hak-hak Anda meliputi:</p>
    <ul>
      <li><strong>Pembetulan</strong>: Memperbaiki kesalahan atau ketidakakuratan dalam data pribadi Anda.</li>
      <li><strong>Penghapusan</strong>: Mengajukan permintaan penghapusan informasi pribadi Anda dari sistem kami, dalam batasan yang diperbolehkan oleh hukum.</li>
    </ul>
    <p>Anda dapat menghubungi kami untuk menggunakan hak-hak Anda ini melalui informasi kontak di aplikasi.</p>

    <h3>7. Penyimpanan dan Retensi Data</h3>
    <p>Kami menyimpan informasi pribadi Anda selama diperlukan untuk memenuhi tujuan pengumpulan data, termasuk untuk memenuhi kewajiban hukum, menyelesaikan sengketa, dan menegakkan kebijakan kami. Setelah informasi Anda tidak lagi diperlukan, kami akan menghapus atau menganonimkan data tersebut sesuai dengan standar keamanan dan peraturan yang berlaku.</p>

    <h3>8. Perubahan pada Kebijakan Privasi</h3>
    <p>PT. Rumah Masa Kini berhak memperbarui atau mengubah Kebijakan Privasi ini dari waktu ke waktu tanpa pemberitahuan sebelumnya. Kami menyarankan pengguna untuk secara berkala meninjau kebijakan ini untuk mengetahui setiap perubahan yang mungkin terjadi. Penggunaan Anda yang berkelanjutan atas aplikasi setelah perubahan tersebut akan dianggap sebagai persetujuan Anda terhadap kebijakan yang diperbarui.</p>

    <h3>9. Pertanyaan dan Keluhan</h3>
    <p>Jika Anda memiliki pertanyaan, keluhan, atau masalah terkait dengan Kebijakan Privasi atau perlakuan data pribadi Anda dalam aplikasi Betulin, Anda dapat menghubungi layanan pelanggan kami melalui aplikasi atau dengan menghubungi PT. Rumah Masa Kini. Kami akan berusaha untuk menangani permintaan Anda dengan segera dan sesuai dengan peraturan yang berlaku.</p>

    <h3>10. Persetujuan Pengguna</h3>
    <p>Dengan menggunakan aplikasi Betulin, Anda mengakui bahwa Anda telah membaca dan memahami Kebijakan Privasi ini, dan menyetujui pengumpulan, penggunaan, dan pengungkapan informasi pribadi Anda sebagaimana dijelaskan di dalam kebijakan ini.</p>
  `,
};

const KebijakanPrivasiSection = () => {
  const [policy, setPolicy] = useState(defaultPolicy);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchLatestPolicy = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/kebijakan-privasis?sort=UpdatedKebijakanPrivasi:desc&pagination[limit]=1`);
        const data = await response.json();

        if (data.data.length > 0) {
          setPolicy({
            SubtitleKebijakanPrivasi: data.data[0].SubtitleKebijakanPrivasi,
            UpdatedKebijakanPrivasi: data.data[0].UpdatedKebijakanPrivasi,
            Content: data.data[0].Content,
          });
        }
      } catch (error) {
        console.error("Error fetching privacy policy:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPolicy();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="privacy-policy-section">
      <div className="privacy-header">
        <h2>Kebijakan Privasi</h2>
        <p className="header-subtitle">{policy.SubtitleKebijakanPrivasi}</p>
        <p className="last-updated">Terakhir diperbarui: {new Date(policy.UpdatedKebijakanPrivasi).toLocaleDateString()}</p>
      </div>

      <div
        className="privacy-content"
        dangerouslySetInnerHTML={{ __html: policy.Content }}
      ></div>
    </section>
  );
};

export default KebijakanPrivasiSection;
