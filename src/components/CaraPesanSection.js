import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import '../styles/CaraPesanSection.css';

const CaraPesanSection = () => {
    const [steps, setSteps] = useState([]);
    const [error, setError] = useState(null);

    // Default steps for fallback if API data is unavailable
    const defaultSteps = [
        { step: 1, title: "Langkah 1", description: "Deskripsi langkah pertama." },
        { step: 2, title: "Langkah 2", description: "Deskripsi langkah kedua." },
        { step: 3, title: "Langkah 3", description: "Deskripsi langkah ketiga." },
        { step: 4, title: "Langkah 4", description: "Deskripsi langkah keempat." },
        { step: 5, title: "Langkah 5", description: "Deskripsi langkah kelima." },
        { step: 6, title: "Langkah 6", description: "Deskripsi langkah keenam." },
    ];

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    // Fetch data from the API
    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;

        const fetchCaraPesanData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/cara-pesans`);
                if (response.data && response.data.data && response.data.data.length > 0) {
                    const stepsData = response.data.data
                        .map((step) => ({
                            step: step.caraPesanNo,
                            title: step.caraPesanTitle,
                            description: step.caraPesanSubtitle,
                        }))
                        .sort((a, b) => a.step - b.step);
                    setSteps(stepsData);
                } else {
                    throw new Error('No data available from API');
                }
            } catch (error) {
                //console.error('Error fetching Cara Pesan data:', error);
                setError('Failed to load steps');
                setSteps(defaultSteps); // Use default steps on error
            }
        };

        fetchCaraPesanData();
    }, []);

    return (
        <section className="cara-pesan-section" data-aos="fade-up">
            <h2 className="cara-pesan-title" data-aos="fade-up">Cara Pesan</h2>
            <div className="timeline-container" data-aos="fade-up">
                <div className="timeline-line"></div>
                <div className="timeline-steps">
                    {steps.map((step, index) => (
                        <div
                            className="timeline-step"
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={`${index * 200}`}
                        >
                            <div className="timeline-step-point">
                                <span className="step-number">{step.step}</span>
                            </div>
                            <div className="step-description">
                                <h3 className="step-title">{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaraPesanSection;
