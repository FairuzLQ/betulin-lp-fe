import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitization
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/KebijakanPrivasiSection.css';

// Default data for privacy policy
const defaultPolicy = {
  SubtitleKebijakanPrivasi: 'Privasi Anda adalah prioritas kami. Pelajari cara kami melindungi informasi Anda.',
  UpdatedKebijakanPrivasi: new Date(),
  Content: [
    {
      type: 'heading',
      text: '1. Pengenalan'
    },
    {
      type: 'paragraph',
      text: 'PT. Rumah Masa Kini ("kami") mengelola aplikasi Betulin untuk menyediakan layanan perbaikan dan perawatan rumah bagi pengguna ("Klien"). Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi Anda saat Anda menggunakan aplikasi Betulin.'
    },
    {
      type: 'heading',
      text: '2. Pengumpulan Informasi Pribadi'
    },
    {
      type: 'paragraph',
      text: 'Kami mengumpulkan informasi pribadi yang Anda berikan secara langsung kepada kami ketika mendaftar akun dan menggunakan layanan Betulin, termasuk: Nama lengkap, alamat email, dan nomor telepon.'
    },
    {
      type: 'list',
      items: [
        'Informasi Identitas: Nama lengkap, alamat email, dan nomor telepon.',
        'Informasi Akun: Username, password, dan detail akun lainnya.',
        'Informasi Lokasi: Alamat lengkap lokasi layanan yang diperlukan untuk tujuan survei dan perbaikan.',
        'Informasi Layanan: Detail layanan yang Anda pilih, deskripsi perbaikan, serta preferensi layanan lainnya.'
      ]
    },
    {
      type: 'heading',
      text: '3. Penggunaan Informasi Pribadi'
    },
    {
      type: 'paragraph',
      text: 'Informasi pribadi yang kami kumpulkan digunakan untuk tujuan berikut: Penyediaan layanan, komunikasi, keamanan akun, dan peningkatan layanan.'
    },
    {
      type: 'heading',
      text: '4. Pengungkapan Informasi Pribadi'
    },
    {
      type: 'paragraph',
      text: 'Kami dapat mengungkapkan informasi pribadi Anda kepada pihak ketiga dalam kondisi tertentu, termasuk tenaga ahli (teknisi/tukang), penyedia layanan pihak ketiga, dan pihak berwenang sesuai peraturan hukum.'
    },
    {
      type: 'heading',
      text: '5. Keamanan Data Pengguna'
    },
    {
      type: 'paragraph',
      text: 'Kami berkomitmen untuk melindungi informasi pribadi Anda dari akses, pengungkapan, atau penggunaan yang tidak sah dengan langkah-langkah keamanan yang tepat.'
    },
    {
      type: 'heading',
      text: '6. Hak Pengguna terhadap Informasi Pribadi'
    },
    {
      type: 'paragraph',
      text: 'Anda memiliki hak untuk memperbaiki kesalahan atau ketidakakuratan dalam data pribadi Anda serta meminta penghapusan data pribadi yang kami simpan.'
    },
    {
      type: 'heading',
      text: '7. Penyimpanan dan Retensi Data'
    },
    {
      type: 'paragraph',
      text: 'Kami menyimpan informasi pribadi Anda selama diperlukan untuk memenuhi tujuan pengumpulan data dan kewajiban hukum yang berlaku.'
    },
    {
      type: 'heading',
      text: '8. Perubahan pada Kebijakan Privasi'
    },
    {
      type: 'paragraph',
      text: 'Kami berhak memperbarui atau mengubah Kebijakan Privasi ini tanpa pemberitahuan sebelumnya. Pastikan Anda memeriksa kebijakan ini secara berkala untuk mengetahui pembaruan.'
    },
    {
      type: 'heading',
      text: '9. Pertanyaan dan Keluhan'
    },
    {
      type: 'paragraph',
      text: 'Jika Anda memiliki pertanyaan atau keluhan mengenai Kebijakan Privasi ini atau perlakuan data pribadi Anda, Anda dapat menghubungi kami melalui layanan pelanggan atau informasi kontak di aplikasi.'
    },
    {
      type: 'heading',
      text: '10. Persetujuan Pengguna'
    },
    {
      type: 'paragraph',
      text: 'Dengan menggunakan aplikasi Betulin, Anda menyetujui pengumpulan, penggunaan, dan pengungkapan informasi pribadi Anda sesuai dengan kebijakan ini.'
    }
  ]
};

const KebijakanPrivasiSection = () => {
  const [policy, setPolicy] = useState(defaultPolicy);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS for animation
    AOS.init({ duration: 800, once: true });

    const fetchPolicyData = async () => {
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
        console.error('Error fetching privacy policy:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicyData();
  }, []);

  if (loading) return <p>Loading...</p>;

  // Function to render the content dynamically based on its type
  const renderContent = (content) => {
    switch (content.type) {
      case 'paragraph':
        return (
          <p key={content.id} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.text) }} />
        );
      case 'heading':
        return (
          <h3 key={content.id} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.text) }} />
        );
      case 'list':
        return (
          <ul key={content.id}>
            {content.items.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
            ))}
          </ul>
        );
      case 'image':
        return (
          <img key={content.id} src={content.url} alt={content.alt} style={{ maxWidth: '100%', height: 'auto' }} />
        );
      default:
        return null;
    }
  };

  return (
    <section className="privacy-policy-section" data-aos="fade-up">
      <div className="privacy-header" data-aos="fade-up">
        <h2>Kebijakan Privasi</h2>
        <p className="header-subtitle">{policy?.SubtitleKebijakanPrivasi}</p>
        <p className="last-updated">
          Terakhir diperbarui: {new Date(policy?.UpdatedKebijakanPrivasi).toLocaleDateString()}
        </p>
      </div>

      <div className="privacy-content">
        {policy?.Content && policy.Content.map((content, index) => renderContent(content))}
      </div>
    </section>
  );
};

export default KebijakanPrivasiSection;
