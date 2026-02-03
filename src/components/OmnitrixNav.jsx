
import { useState, useRef, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import omniLogo from "../assets/omnitrix.png"
import rotateSound from "../assets/sounds/rotate.mp3"
import activateSound from "../assets/sounds/activate.mp3"
import "../styles/omnitrix-nav.css"

const OPTIONS = [
    { id: "home", label: "HOME", icon: "🏠" },
    { id: "about", label: "ABOUT", icon: "👽" },
    { id: "events", label: "EVENTS", icon: "🧬" },
    { id: "workshops", label: "WORKSHOPS", icon: "⚙️" },
    { id: "technical", label: "TECHNICAL", icon: "⚡" },
    { id: "non-technical", label: "NON-TECHNICAL", icon: "🎮" },
    { id: "packages", label: "PACKAGES", icon: "💎" },
]

export default function OmnitrixNav() {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(0)
    const [rotation, setRotation] = useState(0)

    const navigate = useNavigate()
    const location = useLocation()
    const rotateAudio = useRef(new Audio(rotateSound))
    const activateAudio = useRef(new Audio(activateSound))
    const ringRef = useRef(null)
    const dragging = useRef(false)
    const lastAngle = useRef(0)
    const lastSnappedIndex = useRef(0)

    const step = 360 / OPTIONS.length

    /* 🔁 Sync active option with current page */
    useEffect(() => {
        const currentPath = location.pathname.replace('/', '') || 'home'
        const index = OPTIONS.findIndex(o => o.id === currentPath)
        if (index !== -1) {
            setActive(index)
            setRotation(-index * step)
            lastSnappedIndex.current = index
        }
    }, [location.pathname])

    /* ⌨️ Keyboard */
    useEffect(() => {
        if (!open) return

        const onKey = (e) => {
            if (e.key === "ArrowRight") rotate(1)
            if (e.key === "ArrowLeft") rotate(-1)
            if (e.key === "Enter") activate()
        }

        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [open, active])

    /* 🖱️ Drag to rotate */
    const getAngle = (cx, cy, x, y) => {
        return Math.atan2(y - cy, x - cx) * (180 / Math.PI)
    }

    const getCenter = () => {
        if (!ringRef.current) return { x: 0, y: 0 }
        const rect = ringRef.current.getBoundingClientRect()
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
    }

    const startDrag = (e) => {
        dragging.current = true
        const p = e.touches ? e.touches[0] : e
        const center = getCenter()
        lastAngle.current = getAngle(center.x, center.y, p.clientX, p.clientY)
        lastSnappedIndex.current = active
    }

    const onDrag = (e) => {
        if (!dragging.current) return

        const p = e.touches ? e.touches[0] : e
        const center = getCenter()
        const currentAngle = getAngle(center.x, center.y, p.clientX, p.clientY)

        let diff = currentAngle - lastAngle.current
        if (diff > 180) diff -= 360
        if (diff < -180) diff += 360

        const newRotation = rotation + diff
        setRotation(newRotation)

        // Calculate which option should be active based on rotation
        const normalizedRotation = ((newRotation % 360) + 360) % 360
        const targetIndex = Math.round(-normalizedRotation / step) % OPTIONS.length
        const finalIndex = ((targetIndex % OPTIONS.length) + OPTIONS.length) % OPTIONS.length

        // Snap to option and play sound when crossing threshold
        if (finalIndex !== lastSnappedIndex.current) {
            rotateAudio.current.currentTime = 0
            rotateAudio.current.play()
            setActive(finalIndex)
            lastSnappedIndex.current = finalIndex
        }

        lastAngle.current = currentAngle
    }

    const endDrag = () => {
        if (!dragging.current) return
        dragging.current = false
        // No snap-back - keep the rotation where user left it for continuous circular motion
    }

    const rotate = (dir) => {
        rotateAudio.current.currentTime = 0
        rotateAudio.current.play()

        const newIndex = (active + dir + OPTIONS.length) % OPTIONS.length
        setActive(newIndex)
        setRotation(-newIndex * step)
        lastSnappedIndex.current = newIndex
    }

    const activate = () => {
        activateAudio.current.currentTime = 0
        activateAudio.current.play()

        setOpen(false)
        navigate(`/${OPTIONS[active].id}`)
    }

    return (
        <>
            {/* Dark overlay when open */}
            {open && <div className="omni-overlay" onClick={() => setOpen(false)} />}

            <div className={`omni-wrapper ${open ? "centered" : ""}`}>
                {!open && (
                    <button className="omni-logo" onClick={() => setOpen(true)}>
                        <img src={omniLogo} alt="Omnitrix" />
                    </button>
                )}

                {open && (
                    <div className="omni-open">
                        <div className="holo-projector">
                            <div className="holo-beam" />
                            <div className="holo-icon">{OPTIONS[active].icon}</div>
                            <div className="holo-text">{OPTIONS[active].label}</div>
                        </div>

                        <div
                            ref={ringRef}
                            className="omni-ring"
                            style={{ transform: `rotate(${rotation}deg)` }}
                            onMouseDown={startDrag}
                            onMouseMove={onDrag}
                            onMouseUp={endDrag}
                            onMouseLeave={endDrag}
                            onTouchStart={startDrag}
                            onTouchMove={onDrag}
                            onTouchEnd={endDrag}
                        >
                            {OPTIONS.map((o, i) => (
                                <div
                                    key={o.id}
                                    className={`ring-item ${i === active ? "active" : ""}`}
                                    style={{
                                        transform: `rotate(${i * step}deg) translateY(-85px)`,
                                    }}
                                >
                                    {o.icon}
                                </div>
                            ))}
                        </div>

                        <button className="omni-activate" onClick={activate}>
                            <div className="activate-icon">✓</div>
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
