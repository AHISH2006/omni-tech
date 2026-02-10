
import { useState, useRef, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import omniLogo from "../assets/omnitrix.png"
import rotateSound from "../assets/sounds/rotate.mp3"
import activateSound from "../assets/sounds/activate.mp3"
import "../styles/omnitrix-nav.css"
import { House, User, Wrench, Cpu, Gamepad2, CalendarClock, Boxes } from "lucide-react"

const OPTIONS = [
    { id: "home", label: "HOME", icon: "🏠" },
    { id: "about", label: "ABOUT", icon: "👽" },
    { id: "workshops", label: "WORKSHOPS", icon: "⚙️" },
    { id: "technical", label: "TECHNICAL", icon: "⚡" },
    { id: "non-technical", label: "NON-TECHNICAL", icon: "🎮" },
    { id: "schedule", label: "SCHEDULE", icon: "📅" },
    { id: "packages", label: "PACKAGES", icon: "💎" },
]
export default function OmnitrixNav() {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(0)
    const [rotation, setRotation] = useState(0)
    const [hasOpened, setHasOpened] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const rotateAudio = useRef(new Audio(rotateSound))
    const activateAudio = useRef(new Audio(activateSound))
    const ringRef = useRef(null)

    // Using refs for drag state to avoid stale closures in event listeners
    const dragging = useRef(false)
    const lastAngle = useRef(0)
    const currentRotation = useRef(0) // Track rotation locally during drag

    const step = 360 / OPTIONS.length

    /* 🔁 Sync active option with current page */
    useEffect(() => {
        const currentPath = location.pathname.replace('/', '') || 'home'
        const index = OPTIONS.findIndex(o => o.id === currentPath)
        if (index !== -1) {
            setActive(index)
            // Initial rotation setup
            const targetRot = -index * step
            setRotation(targetRot)
            currentRotation.current = targetRot
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

    /* 🖱️ Drag Logic (Global Event Listeners) */
    const getAngle = (cx, cy, x, y) => {
        return Math.atan2(y - cy, x - cx) * (180 / Math.PI)
    }

    const getCenter = () => {
        if (!ringRef.current) return { x: 0, y: 0 }
        const rect = ringRef.current.getBoundingClientRect()
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
    }

    const handleMove = (e) => {
        if (!dragging.current) return

        const p = e.touches ? e.touches[0] : e
        const center = getCenter()
        const angle = getAngle(center.x, center.y, p.clientX, p.clientY)

        let diff = angle - lastAngle.current
        // Normalize jump when crossing -180/180 boundary
        if (diff > 180) diff -= 360
        if (diff < -180) diff += 360

        // Update rotation
        currentRotation.current += diff
        setRotation(currentRotation.current)
        lastAngle.current = angle

        // Calculate active item visually (no sound yet, just update holo)
        const normalized = ((currentRotation.current % 360) + 360) % 360
        const index = Math.round(-normalized / step) % OPTIONS.length
        const finalIndex = ((index % OPTIONS.length) + OPTIONS.length) % OPTIONS.length

        setActive(finalIndex)
    }

    const handleUp = () => {
        if (!dragging.current) return
        dragging.current = false

        // Remove global listeners
        window.removeEventListener("mousemove", handleMove)
        window.removeEventListener("mouseup", handleUp)
        window.removeEventListener("touchmove", handleMove)
        window.removeEventListener("touchend", handleUp)

        // SNAP Logic
        const normalized = ((currentRotation.current % 360) + 360) % 360
        const index = Math.round(-normalized / step) // Nearest index
        const snapAngle = -index * step // Exact angle for that index

        setRotation(snapAngle)
        currentRotation.current = snapAngle

        // Find true index for active state
        const finalIndex = ((index % OPTIONS.length) + OPTIONS.length) % OPTIONS.length

        // Play sound on snap
        rotateAudio.current.currentTime = 0
        rotateAudio.current.play()
        setActive(finalIndex)
    }

    const startDrag = (e) => {
        dragging.current = true
        const p = e.touches ? e.touches[0] : e
        const center = getCenter()
        lastAngle.current = getAngle(center.x, center.y, p.clientX, p.clientY)

        // Add GLOBAL listeners
        window.addEventListener("mousemove", handleMove)
        window.addEventListener("mouseup", handleUp)
        window.addEventListener("touchmove", handleMove)
        window.addEventListener("touchend", handleUp)
    }

    /* 🔄 Arrow Button Rotate */
    const rotate = (dir) => {
        rotateAudio.current.currentTime = 0
        rotateAudio.current.play()

        const newIndex = (active + dir + OPTIONS.length) % OPTIONS.length
        setActive(newIndex)
        const newRot = -newIndex * step
        setRotation(newRot)
        currentRotation.current = newRot
    }

    const activate = () => {
        activateAudio.current.currentTime = 0
        activateAudio.current.play()
        setOpen(false)
        navigate(`/${OPTIONS[active].id}`)
    }

    const handleOpen = () => {
        rotateAudio.current.currentTime = 0
        rotateAudio.current.play()
        setOpen(true)
        setHasOpened(true)
    }

    const handleItemClick = (index) => {
        if (index === active) return

        rotateAudio.current.currentTime = 0
        rotateAudio.current.play()

        setActive(index)
        const targetRot = -index * step
        setRotation(targetRot)
        currentRotation.current = targetRot
    }

    return (
        <>
            {/* Dark overlay when open */}
            {open && <div className="omni-overlay" onClick={() => setOpen(false)} />}

            <motion.div
                className={`omni-wrapper ${open ? "centered" : ""}`}
                drag={!open} // Only draggable when closed
                dragMomentum={false}
                layout
                animate={open ? { x: 0, y: 0 } : {}}
            >
                {!open && (
                    <div className="omni-closed-container">
                        <button className="omni-logo" onClick={handleOpen}>
                            <img src={omniLogo} alt="Omnitrix" />
                        </button>
                        {/* Show hint only on Home page AND if never opened before */}
                        {OPTIONS[active]?.id === 'home' && !hasOpened && (
                            <motion.p
                                className="omni-hint"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                            >
                                Tap to navigate
                            </motion.p>
                        )}
                    </div>
                )}

                {open && (
                    <div className="omni-open">
                        <div className="holo-projector">
                            <div className="holo-beam" />
                            <div className="holo-float">
                                <div className="holo-flicker">
                                    <div className="holo-icon" data-icon={OPTIONS[active].icon}>{OPTIONS[active].icon}</div>
                                </div>
                            </div>
                            <div className="holo-text">{OPTIONS[active].label}</div>
                        </div>

                        <div
                            ref={ringRef}
                            className="omni-ring"
                            style={{
                                transform: `rotate(${rotation}deg)`,
                                cursor: dragging.current ? "grabbing" : "grab"
                            }}
                            onMouseDown={startDrag}
                            onTouchStart={startDrag}
                        >
                            {OPTIONS.map((o, i) => (
                                <div
                                    key={o.id}
                                    className={`ring-item ${i === active ? "active" : ""}`}
                                    style={{
                                        transform: `rotate(${i * step}deg) translateY(-85px) rotate(${-rotation}deg)`,
                                        // Counter-rotation ensures icons stay upright if desired, 
                                        // OR remove the 2nd rotation if you want them to turn with the ring.
                                        // Let's keep them upright for better readability:
                                        transition: "transform 0.1s ease-out"
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleItemClick(i)
                                    }}
                                >
                                    <div style={{ transform: `rotate(${rotation}deg)` }}>
                                        {/* Inner wrapper to counter-rotate if needed, or just let them spin. 
                                            Currently, the outer div rotates with the ring. 
                                            If we want upright icons, we need to counter-rotate. 
                                            Let's implement simple rotation first. */
                                            o.icon
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="omni-activate" onClick={activate}>
                            <div className="activate-icon">✓</div>
                        </button>
                    </div>
                )}
            </motion.div>
        </>
    )
}