import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/omnitrix-nav.css"
import rotateSound from "../assets/rotate.mp3"
import activateSound from "../assets/activate.mp3"


const options = [
    { label: "Technical Events", route: "/technical" },
    { label: "Non-Technical", route: "/non-technical" },
    { label: "Workshops", route: "/workshops" },
    { label: "Paper Presentation", route: "/papers" },
    { label: "Schedule", route: "/schedule" },
    { label: "Registration", route: "/register" },
    { label: "Contact", route: "/contact" }
]

export default function OmnitrixNav() {
    const [active, setActive] = useState(false)
    const [index, setIndex] = useState(0)
    const startX = useRef(0)

    const rotateAudio = useRef(new Audio(rotateSound))
    const activateAudio = useRef(new Audio(activateSound))

    const navigate = useNavigate()

    const rotate = dir => {
        rotateAudio.current.currentTime = 0
        rotateAudio.current.play()
        setIndex(i => (i + dir + options.length) % options.length)
    }

    const activateOption = () => {
        activateAudio.current.play()
        navigate(options[index].route)
    }

    /* KEYBOARD SUPPORT */
    useEffect(() => {
        const handleKey = e => {
            if (!active) return
            if (e.key === "ArrowRight") rotate(1)
            if (e.key === "ArrowLeft") rotate(-1)
            if (e.key === "Enter") activateOption()
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [active, index])

    /* TOUCH SUPPORT */
    const onTouchStart = e => (startX.current = e.touches[0].clientX)
    const onTouchEnd = e => {
        const delta = e.changedTouches[0].clientX - startX.current
        if (Math.abs(delta) > 40) rotate(delta > 0 ? -1 : 1)
    }

    return (
        <div className="omni-wrapper">
            {/* OMNITRIX CORE */}
            <div className="omni-core" onClick={() => setActive(!active)}>
                <div className="omni-center"></div>
            </div>

            {active && (
                <div
                    className="selector"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    {/* HOLOGRAM RING */}
                    <div className="holo-ring"></div>

                    {/* ALIEN HOLOGRAM */}
                    <div className="alien-holo"></div>

                    {/* OPTIONS */}
                    {options.map((opt, i) => {
                        const angle = ((i - index) * 360) / options.length
                        const isActive = i === index
                        return (
                            <div
                                key={i}
                                className={`option ${isActive ? "active" : ""}`}
                                style={{ transform: `rotate(${angle}deg) translateY(-160px) rotate(${-angle}deg)` }}
                            >
                                {/* Holographic Projection */}
                                {isActive && (
                                    <div className="holo-projection">
                                        <div className="holo-pyramid"></div>
                                        <div className="holo-glow-base"></div>
                                    </div>
                                )}

                                {/* Option Content */}
                                <div className="option-content">
                                    <div className="option-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <circle cx="12" cy="12" r="8" />
                                        </svg>
                                    </div>
                                    <div className="option-label">{opt.label}</div>
                                </div>
                            </div>
                        )
                    })}

                    {/* ACTIVATE */}
                    <button className="activate-btn" onClick={activateOption}>
                        ACTIVATE
                    </button>
                </div>
            )}
        </div>
    )
}
