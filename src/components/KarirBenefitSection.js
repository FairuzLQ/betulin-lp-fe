import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/KarirBenefitSection.css'; // Custom CSS for this section
import axios from 'axios';

const KarirBenefitSection = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [reasons, setReasons] = useState([]); // State to hold list of reasons

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });

    // Fetch the title and image data from the main section API
    axios.get(`${process.env.REACT_APP_API_URL}/api/karir-alasan-bergabung-section?populate=*`)
      .then(response => {
        const data = response.data.data;
        setTitle(data.AlasanTitle);
        setImageUrl(`${process.env.REACT_APP_API_URL}${data.AlasanImage.url}`);
      })
      .catch(error => {
        console.error('Error fetching main section data:', error);
      });

    // Fetch the list of reasons from the list API
    axios.get(`${process.env.REACT_APP_API_URL}/api/karir-alasan-bergabung-list-sections`)
      .then(response => {
        setReasons(response.data.data); // Update reasons state with the list data
      })
      .catch(error => {
        console.error('Error fetching reasons list:', error);
      });
  }, []);

  return (
    <section className="karir-benefit-section">
      <div className="karir-benefit-image" data-aos="fade-right">
        <img src={imageUrl || require('../assets/images/karir-benefit.png')} alt="Benefit" />
      </div>
      <div className="karir-benefit-content" data-aos="fade-left">
        <h2 className="benefit-title">{title || 'Kenapa Bergabung dengan Kami?'}</h2>
        <ul className="benefit-list">
          {reasons.length > 0 ? (
            reasons.map(reason => (
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
