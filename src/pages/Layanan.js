import React from 'react';
import HubungiKamiSection from '../components/HubungiKamiSection';
import DownloadSection from '../components/DownloadSection';
import LayananHeroSection from '../components/LayananHeroSection';
import LayananDetailSection from '../components/LayananDetailSection';

const Layanan = () => {
    return (
        <div>
            <LayananHeroSection />
            <LayananDetailSection />
            <HubungiKamiSection />
            <DownloadSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default Layanan;