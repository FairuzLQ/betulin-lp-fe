import React, { useEffect, useState } from 'react';
import '../styles/PrinsipKamiSection.css'; // Import the CSS file for styling
import axios from 'axios';

const PrinsipKamiSection = () => {
    const [principles, setPrinciples] = useState([]);

    useEffect(() => {
        const fetchPrinciples = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/prinsip-sections?populate=*`);
                const fetchedPrinciples = response.data.data.map(principle => ({
                    imageUrl: `${process.env.REACT_APP_API_URL}${principle.PrinsipImage.formats.medium.url}`, // Use 'medium' size image
                    title: principle.PrinsipTitle,
                    subtitle: principle.PrinsipSubtitle
                }));
                setPrinciples(fetchedPrinciples);
            } catch (error) {
                console.error("Error fetching principles:", error);
            }
        };
        fetchPrinciples();
    }, []);

    return (
        <section className="prinsip-kami-section">
            <h2 className="prinsip-kami-title">Prinsip Kami</h2>
            <div className="prinsip-kami-grid">
                {principles.map((principle, index) => (
                    <div key={index} className="prinsip-kami-card">
                        <img src={principle.imageUrl} alt={principle.title} className="prinsip-kami-image" />
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
