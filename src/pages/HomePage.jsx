import { motion, useMotionValue, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import OmnitrixBackground from "../components/Background";
import omniText from "../assets/omni-tech-full.png";
import deptLogo1 from "../assets/dept-logo-1.png";
import deptLogo2 from "../assets/dept-logo-2.png";
import collegeLogo from "../assets/college-logo.png";
import "../styles/home.css";
import { eventsData } from "../data/eventsData";
import ProductCard from "../components/ProductCard";
import ElectricBorder from "../components/Antigravity";
import AssociationHeadCard from "../components/AssociationHeadCard";
export default function HomePage() {
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();
  const x = useMotionValue(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="home-page">
      <OmnitrixBackground />

      <div className="home-entry">
        {/* All Three Logos - Top Right Corner */}
        <motion.div
          className="header-logos-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="https://www.instagram.com/tech_titans_23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="logo-link-right"
          >
            <motion.img
              src={deptLogo1}
              alt="Tech Titans"
              className="dept-logo-small"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </a>

          <a
            href="https://www.instagram.com/infozen_25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="logo-link-right"
          >
            <motion.img
              src={deptLogo2}
              alt="Into Zen"
              className="dept-logo-small"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </a>

          <a
            href="https://www.sugunace.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="logo-link-right"
          >
            <motion.img
              src={collegeLogo}
              alt="College Logo"
              className="dept-logo-small"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </a>
        </motion.div>

        {/* Main Content Container - No Scroll */}
        <div className="content-wrapper-no-scroll">
          {/* Department Headings */}
          <motion.h1
            className="dept-heading-main"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            DEPARTMENT OF ARTIFICIAL INTELLIGENCE & DATA SCIENCE<br />
            DEPARTMENT OF INFORMATION TECHNOLOGY
          </motion.h1>

          {/* Proudly Presents */}
          <motion.p
            className="proudly-presents"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            -Proudly Presents-
          </motion.p>

          <motion.img
            src={omniText}
            className="omni-text-integrated"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          />

          {/* Subtitle */}
          <motion.p
            className="symposium-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            A NATIONAL LEVEL INTER-COLLEGE
            <br />
            SYMPOSIUM
          </motion.p>

          {/* Event Date */}
          <motion.p
            className="event-date"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            March 15-16, 2026
          </motion.p>

          {/* Event Venue */}
          <motion.p
            className="event-venue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            VENUE: SUGUNA COLLEGE OF ENGINEERING , COIMBATORE
          </motion.p>

          {/* Cash Prize Text */}
          <motion.div
            className="cash-prize-container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: [1, 1.1, 1],
            }}
            transition={{
              delay: 2.4,
              duration: 1.5,
              scale: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }}
          >
            <span className="cash-prize-text">WIN EXCITING CASH PRIZES!</span>
          </motion.div>
        </div>

      </div>

      {/* =========================
          CHIEF GUEST SECTION
          ========================= */}
      <section id="chief-guest-section" className="chief-guest-section">
        <h2 className="events-title">CHIEF GUEST</h2>
        <p className="events-subtitle">Honoring our special guest</p>

        <div className="chief-guest-container">
          <ProductCard
            image="https://placehold.co/400x400/003300/00ff00?text=Chief+Guest"
            name="Dr. Albedo"
            dept="Galvan Assistant"
            description="A brilliant scientist from Galvan Prime, known for his work on the Omnitrix and deep understanding of genetic alteration."
          />
        </div>
      </section>

      {/* =========================
          EVENTS SECTION
          ========================= */}
      <section id="events-section" className="events-section">
        <h2 className="events-title">EVENTS</h2>
        <p className="events-subtitle">Explore our lineup of exciting events</p>

        <div
          className="events-showcase-wrapper"
          ref={carouselRef}
          onWheel={(e) => {
            const currentX = x.get();
            const newX = currentX - e.deltaY; // Convert vertical scroll to horizontal
            // Clamp value
            const clampedX = Math.max(Math.min(newX, 0), -width);
            x.set(clampedX);
          }}
        >
          {/* Navigation Buttons */}
          <button
            className="carousel-btn left"
            onClick={() => {
              const currentX = x.get();
              const newX = Math.min(currentX + 350, 0);
              animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
            }}
          >
            &#8249;
          </button>

          <button
            className="carousel-btn right"
            onClick={() => {
              const currentX = x.get();
              const newX = Math.max(currentX - 350, -width);
              animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
            }}
          >
            &#8250;
          </button>

          <motion.div
            className="events-showcase-track"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            style={{ x }}
          >
            {eventsData.map((event) => (
              <motion.div
                key={event.id}
                className={`event-showcase-card ${event.category.replace(/\s+/g, '-').toLowerCase()}`}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  zIndex: 10
                }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => {
                  if (event.category === 'Non Technical') {
                    navigate(`/non-technical/${event.id}`);
                  } else {
                    navigate('/technical');
                  }
                }}
              >
                <ElectricBorder
                  color={event.category === 'Technical' ? '#39ff14' : '#ff0055'}
                  className="w-full h-full"
                >
                  <div className="card-glass-effect"></div>
                  <div className="card-content">
                    {/* Poster Image */}
                    <div className="card-image-container">
                      <img
                        src={event.image || "https://placehold.co/600x400/000000/FFF?text=Event+Image"}
                        alt={event.title}
                        className="card-image"
                      />
                    </div>

                    <h3 className="card-title">{event.title}</h3>
                    {event.subtitle && <p className="card-subtitle">{event.subtitle}</p>}
                    <span className="card-category">{event.category}</span>
                    <div className="card-decoration-corn"></div>
                  </div>
                </ElectricBorder>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================
          SPEAKERS & PANELISTS SECTION
          ========================= */}
      <section id="speakers-section" className="speakers-section">
        <h2 className="events-title">SPEAKERS & PANELISTS</h2>
        <p className="events-subtitle">Meet our distinguished guests</p>

        <div className="speakers-grid">
          {speakersData.map((speaker) => (
            <ProductCard
              key={speaker.id}
              image={speaker.image}
              name={speaker.name}
              dept={speaker.dept}
            />
          ))}
        </div>
      </section>

      {/* =========================
          ASSOCIATION HEADS SECTION
          ========================= */}
      <section id="association-heads-section" className="association-heads-section">
        <div className="heads-section-overlay"></div>
        <h2 className="events-title">ASSOCIATION HEADS</h2>
        <p className="events-subtitle">Leading the Charge</p>

        <div className="heads-container">
          {/* Left Column: IT Department */}
          <div className="heads-column left-column">
            <h3 className="dept-title">DEPARTMENT OF IT</h3>
            <div className="heads-grid">
              {associationHeadsIT.map((head, index) => (
                <AssociationHeadCard
                  key={index}
                  name={head.name}
                  position={head.role}
                  number={head.number}
                  department="IT"
                />
              ))}
            </div>
          </div>

          {/* Right Column: AI&DS Department */}
          <div className="heads-column right-column">
            <h3 className="dept-title">DEPARTMENT OF AI&DS</h3>
            <div className="heads-grid">
              {associationHeadsAIDS.map((head, index) => (
                <AssociationHeadCard
                  key={index}
                  name={head.name}
                  position={head.role}
                  number={head.number}
                  department="AI&DS"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const associationHeadsIT = [
  { name: 'ANU J', role: 'PRESIDENT', number: '+91 6381313958' },
  { name: 'GNANA KAYANA C', role: 'SECRETARY', number: '+91 8668044227' },
  { name: 'KIRUBAKARAN K', role: 'TREASURER', number: '+91 9342801732' },
  { name: 'MATHAVAN S', role: 'VICE-PRESIDENT', number: '+91 8072456474' },
  { name: 'RAVICHANDRAN P', role: 'JOINT-SECRETARY', number: '+91 8248411493' },
  { name: 'HARSHVARNIKA S S', role: 'JOINT-TREASURER', number: '+91 9943250607' },
];

const associationHeadsAIDS = [
  { name: 'TANISHA GOVINDAN', role: 'PRESIDENT', number: '+91 8754324366' },
  { name: 'DURKESH A', role: 'SECRETARY', number: '+91 6383670489' },
  { name: 'VISHNU PRIYAN S', role: 'TREASURER', number: '+91 7604819632' },
  { name: 'KARTHIK RAJA R', role: 'VICE-PRESIDENT', number: '+91 9344471458' },
  { name: 'ARUN PRASATH M', role: 'JOINT-SECRETARY', number: '+91 9080659813' },
  { name: 'GNANA PRAKASH V', role: 'JOINT-TREASURER', number: '+91 7825996108' },
];



const speakersData = [
  { id: 1, name: "Dr. Azmuth", dept: "Galvan Prime", image: "https://placehold.co/400x400/003300/00ff00?text=Azmuth" },
  { id: 2, name: "Prof. Paradox", dept: "Time Travel", image: "https://placehold.co/400x400/003300/00ff00?text=Paradox" },
  { id: 3, name: "Max Tennyson", dept: "Plumbers", image: "https://placehold.co/400x400/003300/00ff00?text=Max" },
  { id: 4, name: "Gwen Tennyson", dept: "Mana Arts", image: "https://placehold.co/400x400/003300/00ff00?text=Gwen" },
  { id: 5, name: "Kevin Levin", dept: "Matter Absorption", image: "https://placehold.co/400x400/003300/00ff00?text=Kevin" },
  { id: 6, name: "Rook Blonko", dept: "Plumbers Academy", image: "https://placehold.co/400x400/003300/00ff00?text=Rook" },
  { id: 7, name: "Tetrax Shard", dept: "Bounty Hunter", image: "https://placehold.co/400x400/003300/00ff00?text=Tetrax" },
];
