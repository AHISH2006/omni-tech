import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/non-technical-events.css";
// reusing the data source to ensure IDs match
import { eventsData } from "../data/eventsData";
import NonTechEventCard from "../components/NonTechEventCard";

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

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Swipe Navigation
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
    };

    const getCardStyle = (index) => {
        const total = nonTechnicalEvents.length;

        let diff = (index - activeIndex + total) % total;
        if (diff > total / 2) diff -= total;

        const isActive = diff === 0;

        // Only show items within a certain range to avoid clutter
        if (Math.abs(diff) > 2) return { display: 'none' };

        // X translation based on visual offset
        // Responsive spacing: Reduce spacing on mobile
        const isMobile = window.innerWidth < 768;
        const spacing = isMobile ? 150 : 400;

        const xOffset = diff * spacing;
        const scale = isActive ? (isMobile ? 1 : 1.15) : (isMobile ? 0.7 : 0.8);
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
        <div
            className="non-tech-events-page"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
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
                {/* NAVIGATION BUTTONS - Visible on Desktop */}
                <button className="carousel-btn left desktop-only" onClick={handlePrev}>
                    &#8249;
                </button>
                <button className="carousel-btn right desktop-only" onClick={handleNext}>
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
                                    className="non-tech-card-wrapper-motion"
                                    initial={false}
                                    animate={{
                                        x: `calc(-50% + ${style.x}px)`,
                                        scale: style.scale,
                                        zIndex: style.zIndex,
                                        opacity: style.opacity,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    style={{
                                        display: style.display,
                                        position: 'absolute',
                                        left: '50%', // Center the origin
                                    }}
                                    onClick={() => {
                                        if (isActive) {
                                            navigate(`/non-technical/${event.id}`);
                                        } else {
                                            setActiveIndex(index);
                                        }
                                    }}
                                >
                                    <NonTechEventCard
                                        event={event}
                                        index={index}
                                        isActive={isActive}
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Mobile Hints */}
                <div className="mobile-hint mobile-only">
                    <span>&larr; Swipe to Navigate &rarr;</span>
                </div>
            </div>
        </div>
    );
}