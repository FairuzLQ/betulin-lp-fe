import React, { useEffect, useState } from 'react';
import '../styles/PrinsipKamiSection.css'; // Import the CSS file for styling
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import prinsip1 from '../assets/prinsip-default/default-1.jpg';
import prinsip2 from '../assets/prinsip-default/default-2.jpg';
import prinsip3 from '../assets/prinsip-default/default-3.jpg';
import prinsip4 from '../assets/prinsip-default/default-4.jpg';

const defaultPrinciples = [
    {
        imageUrl: prinsip1,
        title: "Prinsip Pertama",
        subtitle: "Kami berkomitmen untuk memberikan kualitas terbaik.",
    },
    {
        imageUrl: prinsip2,
        title: "Prinsip Kedua",
        subtitle: "Layanan kami berfokus pada kepuasan pelanggan.",
    },
    {
        imageUrl: prinsip3,
        title: "Prinsip Ketiga",
        subtitle: "Inovasi dan solusi yang kreatif adalah keunggulan kami.",
    },
    {
        imageUrl: prinsip4,
        title: "Prinsip Keempat",
        subtitle: "Kami menghargai kepercayaan yang Anda berikan.",
    },
];

const PrinsipKamiSection = () => {
    const [principles, setPrinciples] = useState(defaultPrinciples);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        const fetchPrinciples = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/prinsip-sections?populate=*`);
                const fetchedPrinciples = response.data.data.map(principle => ({
                    imageUrl: `${process.env.REACT_APP_API_URL}${principle.PrinsipImage.formats.medium.url}`, // Use 'medium' size image
                    title: principle.PrinsipTitle,
                    subtitle: principle.PrinsipSubtitle
                }));
                
                if (fetchedPrinciples.length > 0) {
                    setPrinciples(fetchedPrinciples);
                }
            } catch (error) {
                console.error("Error fetching principles:", error);
            }
        };
        
        fetchPrinciples();
    }, []);

    return (
        <section className="prinsip-kami-section">
            <h2 className="prinsip-kami-title" data-aos="fade-up">Prinsip Kami</h2>
            <div className="prinsip-kami-grid">
                {principles.map((principle, index) => (
                    <div 
                        key={index} 
                        className="prinsip-kami-card" 
                        data-aos="fade-up" 
                        data-aos-delay={index * 200} // Stagger animations for each card
                    >
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
