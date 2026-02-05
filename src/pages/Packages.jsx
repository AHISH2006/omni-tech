import React, { useRef } from 'react';
import '../styles/packages.css';
import activateSound from '../assets/sounds/activate.mp3';
import goldImg from '../assets/gold-package-new.png';
import platinumImg from '../assets/diamond-package-new.png'; // Using diamond image for Platinum
import silverImg from '../assets/silver-package-new.png';

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
            image: silverImg,
            link: "https://docs.google.com/forms/d/e/1FAIpQLScdSMnDWDd6hDu0jey21uUv6VuDShUoIvK1AkffV-C2VkXKBg/viewform?usp=header"
        },
        {
            id: 2,
            image: goldImg,
            link: "https://docs.google.com/forms/d/e/1FAIpQLScsJFBAy0SDtz5rbqtflsykt3zwkoOv6Vd1jGh3TvaIYwmirA/viewform?usp=publish-editor"
        },
        {
            id: 3,
            image: platinumImg, // Diamond
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeln3y7MJjrA3zRLphUtjku6MilsnhNuIUGq49y0AXDPP25FA/viewform?usp=publish-editor"
        }
    ];

    return (
        <div className="packages-container">
            <h1 className="packages-title">Choose Your <span style={{ color: '#fff' }}>Plan</span></h1>

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
