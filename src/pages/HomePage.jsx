import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import OmnitrixBackground from "../components/Background";
import omniText from "../assets/omni-tech-full.png";
import deptLogo1 from "../assets/dept-logo-1.png";
import deptLogo2 from "../assets/dept-logo-2.png";
import collegeLogo from "../assets/college-logo.png";
import "../styles/home.css";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const navigate = useNavigate();
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
            href="https://your-dept1-website.com"
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
            href="https://your-dept2-website.com"
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
            href="https://your-college-website.com"
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

        <motion.div
          className="events-grid"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {eventsData.map((event) => (
            <motion.div
              key={event.id}
              className={`event-card ${event.size} ${event.category.replace(/\s+/g, '-').toLowerCase()}`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }
                }
              }}
              whileHover={{ scale: 1.02, filter: "brightness(1.2)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/${event.id}`)}
            >
              <div className="card-content">
                <h3 className="card-title">{event.title}</h3>
                {event.subtitle && <p className="card-subtitle">{event.subtitle}</p>}
                <span className="card-category">{event.category}</span>
                <div className="card-decoration"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
    </div>
  );
}

const eventsData = [
  // Technical
  { id: 'web-duplication', title: 'QuestX', category: 'Non Technical', size: 'medium' }, // Renaming based on image reference if visible, checking user text explicitly
  // User text list: technical: Web Duplication etc. image has "QuestX Non Technical", "ForceCoders Technical".
  // User provided list: Technical Events: Web Duplication, Chatbot Building, VR/AI, Google-based, Escape Code, Data Visualization.
  // I should stick to the USER PROVIDED LIST in the prompt text, but use the LAYOUT from the image.
  // User Text: 
  // Technical: Web Duplication, Chatbot Building, VR/AI Video Generation, Google-based Challenges, Escape Code, Data Visualization
  // Non-Technical: Connection, Start Music, E-Sports, Anime Verse, Treasure Hunt, Photography, IPL Auction
  // Workshops: Workshop 1, Workshop 2

  // I will map these to sizes to make a bento grid.

  // Row 1
  { id: 'web-duplication', title: 'Web Duplication', category: 'Technical', size: 'large' },
  { id: 'chatbot', title: 'Chatbot Building', category: 'Technical', size: 'medium' },

  // Row 2
  { id: 'vr-ai-video', title: 'VR/AI Video Gen', category: 'Technical', size: 'medium' },
  { id: 'google-challenge', title: 'Google Challenges', category: 'Technical', size: 'large' },

  // Row 3
  { id: 'escape-code', title: 'Escape Code', category: 'Technical', size: 'medium' },
  { id: 'data-vis', title: 'Data Visualization', category: 'Technical', size: 'medium' },

  // Non-Technical
  { id: 'connection', title: 'Connection', category: 'Non Technical', size: 'medium' },
  { id: 'start-music', title: 'Start Music', category: 'Non Technical', size: 'medium' },
  { id: 'esports', title: 'E-Sports', category: 'Non Technical', size: 'large' },
  { id: 'anime-verse', title: 'Anime Verse', category: 'Non Technical', size: 'medium' },
  { id: 'treasure-hunt', title: 'Treasure Hunt', category: 'Non Technical', size: 'medium' },
  { id: 'photography', title: 'Photography', category: 'Non Technical', size: 'medium' },
  { id: 'ipl-auction', title: 'IPL Auction', category: 'Non Technical', size: 'large' },

  // Workshops
  { id: 'workshop-1', title: 'Workshop 1', subtitle: 'Morning Session', category: 'Workshop', size: 'wide' },
  { id: 'workshop-2', title: 'Workshop 2', subtitle: 'Afternoon Session', category: 'Workshop', size: 'wide' },
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
