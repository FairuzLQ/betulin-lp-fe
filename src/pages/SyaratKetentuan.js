import React from 'react';
import DownloadSection from '../components/DownloadSection';
import SyaratKetentuanSection from '../components/SyaratKetentuanSection';

const SyaratKetentuan = () => {
    return (
        <div>
            {/* Use the HeroSection component */}
            <SyaratKetentuanSection />
            <DownloadSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default SyaratKetentuan;