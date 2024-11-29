import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/KarirBenefitSection.css';
import axios from 'axios';

const KarirBenefitSection = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [reasons, setReasons] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });

    const fetchData = async () => {
      try {
        // Fetch title and image
        const mainResponse = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/karir-alasan-bergabung-section?populate=*`
        );
        const mainData = mainResponse.data.data;
        setTitle(mainData.AlasanTitle);
        setImageUrl(`${process.env.REACT_APP_API_URL}${mainData.AlasanImage.url}`);

        // Fetch reasons
        const reasonsResponse = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/karir-alasan-bergabung-list-sections`
        );
        setReasons(reasonsResponse.data.data);

        setLoading(false); // Mark loading as complete
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading even on error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-placeholder">
        <div className="loading-spinner"></div>
        <p>Loading benefits...</p>
      </div>
    );
  }

  return (
    <section className="karir-benefit-section">
      <div className="karir-benefit-image" data-aos="fade-right">
        <img
          src={imageUrl || require('../assets/images/karir-benefit.png')}
          alt="Benefit"
        />
      </div>
      <div className="karir-benefit-content" data-aos="fade-left">
        <h2 className="benefit-title">{title || 'Kenapa Bergabung dengan Kami?'}</h2>
        <ul className="benefit-list">
          {reasons.length > 0 ? (
            reasons.map((reason) => (
              <li key={reason.id}>✔️ {reason.AlasanBergabung}</li>
            ))
          ) : (
            <>
              <li>✔️ Lingkungan kerja yang dinamis dan mendukung perkembangan karir.</li>
              <li>✔️ Program pengembangan keterampilan dan pelatihan profesional.</li>
              <li>✔️ Kesempatan untuk bekerja dengan tim yang inovatif dan kreatif.</li>
              <li>✔️ Fasilitas dan tunjangan yang kompetitif.</li>
              <li>✔️ Ruang bagi ide dan kreativitas untuk berkembang.</li>
            </>
          )}
        </ul>
      </div>
    </section>
  );
};

export default KarirBenefitSection;
