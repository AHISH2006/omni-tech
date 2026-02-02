import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, GripVertical, Sparkles, Cpu, Zap, Info } from 'lucide-react';
import '../styles/omnitrix-nav.css';

// --- CONSTANTS ---
const menuOptions = [
    { id: 'home', label: "HOME", icon: "🏠" },
    { id: 'about', label: "ABOUT", icon: "ℹ️" },
    { id: 'profile', label: "PROFILE", icon: "👤" },
    { id: 'events', label: "EVENTS", icon: "📅" },
    { id: 'schedule', label: "SCHEDULE", icon: "⏰" },
    { id: 'workshops', label: "WORKSHOPS", icon: "🛠️" },
    { id: 'papers', label: "PAPERS", icon: "📄" },
    { id: 'game', label: "GAME", icon: "🎮" },
];

// --- SUB-COMPONENT: Omnitrix3D ---
// Exported for use in other pages
export const Omnitrix3D = ({
    items = [],
    onSelect = (item) => console.log("Selected:", item),
    initialPosition = { x: 0, y: 0 }
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [isSelecting, setIsSelecting] = useState(false);
    const [position, setPosition] = useState(initialPosition);
    const [isDragging, setIsDragging] = useState(false);

    // Touch/Swipe State
    const touchStartX = useRef(null);
    const dragStart = useRef({ x: 0, y: 0 });

    const soundPath = "/src/assets/sounds/enter.mp3";
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(soundPath);
        return () => { if (audioRef.current) audioRef.current = null; };
    }, []);

    const step = 360 / items.length;

    const rotate = (direction) => {
        if (isSelecting) return;
        const newIndex = direction === 'next'
            ? (activeIndex + 1) % items.length
            : (activeIndex - 1 + items.length) % items.length;

        setActiveIndex(newIndex);
        setRotation(prev => direction === 'next' ? prev - step : prev + step);
    };

    // Keyboard Controls
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") rotate('next');
            if (e.key === "ArrowLeft") rotate('prev');
            if (e.key === "Enter" || e.key === " ") handleSelect();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex, isSelecting, rotation]);

    const handleSelect = () => {
        if (isSelecting) return;
        setIsSelecting(true);

        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => { });
        }

        onSelect(items[activeIndex]);
        setTimeout(() => setIsSelecting(false), 2000);
    };

    // Drag & Touch Swipe Handlers
    const startDrag = (e) => {
        const clientX = e.clientX || e.touches?.[0]?.clientX;
        const clientY = e.clientY || e.touches?.[0]?.clientY;

        setIsDragging(true);
        dragStart.current = { x: clientX - position.x, y: clientY - position.y };
        touchStartX.current = clientX;
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        const clientX = e.clientX || e.touches?.[0]?.clientX;
        const clientY = e.clientY || e.touches?.[0]?.clientY;

        setPosition({ x: clientX - dragStart.current.x, y: clientY - dragStart.current.y });
    };

    const handleEnd = (e) => {
        if (!isDragging) return;
        setIsDragging(false);

        // Detect Swipe for Rotation
        const clientX = e.clientX || e.changedTouches?.[0]?.clientX;
        if (touchStartX.current !== null && clientX !== undefined) {
            const diff = clientX - touchStartX.current;
            if (Math.abs(diff) > 50) { // Threshold for swipe
                rotate(diff > 0 ? 'prev' : 'next');
            }
        }
        touchStartX.current = null;
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleMove);
            window.addEventListener('touchend', handleEnd);
        }
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging]);

    const activeItem = items[activeIndex] || { label: "N/A", icon: "❓" };

    return (
        <div
            className="absolute cursor-grab active:cursor-grabbing select-none touch-none"
            style={{
                transform: `translate(${position.x}px, ${position.y}px) rotateX(30deg)`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                transformStyle: 'preserve-3d'
            }}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
        >
            <style>{`
        @keyframes holo-float {
          0%, 100% { transform: translateY(0px) rotateX(-30deg) scale(1); }
          50% { transform: translateY(-20px) rotateX(-30deg) scale(1.05); }
        }
        @keyframes digital-flicker {
          0% { opacity: 0.9; transform: skewX(0deg); }
          10% { opacity: 0.4; transform: skewX(2deg); }
          20% { opacity: 0.9; transform: skewX(0deg); }
          50% { opacity: 0.8; transform: skewX(-1deg); }
          100% { opacity: 1; transform: skewX(0deg); }
        }
        @keyframes beam-sparkle {
          0% { opacity: 0.3; transform: scaleX(1); }
          50% { opacity: 0.6; transform: scaleX(1.1); }
          100% { opacity: 0.3; transform: scaleX(1); }
        }
        .circuit-bg {
          background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0);
          background-size: 12px 12px;
        }
        .metallic-ring {
          background: linear-gradient(135deg, #444, #888 50%, #444);
          box-shadow: inset 0 0 20px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.8);
        }
      `}</style>

            {/* --- HOLOGRAPHIC PROJECTION --- */}
            <div className="absolute left-1/2 bottom-full -translate-x-1/2 mb-8 flex flex-col items-center pointer-events-none z-50">
                <div
                    key={activeItem.label}
                    className={`text-8xl md:text-9xl transition-all duration-700 ${isSelecting ? 'text-red-500' : 'text-green-400'}`}
                    style={{
                        animation: 'holo-float 4s ease-in-out infinite, digital-flicker 3s infinite',
                        filter: `drop-shadow(0 0 20px ${isSelecting ? '#ef4444' : '#4ade80'})`
                    }}
                >
                    {activeItem.icon}
                </div>
                <div className={`mt-4 font-black text-2xl md:text-3xl italic tracking-tighter px-6 py-1 transform -skew-x-12 transition-all duration-500 ${isSelecting ? 'bg-red-600 text-white shadow-[0_0_30px_#ef4444]' : 'bg-green-500 text-black shadow-[0_0_30px_#22c55e]'}`}>
                    {activeItem.label}
                </div>
                <div
                    className={`w-40 md:w-48 transition-colors duration-1000 blur-2xl ${isSelecting ? 'bg-red-500/40' : 'bg-green-500/30'}`}
                    style={{
                        height: '240px',
                        clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
                        animation: 'beam-sparkle 2s infinite ease-in-out',
                        marginTop: '-50px'
                    }}
                />
            </div>

            {/* --- MECHANICAL WATCH BODY --- */}
            <div className="absolute top-1/2 -left-8 md:-left-12 -translate-y-1/2 w-12 h-6 md:w-16 md:h-8 bg-neutral-200 rounded-full border-2 border-neutral-400" style={{ transform: 'translateZ(-10px)' }} />
            <div className="absolute top-1/2 -right-8 md:-right-12 -translate-y-1/2 w-12 h-6 md:w-16 md:h-8 bg-neutral-200 rounded-full border-2 border-neutral-400" style={{ transform: 'translateZ(-10px)' }} />
            <div className="absolute w-56 h-56 md:w-72 lg:w-80 md:h-72 lg:h-80 rounded-full bg-neutral-600 shadow-[0_60px_120px_rgba(0,0,0,0.9)] border-b-[12px] md:border-b-[20px] border-neutral-900" style={{ transform: 'translateZ(-40px)' }} />
            <div className={`absolute w-[92%] h-[92%] left-[4%] top-[4%] rounded-full circuit-bg transition-colors duration-500 ${isSelecting ? 'text-red-600' : 'text-green-600'}`} style={{ transform: 'translateZ(-15px)' }} />

            <div className="relative w-56 h-56 md:w-72 lg:w-80 md:h-72 lg:h-80 rounded-full metallic-ring p-4 md:p-6 flex items-center justify-center border-3 md:border-4 border-neutral-500 overflow-hidden shadow-inner">
                <div className="absolute w-[88%] h-[88%] rounded-full border-[12px] border-neutral-800 bg-neutral-900 shadow-2xl flex items-center justify-center overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className={`absolute w-4 h-4 rounded-full border-2 border-neutral-600 transition-colors duration-500 ${isSelecting ? 'bg-red-500 shadow-[0_0_10px_#ef4444]' : 'bg-green-500 shadow-[0_0_10px_#22c55e]'}`} style={{ transform: `rotate(${i * 60}deg) translateY(-142px)` }} />
                    ))}
                    <div className="absolute w-full h-full transition-transform duration-1000 cubic-bezier(0.19, 1, 0.22, 1)" style={{ transform: `rotate(${rotation}deg)` }}>
                        {items.map((item, index) => {
                            const angle = index * step;
                            const isActive = activeIndex === index;
                            return (
                                <div key={item.label} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `rotate(${angle}deg) translateY(-110px) rotate(-${angle}deg) rotate(-${rotation}deg)` }}>
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl md:text-2xl transition-all duration-500 border-2 ${isActive ? (isSelecting ? 'bg-red-600 border-red-300 shadow-[0_0_20px_#ef4444] scale-125' : 'bg-green-500 border-green-300 shadow-[0_0_20px_#22c55e] scale-125') : 'bg-neutral-800 border-neutral-700 opacity-20 scale-75'}`}>
                                        {item.icon}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div onClick={(e) => { e.stopPropagation(); handleSelect(); }} className={`relative w-24 h-24 md:w-28 lg:w-32 md:h-28 lg:h-32 rounded-full border-[8px] md:border-[10px] transition-all duration-500 cursor-pointer flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.5)] ${isSelecting ? 'bg-red-600 border-red-300' : 'bg-neutral-900 border-neutral-700 hover:border-green-400'}`}>
                    <div className={`relative w-full h-full rounded-full transition-all duration-500 overflow-hidden flex items-center justify-center ${isSelecting ? 'bg-red-900' : 'bg-neutral-950'}`}>
                        <div className={`absolute inset-0 flex flex-col items-center justify-between py-4 transition-colors ${isSelecting ? 'text-red-500' : 'text-green-500'}`}>
                            <div className={`w-14 h-10 md:w-16 md:h-12 bg-white rounded-t-full transition-opacity ${isSelecting ? 'opacity-20' : 'opacity-100'}`} style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
                            <div className={`w-14 h-10 md:w-16 md:h-12 bg-white rounded-b-full transition-opacity ${isSelecting ? 'opacity-20' : 'opacity-100'}`} style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }} />
                        </div>
                        <div className={`absolute w-12 h-12 rounded-full blur-md animate-pulse ${isSelecting ? 'bg-red-400' : 'bg-green-400 opacity-60'}`} />
                    </div>
                </div>

                {/* Helper Desktop Buttons (Visible on Mobile too) */}
                <button onClick={(e) => { e.stopPropagation(); rotate('prev'); }} className="absolute -left-10 md:-left-12 lg:-left-16 w-10 h-16 md:w-12 lg:w-14 md:h-20 lg:h-24 bg-neutral-700 border-x-3 md:border-x-4 border-neutral-800 rounded-xl shadow-2xl hover:bg-neutral-600 active:translate-x-2 transition-all flex items-center justify-center text-neutral-300"><ChevronLeft size={28} className="md:w-8 md:h-8" /></button>
                <button onClick={(e) => { e.stopPropagation(); rotate('next'); }} className="absolute -right-10 md:-right-12 lg:-right-16 w-10 h-16 md:w-12 lg:w-14 md:h-20 lg:h-24 bg-neutral-700 border-x-3 md:border-x-4 border-neutral-800 rounded-xl shadow-2xl hover:bg-neutral-600 active:-translate-x-2 transition-all flex items-center justify-center text-neutral-300"><ChevronRight size={28} className="md:w-8 md:h-8" /></button>
            </div>
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-20 text-white flex flex-col items-center"><GripVertical size={24} /></div>
        </div>
    );
};

// --- MAIN COMPONENT: OmnitrixNav ---
// Main navigation page with Omnitrix3D and AI panel
export const OmnitrixNav = () => {
    const [selectedItem, setSelectedItem] = useState(menuOptions[0]);
    const [aiResponse, setAiResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPanel, setShowPanel] = useState(false);

    const apiKey = ""; // Set by runtime

    const callGemini = async (prompt) => {
        setIsLoading(true);
        setShowPanel(true);
        let delay = 1000;
        const maxRetries = 5;

        for (let i = 0; i <= maxRetries; i++) {
            try {
                const response = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: prompt }] }],
                            systemInstruction: {
                                parts: [{ text: "You are Azmuth, creator of the Omnitrix. Speak with high intelligence and grumpiness. Provide tactical intel on the selection as a galactic module. Keep it under 60 words." }]
                            }
                        }),
                    }
                );
                if (!response.ok) throw new Error("API call failed");
                const data = await response.json();
                const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
                setAiResponse(typeof textResponse === 'string' ? textResponse : "Unable to parse Galvan intelligence.");
                setIsLoading(false);
                return;
            } catch (error) {
                if (i === maxRetries) {
                    setAiResponse("System error: Link to Galvan Prime lost. Check subspace connection.");
                    setIsLoading(false);
                } else {
                    await new Promise((resolve) => setTimeout(resolve, delay));
                    delay *= 2;
                }
            }
        }
    };

    const handleSelection = (item) => {
        setSelectedItem(item);
        callGemini(`Analyze the ${item.label} module for tactical priority.`);
    };

    return (
        <div className="w-full h-screen bg-black flex flex-col md:flex-row items-center justify-center overflow-hidden p-4 md:p-8 relative">
            <style>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
            <div className="fixed inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 text-center md:text-left z-0">
                <h1 className="text-neutral-800 text-3xl md:text-6xl font-black tracking-widest uppercase opacity-30">TECHNOVA 2026</h1>
            </div>

            {/* Interaction Hints for Mobile */}
            <div className="absolute top-20 text-green-500/40 text-[10px] uppercase tracking-widest md:hidden animate-pulse">
                Swipe to Rotate • Tap to Select
            </div>

            <div className="perspective-1000 w-full md:w-1/2 h-2/3 md:h-full flex items-center justify-center order-2 md:order-1">
                <Omnitrix3D items={menuOptions} onSelect={handleSelection} initialPosition={{ x: 0, y: 0 }} />
            </div>

            <div className={`w-full md:w-1/3 h-auto max-h-[35%] md:max-h-[70%] order-1 md:order-2 transition-all duration-700 transform ${showPanel ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} z-50 p-2 md:p-0`}>
                <div className="galactic-panel bg-neutral-900/80 backdrop-blur-md border-2 border-green-500/30 rounded-2xl p-4 md:p-6 shadow-[0_0_30px_rgba(34,197,94,0.1)] relative overflow-hidden flex flex-col h-full">
                    <div className="scan-line absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent h-20 w-full pointer-events-none" style={{ animation: 'scan 4s linear infinite' }} />
                    <div className="flex items-center justify-between mb-3 md:mb-4 border-b border-green-500/20 pb-2 md:pb-3">
                        <h3 className="text-green-400 font-black tracking-wider uppercase text-xs md:text-sm">GALACTIC INTEL</h3>
                        <button onClick={() => setShowPanel(false)} className="text-neutral-600 hover:text-red-500 transition-colors text-lg">✕</button>
                    </div>
                    <div className="flex-1 overflow-y-auto font-mono text-[11px] md:text-sm text-green-300/90 leading-relaxed scrollbar-hide">
                        {isLoading ? <span className="text-green-500 animate-pulse">ANALYZING...</span> : <p>{aiResponse || "Select a module."}</p>}
                    </div>
                </div>
            </div>

            {/* Desktop Interaction Hints */}
            <div className="fixed bottom-12 text-center w-full pointer-events-none hidden md:block">
                <div className="flex justify-center gap-8 text-neutral-700 text-[10px] font-mono uppercase tracking-[0.4em]">
                    <div className="flex items-center gap-2"><div className="px-1.5 py-0.5 border border-neutral-700 rounded">←</div><div className="px-1.5 py-0.5 border border-neutral-700 rounded">→</div> Rotate</div>
                    <div className="flex items-center gap-2"><div className="px-3 py-0.5 border border-neutral-700 rounded">Enter</div> Select</div>
                </div>
            </div>
        </div>
    );
};

// Export as default for backward compatibility
export default OmnitrixNav;