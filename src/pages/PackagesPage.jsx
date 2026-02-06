import React, { useRef } from 'react';
import '../styles/packages.css';
import rotateSound from '../assets/sounds/rotate.mp3';
import activateSound from '../assets/sounds/activate.mp3';

const PackagesPage = () => {
    const rotateAudio = useRef(new Audio(rotateSound));
    const activateAudio = useRef(new Audio(activateSound));

    const playHover = () => {
        rotateAudio.current.currentTime = 0;
        rotateAudio.current.volume = 0.5;
        rotateAudio.current.play().catch(e => console.log("Audio play failed", e));
    };

    const playClick = () => {
        activateAudio.current.currentTime = 0;
        activateAudio.current.play().catch(e => console.log("Audio play failed", e));
    };

    const packages = [
        {
            id: 1,
            title: 'Silver',
            type: 'silver',
            image: '/images/packages/silver-package-new.png',
            isPoster: true,
            features: [
                'Standard Access',
                'Basic Support',
                'Community Access',
                '2 Projects per month'
            ]
        },
        {
            id: 2,
            title: 'Gold',
            type: 'gold',
            isPoster: true, // Use poster mode
            image: '/images/packages/gold-package-new.png',
            features: [
                'Priority Access',
                'Premium Support',
                'Workshop Recordings',
                '10 Projects per month',
                'Exclusive Badges'
            ]
        },
        {
            id: 3,
            title: 'Diamond',
            type: 'diamond',
            image: '/images/packages/diamond-package-new.png',
            isPoster: true,
            features: [
                'All Access Pass',
                '24/7 Dedicated Mentor',
                'One-on-One Sessions',
                'Unlimited Projects',
                'VIP Event Entry',
                'Physical Merch Pack'
            ]
        }
    ];

    /* 
     * Image placeholders are set to valid relative URLs. 
     * User can replace these files in public/images/packages/ or update the path.
     * For now, we will use a reliable external placeholder if local ones don't exist yet,
     * but sticking to local paths is cleaner for react apps.
     * I'll render a fallback div if image fails or use a colored div.
     */

    return (
        <div className="packages-container">
            <div className="packages-bg-grid"></div> {/* Optional grid background hook */}

            <h1 className="packages-title">
                Select Your <span style={{ color: '#fff' }}>Plan</span>
            </h1>

            <div className="packages-grid">
                {packages.map((pkg) => (
                    <div className="package-wrapper" key={pkg.id}>
                        <div
                            className={`package-card ${pkg.type} ${pkg.isPoster ? 'poster-mode' : ''}`}
                            onMouseEnter={playHover}
                        >

                            {/* Image Section */}
                            <div className="card-image-container">
                                {/* Using a placeholder service for immediate visualization because local files might be missing */}
                                <img
                                    src={pkg.image}
                                    alt={`${pkg.title} Package`}
                                    className="card-image"
                                />
                            </div>

                            <h2 className="card-title">{pkg.title}</h2>

                            <ul className="features-list">
                                {pkg.features.map((feat, index) => (
                                    <li key={index}>{feat}</li>
                                ))}
                            </ul>

                            {/* Decorative Glow Elements */}
                            <div className="card-glow"></div>
                        </div>

                        <button className="select-btn" onClick={playClick}>
                            REGISTER
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PackagesPage;
