import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./index.css"
import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";
import TechnicalEventsPage from "./pages/TechnicalEventsPage";
import NonTechnicalEventsPage from "./pages/NonTechnicalEventsPage";
import NonTechnicalEventDetail from "./pages/NonTechnicalEventDetail";
import OmnitrixNav from "./components/omnitrixNav";

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
        <Route path="/about" element={<Page title="About Page (Coming Soon)" />} />
        <Route path="/events" element={<Page title="Events Page (Coming Soon)" />} />
        <Route path="/workshops" element={<Page title="Workshops Page (Coming Soon)" />} />
        <Route path="/technical" element={<TechnicalEventsPage />} />
        <Route path="/non-technical" element={<NonTechnicalEventsPage />} />
        <Route path="/non-technical/:eventId" element={<NonTechnicalEventDetail />} />
        <Route path="/packages" element={<Page title="Packages Page (Coming Soon)" />} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* COMMON OMNITRIX NAV - Shows on all pages except intro */}
      {!isIntroPage && <OmnitrixNav />}
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
