import { motion } from "framer-motion";
import omniO from "./assets/omni-o.svg";
import omniTech from "./assets/omni-tech.svg";

export default function OmnitrixIntro({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.2, duration: 0.6 }}
      onAnimationComplete={onFinish}
    >
      {/* O LOGO */}
      <motion.img
        src={omniO}
        className="absolute w-64"
        initial={{ scale: 4, y: 0 }}
        animate={{
          scale: 1,
          y: -260,   // moves to header position
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* FULL LOGO */}
      <motion.img
        src={omniTech}
        className="w-[420px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 2,
          duration: 0.6,
        }}
      />
    </motion.div>
  );
}
