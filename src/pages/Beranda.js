// src/pages/Beranda.js
import React from 'react';
import HeroSection from '../components/HeroSection'; // Importing HeroSection
import LayananBerandaSection from '../components/LayananBerandaSection';
import CaraPesanSection from '../components/CaraPesanSection';
import HubungiKamiSection from '../components/HubungiKamiSection';
import PrinsipKamiSection from '../components/PrinsipKamiSection';
import DownloadSection from '../components/DownloadSection';
import FlyingIconsBackground from '../components/FlyingIconsBackground';

const Beranda = () => {
    return (
        <div>
            {/* Use the HeroSection component */}
            <HeroSection />
            <LayananBerandaSection />
            <CaraPesanSection />
            <HubungiKamiSection />
            <PrinsipKamiSection />
            <FlyingIconsBackground />
            <DownloadSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default Beranda;
