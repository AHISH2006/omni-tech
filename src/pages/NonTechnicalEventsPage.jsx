import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/non-technical-events.css";
// reusing the data source to ensure IDs match
import { eventsData } from "../data/eventsData";

export default function NonTechnicalEventsPage() {
    const navigate = useNavigate();

    // Filter only non-technical events
    const nonTechnicalEvents = eventsData.filter(e => e.category === 'Non Technical');

    const [activeIndex, setActiveIndex] = useState(Math.floor(nonTechnicalEvents.length / 2));

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % nonTechnicalEvents.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + nonTechnicalEvents.length) % nonTechnicalEvents.length);
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
    }, [nonTechnicalEvents.length]);

    const getCardStyle = (index) => {
        // Calculate distance from active index
        // Handle wrapping logic for endless feel creation
        const total = nonTechnicalEvents.length;

        // Find shortest distance in circular array
        let diff = (index - activeIndex + total) % total;
        if (diff > total / 2) diff -= total;

        const isActive = diff === 0;

        // Only show items within a certain range to avoid clutter
        if (Math.abs(diff) > 2) return { display: 'none' };

        // X translation based on visual offset
        const xOffset = diff * 400; // Adjusted for wider cards (380px)
        const scale = isActive ? 1.0 : 0.8; // Scale logic slightly adjusted for new cards
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
        <div className="non-tech-events-page">
            {/* PAGE HEADER */}
            <motion.div
                className="non-tech-events-header"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="non-tech-title">NON-TECHNICAL EVENTS</h1>
                <p className="non-tech-subtitle">
                    Unleash your creativity. Have Fun. Win Big.
                </p>
            </motion.div>

            {/* CAROUSEL CONTAINER */}
            <div className="non-tech-carousel-container">
                {/* NAVIGATION BUTTONS */}
                <button className="carousel-btn left" onClick={handlePrev}>
                    &#8249;
                </button>
                <button className="carousel-btn right" onClick={handleNext}>
                    &#8250;
                </button>

                {/* ITEMS */}
                <div className="non-tech-carousel-track">
                    <AnimatePresence>
                        {nonTechnicalEvents.map((event, index) => {
                            const style = getCardStyle(index);
                            // Need to calculate if it is "active" for class styling
                            const total = nonTechnicalEvents.length;
                            let diff = (index - activeIndex + total) % total;
                            if (diff > total / 2) diff -= total;
                            const isActive = diff === 0;

                            return (
                                <motion.div
                                    key={event.id}
                                    className={`non-tech-card-wrapper ${isActive ? 'active' : 'inactive'}`}
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
                                            navigate(`/non-technical/${event.id}`);
                                        } else {
                                            setActiveIndex(index);
                                        }
                                    }}
                                >
                                    {/* NEW CARD STRUCTURE */}
                                    <div className="nt-card-frame">
                                        <div className="nt-card-internal">
                                            {/* Image Section - Full Card */}
                                            <div className="nt-image-wrapper">
                                                <div className="nt-scan-line"></div>
                                                <div className="nt-image-overlay"></div>
                                                <img
                                                    src={event.image || "https://placehold.co/400x600/330000/ff0000?text=CLASSIFIED"}
                                                    alt={event.title}
                                                    className="nt-card-image"
                                                />
                                            </div>

                                            {/* Content Section - Overlay */}
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
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
