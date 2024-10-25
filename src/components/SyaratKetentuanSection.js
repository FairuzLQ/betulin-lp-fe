import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/SyaratKetentuanSection.css';

const SyaratKetentuanSection = () => {
  const [terms, setTerms] = useState(null);
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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the latest terms:", error);
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
        <p className="header-subtitle">{terms?.SubtitleSyaratKetentuan || 'Mohon baca dengan seksama sebelum menggunakan layanan kami.'}</p>
        <p className="last-update">Terakhir diperbarui: {new Date(terms?.UpdatedSyaratKetentuan).toLocaleDateString()}</p>
      </div>

      <div className="syarat-ketentuan-content">
        {terms?.DetailSyaratKetentuan.reduce((acc, item, index) => {
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
