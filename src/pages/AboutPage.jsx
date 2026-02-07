import '../styles/about.css'
import deptLogo from '../assets/dept-logo-1.png'
import deptLogo2 from '../assets/dept-logo-2.png'
import Antigravity from '../components/Antigravity'
import ADS_HOD from '../assets/ADS_HOD.png'
import IT_HOD from '../assets/IT_HOD.png'
export default function AboutPage() {
  return (
    <main className="about-page">

      <header className="about-hero">
        <div className="hero-content">
          <h1>About OMNI TECH</h1>
        </div>
      </header>

      <section className="about-section">
        <div className="section-header">
          <div className="glow-icon"></div>
          <h2>OMNI TECH</h2>
        </div>
        <ul className="about-list">
          <li>
            <strong>Visionary Innovation:</strong> Redefining the future with cutting-edge AI and scalable digital solutions.
          </li>
          <li>
            <strong>Collaborative Ecosystem:</strong> A premier platform for unmatched technical growth, networking, and expert mentorship.
          </li>
          <li>
            <strong>High-Stakes Competition:</strong> Showcasing top-tier talent with <span className="highlight-text">exciting cash prizes</span> for the most revolutionary ideas.
          </li>
          <li>
            <strong>Real-World Impact:</strong> Transforming concepts into reality through immersive learning and intelligent systems.
          </li>
        </ul>
      </section>

      <section className="organizers-section-bordered">
        <h2 className="organizers-title">JOINT ORGANIZERS</h2>
        <div className="organizers-content">
          <div className="organizer-column">
            <h3>Department of Artificial Intelligence and Data Science</h3>
            <div className="logo-container">
              <img src={deptLogo} alt="AI Dept Logo" className="circular-dept-logo" />
            </div>
            <p className="dept-description">
              The Department of Artificial Intelligence is dedicated to advancing the frontiers of intelligent systems and machine learning. Through a curriculum rooted in computational logic and data science, it empowers students to design innovative solutions that address complex real-world challenges.
            </p>
            <img src={ADS_HOD} alt="ADS HOD" className="dept-photo" />
            <div className="hod-details">
              <div className="hod-designation">HEAD OF THE DEPARTMENT</div>
              <div className="hod-name">Dr. P. Arulprakash, M.E., Ph.D</div>
            </div>
          </div>

          <div className="divider-vertical"></div>

          <div className="organizer-column">
            <h3>Department of Information Technology</h3>
            <div className="logo-container">
              <img src={deptLogo2} alt="IT Dept Logo" className="circular-dept-logo" />
            </div>
            <p className="dept-description">
              The Department of Information Technology fosters excellence in computing infrastructure, software engineering, and digital connectivity. It is committed to equipping future professionals with the technical adaptability and strategic insight required to drive the rapidly evolving global digital landscape.
            </p>
            <img src={IT_HOD} alt="IT HOD" className="dept-photo" />
            <div className="hod-details">
              <div className="hod-designation">HEAD OF THE DEPARTMENT</div>
              <div className="hod-name">Ms. B. Mythily, M.E. (Ph.D)</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>© {new Date().getFullYear()} OMNI TECH | Powered by Innovation</p>
      </footer>
    </main>
  )
}
