import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/KebijakanPrivasiSection.css';

const defaultPolicy = {
  SubtitleKebijakanPrivasi: 'Privasi Anda adalah prioritas kami. Pelajari cara kami melindungi informasi Anda.',
  UpdatedKebijakanPrivasi: new Date(),
  DetailKebijakanPrivasi: [
    { type: 'heading', level: 4, children: [{ text: '1. Pengenalan' }] },
    { type: 'paragraph', children: [{ text: 'PT. Rumah Masa Kini ("kami") mengelola aplikasi Betulin.' }] },
    { type: 'list', format: 'unordered', children: [{ children: [{ text: 'Informasi Identitas: Nama, email, dan telepon.' }] }] },
  ],
};

const KebijakanPrivasiSection = () => {
  const [policy, setPolicy] = useState(defaultPolicy);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchPolicyData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/kebijakan-privasis?sort=UpdatedKebijakanPrivasi:desc&pagination[limit]=1`
        );
        const data = await response.json();

        if (data.data.length > 0) {
          setPolicy(data.data[0]);
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
        // Adjust heading level by subtracting 1
        const adjustedLevel = Math.max(content.level - 1, 1); // Ensure at least h1
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
    <section className="privacy-policy-section" data-aos="fade-up">
      <div className="privacy-header" data-aos="fade-up">
        <h2>Kebijakan Privasi</h2>
        <p className="header-subtitle">{policy?.SubtitleKebijakanPrivasi}</p>
        <p className="last-updated">
          Terakhir diperbarui: {new Date(policy?.UpdatedKebijakanPrivasi).toLocaleDateString()}
        </p>
      </div>

      <div className="privacy-content">
        {policy?.DetailKebijakanPrivasi?.map((content, index) => renderContent(content, index))}
      </div>
    </section>
  );
};

export default KebijakanPrivasiSection;
