import React from 'react';
import KarirHeroSection from '../components/KarirHeroSection';
import KarirBenefitSection from '../components/KarirBenefitSection';
import LowonganSection from '../components/LowonganSection';


const Karir = () => {
    return (
        <div>
            <KarirHeroSection />
            <KarirBenefitSection />
            <LowonganSection />
            {/* Other sections of Beranda can be added here */}
        </div>
    );
};

export default Karir;