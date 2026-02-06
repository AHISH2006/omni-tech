
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import bgImage from "../assets/bg.png";
import heroTimeSound from "../assets/sounds/herotime.m4a";
import "../styles/intro.css";

export default function IntroPage() {
  const [startMotion, setStartMotion] = useState(false);
  const [showAudioModal, setShowAudioModal] = useState(false);
  const navigate = useNavigate();

  const handleActivateClick = () => {
    // Show modal instead of immediate navigation
    setShowAudioModal(true);
  };

  const handleAudioChoice = (allowed) => {
    // 1. Play effect sound
    const audio = new Audio(heroTimeSound);
    audio.play().catch(error => console.log("Audio playback failed:", error));

    // 2. Save preference
    localStorage.setItem("omni_audio_allowed", allowed.toString());

    // 3. Dispatch event for GlobalAudio component
    window.dispatchEvent(new Event("audio-permission-change"));

    // 4. Start Animations
    setStartMotion(true);
    setShowAudioModal(false);

    // 5. Navigate after delay
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="intro-page">
      {/* 🔥 Animated Background */}
      <motion.div
        className="intro-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Overlay Content */}
      {!startMotion && !showAudioModal && (
        <div className="intro-overlay">
          <button onClick={handleActivateClick} className="intro-activate-btn">
            <span className="btn-pulse"></span>
            <span className="btn-text">ACTIVATE OMNITECH</span>
            <span className="btn-icon">⚡</span>
          </button>
        </div>
      )}

      {/* Audio Permission Modal */}
      {showAudioModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0a0a0a] border-2 border-[#39ff14] p-8 rounded-xl max-w-sm w-full text-center shadow-[0_0_30px_rgba(57,255,20,0.3)]"
          >
            <h2 className="text-2xl font-bold text-[#39ff14] mb-4 font-['Orbitron'] tracking-widest">
              SYSTEM AUDIO
            </h2>
            <p className="text-gray-300 mb-8 font-mono">
              Initialize auditory feedback systems for immersive experience?
            </p>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleAudioChoice(true)}
                className="w-full py-3 bg-[#39ff14] text-black font-bold font-['Orbitron'] tracking-widest hover:bg-white hover:shadow-[0_0_15px_#39ff14] transition-all"
              >
                INITIALIZE (YES)
              </button>

              <button
                onClick={() => handleAudioChoice(false)}
                className="w-full py-3 border border-[#39ff14] text-[#39ff14] font-bold font-['Orbitron'] tracking-widest hover:bg-[#39ff14]/20 transition-all"
              >
                MUTE (NO)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
