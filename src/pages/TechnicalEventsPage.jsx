import { motion } from "framer-motion";
import "../styles/technical-events.css";

const technicalEvents = [
    "Web Duplication",
    "Chatbot Building",
    "VR / AI Video Generation",
    "Google-based Challenges",
    "Escape Code",
    "Data Visualization",
];

export default function TechnicalEventsPage() {
    return (
        <div className="tech-events-page">
            {/* PAGE HEADER */}
            <motion.div
                className="tech-events-header"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="tech-title">TECHNICAL EVENTS</h1>
                <p className="tech-subtitle">
                    Showcase your skills. Think fast. Build smarter.
                </p>
            </motion.div>

            {/* EVENTS GRID */}
            <div className="tech-events-grid">
                {technicalEvents.map((event, index) => (
                    <motion.div
                        key={event}
                        className="tech-event-card"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.15,
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 35px rgba(34,197,94,0.8)",
                        }}
                    >
                        <span className="event-index">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="event-name">{event}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
