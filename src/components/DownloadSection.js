import React from 'react';
import '../styles/DownloadSection.css'; // Ensure to import the CSS file
import googlePlay from '../assets/images/google-play-badge.svg'; // Google Play button image
import downloadImage from '../assets/images/download-img.png'; // Download section image

const DownloadSection = () => {
    return (
        <section className="download-section">
            <div className="download-section__content">
                <h2 className="download-now">Download Sekarang!</h2>
                <h3 className="download-section__title">Atasi masalahmu dengan betulin!</h3>
                <p className="download-section__subtitle">Betulin tersedia di</p>
                <img src={googlePlay} alt="Google Play" className="google-play-btn" />
            </div>
            <div className="download-section__image">
                <img src={downloadImage} alt="Download App" />
            </div>
        </section>
    );
};

export default DownloadSection;
