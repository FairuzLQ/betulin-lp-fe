import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import axios from 'axios'; // Import Axios for API requests
import '../styles/LayananBerandaSection.css'; // Import the corresponding CSS file

const LayananBerandaSection = () => {
    // State to hold the services fetched from Strapi
    const [services, setServices] = useState([]);
    const [showMore, setShowMore] = useState(false);

    // Fetch services data from Strapi
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/layanans?populate=*`);
                const layananData = response.data.data.map((layanan) => ({
                    icon: layanan.IkonLayanan ? layanan.IkonLayanan.url : '🔧', // Fallback icon if not available
                    title: layanan.NamaLayanan,
                    description: layanan.ExcerptLayanan,
                }));
                setServices(layananData);
            } catch (error) {
                console.error('Error fetching layanan:', error);
            }
        };

        fetchServices();
    }, []);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
            once: true, // Animation happens only once
        });
    }, []);

    // Toggle to show more or fewer services
    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    // Determine the number of services to show
    const servicesToShow = showMore ? services : services.slice(0, 6);

    return (
        <section className="layanan-section" data-aos="fade-up">
            <div className="layanan-card">
                <h2 className="layanan-title" data-aos="fade-up">Layanan</h2>
                <p className="layanan-subtitle" data-aos="fade-up">Kami menyediakan berbagai layanan perbaikan dan instalasi terbaik untuk Anda.</p>
                
                <div className="layanan-grid" data-aos="fade-up">
                    {servicesToShow.map((service, index) => (
                        <div key={index} className="layanan-service" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                            <div className="layanan-icon">
                                <img src={`${process.env.REACT_APP_API_URL}${service.icon}`} alt={service.title} />
                            </div>
                            <h3 className="layanan-service-title">{service.title}</h3>
                            <p className="layanan-service-description">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Show more/less button */}
                {services.length > 6 && (
                    <div className="show-more-container" data-aos="fade-up">
                        <button className="show-more-btn" onClick={handleShowMore}>
                            {showMore ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak'}
                            <span className={`arrow ${showMore ? 'up' : 'down'}`}></span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default LayananBerandaSection;
