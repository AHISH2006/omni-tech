import React from 'react';
import { motion } from 'framer-motion';
import '../styles/NonTechEventCard.css';

const NonTechEventCard = ({ event, index, isActive }) => {
    return (
        <motion.div
            className={`nt-card-container ${isActive ? 'active' : ''}`}
            whileHover={{ scale: isActive ? 1.05 : 1, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="nt-card-frame">
                {/* Holographic Borders */}
                <div className="nt-border-corner top-left"></div>
                <div className="nt-border-corner top-right"></div>
                <div className="nt-border-corner bottom-left"></div>
                <div className="nt-border-corner bottom-right"></div>

                <div className="nt-card-internal">
                    {/* Image Section */}
                    <div className="nt-image-wrapper">
                        <div className="nt-scan-line"></div>
                        <div className="nt-image-overlay"></div>
                        <img
                            src={event.image || "https://placehold.co/400x600/330000/ff0000?text=CLASSIFIED"}
                            alt={event.title}
                            className="nt-card-image"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="nt-content-wrapper">
                        <div className="nt-index-mark">0{index + 1}</div>
                        <h3 className="nt-title">
                            {event.title}
                        </h3>
                        <div className="nt-decoration-bar"></div>
                    </div>
                </div>

                {/* Background Glow */}
                <div className="nt-card-glow"></div>
            </div>
        </motion.div>
    );
};

export default NonTechEventCard;
