import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import '../styles/SchedulePage.css';

// Define time slots for the grid columns (Header)
const timeSlots = [
    "11:00 AM", "11:20 AM", "12:00 PM", "12:20 PM", "12:40 PM", "1:00 PM",
    "1:30 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "5:00 PM"
];

const scheduleData = [
    // MORNING SESSION
    { name: "M1 BATTLE ARENA", start: "11:00 AM", end: "1:30 PM", type: "non-technical", row: 1 },
    { name: "IPL AUCTION", start: "11:00 AM", end: "1:30 PM", type: "non-technical", row: 2 },
    { name: "WEBTRIX REBUILD", start: "11:00 AM", end: "12:40 PM", type: "technical", row: 3 },
    { name: "FREAKY LENS (INSTRUCTIONS)", start: "11:00 AM", end: "11:20 AM", type: "non-technical", row: 4 },
    { name: "FREAKY LENS (FINAL)", start: "12:00 PM", end: "12:40 PM", type: "non-technical", row: 4 },
    { name: "NEURAL NEXUS", start: "11:20 AM", end: "12:20 PM", type: "non-technical", row: 5 },
    { name: "BOTRIX BUILDER", start: "11:20 AM", end: "12:40 PM", type: "technical", row: 6 },
    { name: "COSMIC VISION", start: "12:00 PM", end: "1:00 PM", type: "technical", row: 7 },

    // BREAKS
    { name: "LUNCH BREAK", start: "1:30 PM", end: "2:30 PM", type: "break", row: "span" },

    // AFTERNOON SESSION
    { name: "MIND MORPH CHALLENGE", start: "2:30 PM", end: "3:30 PM", type: "non-technical", row: 1 },
    { name: "DNA DECODE", start: "2:30 PM", end: "3:30 PM", type: "technical", row: 2 },
    { name: "GALACTIC INTEL HUNT", start: "3:00 PM", end: "4:00 PM", type: "technical", row: 3 },
    { name: "DNA HUNT", start: "2:30 PM", end: "4:00 PM", type: "non-technical", row: 4 },
    { name: "DATA SPECTRUM", start: "2:30 PM", end: "4:00 PM", type: "technical", row: 5 },

    // VALEDICTORY
    { name: "VALEDICTORY", start: "4:00 PM", end: "5:00 PM", type: "break", row: "span-right" }
];

const SchedulePage = () => {
    // Helper to calculate position based on timeSlots index
    const getPosition = (start, end) => {
        const startIndex = timeSlots.indexOf(start);
        let endIndex = timeSlots.indexOf(end);

        // Handle case where end time isn't an exact slot (approximate)
        if (endIndex === -1 && end === "12:20 PM") endIndex = timeSlots.indexOf("12:20 PM"); // Fallback check
        if (endIndex === -1) endIndex = startIndex + 1; // Default width if not found

        const totalSlots = timeSlots.length;
        // Calculate percentage positions
        // We have (totalSlots - 1) segments.
        const segmentWidth = 100 / (totalSlots - 1);

        const left = startIndex * segmentWidth;
        const width = (endIndex - startIndex) * segmentWidth;

        return { left: `${left}%`, width: `${width}%` };
    };

    return (
        <div className="schedule-page">
            <div className="schedule-container">
                <motion.div
                    className="schedule-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="schedule-title">MISSION TIMELINE</h1>
                    <div className="schedule-legend">
                        <span className="legend-item tech"><span className="dot"></span>Technical</span>
                        <span className="legend-item non-tech"><span className="dot"></span>Non-Technical</span>
                        <span className="legend-item break"><span className="dot"></span>Break</span>
                    </div>
                </motion.div>

                <div className="gantt-chart-wrapper">
                    <div className="gantt-chart">
                        {/* Time Header */}
                        <div className="gantt-header-row">
                            {/* <div className="gantt-time-header">Time</div> */}
                            {timeSlots.map((time, index) => (
                                <div key={index} className="gantt-time-header" style={{ width: `${100 / (timeSlots.length - 1)}%` }}>{time}</div>
                            ))}
                        </div>

                        <div className="timeline-grid">
                            {/* Grid Lines */}
                            {timeSlots.map((_, i) => (
                                <div key={`line-${i}`} className="grid-line" style={{ left: `${(i / (timeSlots.length - 1)) * 100}%` }}></div>
                            ))}

                            {/* Render Events */}
                            {scheduleData.map((event, index) => {
                                // Special handling for vertical break blocks
                                if (event.row === "span" || event.row === "span-right") {
                                    const pos = getPosition(event.start, event.end);
                                    return (
                                        <div
                                            key={index}
                                            className={`schedule-block ${event.type} ${event.row === "span" ? "lunch-block" : "valedictory-block"}`}
                                            style={{
                                                left: pos.left,
                                                width: pos.width,
                                                top: 0
                                            }}
                                        >
                                            <span className="block-title">{event.name}</span>
                                            <span className="block-time">{event.start} - {event.end}</span>
                                        </div>
                                    );
                                }

                                // Standard Events
                                const pos = getPosition(event.start, event.end);
                                // Calculate top offset based on row number (approx 60px per row)
                                const top = (event.row - 1) * 60;

                                return (
                                    <ScheduleBlock
                                        key={index}
                                        name={event.name}
                                        type={event.type}
                                        left={pos.left}
                                        width={pos.width}
                                        top={`${top}px`}
                                        displayTime={`${event.start} - ${event.end}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile View: Vertical Timeline */}
                <div className="mobile-timeline">
                    <h2 className="mobile-section-title">MORNING SESSION</h2>
                    {scheduleData.filter(e => e.start.includes("AM") || e.name === "COSMIC VISION").map((event, index) => (
                        <MobileEventCard key={index} event={event} />
                    ))}

                    <div className="mobile-break-card">
                        <h3>LUNCH BREAK</h3>
                        <p>1:30 PM - 2:30 PM</p>
                    </div>

                    <h2 className="mobile-section-title">AFTERNOON SESSION</h2>
                    {scheduleData.filter(e => e.start.includes("PM") && e.type !== "break" && e.name !== "COSMIC VISION").map((event, index) => (
                        <MobileEventCard key={index} event={event} />
                    ))}

                    <div className="mobile-break-card valedictory">
                        <h3>VALEDICTORY</h3>
                        <p>4:10 PM Onwards</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ScheduleBlock = ({ name, type, left, width, top, displayTime }) => {
    return (
        <motion.div
            className={`schedule-block ${type}`}
            style={{ left, width, top }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, zIndex: 100 }}
        >
            <div className="block-content">
                <span className="block-title">{name}</span>
                <span className="block-time">{displayTime}</span>
            </div>
        </motion.div>
    );
};

const MobileEventCard = ({ event }) => (
    <div className={`mobile-event-card ${event.type}`}>
        <div className="mobile-time">{event.start} - {event.end}</div>
        <div className="mobile-event-name">{event.name}</div>
    </div>
);

export default SchedulePage;
