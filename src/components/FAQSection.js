import React, { useState, useEffect } from 'react';
import '../styles/FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('user');
  const [faqs, setFaqs] = useState({ user: [], partner: [] });

  const defaultUserFAQs = [
    {
      question: "Apa itu Suar Disabilitas?",
      answer: "Suar Disabilitas adalah platform yang menyediakan informasi seputar edukasi disabilitas, berita terkini, tempat ramah difabel, kesehatan mental, serta tips untuk teman-teman difabilitas."
    },
    {
      question: "Bagaimana cara menghubungi kami?",
      answer: "Anda dapat menghubungi kami melalui nomor telepon, email, atau datang langsung ke alamat kami yang tertera di halaman Kontak."
    },
    {
      question: "Apakah ada layanan khusus untuk disabilitas?",
      answer: "Kami menyediakan berbagai layanan informasi yang diperuntukkan khusus bagi komunitas difabel, termasuk informasi tentang aksesibilitas tempat, mental health, dan jenis-jenis disabilitas."
    },
    {
      question: "Bagaimana cara berdonasi untuk Yayasan?",
      answer: "Anda dapat berdonasi melalui halaman Donasi kami yang dapat diakses di website. Kami sangat berterima kasih atas setiap kontribusi yang Anda berikan untuk mendukung yayasan."
    }
  ];

  const defaultPartnerFAQs = [
    {
      question: "Bagaimana cara menjadi mitra Suar Disabilitas?",
      answer: "Kami terbuka untuk kemitraan yang bertujuan untuk meningkatkan kualitas hidup bagi teman-teman difabel. Hubungi kami melalui email untuk informasi lebih lanjut."
    },
    {
      question: "Apakah ada peluang kerjasama untuk sponsor?",
      answer: "Ya, kami menyediakan peluang untuk kerjasama sponsor dalam berbagai event dan program untuk mendukung komunitas difabel."
    },
    {
      question: "Bagaimana cara menyebarkan informasi untuk komunitas difabel?",
      answer: "Anda dapat membantu dengan menyebarkan informasi dari platform kami melalui media sosial atau berpartisipasi dalam program-program yang kami jalankan."
    }
  ];

  // Fetch data from API for User and Partner FAQs
  const fetchFAQs = async () => {
    try {
      const [userResponse, partnerResponse] = await Promise.all([
        fetch(`${process.env.REACT_APP_API_URL}/api/faq-users/`),
        fetch(`${process.env.REACT_APP_API_URL}/api/faq-mitras/`)
      ]);

      const userData = await userResponse.json();
      const partnerData = await partnerResponse.json();

      setFaqs({
        user: userData.data.map(faq => ({
          question: faq.FAQUserPertanyaan,
          answer: faq.FAQUserJawaban
        })),
        partner: partnerData.data.map(faq => ({
          question: faq.FAQMitraPertanyaan,
          answer: faq.FAQMitraJawaban
        }))
      });
    } catch (error) {
      console.error("Error fetching FAQ data:", error);
      // If the API fails, use default data
      setFaqs({
        user: defaultUserFAQs,
        partner: defaultPartnerFAQs
      });
    }
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <div className="faq-wrapper">
        <h2>FAQ - Pertanyaan yang Sering Diajukan</h2>
        <p className="faq-subtitle">Berikut adalah beberapa pertanyaan yang sering diajukan oleh pengunjung kami dan mitra kami. Jika Anda membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami!</p>

        {/* Button to switch between User FAQs and Partner FAQs */}
        <div className="faq-buttons">
          <button
            className={activeCategory === 'user' ? 'active' : ''}
            onClick={() => setActiveCategory('user')}
          >
            FAQ untuk Pengguna
          </button>
          <button
            className={activeCategory === 'partner' ? 'active' : ''}
            onClick={() => setActiveCategory('partner')}
          >
            FAQ untuk Mitra
          </button>
        </div>

        <div className="faq-list">
          {/* Display FAQs based on the selected category */}
          {(activeCategory === 'user' ? faqs.user : faqs.partner).map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="faq-toggle-icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
