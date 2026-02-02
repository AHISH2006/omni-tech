import { useState } from "react"
import IntroPage from "./pages/IntroPage"
import HomePage from "./pages/HomePage"

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      {!introComplete ? (
        <IntroPage onStart={() => setIntroComplete(true)} />
      ) : (
        <HomePage />
      )}
    </>
  )
}

export default App
