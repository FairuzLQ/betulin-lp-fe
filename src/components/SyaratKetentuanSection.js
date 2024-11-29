import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/SyaratKetentuanSection.css';

const defaultTerms = {
  SubtitleSyaratKetentuan: 'Mohon baca dengan seksama sebelum menggunakan layanan kami.',
  UpdatedSyaratKetentuan: new Date(),
  DetailSyaratKetentuan: [
    { type: 'heading', level: 4, children: [{ text: '1. PENGANTAR' }] },
    { type: 'paragraph', children: [{ text: 'Selamat datang di Betulin, aplikasi perbaikan rumah.' }] },
  ],
};

const SyaratKetentuanSection = () => {
  const [terms, setTerms] = useState(defaultTerms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchLatestTerms = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/syarat-ketentuans?sort=UpdatedSyaratKetentuan:desc&pagination[limit]=1`
        );
        const data = await response.json();

        if (data.data.length > 0) {
          setTerms(data.data[0]);
        }
      } catch (error) {
        console.error('Error fetching terms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestTerms();
  }, []);

  if (loading) return <p>Loading...</p>;

  // Function to render the content based on its type and level
  const renderContent = (content, index) => {
    switch (content.type) {
      case 'paragraph':
        return (
          <React.Fragment key={index}>
            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.children[0]?.text) }} />
          </React.Fragment>
        );
      case 'heading':
        // Subtract 1 from the heading level
        const adjustedLevel = Math.max(content.level - 1, 1); // Ensure minimum level is h1
        const HeadingTag = `h${adjustedLevel}`;
        return (
          <React.Fragment key={index}>
            <HeadingTag
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.children[0]?.text) }}
            />
          </React.Fragment>
        );
      case 'list':
        return (
          <React.Fragment key={index}>
            <ul>
              {content.children.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.children[0]?.text) }} />
              ))}
            </ul>
          </React.Fragment>
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
