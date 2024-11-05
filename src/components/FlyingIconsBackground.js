import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHammer,
    faWrench,
    faScrewdriver,
    faBolt,
    faCogs,
    faToolbox,
    faDraftingCompass,
    faHardHat,
    faPencilRuler,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/FlyingIconsBackground.css';

const FlyingIconsBackground = () => {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const icons = document.querySelectorAll('.floating-icon');
            const { clientX, clientY } = event;

            icons.forEach((icon, index) => {
                const speed = (index + 1) * 0.05; // Vary speed for each icon
                const x = (window.innerWidth / 2 - clientX) * speed;
                const y = (window.innerHeight / 2 - clientY) * speed;

                icon.style.transform = `translate(${x}px, ${y}px) rotate(${index * 10}deg)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="icon-background">
            <FontAwesomeIcon icon={faHammer} className="floating-icon hammer" />
            <FontAwesomeIcon icon={faWrench} className="floating-icon wrench" />
            <FontAwesomeIcon icon={faScrewdriver} className="floating-icon screwdriver" />
            <FontAwesomeIcon icon={faBolt} className="floating-icon bolt" />
            <FontAwesomeIcon icon={faCogs} className="floating-icon cogs" />
            <FontAwesomeIcon icon={faToolbox} className="floating-icon toolbox" />
            <FontAwesomeIcon icon={faDraftingCompass} className="floating-icon compass" />
            <FontAwesomeIcon icon={faHardHat} className="floating-icon hardhat" />
            <FontAwesomeIcon icon={faPencilRuler} className="floating-icon ruler" />

            <div className="content">
                <h1>Welcome to Our Services</h1>
            </div>
        </div>
    );
};

export default FlyingIconsBackground;