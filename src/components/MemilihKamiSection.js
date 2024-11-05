import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/MemilihKamiSection.css';
import axios from 'axios';
import { FaCrown, FaHandshake, FaShieldAlt, FaRegSmile } from 'react-icons/fa';

const defaultIcons = [<FaCrown className="reason-icon" />, <FaHandshake className="reason-icon" />, <FaShieldAlt className="reason-icon" />, <FaRegSmile className="reason-icon" />];

// Default reasons in Indonesian
const defaultReasons = [
  { title: 'Kualitas Terbaik', subtitle: 'Kami menawarkan layanan dengan kualitas terbaik untuk kepuasan Anda.', icon: defaultIcons[0] },
  { title: 'Kerjasama yang Baik', subtitle: 'Kami berkomitmen pada kolaborasi yang baik dan transparan.', icon: defaultIcons[1] },
  { title: 'Keamanan Terjamin', subtitle: 'Keamanan dan kenyamanan Anda adalah prioritas kami.', icon: defaultIcons[2] },
  { title: 'Kepuasan Pelanggan', subtitle: 'Kami selalu berusaha memberikan layanan dengan senyuman.', icon: defaultIcons[3] }
];

const MemilihKamiSection = () => {
  const [reasons, setReasons] = useState(defaultReasons); // Set default reasons initially

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchReasonsData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/kenapa-memilih-kami-sections?populate=*`);
        const fetchedData = response.data.data;

        if (fetchedData.length > 0) {
          const updatedReasons = fetchedData.map((item, index) => ({
            title: item.KenapaMemilihKamiTitle || defaultReasons[index % defaultReasons.length].title,
            subtitle: item.KenapaMemilihKamiSubtitle || defaultReasons[index % defaultReasons.length].subtitle,
            icon: item.KenapaMemilihKamiIcon?.url
              ? <img src={`${process.env.REACT_APP_API_URL}${item.KenapaMemilihKamiIcon.url}`} alt="icon" className="reason-icon" />
              : defaultIcons[index % defaultIcons.length]
          }));
          setReasons(updatedReasons);
        }
      } catch (error) {
        console.error('Error fetching reasons data:', error);
        // Keep default reasons if there's an error
      }
    };

    fetchReasonsData();
  }, []);

  return (
    <section className="memilih-kami-section">
      <h2 className="section-title" data-aos="fade-up">Kenapa Memilih Kami?</h2>
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card" data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}>
            {reason.icon}
            <h3>{reason.title}</h3>
            <p>{reason.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemilihKamiSection;
