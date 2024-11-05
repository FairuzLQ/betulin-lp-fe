import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/DownloadSection.css'; // Ensure to import the CSS file
import googlePlay from '../assets/images/google-play-badge.svg'; // Google Play button image
import axios from 'axios';
import mockupExample from '../assets/images/mockup-test.png'; // Default mockup image

const DownloadSection = () => {
    const [downloadData, setDownloadData] = useState({
        title: 'Atasi masalahmu dengan betulin!', // Default title
        subtitleAtas: 'Download Sekarang!', // Default top subtitle
        subtitleBawah: 'Kamu bisa download di sini!', // Default bottom subtitle
        link: 'https://play.google.com/store/apps?hl=id', // Default link to Google Play
        imageUrl: mockupExample // Default image
    });

    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Initialize AOS animations

        const fetchDownloadData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/download-section?populate=*`);
                const data = response.data.data;

                if (data) {
                    setDownloadData({
                        title: data.DownloadTitle || 'Atasi masalahmu dengan betulin!',
                        subtitleAtas: data.DownloadSubtitleAtas || 'Download Sekarang!',
                        subtitleBawah: data.DownloadSubtitleBawah || 'Kamu bisa download di sini!',
                        link: data.DownloadLink || 'https://play.google.com/store/apps?hl=id',
                        imageUrl: data.DownloadImage ? `${process.env.REACT_APP_API_URL}${data.DownloadImage.url}` : mockupExample,
                    });
                }
            } catch (error) {
                console.error('Error fetching download section data:', error);
            }
        };

        fetchDownloadData();
    }, []);

    return (
        <section className="download-section">
            <div className="download-section__content" data-aos="fade-up">
                <h2 className="download-now" data-aos="fade-up" data-aos-delay="100">{downloadData.subtitleAtas}</h2>
                <h3 className="download-section__title" data-aos="fade-up" data-aos-delay="200">{downloadData.title}</h3>
                <p className="download-section__subtitle" data-aos="fade-up" data-aos-delay="300">{downloadData.subtitleBawah}</p>
                <a href={downloadData.link} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="400">
                    <img src={googlePlay} alt="Google Play" className="google-play-btn" />
                </a>
            </div>
            <div className="download-section__image" data-aos="zoom-in" data-aos-delay="500">
                <img src={downloadData.imageUrl} alt="Download App" />
            </div>
        </section>
    );
};

export default DownloadSection;
