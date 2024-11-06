import React, { useState } from 'react';
import Draggable from 'react-draggable';
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

const FloatingIconsBackground = () => {
    const icons = [
        faHammer,
        faWrench,
        faScrewdriver,
        faBolt,
        faCogs,
        faToolbox,
        faDraftingCompass,
        faHardHat,
        faPencilRuler,
    ];

    // State to track which icon is currently draggable
    const [activeIcon, setActiveIcon] = useState(null);

    return (
        <div className="icon-background">
            {icons.map((icon, index) => (
                <Draggable
                    key={index}
                    disabled={activeIcon !== index} // Only draggable if it's the active icon
                    onStart={() => setActiveIcon(index)} // Set this icon as active on drag start
                    onStop={() => setActiveIcon(null)} // Reset when dragging stops
                >
                    <div className={`floating-icon icon-${index}`}>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                </Draggable>
            ))}
            <div className="content">
                <h1>Welcome to Our Services</h1>
            </div>
        </div>
    );
};

export default FloatingIconsBackground;
