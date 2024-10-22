import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import '../styles/CaraPesanSection.css'; // CSS file for styling

const CaraPesanSection = () => {
    const [steps, setSteps] = useState([]);
    const [error, setError] = useState(null); // Error handling state

    // Initialize AOS for animations
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Trigger animations only once
        });
    }, []);

    // Fetch steps data from the Strapi API
    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;

        const fetchCaraPesanData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/cara-pesans`);
                if (response.data && response.data.data) {
                    // Map the API response to extract the necessary fields
                    const stepsData = response.data.data.map((step) => ({
                        step: step.caraPesanNo,
                        title: step.caraPesanTitle,
                        description: step.caraPesanSubtitle,
                    }));
                    setSteps(stepsData);
                } else {
                    throw new Error('Invalid API response');
                }
            } catch (error) {
                console.error('Error fetching Cara Pesan data:', error);
                setError('Failed to load steps');
            }
        };

        fetchCaraPesanData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>; // Display error if there is one
    }

    return (
        <section className="cara-pesan-section" data-aos="fade-up">
            <h2 className="cara-pesan-title" data-aos="fade-up">Cara Pesan</h2>
            <div className="timeline-container" data-aos="fade-up">
                <div className="timeline-line"></div>
                <div className="timeline-steps">
                    {steps.length > 0 ? (
                        steps.map((step, index) => (
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
                        ))
                    ) : (
                        <p>Loading steps...</p> // Display a loading message if steps are still being fetched
                    )}
                </div>
            </div>
        </section>
    );
};

export default CaraPesanSection;
