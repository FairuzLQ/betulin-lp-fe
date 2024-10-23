import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../styles/PortofolioSection.css';
import { FaSadTear } from 'react-icons/fa'; // Importing icon for no results

const PortfolioSection = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Fetch services and categories from the API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/layanans?populate=*`);
        const result = await response.json();
        
        const baseUrl = process.env.REACT_APP_API_URL; // Get the base URL for images

        const data = result.data.map(item => {
          // Select the appropriate image URL, fallback to default if not available
          const backgroundImage = item.BackgroundLayanan?.formats?.large?.url ||
                                  item.BackgroundLayanan?.formats?.medium?.url ||
                                  item.BackgroundLayanan?.formats?.small?.url ||
                                  item.BackgroundLayanan?.url ||
                                  ''; // Ensure there's a valid image URL or empty

          // Create absolute URL if background image is a relative path
          const fullBackgroundImage = backgroundImage.startsWith('/') ? `${baseUrl}${backgroundImage}` : backgroundImage;

          return {
            id: item.id,
            name: item.NamaLayanan,
            details: item.DetailLayanan.map(detail => detail.children.map(child => child.text).join(' ')), // Map through DetailLayanan to extract text
            category: item.kategori_layanan.NamaKategori,
            background: fullBackgroundImage, // Use the full background image URL
          };
        });

        const groupedCategories = data.reduce((acc, service) => {
          const category = acc.find(cat => cat.name === service.category);
          if (category) {
            category.services.push(service);
          } else {
            acc.push({ name: service.category, services: [service] });
          }
          return acc;
        }, []);

        setCategories(groupedCategories);
        setSelectedCategory(groupedCategories[0]); // Set the first category as the default
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ once: true });

    // Listen for window resize events to determine if it's desktop or not
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!selectedCategory) {
    return <p>Loading...</p>;
  }

  const filteredServices = selectedCategory.services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryChange = (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName);
    setSelectedCategory(category);
    setSearchQuery(''); // Reset search query when category changes
  };

  // Calculate the number of rows required based on the number of services (3 services per row)
  const numberOfRows = Math.ceil(filteredServices.length / 3);

  // Dynamically adjust the section height based on the number of rows for desktop screens only
  const sectionHeight = isDesktop ? 600 + (numberOfRows - 1) * 250 : 'auto'; // Base height is 600px, with 250px added for each additional row

  return (
    <div id="services" className="portfolio-section" style={{ height: sectionHeight }}>
      <div className="portfolio-carousel">
        {categories.map(category => (
          <div
            key={category.name}
            className={`carousel-item ${selectedCategory.name === category.name ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.name)}
            data-aos="fade-right" // AOS animation on carousel items
          >
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>

      <div className="portfolio-content">
        <h2 data-aos="fade-up">Layanan Kami</h2>
        <input
          type="text"
          placeholder="Mau betulin apa?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
          data-aos="fade-in"
        />

        {filteredServices.length > 0 ? (
          <div className="portfolio-services" data-aos="fade-up">
            {filteredServices.map(service => (
              <div className="service-card" key={service.id} data-aos="zoom-in">
                <div className="card-inner">
                  <div
                    className="card-front"
                    style={{ backgroundImage: `url(${service.background})` }} // Set background image dynamically
                  >
                    <h4>{service.name}</h4>
                  </div>
                  <div className="card-back">
                    <p>{service.details.join(' ')}</p> {/* Join the details text to display */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-services" data-aos="fade-up">
            <FaSadTear size={50} color="#06479d" />
            <p>Sayangnya layanan tersebut belum ada</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioSection;
