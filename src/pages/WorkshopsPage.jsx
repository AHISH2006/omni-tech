import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/workshop-detail.css"; // BLUE THEME with Scroll Logic
import { eventsData } from "../data/eventsData";
import Antigravity from "../components/Antigravity";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function WorkshopsPage() {
    const navigate = useNavigate();

    // Filter only workshop events
    const workshopEvents = eventsData.filter(e => e.category === 'Workshop');
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % workshopEvents.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + workshopEvents.length) % workshopEvents.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [workshopEvents.length]);

    const event = workshopEvents[currentIndex];

    return (
        <div className="workshop-detail-page">
            <Antigravity
                count={200}
                magnetRadius={10}
                ringRadius={12}
                waveSpeed={0.3}
                waveAmplitude={1}
                particleSize={1.2}
                lerpSpeed={0.05}
                color="#00f3ff" // Blue/Cyan for Workshops
                autoAnimate
                particleVariance={1}
                rotationSpeed={0}
                depthFactor={1}
                pulseSpeed={2}
                particleShape="sphere"
                fieldStrength={8}
            />

            <div className="tech-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={event.id}
                        className="detail-grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Visual Section - Matches TechnicalEventDetail layout but with Arrows */}
                        <div className="visual-section">
                            <div className="slider-wrapper">

                                {/* LEFT ARROW */}
                                <button className="nav-arrow left" onClick={handlePrev}>
                                    <ChevronLeft size={24} />
                                </button>

                                {/* IMAGE CONTAINER - Full width like Technical */}
                                <div className="hologram-image-container">
                                    <img
                                        src={event.image || "https://placehold.co/800x600/003300/00aaff?text=WORKSHOP"}
                                        alt={event.title}
                                        className="hologram-image"
                                    />
                                </div>

                                {/* RIGHT ARROW */}
                                <button className="nav-arrow right" onClick={handleNext}>
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Info Section - Scrollable Panel */}
                        <div className="content-panel">
                            <div>
                                <span className="category-tag">
                                    {event.category}
                                </span>
                                <h1 className="event-title-holo">
                                    {event.title}
                                </h1>
                                {event.speaker && (
                                    <h3 style={{ color: '#fff', marginTop: '10px', fontSize: '1.2rem', fontFamily: 'Orbitron, sans-serif' }}>
                                        SPEAKER: <span style={{ color: '#00f3ff' }}>{event.speaker}</span>
                                    </h3>
                                )}
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
                                    <span className="meta-label">PARTICIPATION</span>
                                    <span className="meta-value">{event.participation || "Individual"}</span>
                                </div>
                            </div>

                            <div className="description-box">
                                <div className="event-description">
                                    {event.description}
                                </div>

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
                                <button
                                    className="register-btn-large"
                                    onClick={() => navigate('/packages')}
                                >
                                    INITIATE REGISTRATION
                                </button>
                            </div>

                            {/* Spacer to Ensure Full Scrollability */}
                            <div style={{ height: '200px' }}></div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
