import { motion } from "framer-motion";
import "../styles/OmnitrixBackground.css";

export default function OmnitrixBackground() {
  return (
    <div className="omni-bg-wrapper">
      {/* Base dark layer */}
      <div className="omni-bg-base" />

      {/* Moving diagonal lines */}
      <motion.div
        className="omni-lines omni-lines-1"
        animate={{ backgroundPositionY: ["0%", "100%"] }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="omni-lines omni-lines-2"
        animate={{ backgroundPositionY: ["100%", "0%"] }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Soft glow */}
      <div className="omni-glow" />
    </div>
  );
}
