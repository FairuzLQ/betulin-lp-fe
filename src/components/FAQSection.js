import React, { useState } from 'react';
import '../styles/FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('user'); // State to track which category (User or Partner) is active

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const userFAQs = [
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

  const partnerFAQs = [
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
          {(activeCategory === 'user' ? userFAQs : partnerFAQs).map((faq, index) => (
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
