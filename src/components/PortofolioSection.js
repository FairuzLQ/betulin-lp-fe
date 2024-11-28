import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/PortofolioSection.css';
import { FaSadTear } from 'react-icons/fa';

const defaultBackgroundImage = 'https://via.placeholder.com/400x300?text=Service+Image';

const defaultCategories = [
  {
    name: 'Instalasi Listrik',
    services: [
      { id: 3, name: 'Instalasi Listrik', details: ['Instalasi listrik dan pengecekan keamanan jaringan listrik'], background: defaultBackgroundImage },
      { id: 4, name: 'Pemasangan Lampu', details: ['Pemasangan lampu untuk interior dan eksterior rumah'], background: defaultBackgroundImage },
    ],
  },
  {
    name: 'Perbaikan Rumah',
    services: [
      { id: 1, name: 'Perbaikan Pipa', details: ['Perbaikan pipa bocor dan instalasi pipa baru'], background: defaultBackgroundImage },
      { id: 2, name: 'Servis AC', details: ['Perbaikan dan perawatan AC untuk ruangan yang lebih nyaman'], background: defaultBackgroundImage },
    ],
  },
];

const PortfolioSection = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/layanans?populate=*`);
        const result = await response.json();

        const baseUrl = process.env.REACT_APP_API_URL;
        const data = result.data.map((item) => {
          const backgroundImage =
            item.BackgroundLayanan?.formats?.large?.url ||
            item.BackgroundLayanan?.formats?.medium?.url ||
            item.BackgroundLayanan?.formats?.small?.url ||
            item.BackgroundLayanan?.url ||
            defaultBackgroundImage;

          return {
            id: item.id,
            name: item.NamaLayanan,
            details: item.DetailLayanan.map((detail) =>
              detail.children.map((child) => child.text).join(' ')
            ),
            category: item.kategori_layanan?.NamaKategori || 'Layanan Lainnya',
            background: backgroundImage.startsWith('/') ? `${baseUrl}${backgroundImage}` : backgroundImage,
          };
        });

        const groupedCategories = data.reduce((acc, service) => {
          const category = acc.find((cat) => cat.name === service.category);
          if (category) {
            category.services.push(service);
          } else {
            acc.push({ name: service.category, services: [service] });
          }
          return acc;
        }, []);

        groupedCategories.sort((a, b) => a.name.localeCompare(b.name));
        groupedCategories.forEach((category) => category.services.sort((a, b) => a.name.localeCompare(b.name)));

        setCategories(groupedCategories);
        setSelectedCategory(groupedCategories[0]);
      } catch (error) {
        console.error('Error fetching services:', error);
        setCategories(defaultCategories);
        setSelectedCategory(defaultCategories[0]);
      } finally {
        setIsLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchServices();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-placeholder">
        <div className="loading-spinner"></div>
        <p>Loading Services...</p>
      </div>
    );
  }

  const filteredServices = selectedCategory?.services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryChange = (categoryName) => {
    const category = categories.find((cat) => cat.name === categoryName);
    setSelectedCategory(category);
    setSearchQuery('');
  };

  return (
    <div id="services" className="portfolio-section">
      <div className="portfolio-carousel">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`carousel-item ${selectedCategory.name === category.name ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.name)}
          >
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>

      <div className="portfolio-content">
        <h2>Layanan Kami</h2>
        <input
          type="text"
          placeholder="Mau betulin apa?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />

        {filteredServices?.length > 0 ? (
          <div className="portfolio-services">
            {filteredServices.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="card-inner">
                  <div
                    className="card-front"
                    style={{ backgroundImage: `url(${service.background})` }}
                  >
                    <h4>{service.name}</h4>
                  </div>
                  <div className="card-back">
                    <p>{service.details.join(' ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-services">
            <FaSadTear size={50} color="#06479d" />
            <p>Sayangnya layanan tersebut belum ada</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioSection;
