import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./index.css"
import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TechnicalEventsPage from "./pages/TechnicalEventsPage";
import TechnicalEventDetail from "./pages/TechnicalEventDetail";
import NonTechnicalEventsPage from "./pages/NonTechnicalEventsPage";
import NonTechnicalEventDetail from "./pages/NonTechnicalEventDetail";
import OmnitrixNav from "./components/OmnitrixNav";
import Packages from "./pages/Packages";
import SchedulePage from "./pages/SchedulePage";
import WorkshopsPage from "./pages/WorkshopsPage";
import GlobalAudio from "./components/GlobalAudio";

function App() {
  const location = useLocation();
  const isIntroPage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-black">
      <Routes>
        {/* FIRST PAGE */}
        <Route path="/" element={<IntroPage />} />

        {/* MAIN PAGES */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/technical" element={<TechnicalEventsPage />} />
        <Route path="/technical/:eventId" element={<TechnicalEventDetail />} />
        <Route path="/non-technical" element={<NonTechnicalEventsPage />} />
        <Route path="/non-technical/:eventId" element={<NonTechnicalEventDetail />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/packages" element={<Packages />} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* COMMON OMNITRIX NAV - Shows on all pages except intro */}
      {!isIntroPage && <OmnitrixNav />}

      {/* GLOBAL AUDIO PLAYER */}
      <GlobalAudio />
    </div>
  );
}

function Page({ title }) {
  return (
    <div style={{ color: "white", padding: "2rem" }}>
      {title}
    </div>
  );
}

export default App;
