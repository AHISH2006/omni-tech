
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import bgImage from "../assets/bg.png";
import heroTimeSound from "../assets/sounds/herotime.m4a";
import "../styles/intro.css";

export default function IntroPage() {
  const [startMotion, setStartMotion] = useState(false);
  const navigate = useNavigate();

  const handleActivate = () => {
    // Play the hero time sound
    const audio = new Audio(heroTimeSound);
    audio.play().catch(error => console.log("Audio playback failed:", error));

    setStartMotion(true);

    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="intro-page">
      {/* 🔥 Animated Background */}
      <motion.div
        className="intro-bg"
        style={{ backgroundImage: `url(${ bgImage })` }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Overlay Content */}
      {!startMotion && (
        <div className="intro-overlay">


          <button onClick={handleActivate} className="intro-activate-btn">
            <span className="btn-pulse"></span>
            <span className="btn-text">ACTIVATE OMNITECH</span>
            <span className="btn-icon">⚡</span>
          </button>
        </div>
      )}


    </div>
  );
}
