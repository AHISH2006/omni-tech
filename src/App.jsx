import { useState } from "react";
import IntroPage from "./pages/IntroPage";
import Header from "./components/Header";
import Home from "./pages/HomePage";
import OmnitrixBackground from "./components/OmnitrixBackground";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-black">
      <OmnitrixBackground />

      {showIntro ? (
        <IntroPage onStart={() => setShowIntro(false)} />
      ) : (
        <>
          <Header />
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
