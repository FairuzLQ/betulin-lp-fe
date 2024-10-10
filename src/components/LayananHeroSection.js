import React from 'react';
import '../styles/LayananHeroSection.css'; // Ensure you have this CSS file for styling
import backgroundImage from '../assets/images/layanan-img.png'; // Replace with your actual image path
import { FaSearch } from 'react-icons/fa'; // Import search icon

const LayananHeroSection = () => {
    return (
        <section className="layanan-hero-section">
            <div className="layanan-hero-overlay">
                <h1 className="layanan-hero-title">Layanan Kami</h1>
                <p className="layanan-hero-subtitle">Betulin Aja Disini!</p>
                <div className="layanan-hero-searchbar">
                    <input 
                        type="text" 
                        placeholder="Mau betulin apa?" 
                        className="layanan-hero-input" 
                    />
                    <button className="layanan-hero-search-btn">
                        <FaSearch />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LayananHeroSection;
