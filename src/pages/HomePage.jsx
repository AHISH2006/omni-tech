import { motion } from "framer-motion";
import "../styles/home.css";

export default function Home() {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="home-overlay"></div>

      <div className="home-content">
        <h1 className="home-title">
          <span>OMNI</span>
          <span>TECH</span>
        </h1>
        <p className="home-tagline">Future Activated</p>
      </div>
    </motion.div>
  );
}
