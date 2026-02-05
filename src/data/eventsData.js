import webtrixBuilder from "../assets/webtrix-builder.png";
import botrixBuilter from "../assets/botrix-builter.png";
import cosmicVision from "../assets/cosmic-vision.png";
import glanticIntel from "../assets/glantic-intel.jpeg";
import dnaDecode from "../assets/dna-decode.jpeg";
import dataSpectrum from "../assets/data-spectrum.png";
import battleArena from "../assets/battle-arena.png";
import neural from "../assets/neural-nexus.png"
import dnaHunter from "../assets/dna-hunter.png";
import freakyLens from "../assets/freaky-lens-capture.jpeg";
import iplAuction from "../assets/ipl-auction.png";
import mindMorph from "../assets/mind-morph.png";

export const eventsData = [
    // User Text: 
    // Technical: Web Duplication, Chatbot Building, VR/AI Video Generation, Google-based Challenges, Escape Code, Data Visualization
    // Non-Technical: Connection, Start Music, E-Sports, Anime Verse, Treasure Hunt, Photography, IPL Auction
    // Workshops: Workshop 1, Workshop 2

    // Row 1
    { id: 'web-duplication', title: 'Web Duplication', category: 'Technical', size: 'large', image: webtrixBuilder },
    { id: 'chatbot', title: 'Chatbot Building', category: 'Technical', size: 'medium', image: botrixBuilter },

    // Row 2
    { id: 'vr-ai-video', title: 'VR/AI Video Gen', category: 'Technical', size: 'medium', image: cosmicVision },
    { id: 'google-challenge', title: 'Google Challenges', category: 'Technical', size: 'large', image: glanticIntel },

    // Row 3
    { id: 'escape-code', title: 'Escape Code', category: 'Technical', size: 'medium', image: dnaDecode },
    { id: 'data-vis', title: 'Data Visualization', category: 'Technical', size: 'medium', image: dataSpectrum },

    // Non-Technical
    { id: 'memory-challenge', title: 'MIND MORPH CHALLENGE', category: 'Non Technical', size: 'medium', image: mindMorph },
    { id: 'connection', title: 'NEURAL NEXUS', category: 'Non Technical', size: 'medium', image: neural },
    { id: 'esports', title: 'E-Sports', category: 'Non Technical', size: 'large', image: battleArena },
    { id: 'treasure-hunt', title: 'Treasure Hunt', category: 'Non Technical', size: 'medium', image: dnaHunter },
    { id: 'photography', title: 'Photography', category: 'Non Technical', size: 'medium', image: freakyLens },
    { id: 'ipl-auction', title: 'IPL Auction', category: 'Non Technical', size: 'large', image: iplAuction },
];
