import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgVideo from "../assets/bg.mp4";
import entryAudio from "../assets/entry.mp3";
import omniO from "../assets/omni-o.png";
import "../styles/intro.css";

export default function IntroPage({ onStart }) {
  const [showButton, setShowButton] = useState(true);
  const [startMotion, setStartMotion] = useState(false);

  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current?.load();
  }, []);

  const handleActivate = () => {
    setShowButton(false);
    audioRef.current?.play().catch(() => {});
    videoRef.current?.play().catch(() => {});
  };

  // 🎬 When video ends → start Omnitrix motion
  const handleVideoEnd = () => {
    setStartMotion(true);

    // Allow animation to finish before Home
    setTimeout(() => {
      onStart?.();
    }, 2400);
  };

  return (
    <div className="intro-page">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="intro-video"
        src={bgVideo}
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
      />

      {/* Audio */}
      <audio ref={audioRef} src={entryAudio} preload="auto" />

      {/* Overlay */}
      {!startMotion && (
        <div className="intro-overlay">
          <div className="intro-header">
            <h1 className="intro-title">
              <span className="title-line">OMNI</span>
              <span className="title-line">VERSE</span>
            </h1>
            <div className="title-underline"></div>
            <p className="intro-tagline">It's Hero Time</p>
          </div>

          {showButton && (
            <button onClick={handleActivate} className="intro-activate-btn">
              <span className="btn-pulse"></span>
              <span className="btn-text">ACTIVATE OMNITRIX</span>
              <span className="btn-icon">⚡</span>
            </button>
          )}
        </div>
      )}

      {/* 🟢 OMNITRIX O MOTION */}
      <AnimatePresence>
        {startMotion && (
<motion.img
  src={omniO}
  className="fixed left-1/2 top-1/2 z-50 pointer-events-none"
  style={{
    width: "140px",
    transformOrigin: "50% 50%",
  }}
  initial={{
    scale: 8,
    x: "-50%",
    y: "-50%",
    opacity: 1,
    filter: "blur(6px)",
  }}
  animate={{
    scale: 1,
    x: "-50%",
    y: "-180px",
    filter: "blur(0px)",
  }}
  transition={{
    duration: 2.2,
    ease: [0.22, 1, 0.36, 1], // cinematic easeOut
  }}
/>

        )}
      </AnimatePresence>
    </div>
  );
}
