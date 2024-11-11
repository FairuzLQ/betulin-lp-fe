import React from 'react';
import DownloadSection from '../components/DownloadSection';
import AboutUsHeroSection from '../components/AboutUsHeroSection';
import VisiMisiSection from '../components/VisiMisiSection';
import LokasiLayananSection from '../components/LokasiLayananSection';
import MemilihKamiSection from '../components/MemilihKamiSection';
import CompanyBackgroundSection from '../components/CompanyBackgroundSection';


const TentangKami = () => {
    return (
        <div>
            <AboutUsHeroSection />
            <CompanyBackgroundSection />
            <VisiMisiSection />
            <LokasiLayananSection />
            <MemilihKamiSection />
            <DownloadSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default TentangKami;