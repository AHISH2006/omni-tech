import { useState } from "react";
import IntroPage from "./pages/IntroPage";
import Header from "./components/Header";
import Home from "./pages/HomePage";


function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-black">
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
