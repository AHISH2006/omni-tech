import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/workshops-carousel.css";
import { eventsData } from "../data/eventsData";
import Antigravity from "../components/Antigravity";

export default function WorkshopsPage() {
    const navigate = useNavigate();

    // Filter only workshop events
    const workshopEvents = eventsData.filter(e => e.category === 'Workshop');

    const [activeIndex, setActiveIndex] = useState(Math.floor(workshopEvents.length / 2));

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % workshopEvents.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + workshopEvents.length) % workshopEvents.length);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") {
                handleNext();
            } else if (e.key === "ArrowLeft") {
                handlePrev();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [workshopEvents.length]);

    const getCardStyle = (index) => {
        // Calculate distance from active index
        // Handle wrapping logic for endless feel creation
        const total = workshopEvents.length;

        // Find shortest distance in circular array
        let diff = (index - activeIndex + total) % total;
        if (diff > total / 2) diff -= total;

        const isActive = diff === 0;

        // Only show items within a certain range to avoid clutter
        if (Math.abs(diff) > 2) return { display: 'none' };

        // X translation based on visual offset
        const xOffset = diff * 400; // Adjusted for wider cards (380px)
        const scale = isActive ? 1.0 : 0.8;
        const zIndex = 10 - Math.abs(diff);
        const opacity = 1 - Math.abs(diff) * 0.3;

        return {
            x: xOffset,
            scale: scale,
            zIndex: zIndex,
            opacity: opacity,
        };
    };

    return (
        <div className="tech-events-page-carousel">
            {/* PAGE HEADER */}
            <motion.div
                className="tech-events-header"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="tech-title">WORKSHOPS</h1>
                <p className="tech-subtitle">
                    Learn. Create. Innovate.
                </p>
            </motion.div>

            {/* CAROUSEL CONTAINER */}
            <div className="tech-carousel-container">
                {/* NAVIGATION BUTTONS */}
                <button className="carousel-btn left" onClick={handlePrev}>
                    &#8249;
                </button>
                <button className="carousel-btn right" onClick={handleNext}>
                    &#8250;
                </button>

                {/* ITEMS */}
                <div className="tech-carousel-track">
                    <AnimatePresence>
                        {workshopEvents.map((event, index) => {
                            const style = getCardStyle(index);
                            // Need to calculate if it is "active" for class styling
                            const total = workshopEvents.length;
                            let diff = (index - activeIndex + total) % total;
                            if (diff > total / 2) diff -= total;
                            const isActive = diff === 0;

                            return (
                                <motion.div
                                    key={event.id}
                                    className={`tech-card-wrapper ${isActive ? 'active' : 'inactive'}`}
                                    initial={false}
                                    animate={{
                                        x: style.x,
                                        scale: style.scale,
                                        zIndex: style.zIndex,
                                        opacity: style.opacity,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    style={{ display: style.display }}
                                    onClick={() => {
                                        if (isActive) {
                                            navigate(`/workshops/${event.id}`);
                                        } else {
                                            setActiveIndex(index);
                                        }
                                    }}
                                >
                                    {/* NEW TECH CARD STRUCTURE */}
                                    <div className="tech-card-frame">
                                        <div className="tech-card-internal">
                                            {/* Image Section - Full Card */}
                                            <div className="tech-image-wrapper">
                                                <div className="tech-scan-line"></div>
                                                <div className="tech-image-overlay"></div>
                                                <img
                                                    src={event.image || "https://placehold.co/400x600/003300/00ff00?text=Event"}
                                                    alt={event.title}
                                                    className="tech-card-image"
                                                />
                                            </div>

                                            {/* Content Section - Overlay */}
                                            <div className="tech-content-wrapper">
                                                <div className="tech-index-mark">0{index + 1}</div>
                                                <h3 className="tech-card-title">
                                                    {event.title}
                                                </h3>
                                                <div className="tech-decoration-bar"></div>
                                            </div>
                                        </div>

                                        {/* Background Glow */}
                                        <div className="tech-card-glow"></div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
