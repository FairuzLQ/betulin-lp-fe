import React, { useState } from 'react';
import '../styles/LayananDetailSection.css'; // Import the CSS file for styling

const LayananDetailSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Utilitas Rumah'); // Default category

  const categories = {
    'Utilitas Rumah': [
      {
        title: 'Genteng',
        items: [
          { icon: '🔧', title: 'Atap', subtitle: 'Perbaikan atap bocor' },
          { icon: '🔧', title: 'Plafon', subtitle: 'Pemasangan plafon' },
        ],
      },
      {
        title: 'Air',
        items: [
          { icon: '🚰', title: 'Pipa', subtitle: 'Perbaikan pipa bocor' },
          { icon: '🚰', title: 'Keran', subtitle: 'Pemasangan keran air' },
        ],
      },
      {
        title: 'Listrik',
        items: [
          { icon: '💡', title: 'Kabel', subtitle: 'Instalasi kabel listrik' },
        ],
      },
    ],
    'Otomotif': [
      {
        title: 'Mobil',
        items: [
          { icon: '🚗', title: 'Servis Mesin', subtitle: 'Perawatan mesin mobil' },
          { icon: '🚗', title: 'Ban', subtitle: 'Penggantian ban mobil' },
        ],
      },
      {
        title: 'Motor',
        items: [
          { icon: '🏍', title: 'Servis Mesin', subtitle: 'Servis mesin motor' },
          { icon: '🏍', title: 'Ban', subtitle: 'Penggantian ban motor' },
        ],
      },
    ],
  };

  return (
    <div className="layanan-detail-section">
      {/* Service Category Buttons */}
      <div className="service-category-buttons">
        <button
          className={`category-btn ${selectedCategory === 'Utilitas Rumah' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Utilitas Rumah')}
        >
          Utilitas Rumah
        </button>
        <button
          className={`category-btn ${selectedCategory === 'Otomotif' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Otomotif')}
        >
          Otomotif
        </button>
      </div>

      {/* Divider */}
      <hr className="divider" />

      {/* Main Content */}
      <div className="content-grid">
        {categories[selectedCategory].map((subCategory, index) => (
          <React.Fragment key={index}>
            {/* Sub Category on the Left */}
            <div className="left-column">
              <h3 className="sub-category-title">{subCategory.title}</h3>
            </div>

            {/* Sub Sub Categories on the Right */}
            <div className="right-column">
              {subCategory.items.map((item, idx) => (
                <div key={idx} className="sub-sub-category">
                  <div className="icon">{item.icon}</div>
                  <div className="sub-sub-category-content">
                    <h4 className="sub-sub-category-title">{item.title}</h4>
                    <p className="sub-sub-category-subtitle">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LayananDetailSection;
