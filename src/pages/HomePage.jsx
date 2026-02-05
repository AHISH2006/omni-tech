import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import OmnitrixBackground from "../components/Background";
import omniText from "../assets/omni-tech-full.png";
import deptLogo1 from "../assets/dept-logo-1.png";
import deptLogo2 from "../assets/dept-logo-2.png";
import collegeLogo from "../assets/college-logo.png";
import panelist1 from "../assets/panelist1.png";
import panelist2 from "../assets/panelist2.png";
import panelist3 from "../assets/panelist3.png";
import panelist4 from "../assets/panelist4.png";
import panelist5 from "../assets/panelist5.png";
import panelist6 from "../assets/panelist6.png";
import "../styles/home.css";
import ProductCard from "../components/ProductCard";
import ElectricBorder from "../components/Antigravity";
import AssociationHeadCard from "../components/AssociationHeadCard";
export default function HomePage() {
  const navigate = useNavigate();

  // Carousel State
  // Carousel State
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Consider tablet as mobile/carousel view if needed, or stick to 768. User said "mobile display". Let's use 768.
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Using 1024 to ensure tablets also get the carousel if desired, or stick to 768 for strict mobile. "view all... in desktop". Let's assume < 1024 is non-desktop (tablet/mobile).
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % speakersData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + speakersData.length) % speakersData.length);
  };


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

        <div className="events-grid-container">
          {eventsData.map((event) => (
            <motion.div
              key={event.id}
              className={`event-showcase-card ${event.category.replace(/\s+/g, '-').toLowerCase()}`}
              whileHover={{
                scale: 1.02,
                zIndex: 10
              }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => navigate(`/${event.id}`)}
            >
              <ElectricBorder
                color={
                  event.category === 'Technical' ? '#39ff14' :
                    event.category === 'Non Technical' ? '#ff0000' :
                      '#00f3ff' // Workshops or others
                }
                className="w-full h-full"
              >
                <div className="card-glass-effect"></div>
                <div className="card-content">
                  {/* Poster Image */}
                  <div className="card-image-container">
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="card-image"
                      />
                    )}
                  </div>

                  <h3 className="card-title">{event.title}</h3>
                  {event.description && <p className="card-subtitle">{event.description}</p>}
                  <span className="card-category">{event.category}</span>
                  <div className="card-decoration-corn"></div>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================
          SPEAKERS & PANELISTS SECTION
          ========================= */}
      <section id="speakers-section" className="speakers-section">
        <h2 className="events-title">JUDGING PANELS</h2>
        <p className="events-subtitle">Meet our distinguished guests</p>

        {/* Desktop View: Grid Layout (All Cards) */}
        {!isMobile ? (
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
        ) : (
          /* Mobile View: Carousel with Arrows */
          <div className="carousel-container">
            <button className="carousel-nav-btn left" onClick={prevSlide}>&#8249;</button>

            <div className="speakers-carousel-track">
              <AnimatePresence mode='popLayout'>
                <motion.div
                  key={`${speakersData[currentIndex].id}-${currentIndex}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="carousel-item"
                  style={{ width: '100%' }}
                >
                  <ProductCard
                    image={speakersData[currentIndex].image}
                    name={speakersData[currentIndex].name}
                    dept={speakersData[currentIndex].dept}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="carousel-nav-btn right" onClick={nextSlide}>&#8250;</button>
          </div>
        )}
      </section>

      {/* =========================
          FAQ SECTION
          ========================= */}
      <section id="faq-section" className="faq-section">
        <h2 className="events-title">PARTICIPANT QUERIES</h2>
        <p className="events-subtitle">Frequently Asked Questions</p>

        <div className="faq-container">
          {faqData.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
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

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`faq-item ${isOpen ? 'open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="faq-question">
        <h3>{faq.question}</h3>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const faqData = [
  {
    question: "What is OMNI-TECH?",
    answer: "OMNI-TECH is a national-level technical symposium aimed at promoting engineering creativity through technical events, non-technical events, and workshops."
  },
  {
    question: "Who can participate in OMNI-TECH?",
    answer: "The symposium is open to students from engineering colleges and universities across India. Participation may be individual or team-based depending on the event."
  },
  {
    question: "What types of events are conducted?",
    answer: "OMNI-TECH features a wide range of events including: Technical competitions, Coding & data challenges, Gaming and auction-based events, and Hands-on workshops (2 workshops will be conducted)."
  },
  {
    question: "Can I participate in more than one event?",
    answer: "Yes, participants can take part in multiple events based on the pass package they choose. Participation is governed by the Silver, Gold, and Diamond pass packages, with the number of events varying according to the selected pass."
  },
  {
    question: "Is there any registration fee?",
    answer: "Yes, the registration fee is based on the selected pass package. Fee details vary for Silver, Gold, and Diamond packages. Participants are requested to go through the packages section for complete fee information."
  },
  {
    question: "How do I register for the symposium?",
    answer: "Participants can click the Register button, which will redirect them to the registration page. Fill in the required details and confirm the payment to complete the registration."
  },
  {
    question: "Will certificates be provided?",
    answer: "Yes, participation certificates will be issued to all registered participants, and winner certificates will be awarded to top performers."
  },
  {
    question: "Are there prizes for winners?",
    answer: "Yes, exciting prizes and recognition will be awarded to winners of each event."
  },
  {
    question: "What should participants bring on the event day?",
    answer: "Participants must carry: College ID card, Event registration confirmation, Personal laptop (mandatory for all technical events), and any additional equipment required for specific events."
  },
  {
    question: "How can I contact the organizers?",
    answer: "You can contact the organizing team through Email: omnitech2k26sce@gmail.com, or reach out to the student and faculty coordinators mentioned on the symposium poster."
  }
];

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

const eventsData = [
  { id: 'technical', title: 'Technical Events', category: 'Technical', description: 'Showcase your technical prowess', image: null },
  { id: 'non-technical', title: 'Non-Technical Events', category: 'Non Technical', description: 'Fun and engaging activities', image: null },
  { id: 'workshops', title: 'Workshops', category: 'Workshops', description: 'Hands-on learning experiences', image: null },
];

const speakersData = [
  { id: 1, name: "Mrs. K. Kanakambal , M.E", dept: "Expertise: Cybersecurity", image: panelist1 },
  { id: 2, name: "Mr. S. Sivaraja, M.E", dept: "Expertise: Cloud Computing", image: panelist2 },
  { id: 3, name: "Mrs. Suganya A, M.E., M.B.A", dept: "Expertise: Networks", image: panelist3 },
  { id: 4, name: "Ms. Gayathri , M.E.", dept: "Expertise: Networks", image: panelist4 },
  { id: 5, name: "Mrs. C. Rajanayaki @ Sindhuja, M.E", dept: "Expertise: Computer Vision and Artificial Intelligence", image: panelist5 },
  { id: 6, name: "Mr. C. Vignesh Manikadan, M.E", dept: "Expertise: Data Analytics", image: panelist6 },
  { id: 7, name: "Mrs. C. Eyamini, M.E. (Ph.D)", dept: "Expertise: Data Science and Cybersecurity", image: "https://placehold.co/400x400/003300/00ff00?text=Tetrax" },
];
