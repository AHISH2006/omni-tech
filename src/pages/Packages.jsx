import React, { useRef } from 'react';
import '../styles/packages.css';
import activateSound from '../assets/sounds/activate.mp3';
import goldImg from '../assets/gold-package-new.png';
import platinumImg from '../assets/diamond-package-new.png'; // Using diamond image for Platinum
import silverImg from '../assets/silver-package-new.jpeg';
import Antigravity from '../components/Antigravity';

const PackagesPage = () => {
    const activateAudio = useRef(new Audio(activateSound));

    const playClick = () => {
        activateAudio.current.currentTime = 0;
        activateAudio.current.play().catch(e => console.log("Audio play failed", e));
        console.log("Plan Selected");
    };

    const handleRegister = (link) => {
        playClick();
        if (link) {
            window.open(link, '_blank');
        }
    };

    const perks = [
        { icon: '☕', label: 'Refreshment', qty: '×2' },
        { icon: '🍱', label: 'Food', qty: '×1' },
        { icon: '🎒', label: 'Kit', qty: '×1' },
    ];

    const packages = [
        {
            id: 1,
            title: 'SILVER',
            type: 'silver',
            image: silverImg,
            
            pricePerHead: '₹250 / Head',
            link: "https://forms.gle/hg3QDxTWqon9iuVYA"
        },
        {
            id: 2,
            title: 'GOLD',
            type: 'gold',
            image: goldImg,
            
            pricePerHead: '₹300 / Head',
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdTGS_b-3YqGnRl0qXFBh0sgS9Q56B9dxGA-o52k1NiSg1S_g/viewform?usp=dialog"
        },
        {
            id: 3,
            title: 'DIAMOND',
            type: 'diamond',
            image: platinumImg,
            pricePerHead: '₹350 / Head',
            link: "https://forms.gle/vrJKrgMBqyVJZaAR8"
        }
    ];

    return (
        <div className="packages-container">
            <Antigravity
                count={150}
                magnetRadius={15}
                ringRadius={15}
                waveSpeed={0.2}
                waveAmplitude={1.5}
                particleSize={1.5}
                lerpSpeed={0.05}
                color="#00ff00" // Green for Packages
                autoAnimate
                particleVariance={1.2}
                rotationSpeed={0}
                depthFactor={1.2}
                pulseSpeed={1.5}
                particleShape="circle"
                fieldStrength={10}
            />

            <h1 className="packages-title" style={{ position: 'relative', zIndex: 2 }}>Choose Your <span style={{ color: '#fff' }}>Plan</span></h1>

            <div className="packages-grid">
                {packages.map((pkg) => (
                    <div className={`plan-card ${pkg.type}`} key={pkg.id}>
                        {/* Image Section */}

                        <img src={pkg.image} alt={pkg.title} className="plan-image" />

                        {/* Team Members Badge */}


                        {/* Per Head Registration */}
                        <div className="plan-price-row">
                            <span className="price-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                                </svg>
                            </span>
                            <span className="price-label">Per Head Registration</span>
                            <span className="price-amount">{pkg.pricePerHead}</span>
                        </div>

                        {/* Perks List */}
                        <ul className="plan-perks-list">
                            {perks.map((perk, i) => (
                                <li key={i} className="perk-item">
                                    <span className="perk-icon">{perk.icon}</span>
                                    <span className="perk-name">{perk.label}</span>
                                    <span className="perk-qty">{perk.qty}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Content */}
                        <h2 className="plan-title">{pkg.title}</h2>

                        {/* Register Button */}
                        <button className="omnitrix-btn register-btn" onClick={() => handleRegister(pkg.link)}>
                            REGISTER
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PackagesPage;
