// src/pages/Beranda.js
import React from 'react';
import HeroSection from '../components/HeroSection'; // Importing HeroSection
import LayananBerandaSection from '../components/LayananBerandaSection';
import CaraPesanSection from '../components/CaraPesanSection';
import HubungiKamiSection from '../components/HubungiKamiSection';

const Beranda = () => {
    return (
        <div>
            {/* Use the HeroSection component */}
            <HeroSection />
            <LayananBerandaSection />
            <CaraPesanSection />
            <HubungiKamiSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default Beranda;
