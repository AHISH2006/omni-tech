import React from 'react';
import { motion } from 'framer-motion';
import '../styles/schedule.css';

const scheduleData = [
    { time: "11:00 AM - 1:30 PM", title: "M1 BATTLE ARENA", type: "non-tech" },
    { time: "11:00 AM - 1:30 PM", title: "IPL AUCTION", type: "non-tech" },
    { time: "11:00 AM - 12:40 PM", title: "WEBTRIX REBUILD", type: "tech" },
    { time: "11:00 AM - 12:00 PM", title: "FREAKY LENS (INSTRUCTIONS)", type: "non-tech" },
    { time: "11:20 AM - 12:20 PM", title: "NEURAL NEXUS", type: "non-tech" },
    { time: "11:20 AM - 1:00 PM", title: "BOTTRIX BUILDER", type: "tech" },
    { time: "11:30 AM Onwards", title: "MOBILE APP DEV WITH FLUTTER", type: "workshop" },
    { time: "12:00 PM - 1:00 PM", title: "COSMIC VISION", type: "tech" },
    { time: "12:20 PM - 1:00 PM", title: "FREAKY LENS (FINALIZING)", type: "non-tech" },
    { time: "1:30 PM - 2:25 PM", title: "LUNCH BREAK", type: "common" },
    { time: "2:25 PM - 3:30 PM", title: "MIND MORPH CHALLENGE", type: "non-tech" },
    { time: "2:30 PM Onwards", title: "WEB APP DEV WITH STREAMLIT", type: "workshop" },
    { time: "2:25 PM - 3:30 PM", title: "DNA DECODE", type: "tech" },
    { time: "2:30 PM - 4:10 PM", title: "DNA HUNT", type: "non-tech" },
    { time: "2:30 PM - 4:10 PM", title: "DATA SPECTRUM", type: "tech" },
    { time: "3:00 PM - 4:00 PM", title: "GALACTIC INTEL HUNT", type: "tech" },
    { time: "4:10 PM ONWARDS", title: "VALEDICTORY", type: "common" },
];

const SchedulePage = () => {
    return (
        <div className="schedule-page">

            <div className="schedule-content">
                <h1 className="schedule-title">EVENT SCHEDULE</h1>

                <div className="legend-container">
                    <div className="legend-item"><span className="legend-color tech"></span> TECHNICAL</div>
                    <div className="legend-item"><span className="legend-color non-tech"></span> NON-TECHNICAL</div>
                    <div className="legend-item"><span className="legend-color workshop"></span> WORKSHOP</div>
                    <div className="legend-item"><span className="legend-color common"></span> COMMON EVENTS</div>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {scheduleData.map((event, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="timeline-content">
                                <div className={`event-card-inner ${event.type}`}>
                                    <div className="event-time">{event.time}</div>
                                    <h3 className="event-title">{event.title}</h3>
                                    <div className="event-type-badge">
                                        {event.type === 'tech' ? 'TECHNICAL' :
                                            event.type === 'non-tech' ? 'NON-TECHNICAL' :
                                                event.type === 'workshop' ? 'WORKSHOP' : 'COMMON'}
                                    </div>
                                </div>
                            </div>
                            <div className="timeline-dot"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SchedulePage;
