import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { eventsData } from "../data/eventsData";
import Antigravity from "../components/Antigravity";

import "../styles/non-tech-detail.css";

export default function NonTechnicalEventDetail() {
    const { eventId } = useParams();
    const navigate = useNavigate();

    // Find the event by ID from the shared data
    const event = eventsData.find((e) => e.id === eventId);

    if (!event) {
        return (
            <div className="not-found-container">
                <Antigravity
                    count={200}
                    magnetRadius={10}
                    ringRadius={12}
                    waveSpeed={0.3}
                    waveAmplitude={1}
                    particleSize={1.2}
                    lerpSpeed={0.05}
                    color="#ff0055"
                    autoAnimate
                    particleVariance={1}
                    rotationSpeed={0}
                    depthFactor={1}
                    pulseSpeed={2}
                    particleShape="sphere"
                    fieldStrength={8}
                />
                <h1 className="not-found-text">ACCESS DENIED: Event Not Found</h1>
                <button onClick={() => navigate('/non-technical')} className="back-button">
                    Return to Database
                </button>
            </div>
        );
    }

    return (
        <div className="non-tech-detail-page">
            <Antigravity
                count={200}
                magnetRadius={10}
                ringRadius={12}
                waveSpeed={0.3}
                waveAmplitude={1}
                particleSize={1.2}
                lerpSpeed={0.05}
                color="#ff0055"
                autoAnimate
                particleVariance={1}
                rotationSpeed={0}
                depthFactor={1}
                pulseSpeed={2}
                particleShape="sphere"
                fieldStrength={8}
            />

            <div className="non-tech-container">
                {/* Back Button */}
                <motion.div
                    className="back-button-container"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <button onClick={() => navigate('/non-technical')} className="back-button">
                        &lt; BACK TO EVENTS
                    </button>
                </motion.div>

                <div className="detail-grid">
                    {/* Visual Section */}
                    <motion.div
                        className="visual-section"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="hologram-image-container">
                            <div className="scan-line"></div>
                            <div className="hologram-overlay"></div>
                            <img
                                src={event.image || "https://placehold.co/800x600/330000/ff0000?text=CLASSIFIED"}
                                alt={event.title}
                                className="hologram-image"
                            />
                        </div>
                    </motion.div>

                    {/* Info Section */}
                    <motion.div
                        className="content-panel"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div>
                            <span className="category-tag">{event.category}</span>
                            <h1 className="event-title-holo">{event.title}</h1>
                        </div>

                        {/* Event Details Grid */}
                        <div className="event-meta-grid">
                            <div className="meta-item">
                                <span className="meta-label">TIME</span>
                                <span className="meta-value">{event.time || "TBA"}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">VENUE</span>
                                <span className="meta-value">{event.venue || "TBA"}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">TEAM SIZE</span>
                                <span className="meta-value">{event.participation || "Individual"}</span>
                            </div>
                        </div>

                        <div className="description-box">
                            <p className="event-description">
                                {event.description}
                            </p>

                            {event.coordinator && (
                                <div className="coordinator-section">
                                    <span className="coordinator-label">COORDINATORS:</span>
                                    <span className="coordinator-names">{event.coordinator}</span>
                                </div>
                            )}
                        </div>

                        {/* Registration Panel */}
                        <div className="registration-panel">
                            <h3 className="register-title">STATUS: OPEN</h3>
                            <button className="register-btn-large">
                                INITIATE REGISTRATION
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
