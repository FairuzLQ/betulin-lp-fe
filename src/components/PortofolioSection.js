import React, { useState, useEffect } from 'react';
import '../styles/PortofolioSection.css';

const categories = [
  { id: 1, name: 'Utilitas Rumah', services: ['Atap', 'Plafon', 'Genteng', 'Dinding'] },
  { id: 2, name: 'Otomotif', services: ['Servis Mobil', 'Perbaikan Ban', 'Ganti Oli'] },
  { id: 3, name: 'Elektronik', services: ['Perbaikan TV', 'Instalasi AC', 'Instalasi Kulkas'] },
  { id: 4, name: 'Lanskap', services: ['Taman', 'Pohon', 'Dekorasi Batu'] }
];

// Define the images for each service
const servicesWithImages = {
  'Atap': require('../assets/images/cs-image.png'),
  'Plafon': require('../assets/images/cs-image.png'),
  'Genteng': require('../assets/images/cs-image.png'),
  'Dinding': require('../assets/images/cs-image.png'),
  'Servis Mobil': require('../assets/images/cs-image.png'),
  'Perbaikan Ban': require('../assets/images/cs-image.png'),
  'Ganti Oli': require('../assets/images/cs-image.png'),
  'Perbaikan TV': require('../assets/images/cs-image.png'),
  'Instalasi AC': require('../assets/images/cs-image.png'),
  'Instalasi Kulkas': require('../assets/images/cs-image.png'),
  'Taman': require('../assets/images/cs-image.png'),
  'Pohon': require('../assets/images/cs-image.png'),
  'Dekorasi Batu': require('../assets/images/cs-image.png'),
};

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    // Listen for window resize events to determine if it's desktop or not
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredServices = selectedCategory.services.filter(service =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryChange = (id) => {
    const category = categories.find(cat => cat.id === id);
    setSelectedCategory(category);
  };

  // Calculate the number of rows required based on the number of services (3 services per row)
  const numberOfRows = Math.ceil(filteredServices.length / 3);

  // Dynamically adjust the section height based on the number of rows for desktop screens only
  const sectionHeight = isDesktop ? 600 + (numberOfRows - 1) * 250 : 'auto'; // Base height is 600px, with 250px added for each additional row

  return (
    <div className="portfolio-section" style={{ height: sectionHeight }}>
      <div className="portfolio-carousel">
        {categories.map(category => (
          <div
            key={category.id}
            className={`carousel-item ${selectedCategory.id === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
      
      <div className="portfolio-content">
        <h2>{selectedCategory.name}</h2>
        <input
          type="text"
          placeholder="Cari layanan..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <div className="portfolio-services">
          {filteredServices.map(service => (
            <div className="service-card" key={service}>
              <div className="card-inner">
                <div
                  className="card-front"
                  style={{ backgroundImage: `url(${servicesWithImages[service]})` }} // Set background image dynamically
                >
                  <h4>{service}</h4>
                </div>
                <div className="card-back">
                  <p>Detail service for {service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
