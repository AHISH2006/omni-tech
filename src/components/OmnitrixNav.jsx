import { useState, useRef, useEffect } from "react"
import omniLogo from "../assets/omnitrix.png"
import "../styles/omnitrix-nav.css"

const OPTIONS = [
    { id: "home", label: "HOME", icon: "🏠" },
    { id: "about", label: "ABOUT", icon: "👽" },
    { id: "events", label: "EVENTS", icon: "🧬" },
    { id: "workshops", label: "WORKSHOPS", icon: "⚙️" },
    { id: "technical", label: "TECHNICAL", icon: "⚡" },
    { id: "non-technical", label: "NON-TECHNICAL", icon: "🎮" },
    { id: "pakages", label: "PACKAGES", icon: "💎" }
]


export default function OmnitrixNav({ onNavigate }) {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(0)
    const [rotation, setRotation] = useState(0) // Track cumulative rotation

    /* MOVABLE POSITION */
    const [pos, setPos] = useState({ x: 40, y: 40 })
    const dragging = useRef(false)
    const start = useRef({ x: 0, y: 0 })
    const wrapperRef = useRef(null)

    const step = 360 / OPTIONS.length

    /* ------------------ DRAG (DESKTOP + MOBILE) - ONLY WHEN CLOSED ------------------ */
    const startDrag = (e) => {
        if (open) return // Don't allow dragging when open
        dragging.current = true
        const point = e.touches ? e.touches[0] : e
        start.current = {
            x: point.clientX - pos.x,
            y: point.clientY - pos.y,
        }
    }

    const onDrag = (e) => {
        if (!dragging.current || open) return // Don't drag when open
        const point = e.touches ? e.touches[0] : e
        setPos({
            x: point.clientX - start.current.x,
            y: point.clientY - start.current.y,
        })
    }

    const endDrag = () => (dragging.current = false)

    /* ------------------ CLICK OUTSIDE TO CLOSE ------------------ */
    useEffect(() => {
        if (!open) return

        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false)
            }
        }

        // Add a small delay to prevent immediate closing when opening
        const timer = setTimeout(() => {
            document.addEventListener("mousedown", handleClickOutside)
            document.addEventListener("touchstart", handleClickOutside)
        }, 100)

        return () => {
            clearTimeout(timer)
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("touchstart", handleClickOutside)
        }
    }, [open])

    /* ------------------ KEYBOARD ------------------ */
    useEffect(() => {
        const onKey = (e) => {
            if (!open) return
            if (e.key === "ArrowRight") rotate(1)
            if (e.key === "ArrowLeft") rotate(-1)
            if (e.key === "Enter") activate()
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [open, active])

    const rotate = (dir) => {
        setActive((p) => (p + dir + OPTIONS.length) % OPTIONS.length)
        setRotation((r) => r - dir * step) // Rotate in circular direction
    }

    const activate = () => {
        setOpen(false)
        onNavigate?.(OPTIONS[active].id)
    }

    /* ------------------ TOUCH ROTATE ------------------ */
    const startX = useRef(0)
    const onTouchStart = (e) => (startX.current = e.touches[0].clientX)
    const onTouchEnd = (e) => {
        const diff = e.changedTouches[0].clientX - startX.current
        if (Math.abs(diff) > 30) rotate(diff > 0 ? -1 : 1)
    }

    // Calculate centered position when open
    const getPosition = () => {
        if (!open) {
            return { transform: `translate(${pos.x}px, ${pos.y}px)` }
        }
        // Center the omnitrix when open
        return {
            transform: `translate(-50%, -50%)`,
            left: '50%',
            top: '50%',
        }
    }

    return (
        <div
            ref={wrapperRef}
            className={`omni-wrapper ${open ? 'centered' : ''}`}
            style={getPosition()}
            onMouseMove={onDrag}
            onMouseUp={endDrag}
            onTouchMove={onDrag}
            onTouchEnd={endDrag}
        >
            {/* CLOSED */}
            {!open && (
                <button
                    className="omni-logo"
                    onMouseDown={startDrag}
                    onTouchStart={startDrag}
                    onClick={() => setOpen(true)}
                >
                    <img src={omniLogo} alt="Omnitrix" />
                </button>
            )}

            {/* OPEN */}
            {open && (
                <div
                    className="omni-open dark"
                    onTouchEnd={onTouchEnd}
                >
                    {/* HOLOGRAM */}
                    <div className="holo-projector">
                        <div className="holo-beam" />

                        <div className="holo-content">
                            <img
                                src={OPTIONS[active].holo || ""}
                                alt=""
                                className="alien-silhouette"
                            />
                            <div className="holo-icon">{OPTIONS[active].icon}</div>
                            <div className="holo-text">{OPTIONS[active].label}</div>
                        </div>
                    </div>

                    {/* RING */}
                    <div
                        className="omni-ring"
                        style={{ transform: `rotate(${rotation}deg)` }}
                    >
                        {OPTIONS.map((o, i) => (
                            <div
                                key={o.id}
                                className={`ring-item ${i === active ? "active" : ""}`}
                                style={{
                                    transform: `rotate(${i * step}deg) translateY(-85px)`,
                                }}
                                onClick={() => {
                                    const diff = i - active
                                    const shortestPath = diff > OPTIONS.length / 2 ? diff - OPTIONS.length : diff < -OPTIONS.length / 2 ? diff + OPTIONS.length : diff
                                    setRotation((r) => r - shortestPath * step)
                                    setActive(i)
                                }}
                            >
                                {o.icon}
                            </div>
                        ))}
                    </div>

                    {/* CENTER ACTIVATE BUTTON */}
                    <button
                        className="omni-activate"
                        onClick={activate}
                        title="Activate Selection"
                    >
                        <div className="activate-icon">✓</div>
                        <div className="activate-text">Activate</div>
                    </button>
                </div>
            )}
        </div>
    )
}
