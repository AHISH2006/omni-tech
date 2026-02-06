import React, { useRef } from 'react';
import '../styles/packages.css';
import activateSound from '../assets/sounds/activate.mp3';
import goldImg from '../assets/gold-package-new.png';
import platinumImg from '../assets/diamond-package-new.png'; // Using diamond image for Platinum
import silverImg from '../assets/silver-package-new.png';
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

    const packages = [
        {
            id: 1,
            title: 'SILVER',
            type: 'silver',
            image: silverImg,
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdTGS_b-3YqGnRl0qXFBh0sgS9Q56B9dxGA-o52k1NiSg1S_g/viewform?usp=publish-editor"
        },
        {
            id: 2,
            title: 'GOLD',
            type: 'gold',
            image: goldImg,
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdTGS_b-3YqGnRl0qXFBh0sgS9Q56B9dxGA-o52k1NiSg1S_g/viewform?usp=dialog"
        },
        {
            id: 3,
            title: 'DIAMOND',
            type: 'diamond',
            image: platinumImg, // Diamond
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
