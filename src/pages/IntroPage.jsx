import { useState, useRef, useEffect } from "react"
import bgVideo from "../assets/bg.mp4"
import entryAudio from "../assets/entry.mp3"
import "../styles/intro.css"

export default function IntroPage({ onStart }) {
    const [showButton, setShowButton] = useState(true)
    const [startShutter, setStartShutter] = useState(false)

    const videoRef = useRef(null)
    const audioRef = useRef(null)

    useEffect(() => {
        audioRef.current?.load()
    }, [])

    const handleActivate = () => {
        setShowButton(false)

        audioRef.current?.play().catch(() => {})
        videoRef.current?.play().catch(() => {})
    }

    // ▶ When intro video finishes
    const handleVideoEnd = () => {
        setStartShutter(true)

        // After shutter animation → show Home page
        setTimeout(() => {
            onStart?.()
        }, 1200) // MUST match CSS animation duration
    }

    return (
        <div className="intro-page">
            {/* Background Video */}
            <video
                ref={videoRef}
                className="intro-video"
                src={bgVideo}
                muted
                playsInline
                preload="auto"
                onEnded={handleVideoEnd}
            />

            {/* Audio */}
            <audio ref={audioRef} src={entryAudio} preload="auto" />

            {/* Overlay Content */}
            <div className="intro-overlay">
                <div className="intro-header">
                    <h1 className="intro-title">
                        <span className="title-line">OMNI</span>
                        <span className="title-line">VERSE</span>
                    </h1>
                    <div className="title-underline"></div>
                    <p className="intro-tagline">It's Hero Time</p>
                </div>

                {showButton && (
                    <button
                        onClick={handleActivate}
                        className="intro-activate-btn"
                    >
                        <span className="btn-pulse"></span>
                        <span className="btn-text">ACTIVATE OMNITRIX</span>
                        <span className="btn-icon">⚡</span>
                    </button>
                )}
            </div>

            {/* BEN-10 SHUTTER TRANSITION */}
            {startShutter && (
                <>
                    <div className="ben-shutter shutter-top"></div>
                    <div className="ben-shutter shutter-bottom"></div>
                </>
            )}
        </div>
    )
}
