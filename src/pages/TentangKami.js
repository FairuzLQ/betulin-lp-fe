import React from 'react';
import DownloadSection from '../components/DownloadSection';
import AboutUsHeroSection from '../components/AboutUsHeroSection';
import VisiMisiSection from '../components/VisiMisiSection';
import LokasiLayananSection from '../components/LokasiLayananSection';
import MemilihKamiSection from '../components/MemilihKamiSection';


const TentangKami = () => {
    return (
        <div>
            <AboutUsHeroSection />
            <VisiMisiSection />
            <LokasiLayananSection />
            <MemilihKamiSection />
            <DownloadSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default TentangKami;