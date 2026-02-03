import { useState } from "react";
import IntroPage from "./pages/IntroPage";

import Home from "./pages/HomePage";


function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-black">
      {showIntro ? (
        <IntroPage onStart={() => setShowIntro(false)} />
      ) : (
        <>

          <Home />
        </>
      )}
    </div>
  );
}

export default App;
