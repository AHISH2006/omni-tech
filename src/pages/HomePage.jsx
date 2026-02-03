import { motion } from "framer-motion";
import OmnitrixBackground from "../components/Background";
import omniText from "../assets/omni-tech-full.png";
import deptLogo1 from "../assets/dept-logo-1.png";
import deptLogo2 from "../assets/dept-logo-2.png";
import "../styles/home.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <OmnitrixBackground />
      {/* Foreground */}
      <div className="home-entry">

        <motion.div
          className="header-section"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="dept-logos-row">
            <a className="logo-link">
              <img src={deptLogo1} alt="Tech Titans" className="dept-logo" />
            </a>
            <a className="logo-link">
              <img src={deptLogo2} alt="Into Zen" className="dept-logo" />
            </a>
          </div>

          <a className="college-logo-link">
            <div className="college-logo-placeholder">
              <span>College Logo</span>
            </div>
          </a>
        </motion.div>

    
        {/* Heading (NO JSX WHITESPACE GAPS) */}
    <motion.div className="full-home">
        <motion.h1
          className="dept-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          DEPARTMENTS OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE<br />
          &amp; INFORMATION TECHNOLOGY PRESENT
        </motion.h1>

        {/* Omni Tech */}
        <motion.img
          src={omniText}
          className="omni-text-integrated"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        />

        {/* Subtitle */}
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          A National Level Inter-College Symposium
        </motion.p>

        {/* Event Info */}
        <motion.div
          className="event-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          <div className="event-date">
            <span className="date-label">Event Date:</span>
            <span className="date-value">March 15–16, 2026</span>
          </div>

          <div className="event-venue">
            <span className="venue-icon">📍</span>
            <span className="venue-text">Your College Name</span>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
