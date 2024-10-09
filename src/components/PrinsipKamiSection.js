import React from 'react';
import '../styles/PrinsipKamiSection.css'; // Import the CSS file for styling
import img1 from '../assets/images/ex-prinsip1.png'; // Import your images
import img2 from '../assets/images/ex-prinsip2.png';
import img3 from '../assets/images/ex-prinsip1.png';
import img4 from '../assets/images/ex-prinsip2.png';

const PrinsipKamiSection = () => {
    const principles = [
        { image: img1, title: 'Kualitas', subtitle: 'Selalu menjaga kualitas terbaik' },
        { image: img2, title: 'Integritas', subtitle: 'Jujur dan dapat dipercaya' },
        { image: img3, title: 'Kecepatan', subtitle: 'Cepat dalam memberikan layanan' },
        { image: img4, title: 'Inovasi', subtitle: 'Terus berinovasi untuk kemajuan' },
    ];

    return (
        <section className="prinsip-kami-section">
            <h2 className="prinsip-kami-title">Prinsip Kami</h2>
            <div className="prinsip-kami-grid">
                {principles.map((principle, index) => (
                    <div key={index} className="prinsip-kami-card">
                        <img src={principle.image} alt={principle.title} className="prinsip-kami-image" />
                        <div className="prinsip-kami-overlay">
                            <h3 className="prinsip-kami-caption">{principle.title}</h3>
                            <p className="prinsip-kami-subcaption">{principle.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PrinsipKamiSection;
