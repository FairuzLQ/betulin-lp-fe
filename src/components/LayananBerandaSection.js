import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import '../styles/LayananBerandaSection.css'; // Import the corresponding CSS file

const LayananBerandaSection = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
            once: true, // Animation happens only once
        });
    }, []);

    // Array of services
    const services = [
        { icon: '🔧', title: 'Perbaikan AC', description: 'Perbaikan cepat dan terpercaya untuk semua jenis AC.' },
        { icon: '🚪', title: 'Perbaikan Pintu', description: 'Servis pintu rusak atau tidak berfungsi dengan baik.' },
        { icon: '💡', title: 'Instalasi Listrik', description: 'Pemasangan listrik yang aman dan berkualitas.' },
        { icon: '🔧', title: 'Perbaikan AC', description: 'Perbaikan cepat dan terpercaya untuk semua jenis AC.' },
        { icon: '🚪', title: 'Perbaikan Pintu', description: 'Servis pintu rusak atau tidak berfungsi dengan baik.' },
        { icon: '💡', title: 'Instalasi Listrik', description: 'Pemasangan listrik yang aman dan berkualitas.' },
        { icon: '🚿', title: 'Perbaikan Kamar Mandi', description: 'Perbaikan dan pemasangan perlengkapan kamar mandi.' },
        { icon: '🔌', title: 'Instalasi Kabel', description: 'Instalasi kabel listrik dan jaringan internet.' },
    ];

    // State to control whether to show more services
    const [showMore, setShowMore] = useState(false);

    // Toggle the state when the button is clicked
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
                            <div className="layanan-icon">{service.icon}</div>
                            <h3 className="layanan-service-title">{service.title}</h3>
                            <p className="layanan-service-description">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Show more/less button */}
                {services.length > 6 && (
                    <div className="show-more-container" data-aos="fade-up">
                        <button className="show-more-btn" onClick={handleShowMore}>
                            {showMore ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak'} {/* Show Less or More based on state */}
                            <span className={`arrow ${showMore ? 'up' : 'down'}`}></span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default LayananBerandaSection;
