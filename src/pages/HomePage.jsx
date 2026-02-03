import { motion } from "framer-motion";
import OmnitrixNav from "../components/omnitrixNav";
import omniO from "../assets/omni-o.png";
import omniText from "../assets/omni-tech-full.svg";
import deptLogo1 from "../assets/dept-logo-1.png";
import deptLogo2 from "../assets/dept-logo-2.png";

import "../styles/home.css";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* HOME STATIC CONTENT */}
      <div className="home-entry">
        {/* TOP DEPARTMENT LOGOS */}
        <motion.div
          className="dept-logos-row"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <img src={deptLogo1} alt="Tech Titans" className="dept-logo" />
          <img src={deptLogo2} alt="Into Zen" className="dept-logo" />
        </motion.div>

        {/* INTEGRATED LOGO: OMNI-O + TEXT */}
        <div className="logo-container">
          {/* OMNI-O (integrated with text) */}
          <motion.img
            src={omniO}
            className="omni-o-integrated"
            initial={{ scale: 14, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* OMNITRIX TEXT */}
          <motion.img
            src={omniText}
            className="omni-text-integrated"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        </div>

        {/* SUBTITLE */}
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          A National Level Inter-College Symposium
        </motion.p>

        {/* EVENT DATE & INFO */}
        <motion.div
          className="event-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          <div className="event-date">
            <span className="date-label">Event Date:</span>
            <span className="date-value">March 15-16, 2026</span>
          </div>
          <div className="event-venue">
            <span className="venue-icon">📍</span>
            <span className="venue-text">Your College Name</span>
          </div>
        </motion.div>
      </div>

      <OmnitrixNav />
    </div>
  );
}
