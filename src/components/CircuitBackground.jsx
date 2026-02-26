import React from 'react';
import '../styles/circuit-background.css';

const CircuitBackground = () => {
    return (
        <div className="circuit-bg">
            <svg className="circuit-svg" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="glowStrong">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="glowSoft">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#39ff14" stopOpacity="0.6" />
                        <stop offset="40%" stopColor="#39ff14" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#39ff14" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* === SCANNING LINE === */}
                <line x1="0" y1="0" x2="1400" y2="0" stroke="#39ff14" strokeWidth="1" opacity="0.15" className="scan-line" />

                {/* ============================================================ */}
                {/* === FULL-PAGE GRID LINES (horizontal + vertical)          === */}
                {/* ============================================================ */}
                <g className="grid-lines" opacity="1">
                    {/* Horizontal grid lines every 40px */}
                    {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760].map((y, i) => (
                        <line key={`hg-${i}`} x1="0" y1={y} x2="1400" y2={y} stroke="#39ff14" strokeWidth="0.3" opacity={y === 400 ? 0.12 : 0.06} />
                    ))}
                    {/* Vertical grid lines every ~70px */}
                    {[70, 140, 210, 280, 350, 420, 490, 560, 630, 700, 770, 840, 910, 980, 1050, 1120, 1190, 1260, 1330].map((x, i) => (
                        <line key={`vg-${i}`} x1={x} y1="0" x2={x} y2="800" stroke="#39ff14" strokeWidth="0.3" opacity={x === 700 ? 0.12 : 0.06} />
                    ))}
                </g>

                {/* ============================================================ */}
                {/* === TOP-LEFT QUADRANT TRACES                               === */}
                {/* ============================================================ */}
                <g filter="url(#glowSoft)">
                    {/* Row 1 — very top */}
                    <polyline points="0,20 60,20 80,40 160,40 180,20 300,20" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.2" />
                    <polyline points="0,50 40,50 60,30 120,30 150,60 220,60" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />
                    <polyline points="180,20 180,60 220,60 220,100" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.18" />
                    <polyline points="300,20 340,20 340,60 380,60 380,40 450,40" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.2" />
                    <line x1="0" y1="70" x2="250" y2="70" stroke="#39ff14" strokeWidth="0.5" opacity="0.12" />

                    {/* Row 2 */}
                    <polyline points="0,100 80,100 110,130 200,130 230,100 320,100 320,140" fill="none" stroke="#39ff14" strokeWidth="0.8" opacity="0.22" />
                    <polyline points="100,80 100,120 140,120 160,140 250,140 250,100" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />
                    <polyline points="320,140 380,140 400,120 480,120 500,140 560,140" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.18" />
                    <polyline points="450,40 450,80 500,80 520,100 560,100 560,140" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.16" />

                    {/* Row 3 */}
                    <polyline points="0,170 100,170 130,200 200,200 230,170 350,170" fill="none" stroke="#39ff14" strokeWidth="0.8" opacity="0.2" />
                    <polyline points="350,170 350,200 400,200 420,180 500,180" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.16" />
                    <polyline points="200,200 200,230 250,230 250,260" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />
                    <polyline points="0,210 60,210 80,240 150,240 180,210" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.12" />
                    <polyline points="500,180 540,180 540,220 580,220 580,260" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.14" />

                    {/* Junction dots top-left */}
                    <circle cx="80" cy="40" r="2" fill="#39ff14" opacity="0.4" />
                    <circle cx="180" cy="20" r="2.5" fill="#39ff14" opacity="0.5" className="node-pulse-slow" />
                    <circle cx="320" cy="100" r="2.5" fill="#39ff14" opacity="0.5" className="node-pulse-slow" />
                    <circle cx="200" cy="200" r="3" fill="#39ff14" opacity="0.6" className="node-pulse" />
                    <circle cx="450" cy="40" r="2" fill="#39ff14" opacity="0.4" />
                    <circle cx="560" cy="140" r="2.5" fill="#39ff14" opacity="0.45" className="node-pulse-slow" />
                </g>

                {/* ============================================================ */}
                {/* === TOP-RIGHT QUADRANT TRACES                              === */}
                {/* ============================================================ */}
                <g filter="url(#glowSoft)">
                    <polyline points="1400,20 1340,20 1320,40 1240,40 1220,20 1100,20" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.2" />
                    <polyline points="1400,50 1360,50 1340,30 1280,30 1250,60 1180,60" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />
                    <polyline points="1220,20 1220,60 1180,60 1180,100" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.18" />
                    <polyline points="1100,20 1060,20 1060,60 1020,60 1020,40 950,40" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.2" />
                    <line x1="1150" y1="70" x2="1400" y2="70" stroke="#39ff14" strokeWidth="0.5" opacity="0.12" />

                    <polyline points="1400,100 1320,100 1290,130 1200,130 1170,100 1080,100 1080,140" fill="none" stroke="#39ff14" strokeWidth="0.8" opacity="0.22" />
                    <polyline points="1300,80 1300,120 1260,120 1240,140 1150,140 1150,100" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />
                    <polyline points="1080,140 1020,140 1000,120 920,120 900,140 840,140" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.18" />
                    <polyline points="950,40 950,80 900,80 880,100 840,100 840,140" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.16" />

                    <polyline points="1400,170 1300,170 1270,200 1200,200 1170,170 1050,170" fill="none" stroke="#39ff14" strokeWidth="0.8" opacity="0.2" />
                    <polyline points="1050,170 1050,200 1000,200 980,180 900,180" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.16" />
                    <polyline points="1200,200 1200,230 1150,230 1150,260" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />
                    <polyline points="1400,210 1340,210 1320,240 1250,240 1220,210" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.12" />
                    <polyline points="900,180 860,180 860,220 820,220 820,260" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.14" />

                    {/* Junction dots top-right */}
                    <circle cx="1320" cy="40" r="2" fill="#39ff14" opacity="0.4" />
                    <circle cx="1220" cy="20" r="2.5" fill="#39ff14" opacity="0.5" className="node-pulse-slow" />
                    <circle cx="1080" cy="100" r="2.5" fill="#39ff14" opacity="0.5" className="node-pulse-slow" />
                    <circle cx="1200" cy="200" r="3" fill="#39ff14" opacity="0.6" className="node-pulse" />
                    <circle cx="950" cy="40" r="2" fill="#39ff14" opacity="0.4" />
                    <circle cx="840" cy="140" r="2.5" fill="#39ff14" opacity="0.45" className="node-pulse-slow" />
                </g>

                {/* ============================================================ */}
                {/* === BOTTOM-LEFT QUADRANT TRACES                            === */}
                {/* ============================================================ */}
                <g filter="url(#glowSoft)">
                    <polyline points="0,780 60,780 80,760 160,760 180,780 300,780" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.2" />
                    <polyline points="0,750 40,750 60,770 120,770 150,740 220,740" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />
                    <polyline points="180,780 180,740 220,740 220,700" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.18" />
                    <polyline points="300,780 340,780 340,740 380,740 380,760 450,760" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.2" />
                    <line x1="0" y1="730" x2="250" y2="730" stroke="#39ff14" strokeWidth="0.5" opacity="0.12" />

                    <polyline points="0,700 80,700 110,670 200,670 230,700 320,700 320,660" fill="none" stroke="#39ff14" strokeWidth="0.8" opacity="0.22" />
                    <polyline points="320,660 380,660 400,680 480,680 500,660 560,660" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.18" />
                    <polyline points="450,760 450,720 500,720 520,700 560,700 560,660" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.16" />

                    <polyline points="0,630 100,630 130,600 200,600 230,630 350,630" fill="none" stroke="#39ff14" strokeWidth="0.8" opacity="0.2" />
                    <polyline points="350,630 350,600 400,600 420,620 500,620" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.16" />
                    <polyline points="200,600 200,570 250,570 250,540" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />
                    <polyline points="0,590 60,590 80,560 150,560 180,590" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.12" />
                    <polyline points="500,620 540,620 540,580 580,580 580,540" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.14" />

                    {/* Junction dots bottom-left */}
                    <circle cx="80" cy="760" r="2" fill="#39ff14" opacity="0.4" />
                    <circle cx="180" cy="780" r="2.5" fill="#39ff14" opacity="0.5" className="node-pulse-slow" />
                    <circle cx="320" cy="700" r="2.5" fill="#39ff14" opacity="0.5" className="node-pulse-slow" />
                    <circle cx="200" cy="600" r="3" fill="#39ff14" opacity="0.6" className="node-pulse" />
                    <circle cx="560" cy="660" r="2.5" fill="#39ff14" opacity="0.45" className="node-pulse-slow" />
                </g>

                {/* ============================================================ */}
                {/* === BOTTOM-RIGHT QUADRANT TRACES                           === */}
                {/* ============================================================ */}
                <g filter="url(#glowSoft)">
                    <polyline points="1400,780 1340,780 1320,760 1240,760 1220,780 1100,780" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.2" />
                    <polyline points="1400,750 1360,750 1340,770 1280,770 1250,740 1180,740" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />
                    <polyline points="1220,780 1220,740 1180,740 1180,700" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.18" />
                    <polyline points="1100,780 1060,780 1060,740 1020,740 1020,760 950,760" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.2" />
                    <line x1="1150" y1="730" x2="1400" y2="730" stroke="#39ff14" strokeWidth="0.5" opacity="0.12" />

                    <polyline points="1400,700 1320,700 1290,670 1200,670 1170,700 1080,700 1080,660" fill="none" stroke="#39ff14" strokeWidth="0.8" opacity="0.22" />
                    <polyline points="1080,660 1020,660 1000,680 920,680 900,660 840,660" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.18" />
                    <polyline points="950,760 950,720 900,720 880,700 840,700 840,660" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.16" />

                    <polyline points="1400,630 1300,630 1270,600 1200,600 1170,630 1050,630" fill="none" stroke="#39ff14" strokeWidth="0.8" opacity="0.2" />
                    <polyline points="1050,630 1050,600 1000,600 980,620 900,620" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.16" />
                    <polyline points="1200,600 1200,570 1150,570 1150,540" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />
                    <polyline points="1400,590 1340,590 1320,560 1250,560 1220,590" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.12" />
                    <polyline points="900,620 860,620 860,580 820,580 820,540" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.14" />

                    {/* Junction dots bottom-right */}
                    <circle cx="1320" cy="760" r="2" fill="#39ff14" opacity="0.4" />
                    <circle cx="1220" cy="780" r="2.5" fill="#39ff14" opacity="0.5" className="node-pulse-slow" />
                    <circle cx="1080" cy="700" r="2.5" fill="#39ff14" opacity="0.5" className="node-pulse-slow" />
                    <circle cx="1200" cy="600" r="3" fill="#39ff14" opacity="0.6" className="node-pulse" />
                    <circle cx="840" cy="660" r="2.5" fill="#39ff14" opacity="0.45" className="node-pulse-slow" />
                </g>

                {/* ============================================================ */}
                {/* === CENTER HUD ELEMENT                                     === */}
                {/* ============================================================ */}
                <g className="center-hud" filter="url(#glow)">
                    <circle cx="700" cy="400" r="60" fill="url(#centerGlow)" />
                    <circle cx="700" cy="400" r="15" fill="#39ff14" opacity="0.8" className="core-pulse" />

                    <circle cx="700" cy="400" r="40" fill="none" stroke="#39ff14" strokeWidth="1.5" opacity="0.6" />
                    <circle cx="700" cy="400" r="65" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.4" strokeDasharray="8 4" className="ring-rotate" />
                    <circle cx="700" cy="400" r="90" fill="none" stroke="#39ff14" strokeWidth="1.5" opacity="0.5" />
                    <circle cx="700" cy="400" r="95" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.3" />
                    <circle cx="700" cy="400" r="115" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.35" strokeDasharray="12 6" className="ring-rotate-reverse" />
                    <circle cx="700" cy="400" r="130" fill="none" stroke="#39ff14" strokeWidth="1.5" opacity="0.3" />
                    <circle cx="700" cy="400" r="150" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 8" className="ring-rotate" />

                    {/* Cross-hair lines */}
                    <line x1="670" y1="400" x2="560" y2="400" stroke="#39ff14" strokeWidth="0.5" opacity="0.2" />
                    <line x1="730" y1="400" x2="840" y2="400" stroke="#39ff14" strokeWidth="0.5" opacity="0.2" />
                    <line x1="700" y1="370" x2="700" y2="260" stroke="#39ff14" strokeWidth="0.5" opacity="0.2" />
                    <line x1="700" y1="430" x2="700" y2="540" stroke="#39ff14" strokeWidth="0.5" opacity="0.2" />

                    {/* Diagonal indicators */}
                    <line x1="670" y1="370" x2="640" y2="340" stroke="#39ff14" strokeWidth="0.5" opacity="0.2" />
                    <line x1="730" y1="370" x2="760" y2="340" stroke="#39ff14" strokeWidth="0.5" opacity="0.2" />
                    <line x1="670" y1="430" x2="640" y2="460" stroke="#39ff14" strokeWidth="0.5" opacity="0.2" />
                    <line x1="730" y1="430" x2="760" y2="460" stroke="#39ff14" strokeWidth="0.5" opacity="0.2" />

                    {/* Tick marks */}
                    {[...Array(36)].map((_, i) => {
                        const angle = (i * 10) * Math.PI / 180;
                        const x1 = 700 + 125 * Math.cos(angle);
                        const y1 = 400 + 125 * Math.sin(angle);
                        const x2 = 700 + 130 * Math.cos(angle);
                        const y2 = 400 + 130 * Math.sin(angle);
                        return <line key={`tick-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#39ff14" strokeWidth={i % 3 === 0 ? "2" : "0.8"} opacity={i % 3 === 0 ? "0.6" : "0.3"} />;
                    })}

                    {/* Arc segments */}
                    <path d="M 700 290 A 110 110 0 0 1 810 400" fill="none" stroke="#39ff14" strokeWidth="2" opacity="0.5" strokeDasharray="5 3" />
                    <path d="M 700 510 A 110 110 0 0 1 590 400" fill="none" stroke="#39ff14" strokeWidth="2" opacity="0.5" strokeDasharray="5 3" />
                    <path d="M 810 400 A 110 110 0 0 1 700 510" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.25" strokeDasharray="3 5" className="arc-dash-anim" />
                    <path d="M 590 400 A 110 110 0 0 1 700 290" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.25" strokeDasharray="3 5" className="arc-dash-anim-reverse" />
                </g>

                {/* ============================================================ */}
                {/* === LEFT MID-BAND TRACES (y 280-520)                      === */}
                {/* ============================================================ */}
                <g className="left-circuits" filter="url(#glow)">
                    {/* Main horizontal lines */}
                    <line x1="0" y1="340" x2="530" y2="340" stroke="#39ff14" strokeWidth="0.6" opacity="0.2" />
                    <line x1="0" y1="360" x2="520" y2="360" stroke="#39ff14" strokeWidth="1" opacity="0.3" />
                    <line x1="0" y1="380" x2="500" y2="380" stroke="#39ff14" strokeWidth="0.5" opacity="0.15" />
                    <line x1="0" y1="400" x2="540" y2="400" stroke="#39ff14" strokeWidth="1.5" opacity="0.4" />
                    <line x1="0" y1="420" x2="500" y2="420" stroke="#39ff14" strokeWidth="0.5" opacity="0.15" />
                    <line x1="0" y1="440" x2="520" y2="440" stroke="#39ff14" strokeWidth="1" opacity="0.3" />
                    <line x1="0" y1="460" x2="530" y2="460" stroke="#39ff14" strokeWidth="0.6" opacity="0.2" />

                    {/* Upper branch traces */}
                    <polyline points="0,260 100,260 130,280 200,280 230,310 350,310 350,340 450,340" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.3" />
                    <polyline points="50,320 180,320 210,350 380,350" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.25" />
                    <polyline points="0,240 80,240 100,260" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.18" />
                    <polyline points="0,290 120,290 150,310 200,310" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />

                    {/* Lower branch traces */}
                    <polyline points="0,540 100,540 130,520 200,520 230,490 350,490 350,460 450,460" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.3" />
                    <polyline points="50,480 180,480 210,450 380,450" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.25" />
                    <polyline points="0,510 120,510 150,490 200,490" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />

                    {/* Angled connectors */}
                    <polyline points="450,340 500,360 540,360" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.35" />
                    <polyline points="450,460 500,440 540,440" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.35" />

                    {/* Junction dots */}
                    <circle cx="200" cy="280" r="3" fill="#39ff14" opacity="0.6" />
                    <circle cx="350" cy="310" r="4" fill="#39ff14" opacity="0.7" className="node-pulse" />
                    <circle cx="180" cy="320" r="3" fill="#39ff14" opacity="0.5" />
                    <circle cx="200" cy="520" r="3" fill="#39ff14" opacity="0.6" />
                    <circle cx="350" cy="490" r="4" fill="#39ff14" opacity="0.7" className="node-pulse" />
                    <circle cx="180" cy="480" r="3" fill="#39ff14" opacity="0.5" />
                    <circle cx="100" cy="260" r="2.5" fill="#39ff14" opacity="0.5" className="node-pulse-slow" />
                    <circle cx="100" cy="540" r="2.5" fill="#39ff14" opacity="0.5" className="node-pulse-slow" />

                    {/* Chevrons */}
                    <g className="chevron-group chevron-left-anim">
                        <polyline points="420,385 440,400 420,415" fill="none" stroke="#39ff14" strokeWidth="2.5" opacity="0.8" />
                        <polyline points="395,385 415,400 395,415" fill="none" stroke="#39ff14" strokeWidth="2" opacity="0.5" />
                        <polyline points="370,385 390,400 370,415" fill="none" stroke="#39ff14" strokeWidth="1.5" opacity="0.3" />
                    </g>

                    {/* Data stream bits */}
                    <g className="data-stream-left">
                        <rect x="200" y="395" width="8" height="3" fill="#39ff14" opacity="0" rx="1" className="data-bit data-bit-0" />
                        <rect x="240" y="395" width="12" height="3" fill="#39ff14" opacity="0" rx="1" className="data-bit data-bit-1" />
                        <rect x="270" y="395" width="6" height="3" fill="#39ff14" opacity="0" rx="1" className="data-bit data-bit-2" />
                        <rect x="300" y="395" width="10" height="3" fill="#39ff14" opacity="0" rx="1" className="data-bit data-bit-3" />
                        <rect x="340" y="395" width="5" height="3" fill="#39ff14" opacity="0" rx="1" className="data-bit data-bit-4" />
                    </g>
                </g>

                {/* ============================================================ */}
                {/* === RIGHT MID-BAND TRACES (y 280-520)                     === */}
                {/* ============================================================ */}
                <g className="right-circuits" filter="url(#glow)">
                    <line x1="870" y1="340" x2="1400" y2="340" stroke="#39ff14" strokeWidth="0.6" opacity="0.2" />
                    <line x1="880" y1="360" x2="1400" y2="360" stroke="#39ff14" strokeWidth="1" opacity="0.3" />
                    <line x1="900" y1="380" x2="1400" y2="380" stroke="#39ff14" strokeWidth="0.5" opacity="0.15" />
                    <line x1="860" y1="400" x2="1400" y2="400" stroke="#39ff14" strokeWidth="1.5" opacity="0.4" />
                    <line x1="900" y1="420" x2="1400" y2="420" stroke="#39ff14" strokeWidth="0.5" opacity="0.15" />
                    <line x1="880" y1="440" x2="1400" y2="440" stroke="#39ff14" strokeWidth="1" opacity="0.3" />
                    <line x1="870" y1="460" x2="1400" y2="460" stroke="#39ff14" strokeWidth="0.6" opacity="0.2" />

                    <polyline points="1400,260 1300,260 1270,280 1200,280 1170,310 1050,310 1050,340 950,340" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.3" />
                    <polyline points="1350,320 1220,320 1190,350 1020,350" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.25" />
                    <polyline points="1400,240 1320,240 1300,260" fill="none" stroke="#39ff14" strokeWidth="0.7" opacity="0.18" />
                    <polyline points="1400,290 1280,290 1250,310 1200,310" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />

                    <polyline points="1400,540 1300,540 1270,520 1200,520 1170,490 1050,490 1050,460 950,460" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.3" />
                    <polyline points="1350,480 1220,480 1190,450 1020,450" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.25" />
                    <polyline points="1400,510 1280,510 1250,490 1200,490" fill="none" stroke="#39ff14" strokeWidth="0.6" opacity="0.15" />

                    <polyline points="950,340 900,360 860,360" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.35" />
                    <polyline points="950,460 900,440 860,440" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.35" />

                    <circle cx="1200" cy="280" r="3" fill="#39ff14" opacity="0.6" />
                    <circle cx="1050" cy="310" r="4" fill="#39ff14" opacity="0.7" className="node-pulse" />
                    <circle cx="1220" cy="320" r="3" fill="#39ff14" opacity="0.5" />
                    <circle cx="1200" cy="520" r="3" fill="#39ff14" opacity="0.6" />
                    <circle cx="1050" cy="490" r="4" fill="#39ff14" opacity="0.7" className="node-pulse" />
                    <circle cx="1220" cy="480" r="3" fill="#39ff14" opacity="0.5" />
                    <circle cx="1300" cy="260" r="2.5" fill="#39ff14" opacity="0.5" className="node-pulse-slow" />
                    <circle cx="1300" cy="540" r="2.5" fill="#39ff14" opacity="0.5" className="node-pulse-slow" />

                    <g className="chevron-group chevron-right-anim">
                        <polyline points="980,385 960,400 980,415" fill="none" stroke="#39ff14" strokeWidth="2.5" opacity="0.8" />
                        <polyline points="1005,385 985,400 1005,415" fill="none" stroke="#39ff14" strokeWidth="2" opacity="0.5" />
                        <polyline points="1030,385 1010,400 1030,415" fill="none" stroke="#39ff14" strokeWidth="1.5" opacity="0.3" />
                    </g>

                    <g className="data-stream-right">
                        <rect x="1060" y="395" width="8" height="3" fill="#39ff14" opacity="0" rx="1" className="data-bit data-bit-0" />
                        <rect x="1100" y="395" width="12" height="3" fill="#39ff14" opacity="0" rx="1" className="data-bit data-bit-1" />
                        <rect x="1130" y="395" width="6" height="3" fill="#39ff14" opacity="0" rx="1" className="data-bit data-bit-2" />
                        <rect x="1160" y="395" width="10" height="3" fill="#39ff14" opacity="0" rx="1" className="data-bit data-bit-3" />
                        <rect x="1200" y="395" width="5" height="3" fill="#39ff14" opacity="0" rx="1" className="data-bit data-bit-4" />
                    </g>
                </g>

                {/* ============================================================ */}
                {/* === EDGE-TO-EDGE LONG HORIZONTAL TRACES                   === */}
                {/* ============================================================ */}
                <g filter="url(#glowSoft)">
                    <line x1="0" y1="150" x2="600" y2="150" stroke="#39ff14" strokeWidth="0.5" opacity="0.1" />
                    <line x1="800" y1="150" x2="1400" y2="150" stroke="#39ff14" strokeWidth="0.5" opacity="0.1" />
                    <line x1="0" y1="250" x2="550" y2="250" stroke="#39ff14" strokeWidth="0.6" opacity="0.12" />
                    <line x1="850" y1="250" x2="1400" y2="250" stroke="#39ff14" strokeWidth="0.6" opacity="0.12" />
                    <line x1="0" y1="550" x2="550" y2="550" stroke="#39ff14" strokeWidth="0.6" opacity="0.12" />
                    <line x1="850" y1="550" x2="1400" y2="550" stroke="#39ff14" strokeWidth="0.6" opacity="0.12" />
                    <line x1="0" y1="650" x2="600" y2="650" stroke="#39ff14" strokeWidth="0.5" opacity="0.1" />
                    <line x1="800" y1="650" x2="1400" y2="650" stroke="#39ff14" strokeWidth="0.5" opacity="0.1" />
                </g>

                {/* ============================================================ */}
                {/* === VERTICAL SPINE LINES                                  === */}
                {/* ============================================================ */}
                <g filter="url(#glowSoft)">
                    <line x1="700" y1="0" x2="700" y2="250" stroke="#39ff14" strokeWidth="0.5" opacity="0.08" strokeDasharray="6 10" />
                    <line x1="700" y1="550" x2="700" y2="800" stroke="#39ff14" strokeWidth="0.5" opacity="0.08" strokeDasharray="6 10" />
                    {/* Far left/right vertical runs */}
                    <line x1="70" y1="0" x2="70" y2="800" stroke="#39ff14" strokeWidth="0.3" opacity="0.05" strokeDasharray="4 12" />
                    <line x1="1330" y1="0" x2="1330" y2="800" stroke="#39ff14" strokeWidth="0.3" opacity="0.05" strokeDasharray="4 12" />
                    <line x1="350" y1="0" x2="350" y2="250" stroke="#39ff14" strokeWidth="0.3" opacity="0.06" strokeDasharray="3 10" />
                    <line x1="350" y1="550" x2="350" y2="800" stroke="#39ff14" strokeWidth="0.3" opacity="0.06" strokeDasharray="3 10" />
                    <line x1="1050" y1="0" x2="1050" y2="250" stroke="#39ff14" strokeWidth="0.3" opacity="0.06" strokeDasharray="3 10" />
                    <line x1="1050" y1="550" x2="1050" y2="800" stroke="#39ff14" strokeWidth="0.3" opacity="0.06" strokeDasharray="3 10" />
                </g>

                {/* ============================================================ */}
                {/* === DIAGONAL CROSS-FIELD TRACES                           === */}
                {/* ============================================================ */}
                <g filter="url(#glowSoft)">
                    <line x1="0" y1="0" x2="250" y2="250" stroke="#39ff14" strokeWidth="0.4" opacity="0.08" strokeDasharray="8 12" />
                    <line x1="1400" y1="0" x2="1150" y2="250" stroke="#39ff14" strokeWidth="0.4" opacity="0.08" strokeDasharray="8 12" />
                    <line x1="0" y1="800" x2="250" y2="550" stroke="#39ff14" strokeWidth="0.4" opacity="0.08" strokeDasharray="8 12" />
                    <line x1="1400" y1="800" x2="1150" y2="550" stroke="#39ff14" strokeWidth="0.4" opacity="0.08" strokeDasharray="8 12" />
                </g>

                {/* ============================================================ */}
                {/* === MOVING PULSES                                         === */}
                {/* ============================================================ */}

                {/* Main horizontal pulses */}
                <circle r="3" fill="#39ff14" opacity="0.9" filter="url(#glowStrong)">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M0,400 L540,400" />
                </circle>
                <circle r="3" fill="#39ff14" opacity="0.9" filter="url(#glowStrong)">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M1400,400 L860,400" />
                </circle>

                {/* Upper branch pulses */}
                <circle r="2.5" fill="#39ff14" opacity="0.8" filter="url(#glow)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M0,260 L100,260 L130,280 L200,280 L230,310 L350,310 L350,340 L450,340" />
                </circle>
                <circle r="2.5" fill="#39ff14" opacity="0.8" filter="url(#glow)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M1400,260 L1300,260 L1270,280 L1200,280 L1170,310 L1050,310 L1050,340 L950,340" />
                </circle>

                {/* Lower branch pulses */}
                <circle r="2" fill="#39ff14" opacity="0.7" filter="url(#glow)">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M0,540 L100,540 L130,520 L200,520 L230,490 L350,490 L350,460 L450,460" />
                </circle>
                <circle r="2" fill="#39ff14" opacity="0.7" filter="url(#glow)">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M1400,540 L1300,540 L1270,520 L1200,520 L1170,490 L1050,490 L1050,460 L950,460" />
                </circle>

                {/* Top-left quadrant pulse */}
                <circle r="1.8" fill="#39ff14" opacity="0.6" filter="url(#glowSoft)">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M0,20 L60,20 L80,40 L160,40 L180,20 L300,20 L340,20 L340,60 L380,60 L380,40 L450,40" />
                </circle>
                {/* Top-right quadrant pulse */}
                <circle r="1.8" fill="#39ff14" opacity="0.6" filter="url(#glowSoft)">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M1400,20 L1340,20 L1320,40 L1240,40 L1220,20 L1100,20 L1060,20 L1060,60 L1020,60 L1020,40 L950,40" />
                </circle>
                {/* Bottom-left quadrant pulse */}
                <circle r="1.8" fill="#39ff14" opacity="0.6" filter="url(#glowSoft)">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M0,780 L60,780 L80,760 L160,760 L180,780 L300,780 L340,780 L340,740 L380,740 L380,760 L450,760" />
                </circle>
                {/* Bottom-right quadrant pulse */}
                <circle r="1.8" fill="#39ff14" opacity="0.6" filter="url(#glowSoft)">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M1400,780 L1340,780 L1320,760 L1240,760 L1220,780 L1100,780 L1060,780 L1060,740 L1020,740 L1020,760 L950,760" />
                </circle>

                {/* Top-left second row pulse */}
                <circle r="1.5" fill="#39ff14" opacity="0.5" filter="url(#glowSoft)">
                    <animateMotion dur="4.5s" repeatCount="indefinite" path="M0,100 L80,100 L110,130 L200,130 L230,100 L320,100 L320,140 L380,140 L400,120 L480,120 L500,140 L560,140" />
                </circle>
                {/* Top-right second row pulse */}
                <circle r="1.5" fill="#39ff14" opacity="0.5" filter="url(#glowSoft)">
                    <animateMotion dur="4.5s" repeatCount="indefinite" path="M1400,100 L1320,100 L1290,130 L1200,130 L1170,100 L1080,100 L1080,140 L1020,140 L1000,120 L920,120 L900,140 L840,140" />
                </circle>
                {/* Bottom-left second row pulse */}
                <circle r="1.5" fill="#39ff14" opacity="0.5" filter="url(#glowSoft)">
                    <animateMotion dur="4.5s" repeatCount="indefinite" path="M0,700 L80,700 L110,670 L200,670 L230,700 L320,700 L320,660 L380,660 L400,680 L480,680 L500,660 L560,660" />
                </circle>
                {/* Bottom-right second row pulse */}
                <circle r="1.5" fill="#39ff14" opacity="0.5" filter="url(#glowSoft)">
                    <animateMotion dur="4.5s" repeatCount="indefinite" path="M1400,700 L1320,700 L1290,670 L1200,670 L1170,700 L1080,700 L1080,660 L1020,660 L1000,680 L920,680 L900,660 L840,660" />
                </circle>

                {/* Third-row deeper pulses */}
                <circle r="1.5" fill="#39ff14" opacity="0.5" filter="url(#glowSoft)">
                    <animateMotion dur="5.5s" repeatCount="indefinite" path="M0,170 L100,170 L130,200 L200,200 L230,170 L350,170 L350,200 L400,200 L420,180 L500,180 L540,180 L540,220 L580,220 L580,260" />
                </circle>
                <circle r="1.5" fill="#39ff14" opacity="0.5" filter="url(#glowSoft)">
                    <animateMotion dur="5.5s" repeatCount="indefinite" path="M1400,170 L1300,170 L1270,200 L1200,200 L1170,170 L1050,170 L1050,200 L1000,200 L980,180 L900,180 L860,180 L860,220 L820,220 L820,260" />
                </circle>
                <circle r="1.5" fill="#39ff14" opacity="0.5" filter="url(#glowSoft)">
                    <animateMotion dur="5.5s" repeatCount="indefinite" path="M0,630 L100,630 L130,600 L200,600 L230,630 L350,630 L350,600 L400,600 L420,620 L500,620 L540,620 L540,580 L580,580 L580,540" />
                </circle>
                <circle r="1.5" fill="#39ff14" opacity="0.5" filter="url(#glowSoft)">
                    <animateMotion dur="5.5s" repeatCount="indefinite" path="M1400,630 L1300,630 L1270,600 L1200,600 L1170,630 L1050,630 L1050,600 L1000,600 L980,620 L900,620 L860,620 L860,580 L820,580 L820,540" />
                </circle>

                {/* Sub-line pulses */}
                <circle r="1.5" fill="#39ff14" opacity="0.5" filter="url(#glowSoft)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M0,380 L500,380" begin="0.5s" />
                </circle>
                <circle r="1.5" fill="#39ff14" opacity="0.5" filter="url(#glowSoft)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M1400,380 L900,380" begin="0.5s" />
                </circle>
                <circle r="1.5" fill="#39ff14" opacity="0.5" filter="url(#glowSoft)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M0,420 L500,420" begin="1s" />
                </circle>
                <circle r="1.5" fill="#39ff14" opacity="0.5" filter="url(#glowSoft)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M1400,420 L900,420" begin="1s" />
                </circle>

                {/* Long horizontal edge pulses */}
                <circle r="1.5" fill="#39ff14" opacity="0.4" filter="url(#glowSoft)">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M0,150 L600,150" begin="0s" />
                </circle>
                <circle r="1.5" fill="#39ff14" opacity="0.4" filter="url(#glowSoft)">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M1400,150 L800,150" begin="0s" />
                </circle>
                <circle r="1.5" fill="#39ff14" opacity="0.4" filter="url(#glowSoft)">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M0,650 L600,650" begin="1s" />
                </circle>
                <circle r="1.5" fill="#39ff14" opacity="0.4" filter="url(#glowSoft)">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M1400,650 L800,650" begin="1s" />
                </circle>

                {/* Orbiting dot around HUD */}
                <circle r="2.5" fill="#39ff14" opacity="0.8" filter="url(#glowStrong)" className="orbit-dot" />

                {/* ============================================================ */}
                {/* === SCATTERED PARTICLES (dense, full page)                 === */}
                {/* ============================================================ */}
                {[
                    /* Top edge */
                    [50, 25], [200, 35], [350, 15], [500, 45], [700, 30], [900, 45], [1050, 15], [1200, 35], [1350, 25],
                    /* Row ~80 */
                    [100, 90], [300, 75], [500, 85], [650, 95], [750, 95], [900, 85], [1100, 75], [1300, 90],
                    /* Row ~140 */
                    [70, 145], [220, 135], [400, 145], [560, 130], [840, 130], [1000, 145], [1180, 135], [1330, 145],
                    /* Row ~200 */
                    [150, 205], [350, 195], [480, 210], [620, 190], [780, 190], [920, 210], [1050, 195], [1250, 205],
                    /* Rows ~260-300 */
                    [80, 265], [250, 275], [420, 255], [580, 270], [820, 270], [980, 255], [1150, 275], [1320, 265],
                    /* Mid-band */
                    [120, 350], [280, 290], [420, 330], [180, 450], [330, 470],
                    [1280, 350], [1120, 290], [980, 330], [1220, 450], [1070, 470],
                    [500, 300], [600, 350], [800, 350], [900, 300],
                    [500, 500], [600, 450], [800, 450], [900, 500],
                    /* Rows ~540-600 */
                    [80, 545], [250, 555], [420, 535], [580, 550], [820, 550], [980, 535], [1150, 555], [1320, 545],
                    /* Row ~650 */
                    [150, 645], [350, 655], [480, 640], [620, 660], [780, 660], [920, 640], [1050, 655], [1250, 645],
                    /* Row ~700 */
                    [70, 705], [220, 695], [400, 705], [560, 690], [840, 690], [1000, 705], [1180, 695], [1330, 705],
                    /* Row ~750 */
                    [100, 755], [300, 745], [500, 760], [650, 750], [750, 750], [900, 760], [1100, 745], [1300, 755],
                    /* Bottom edge */
                    [50, 785], [200, 775], [350, 790], [500, 770], [700, 780], [900, 770], [1050, 790], [1200, 775], [1350, 785],
                ].map(([cx, cy], i) => (
                    <circle key={`p-${i}`} cx={cx} cy={cy} r="1.5" fill="#39ff14" opacity="0" className={`spark spark-${i % 8}`} />
                ))}
            </svg>
        </div>
    );
};

export default CircuitBackground;
