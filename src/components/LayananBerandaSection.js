import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import axios from 'axios'; // Import Axios for API requests
import '../styles/LayananBerandaSection.css'; // Import the corresponding CSS file
import iconAC from '../assets/icon-layanan/ic_acdua.png';
import iconAir from '../assets/icon-layanan/ic_air.png';
import iconCat from '../assets/icon-layanan/ic_cat.png';
import iconCMobil from '../assets/icon-layanan/ic_cuci_mobil.png';
import iconCMotor from '../assets/icon-layanan/ic_cuci_motor.png';
import iconKeramik from '../assets/icon-layanan/ic_keramik.png';
import iconKloset from '../assets/icon-layanan/ic_kloset.png';
import iconPipa from '../assets/icon-layanan/ic_pipa.png';
import iconPlafon from '../assets/icon-layanan/ic_plafon.png';
import iconAtapRumah from '../assets/icon-layanan/ic_rumahdua.png';
import iconSMotor from '../assets/icon-layanan/ic_servis.png';
import iconSMobil from '../assets/icon-layanan/ic_servis_mobil.png';

const defaultServices = [
    { icon: iconAC, title: "Servis AC", description: "Layanan perbaikan dan perawatan AC rumah Anda.", category: "Perbaikan AC" },
    { icon: iconAir, title: "Instalasi Air", description: "Layanan instalasi dan perbaikan pipa air.", category: "Instalasi Air" },
    { icon: iconCat, title: "Cat Rumah", description: "Layanan pengecatan interior dan eksterior rumah.", category: "Pengecatan" },
    { icon: iconCMobil, title: "Cuci Mobil", description: "Layanan cuci mobil dengan standar tinggi.", category: "Cuci Kendaraan" },
    { icon: iconCMotor, title: "Cuci Motor", description: "Layanan cuci motor yang cepat dan bersih.", category: "Cuci Kendaraan" },
    { icon: iconKeramik, title: "Pemasangan Keramik", description: "Layanan pemasangan keramik lantai dan dinding.", category: "Perbaikan Rumah" },
    { icon: iconKloset, title: "Perbaikan Kloset", description: "Perbaikan dan perawatan kloset untuk rumah Anda.", category: "Perbaikan Rumah" },
    { icon: iconPipa, title: "Perbaikan Pipa", description: "Layanan perbaikan pipa yang bocor dan tersumbat.", category: "Instalasi Air" },
    { icon: iconPlafon, title: "Perbaikan Plafon", description: "Layanan perbaikan plafon untuk mempercantik ruangan Anda.", category: "Perbaikan Rumah" },
    { icon: iconAtapRumah, title: "Perbaikan Atap", description: "Layanan perbaikan dan pemasangan atap rumah Anda.", category: "Perbaikan Rumah" },
    { icon: iconSMotor, title: "Servis Motor", description: "Layanan servis motor untuk performa optimal.", category: "Servis Kendaraan" },
    { icon: iconSMobil, title: "Servis Mobil", description: "Layanan servis mobil untuk perawatan kendaraan Anda.", category: "Servis Kendaraan" },
];

const LayananBerandaSection = () => {
    const [services, setServices] = useState([]);
    const [showMore, setShowMore] = useState(false);

    // Fetch services data from Strapi
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/layanans?populate=*`);
                const layananData = response.data.data.map((layanan) => ({
                    icon: `${process.env.REACT_APP_API_URL}${layanan.IkonLayanan?.url || ''}`, // Full URL for API icons
                    title: layanan.NamaLayanan,
                    description: layanan.ExcerptLayanan,
                    category: layanan.kategori_layanan?.NamaKategori || "Uncategorized",
                }));
                setServices(interleaveServicesByCategory(layananData));
            } catch (error) {
                console.error('Error fetching layanan:', error);
                setServices(interleaveServicesByCategory(defaultServices)); // Use default services if API fails
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

    // Interleave services by category
    const interleaveServicesByCategory = (services) => {
        const groupedByCategory = services.reduce((acc, service) => {
            if (!acc[service.category]) acc[service.category] = [];
            acc[service.category].push(service);
            return acc;
        }, {});

        const maxLength = Math.max(...Object.values(groupedByCategory).map((arr) => arr.length));
        const interleaved = [];

        for (let i = 0; i < maxLength; i++) {
            for (const category in groupedByCategory) {
                if (groupedByCategory[category][i]) {
                    interleaved.push(groupedByCategory[category][i]);
                }
            }
        }

        return interleaved;
    };

    // Toggle to show more or fewer services
    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    // Determine the number of services to show
    const servicesToShow = showMore ? services : services.slice(0, 3);

    return (
        <section className="layanan-section" data-aos="fade-up">
            <div id="layanan-betulin" className="layanan-card">
                <h2 className="layanan-title" data-aos="fade-up">Layanan</h2>
                <p className="layanan-subtitle" data-aos="fade-up">Kami menyediakan berbagai layanan perbaikan dan instalasi terbaik untuk Anda.</p>
                
                <div className="layanan-grid" data-aos="fade-up">
                    {servicesToShow.map((service, index) => (
                        <div key={index} className="layanan-service" data-aos="zoom-in" data-aos-delay={`${index * 100}`}>
                            <div className="layanan-icon">
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <h3 className="layanan-service-title">{service.title}</h3>
                            <p className="layanan-service-description">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Show more/less button */}
                {services.length > 3 && (
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
