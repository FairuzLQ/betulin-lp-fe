import React from 'react';
import HubungiKamiSection from '../components/HubungiKamiSection';
import DownloadSection from '../components/DownloadSection';
import LayananHeroSection from '../components/LayananHeroSection';

const Layanan = () => {
    return (
        <div>
            <LayananHeroSection />
            <HubungiKamiSection />
            <DownloadSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default Layanan;