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
    // Non-Technical
    {
        id: 'memory-challenge',
        title: 'MIND MORPH CHALLENGE',
        category: 'Non Technical',
        size: 'medium',
        image: mindMorph,
        description: "MIND MORPH CHALLENGE (Memory Challenge) is an engaging game that tests participants’ memory, focus, and recall ability through various tasks and activities. This game can be played either individually or as a team, which will be decided on the spot based on the number of participants enrolled in the event.",
        coordinators: [
            { name: "ROBERT", phone: "" },
            { name: "VIGNESH", phone: "" }
        ],
        duration: "1 hr",
        participation: "Team(3-4 members) / Individual (Based on the number of participants arriving)",
        venue: ""
    },
    {
        id: 'connection',
        title: 'NEURAL NEXUS',
        category: 'Non Technical',
        size: 'medium',
        image: neural,
        description: "Connection is a fun, interactive, non-technical event that challenges participants to identify logical links between given images, words, or clues, enhancing observation skills, creative thinking, teamwork, and quick decision-making while delivering an engaging and enjoyable competitive experience.",
        coordinators: [
            { name: "JAYASRI", phone: "8667803947" },
            { name: "PRABHU", phone: "9080523755" }
        ],
        duration: "1 - 1.5 hr",
        participation: "Team(3-4 members) / Individual (Based on the number of participants arriving)",
        venue: ""
    },
    {
        id: 'esports',
        title: 'M1 BATTLE ARENA',
        category: 'Non Technical',
        size: 'large',
        image: battleArena,
        description: "E-Sports (Free Fire) is a competitive gaming event where teams compete in Free Fire matches to test their skills and teamwork.",
        rules: [
            "Match format and schedule will be decided based on the number of teams arriving and will be informed on the spot.",
            "The game played will be Free Fire."
        ],
        coordinators: [
            { name: "CHANDRU.R", phone: "8838908544" },
            { name: "DANIEL.T", phone: "6384259096" },
            { name: "SANJEEVI", phone: "8015065789" }
        ],
        duration: "2.5 - 3 Hr",
        participation: "Team (4 members only)",
        venue: ""
    },
    {
        id: 'treasure-hunt',
        title: 'DNA HUNT',
        category: 'Non Technical',
        size: 'medium',
        image: dnaHunter,
        description: "DNA HUNT (Treasure Hunt) is an exciting team-based game where participants solve clues and complete tasks to reach the final objective, testing their problem-solving skills and teamwork.",
        coordinators: [
            { name: "HARINI", phone: "" },
            { name: "KAVIARASI", phone: "" }
        ],
        duration: "",
        participation: "Team (4-5 members only)",
        venue: ""
    },
    {
        id: 'photography',
        title: 'FREAKY LENS CAPTURE',
        category: 'Non Technical',
        size: 'medium',
        image: freakyLens,
        description: "A photography event where participants capture moments based on a theme or spontaneously to showcase their creativity.", // Added a generic description since none was provided
        coordinators: [
            { name: "KRISHNA KUMAR", phone: "" },
            { name: "SURYA", phone: "" }
        ],
        duration: "10-15 minutes before lunch and 30-40 minutes after lunch for finalizing",
        participation: "Individual Participation",
        venue: ""
    },
    {
        id: 'ipl-auction',
        title: 'IPL AUCTION',
        category: 'Non Technical',
        size: 'large',
        image: iplAuction,
        description: "IPL Auction is a fun and interactive event inspired by the Indian Premier League auction, where participants act as team owners and bid on players using a fixed virtual budget to form a balanced team. The event tests strategic thinking, budgeting, teamwork, and quick decision-making.",
        rules: [
            "Each team is given a fixed virtual budget that must not be exceeded.",
            "Players are auctioned one at a time, and bids once placed cannot be withdrawn.",
            "Teams must complete the required number of players and follow team composition rules.",
            "Players once sold cannot be re-auctioned or exchanged.",
            "Any violation of rules or use of unfair means will result in disqualification.",
            "The decision of the event coordinators will be final."
        ],
        coordinators: [
            { name: "DINESH", phone: "7806879335" },
            { name: "GUNA", phone: "8122572420" },
            { name: "KAMAL", phone: "9943043274" }
        ],
        duration: "2.5 - 3 hours",
        participation: "Team (3–4 members only)",
        venue: ""
    },
];