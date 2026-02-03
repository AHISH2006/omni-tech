import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import OmnitrixBackground from "../components/Background";
import omniText from "../assets/omni-tech-full.png";
import deptLogo1 from "../assets/dept-logo-1.png";
import deptLogo2 from "../assets/dept-logo-2.png";
import alienBg from "../assets/alien-x-new.png"



import "../styles/home.css";

export default function HomePage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the parallax movement
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  // Map mouse position to movement ranges
  const moveX = useTransform(springX, [-0.5, 0.5], ["-2%", "2%"]);
  const moveY = useTransform(springY, [-0.5, 0.5], ["-2%", "2%"]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [2, -2]); // Subtle tilt
  const rotateY = useTransform(springX, [-0.5, 0.5], [-2, 2]); // Subtle tilt

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize to -0.5 to 0.5
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };
  return (
    <div className="home-page" onMouseMove={handleMouseMove}>
      {/* =========================
          CINEMATIC BACKGROUND
      ========================= */}
      <OmnitrixBackground />

      {/* Alien X Image Element */}
      <motion.img
        src={alienBg}
        alt="Alien X"
        className="home-alien-image"
        style={{
          x: moveX,
          y: moveY,
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        animate={{
          scale: [1, 1.05, 1],
          filter: [
            "brightness(0.7) contrast(1.1)",
            "brightness(1) contrast(1.2)",
            "brightness(0.7) contrast(1.1)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* =========================
          FOREGROUND CONTENT
      ========================= */}
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

        {/* OMNI LOGO SYSTEM */}
        <div className="logo-container">
          {/* OMNI-O */}


          {/* OMNI-TECH TEXT */}
          <motion.img
            src={omniText}
            className="omni-text-integrated"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              ease: "easeOut",
            }}
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

        {/* EVENT INFO */}
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
      </div>
    </div>
  );
}