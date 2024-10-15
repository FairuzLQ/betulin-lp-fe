import React from 'react';
import DownloadSection from '../components/DownloadSection';
import AboutUsHeroSection from '../components/AboutUsHeroSection';
import VisiMisiSection from '../components/VisiMisiSection';


const TentangKami = () => {
    return (
        <div>
            <AboutUsHeroSection />
            <VisiMisiSection />
            <DownloadSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default TentangKami;