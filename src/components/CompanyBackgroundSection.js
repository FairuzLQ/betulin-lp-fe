import React, { useEffect, useState } from 'react';
import '../styles/CompanyBackgroundSection.css';
import ComBackImage from '../assets/images/com-background.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CompanyBackgroundSection = () => {
  const [whoAreWe, setWhoAreWe] = useState({
    title: 'Kami adalah mantap',
    subtitle: 'Kami mantap banget',
    iconUrl: ComBackImage,
  });
  const [prinsipSections, setPrinsipSections] = useState([
    {
      PrinsipTitle: 'Integritas',
      PrinsipSubtitle: 'Kami siap berintegritas',
    },
    {
      PrinsipTitle: 'Inovasi',
      PrinsipSubtitle: 'Selalu berinovasi untuk memberikan solusi',
    },
    {
      PrinsipTitle: 'Empati',
      PrinsipSubtitle: 'Kami berusaha memahami kebutuhan teman-teman difabel',
    },
    {
      PrinsipTitle: 'Komitmen',
      PrinsipSubtitle: 'Berkomitmen untuk meningkatkan kualitas hidup',
    },
  ]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Fetching data from API for "Who Are We" and "Prinsip Kami"
    const fetchData = async () => {
      try {
        // Fetch Who Are We section data
        const whoAreWeResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/who-are-we-section?populate=*`);
        const whoAreWeData = await whoAreWeResponse.json();
        const whoAreWe = whoAreWeData.data || {};

        setWhoAreWe({
          title: whoAreWe.WhoAreWeTitle || 'Kami adalah mantap',
          subtitle: whoAreWe.WhoAreWeSubtitle || 'Kami mantap banget',
          iconUrl: `${process.env.REACT_APP_API_URL}${whoAreWe.WhoAreWeIcon?.url}` || ComBackImage,
        });

        // Fetch Prinsip Kami section data
        const prinsipResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/prinsip-sections?populate=*`);
        const prinsipData = await prinsipResponse.json();
        const prinsipSections = prinsipData.data || [];

        if (prinsipSections.length > 0) {
          setPrinsipSections(prinsipSections);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Maintain default data in case of error
        setWhoAreWe({
          title: 'Kami adalah mantap',
          subtitle: 'Kami mantap banget',
          iconUrl: ComBackImage,
        });

        setPrinsipSections([
          {
            PrinsipTitle: 'Integritas',
            PrinsipSubtitle: 'Kami siap berintegritas',
          },
          {
            PrinsipTitle: 'Inovasi',
            PrinsipSubtitle: 'Selalu berinovasi untuk memberikan solusi',
          },
          {
            PrinsipTitle: 'Empati',
            PrinsipSubtitle: 'Kami berusaha memahami kebutuhan teman-teman difabel',
          },
          {
            PrinsipTitle: 'Komitmen',
            PrinsipSubtitle: 'Berkomitmen untuk meningkatkan kualitas hidup',
          },
        ]);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="company-background-section">
      <div className="company-background-content">
        {/* Left Column with AOS Animation */}
        <div className="left-column" data-aos="fade-right">
          <h2 data-aos="fade-up">{whoAreWe.title}</h2>
          <p data-aos="fade-up">{whoAreWe.subtitle}</p>

          {/* New Row for Image with AOS */}
          <div className="image-row" data-aos="fade-left">
            {whoAreWe.iconUrl && <img src={whoAreWe.iconUrl} alt="Who Are We Icon" className="company-image" />}
          </div>
        </div>

        {/* Right Column with AOS Animation */}
        <div className="right-column" data-aos="fade-left">
          {prinsipSections.map((prinsip, index) => (
            <div key={prinsip.id} className="row" data-aos="zoom-in" data-aos-delay={index * 100}>
              <h3>{prinsip.PrinsipTitle}</h3>
              <p>{prinsip.PrinsipSubtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyBackgroundSection;
