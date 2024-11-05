import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/KebijakanPrivasiSection.css';

const defaultPolicy = {
  SubtitleKebijakanPrivasi: 'Privasi Anda adalah prioritas kami. Pelajari cara kami melindungi informasi Anda.',
  UpdatedKebijakanPrivasi: new Date(),
  DetailKebijakanPrivasi: [
    { children: [{ text: '1. Pengumpulan Informasi' }] },
    { children: [{ text: 'Kami mengumpulkan informasi pribadi Anda hanya untuk keperluan pelayanan.' }] },
    { children: [{ text: '2. Penggunaan Informasi' }] },
    { children: [{ text: 'Informasi Anda digunakan untuk meningkatkan layanan kami.' }] },
    { children: [{ text: '3. Keamanan Data' }] },
    { children: [{ text: 'Kami berkomitmen menjaga keamanan data pribadi Anda dengan sistem yang andal.' }] },
  ],
};

const KebijakanPrivasiSection = () => {
  const [policy, setPolicy] = useState(defaultPolicy);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchLatestPolicy = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/kebijakan-privasis?sort=UpdatedKebijakanPrivasi:desc&pagination[limit]=1`);
        const data = await response.json();

        if (data.data.length > 0) {
          setPolicy(data.data[0]);
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
      </div>

      <div className="privacy-timeline">
        {policy.DetailKebijakanPrivasi.reduce((acc, item, index) => {
          const text = item.children[0]?.text.trim() || '';

          if (/^\d+\.\s/.test(text)) {
            const sectionNumber = text.split('.')[0];
            const sectionTitle = text.replace(/^\d+\.\s/, '');

            acc.push(
              <div className="timeline-item" key={index} data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`} data-aos-delay={index * 100}>
                <div className="timeline-icon">
                  <span>{sectionNumber}</span>
                </div>
                <div className="timeline-content">
                  <h3>{sectionTitle}</h3>
                  {policy.DetailKebijakanPrivasi[index + 1]?.children[0]?.text?.trim() && (
                    <p>{policy.DetailKebijakanPrivasi[index + 1].children[0].text.trim()}</p>
                  )}
                </div>
              </div>
            );
          }
          return acc;
        }, [])}
      </div>

      <div className="last-updated">
        <p>Terakhir diperbarui: {new Date(policy.UpdatedKebijakanPrivasi).toLocaleDateString()}</p>
      </div>
    </section>
  );
};

export default KebijakanPrivasiSection;
