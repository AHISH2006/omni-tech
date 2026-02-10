import { useState } from 'react';
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Removed unused React hooks
import OmnitrixBackground from "../components/Background";
import omniText from "../assets/omni-tech-full.png";
import workshopCard from "../assets/workshop_card.png";
import deptLogo1 from "../assets/dept-logo-1.png";
import deptLogo2 from "../assets/dept-logo-2.png";
import collegeLogo from "../assets/college-logo.png";
import techcard from "../assets/techcard.png";
import nontechcard from "../assets/non-techcard.png";
import "../styles/home.css";
import { eventsData } from "../data/eventsData";
import ProductCard from "../components/ProductCard";
// Removed ElectricBorder import
import AssociationHeadCard from "../components/AssociationHeadCard";

import panelist1 from "../assets/panelist1.png";
import panelist2 from "../assets/panelist2.png";
import panelist3 from "../assets/panelist3.png";
import panelist4 from "../assets/panelist4.png";
import panelist5 from "../assets/panelist5.png";
import panelist6 from "../assets/panelist6.png";
import panelist7 from "../assets/panelist7.png";
import panelist8 from "../assets/panelist8.jpeg"
import panelist9 from "../assets/panelist9.jpeg"
export default function HomePage() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // Removed carousel state and logic

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


        </motion.div>

        {/* Main Content Container - No Scroll */}
        <div className="content-wrapper-no-scroll">
          {/* Central College Logo */}
          <a href="https://www.sugunace.com/" target="_blank">
            <motion.div
              className="college-logo-container-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <img src={collegeLogo} alt="College Logo" className="college-logo-main" />
            </motion.div>
          </a>
          {/* Department Headings */}
          <motion.h1
            className="dept-heading-main"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE<br />&<br />
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
            March 06, 2k26
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

          {/* Overall Trophy Text */}
          <motion.div
            className="trophy-container"
          >
            <span className="trophy-text">
              🏆 OVERALL TROPHY FOR THE COLLEGE BAGGING MAXIMUM PRIZES 🏆
            </span>
          </motion.div>
        </div>

      </div>



      {/* =========================
          EVENTS SECTION
          ========================= */}
      <section id="events-section" className="events-section">
        <div className="events-section-overlay"></div>
        <h2 className="events-title">EVENTS</h2>
        <p className="events-subtitle">Explore our lineup of exciting events</p>

        <div className="events-grid-container">
          {/* NEW CATEGORY CARDS - JUST 3 CARDS */}
          {[
            {
              id: "technical",
              title: "TECHNICAL EVENTS",
              subtitle: "Showcase your coding prowess",
              image: techcard,
              link: "/technical",
              type: "technical",
            },
            {
              id: "non-technical",
              title: "NON-TECHNICAL EVENTS",
              subtitle: "Unleash your creativity",
              image: nontechcard,
              link: "/non-technical",
              type: "non-technical",
            },
            {
              id: "workshop",
              title: "WORKSHOPS",
              subtitle: "Welcome to Grandpa's Workshop!",
              image: workshopCard,
              link: "/workshops",
              type: "workshop",
            },
          ].map((card) => (
            <motion.div
              key={card.id}
              className={`event-product-card ${card.type}`}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(card.link)}
            >
              {/* Background Image */}
              <img src={card.image} className="event-bg" />

              {/* Overlay */}
              <div className="event-overlay"></div>

              {/* Content */}
              <div className="event-content">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>

                <button className="event-btn">EXPLORE</button>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Note about Laptop Requirement */}
        <p className="event-requirement-note">
          Note: Students Participating in Technical Events / attending workshops must bring their own Laptop
        </p>
      </section>

      {/* =========================
          SPEAKERS & PANELISTS SECTION
          ========================= */}
      <section id="speakers-section" className="speakers-section">
        <h2 className="events-title">PANEL OF JUDGES</h2>

        <div className="speakers-carousel-container">
          <button className="carousel-nav-btn left" onClick={() => {
            const container = document.querySelector('.speakers-grid');
            container.scrollBy({ left: -300, behavior: 'smooth' });
          }}>
            &#10094;
          </button>

          <div className="speakers-grid">
            {speakersData.map((speaker) => (
              <ProductCard
                key={speaker.id}
                image={speaker.image}
                name={speaker.name}
                dept={speaker.dept}
                description={speaker.description}
                isEmpty={speaker.isEmpty}
              />
            ))}
          </div>

          <button className="carousel-nav-btn right" onClick={() => {
            const container = document.querySelector('.speakers-grid');
            container.scrollBy({ left: 300, behavior: 'smooth' });
          }}>
            &#10095;
          </button>
        </div>
      </section>

      {/* =========================
          FAQ SECTION
          ========================= */}
      <section id="faq-section" className="faq-section">
        <h2 className="events-title">QUERIES</h2>
        <p className="events-subtitle">Common Questions & Answers</p>

        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
              <div className="faq-header">
                <h3 className="faq-question">{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
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
          {/* Left Column: AI&DS Department */}
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

          {/* Right Column: IT Department */}
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

        </div>
      </section>


      {/* =========================
          WEBSITE DEVELOPED BY SECTION
          ========================= */ }
      <section id="developers-section" className="developers-section">
        <h2 className="events-title">WEBSITE DEVELOPED BY</h2>
        <div className="developers-grid">
          {websiteDevelopers.map((dev, index) => (
            <div key={index} className="developer-card">
              <div className="developer-info">
                <h3 className="developer-name">{dev.name}</h3>
                <p className="developer-details">{dev.year} - {dev.dept}</p>
              </div>
              <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                <Linkedin size={24} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div >
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

const websiteDevelopers = [
  { name: "AHISH SM", year: "3rd Year", dept: "AI&DS", linkedin: "https://www.linkedin.com/in/ahishsm/" },
  { name: "KARTHIKEYAN B", year: "3rd Year", dept: "AI&DS", linkedin: "https://www.linkedin.com/in/-karthikeyanb" },
  { name: "PRAKASH K", year: "3rd Year", dept: "AI&DS", linkedin: "https://www.linkedin.com/in/prakash-k-a37bb93ab" },
  { name: "SHOBIKA R", year: "3rd Year", dept: "IT", linkedin: "http://www.linkedin.com/in/shobika-r-47987b355" },
];

const speakersData = [
  {
    id: '8',
    name: "SACHIN NANDHA SABARISH . J",
    dept: "Learnlogicify Technologies LLP",
    image: panelist8,
    description: "Founder and CEO",

  },
  {
    id: '9',
    name: "DHINAKARAN S N",
    dept: "Video Creator/ Editor",
    image: panelist9,
    description: "CoolFire Media",

  },
  {
    id: 1,
    name: "Mrs. C. Eyamini, M.E. (Ph.D)",
    dept: "SCE - AP | DEPT. - AI&DS",
    image: panelist7,
    description: "Expertise: Data Science and Cybersecurity"
  },
  {
    id: 2,
    name: "Mr. C. Vignesh Manikandan, M.E",
    dept: "SCE - AP | DEPT. - AI&DS",
    image: panelist2,
    description: "Expertise: Data Analytics"
  },
  {
    id: 3,
    name: "Mrs. C. Rajanayaki @ Sindhuja, M.E",
    dept: "SCE - AP | DEPT. - AI&DS",
    image: panelist3,
    description: "Expertise: Computer Vision and Artificial Intelligence"
  },

  {
    id: 4,
    name: "Mrs. Suganya A, M.E., M.B.A",
    dept: "SCE - AP | DEPT. - IT",
    image: panelist5,
    description: "Expertise: Networks"
  },
  {
    id: 5,
    name: "Mr. S. Sivaraja, M.E",
    dept: "SCE - AP | DEPT. - AI&DS",
    image: panelist6,
    description: "Expertise: Cloud Computing"
  },
  {
    id: 6,
    name: "Ms. Gayathri , M.E.",
    dept: "SCE - AP | DEPT. - IT",
    image: panelist4,
    description: "Expertise: Networks"
  },
  {
    id: 7,
    name: "Mrs. K. Kanakambal , M.E",
    dept: "SCE - AP | DEPT. - AI&DS",
    image: panelist1,
    description: "Expertise: Computer Science"
  },
];

const faqData = [
  {
    question: "1. What is OMNI-TECH?",
    answer: "OMNI-TECH is a national-level technical symposium aimed at promoting engineering creativity through technical events, non-technical events, and workshops."
  },
  {
    question: "2. Who can participate in OMNI-TECH?",
    answer: "The symposium is open to students from engineering colleges and universities across India. Participation may be individual or team-based depending on the event."
  },
  {
    question: "3. What types of events are conducted?",
    answer: "OMNI-TECH features a wide range of events including: Technical competitions, Coding & data challenges, Gaming and auction-based events, and Hands-on workshops (2 workshops will be conducted)."
  },
  {
    question: "4. Can I participate in more than one event?",
    answer: "Yes, participants can take part in multiple events based on the pass package they choose. Participation is governed by the Silver, Gold, and Diamond pass packages, with the number of events varying according to the selected pass."
  },
  {
    question: "5. Is there any registration fee?",
    answer: "Yes, the registration fee is based on the selected pass package. Fee details vary for Silver, Gold, and Diamond packages. Participants are requested to go through the packages section for complete fee information."
  },
  {
    question: "6. How do I register for the symposium?",
    answer: "Participants can click the Register button, which will redirect them to the registration page. Fill in the required details and confirm the payment to complete the registration."
  },
  {
    question: "7. Will certificates be provided?",
    answer: "Yes, participation certificates will be issued to all registered participants, and winner certificates will be awarded to top performers."
  },
  {
    question: "8. Are there prizes for winners?",
    answer: "Yes, exciting prizes and recognition will be awarded to winners of each event."
  },
  {
    question: "9. What should participants bring on the event day?",
    answer: "Participants must carry: College ID card, Event registration confirmation, Personal laptop (mandatory for all technical events), and any additional equipment required for specific events."
  },
  {
    question: "10. How can I contact the organizers?",
    answer: "You can contact the organizing team through Student and faculty coordinators mentioned on the symposium poster."
  }
];
