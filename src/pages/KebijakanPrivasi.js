import React from 'react';
import DownloadSection from '../components/DownloadSection';
import KebijakanPrivasiSection from '../components/KebijakanPrivasiSection';

const KebijakanPrivasi = () => {
    return (
        <div>
            {/* Use the HeroSection component */}
            <KebijakanPrivasiSection />
            <DownloadSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default KebijakanPrivasi;