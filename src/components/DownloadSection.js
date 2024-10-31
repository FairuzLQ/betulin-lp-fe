import React, { useEffect, useState } from 'react';
import '../styles/DownloadSection.css'; // Ensure to import the CSS file
import googlePlay from '../assets/images/google-play-badge.svg'; // Google Play button image
import axios from 'axios';

const DownloadSection = () => {
    const [downloadData, setDownloadData] = useState({
        title: 'Atasi masalahmu dengan betulin!',
        subtitleAtas: 'Download Sekarang!',
        subtitleBawah: 'Kamu bisa download di sini!',
        link: 'https://play.google.com/store/apps?hl=id',
        imageUrl: ''
    });

    useEffect(() => {
        const fetchDownloadData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/download-section?populate=*`);
                const data = response.data.data;
                setDownloadData({
                    title: data.DownloadTitle,
                    subtitleAtas: data.DownloadSubtitleAtas,
                    subtitleBawah: data.DownloadSubtitleBawah,
                    link: data.DownloadLink,
                    imageUrl: `${process.env.REACT_APP_API_URL}${data.DownloadImage.url}`
                });
            } catch (error) {
                console.error('Error fetching download section data:', error);
            }
        };

        fetchDownloadData();
    }, []);

    return (
        <section className="download-section">
            <div className="download-section__content">
                <h2 className="download-now">{downloadData.subtitleAtas}</h2>
                <h3 className="download-section__title">{downloadData.title}</h3>
                <p className="download-section__subtitle">{downloadData.subtitleBawah}</p>
                <a href={downloadData.link} target="_blank" rel="noopener noreferrer">
                    <img src={googlePlay} alt="Google Play" className="google-play-btn" />
                </a>
            </div>
            <div className="download-section__image">
                <img src={downloadData.imageUrl} alt="Download App" />
            </div>
        </section>
    );
};

export default DownloadSection;
