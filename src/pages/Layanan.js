import React from 'react';
import HubungiKamiSection from '../components/HubungiKamiSection';
import DownloadSection from '../components/DownloadSection';
import LayananHeroSection from '../components/LayananHeroSection';
import LayananDetailSection from '../components/LayananDetailSection';
import PortfolioSection from '../components/PortofolioSection';

const Layanan = () => {
    return (
        <div>
            <LayananHeroSection />
            {/*<LayananDetailSection />*/}
            <PortfolioSection />
            <HubungiKamiSection />
            <DownloadSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default Layanan;