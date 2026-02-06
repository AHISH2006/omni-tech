import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import fullAudio from "../assets/sounds/full-audio.mpeg";
import { Volume2, VolumeX } from "lucide-react";

export default function GlobalAudio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(new Audio(fullAudio));
    const location = useLocation();
    const isIntroPage = location.pathname === "/";

    useEffect(() => {
        // Configure audio
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        // Listen for storage changes (from IntroPage choice)
        const checkAudioPermission = () => {
            const allowed = localStorage.getItem("omni_audio_allowed");
            if (allowed === "true") {
                setIsMuted(false);
                // Only play if not on intro page
                if (!isIntroPage) {
                    audioRef.current.play().catch(e => console.log("Autoplay blocked:", e));
                    setIsPlaying(true);
                }
            } else if (allowed === "false") {
                setIsMuted(true);
                audioRef.current.pause();
                setIsPlaying(false);
            }
        };

        // Check immediately
        checkAudioPermission();

        // Listen for custom event dispatch from IntroPage
        window.addEventListener("audio-permission-change", checkAudioPermission);

        return () => {
            window.removeEventListener("audio-permission-change", checkAudioPermission);
        };
    }, [isIntroPage]);

    // Handle page navigation logic
    useEffect(() => {
        const allowed = localStorage.getItem("omni_audio_allowed");

        if (isIntroPage) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            // If we left intro page and audio is allowed, ensure it plays
            if (allowed === "true" && audioRef.current.paused) {
                audioRef.current.play().catch(e => console.log("Playback failed:", e));
                setIsPlaying(true);
            }
        }
    }, [location.pathname, isIntroPage]);

    const toggleMute = () => {
        const newMuteState = !isMuted;
        setIsMuted(newMuteState);

        // Update local storage so preference persists
        localStorage.setItem("omni_audio_allowed", (!newMuteState).toString());

        if (newMuteState) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(e => console.log("Play failed:", e));
            setIsPlaying(true);
        }
    };

    if (isIntroPage) return null;

    return (
        <button
            onClick={toggleMute}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/50 border border-[#39ff14] text-[#39ff14] hover:bg-[#39ff14] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(57,255,20,0.5)] backdrop-blur-sm"
            aria-label={isMuted ? "Unmute Background Music" : "Mute Background Music"}
        >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
    );
}
