export const symposiumData = {
    name: "OMNI TECH",
    date: "06/03/2026",
    definition: "OMNI TECH is a national-level technical symposium designed to bring together innovation, creativity, and competition through technical events, non-technical events, and hands-on workshops, providing participants with learning, exposure, and fun.",
    college: {
        name: "SUGUNA COLLEGE OF ENGINEERING",
        location: "https://maps.app.goo.gl/kXjYYcSTRZTwYvUC9?g_st=aw"
    },
    generalInfo: {
        food: "FOOD WILL BE PROVIDED for all registered participants",
        certificates: "CERTIFICATES will be provided for all participants of all events",
        prizes: "WINNERS will receive exciting CASH PRIZES"
    },
    mainCoordinators: [
        { name: "J. Anu", phone: "6381313958" },
        { name: "Tanisha Govindhan", phone: "8754324366" },
        { name: "S. Vishnupriyan", phone: "7604819632" },
        { name: "K. Kirubakaran", phone: "9342801732" }
    ],
    passPackages: [
        {
            name: "SILVER PASS",
            price: "₹250",
            includes: ["Any 2 TECHNICAL EVENTS", "Any 1 NON-TECHNICAL EVENT"]
        },
        {
            name: "GOLDEN PASS",
            price: "₹300",
            includes: ["2 WORKSHOPS", "Any 1 NON-TECHNICAL EVENT"]
        },
        {
            name: "DIAMOND PASS",
            price: "₹350",
            includes: ["Any 1 WORKSHOP", "Any 2 TECHNICAL EVENTS", "Any 1 NON-TECHNICAL EVENT"]
        }
    ],
    technicalEvents: [
        {
            name: "WEBTRIX REBUILD",
            time: "11:00 AM – 01:00 PM",
            venue: "AI & DS Lab",
            coordinators: "Elango P – 9597617402, Naveen M S – 6379479890",
            participation: "Team (2–4 members)",
            description: "Deploy a high-fidelity digital twin of the provided web architecture within two hours using Vibe Coding methodology."
        },
        {
            name: "BOT-TRIX BUILDER",
            time: "11:20 AM – 12:20 PM",
            venue: "Data Analytics Lab",
            coordinators: "Kesav Adithya – 7010614463, Preethi – 8610224428",
            participation: "Team (3–4 members)",
            description: "Design and develop a functional chatbot based on an on-spot problem statement."
        },
        {
            name: "COSMIC VISION",
            time: "12:00 PM – 01:00 PM",
            venue: "LH205",
            coordinators: "Haridas – 9080253396, Kavya Shree – 6381487932",
            participation: "Team (3–4 members)",
            description: "Presentation of pre-created AI/VR videos."
        },
        {
            name: "GALACTIC INTEL HUNT",
            time: "03:30 PM – 04:00 PM",
            venue: "LH206",
            coordinators: "Karthikeyan B – 7339181902, Anitha – 9342596175",
            participation: "Team (3–4) / Individual",
            description: "Logic-based technical hunt."
        },
        {
            name: "DNA DECODE",
            time: "02:30 PM – 03:30 PM",
            venue: "AI & DS Lab",
            coordinators: "Ahish – 6374766056, Aarthi – 8838984960",
            description: "Analytical decoding challenge."
        },
        {
            name: "DATA SPECTRUM",
            time: "02:30 PM – 03:30 PM",
            venue: "Data Analytics Lab",
            coordinators: "Vishwanathan – 6381103509, Nandini – 9003942936",
            participation: "Team (2–3 members)",
            description: "On-spot data cleaning and visualization."
        }
    ],
    nonTechnicalEvents: [
        {
            name: "NEURAL NEXUS",
            time: "11:20 AM – 12:20 PM",
            venue: "LH206",
            coordinators: "Jayasri – 8667803947, Prabhu – 9080523755",
            description: "Logic-based connection game using images and clues."
        },
        {
            name: "IPL AUCTION",
            time: "11:00 AM – 01:20 PM",
            venue: "Seminar Hall",
            coordinators: "Dinesh – 7806879335, Guna – 8122572420, Kamal – 9943043274",
            description: "Strategic bidding game inspired by IPL auction format."
        },
        {
            name: "M1 BATTLE ARENA (Free Fire)",
            time: "11:00 AM – 01:30 PM",
            venue: "LH201",
            coordinators: "Chandru R – 8838908544, Daniel T – 6384259096, Sanjeevi – 8015065789",
            description: "Team-based Free Fire e-sports competition."
        },
        {
            name: "MIND MORPH CHALLENGE",
            time: "02:30 PM – 03:30 PM",
            venue: "LH206",
            coordinators: "Robert – 9342614082, Vignesh – 9787458920",
            description: "Memory, focus, and recall-based challenge."
        },
        {
            name: "DNA HUNT",
            time: "02:30 PM – 03:30 PM",
            venue: "LH102",
            coordinators: "Harini – 9344822595, Kaviarasi – 8682915728",
            description: "Team-based treasure hunt with clues and tasks."
        },
        {
            name: "FREAKY LENS CAPTURE",
            time: "11:00–11:20 AM & 12:20–01:00 PM",
            venue: "LH205",
            coordinators: "Krishna Kumar – 9600396542, Surya – 9360623439",
            description: "Spot photography contest (No DSLR, No editing)."
        }
    ],
    workshops: [
        {
            name: "WORKSHOP 1",
            topic: "AI for Mobile App Development using Flutter",
            speaker: "Mrs. C. Eyamini, M.E. (Ph.D)",
            coordinators: "Pooja – 9345485257",
            time: "11:00 AM onwards",
            venue: "IT Lab"
        },
        {
            name: "WORKSHOP 2",
            topic: "Web App Development using Streamlit",
            speaker: "Mr. C. Vignesh Manikandan, M.E",
            coordinators: "T. Manoji – 8248207843",
            time: "02:30 PM onwards",
            venue: "IT Lab"
        }
    ]
};

const formatEvent = (event) => {
    let output = `📌 ${event.name}\n`;
    output += `⏰ Time: ${event.time}\n`;
    output += `📍 Venue: ${event.venue}\n`;
    if (event.participation) output += `👥 Participation: ${event.participation}\n`;
    output += `👤 Coordinators: ${event.coordinators}\n`;
    if (event.description) output += `📝 Description: ${event.description}\n`;
    return output;
};

const formatWorkshop = (workshop) => {
    let output = `🛠️ ${workshop.name}\n`;
    output += `📚 Topic: ${workshop.topic}\n`;
    output += `🎤 Speaker: ${workshop.speaker}\n`;
    output += `⏰ Time: ${workshop.time}\n`;
    output += `📍 Venue: ${workshop.venue}\n`;
    output += `👤 Student Coordinator: ${workshop.coordinators}\n`;
    return output;
};

const getGeneralInfo = () => {
    return `\n🍕 ${symposiumData.generalInfo.food}\n📜 ${symposiumData.generalInfo.certificates}\n💰 ${symposiumData.generalInfo.prizes}`;
};

export const findResponse = (query) => {
    const q = query.toLowerCase().trim();
    if (!q) return "How can I help you with the OMNI TECH symposium today?";

    // Informational Intents
    if (q === "date") return `The OMNI TECH symposium will be held on **${symposiumData.date}**.`;
    if (q.includes("college") || q.includes("location") || q.includes("where")) {
        return `🏛️ **${symposiumData.college.name}**\n📍 Location: ${symposiumData.college.location}`;
    }
    if (q.includes("omni tech") || q.includes("what is")) {
        return symposiumData.definition;
    }

    // Packages Intent
    if (q.includes("package") || q.includes("pass") || q.includes("price") || q.includes("cost") || q.includes("register")) {
        let out = `🎟️ **OMNI TECH PASS PACKAGES**\n\n`;
        symposiumData.passPackages.forEach(p => {
            out += `🏷️ **${p.name} – ${p.price}**\n`;
            out += `Includes:\n` + p.includes.map(i => `  • ${i}`).join("\n") + "\n\n";
        });
        out += getGeneralInfo();
        return out;
    }

    // Technical Events Intent
    if (q.includes("technical") && !q.includes("non")) {
        let out = `--- TECHNICAL EVENTS ---\n\n`;
        symposiumData.technicalEvents.forEach(e => out += formatEvent(e) + "\n");
        out += getGeneralInfo();
        return out;
    }

    // Non-Technical Events Intent
    if (q.includes("non") && q.includes("technical")) {
        let out = `--- NON-TECHNICAL EVENTS ---\n\n`;
        symposiumData.nonTechnicalEvents.forEach(e => out += formatEvent(e) + "\n");
        out += getGeneralInfo();
        return out;
    }

    // Workshop Intent
    if (q.includes("workshop")) {
        let out = `--- WORKSHOPS ---\n\n`;
        symposiumData.workshops.forEach(w => out += formatWorkshop(w) + "\n");
        out += getGeneralInfo();
        return out;
    }

    // Full Brochure Intent
    if (q.includes("brochure") || q.includes("full") || q.includes("all details")) {
        let brochure = `📄 **EVENT BROCHURE**\n`;
        brochure += `�️ **${symposiumData.college.name}**\n`;
        brochure += `📍 Location: ${symposiumData.college.location}\n\n`;

        brochure += `--- TECHNICAL EVENTS ---\n`;
        symposiumData.technicalEvents.forEach(e => brochure += formatEvent(e) + "\n");

        brochure += `--- NON-TECHNICAL EVENTS ---\n`;
        symposiumData.nonTechnicalEvents.forEach(e => brochure += formatEvent(e) + "\n");

        brochure += `--- WORKSHOPS ---\n`;
        symposiumData.workshops.forEach(w => brochure += formatWorkshop(w) + "\n");

        brochure += `👨‍💼 **MAIN COORDINATORS**\n`;
        symposiumData.mainCoordinators.forEach(c => brochure += `• ${c.name}: ${c.phone}\n`);

        brochure += getGeneralInfo();
        return brochure;
    }

    // Contact/Coordinators
    if (q.includes("coordinator") || q.includes("contact") || q.includes("number") || q.includes("phone")) {
        return "Main Coordinators:\n" + symposiumData.mainCoordinators.map(c => `• ${c.name}: ${c.phone}`).join("\n");
    }

    // Food/Cert/Prize
    if (q.includes("food")) return symposiumData.generalInfo.food;
    if (q.includes("cert")) return symposiumData.generalInfo.certificates;
    if (q.includes("prize") || q.includes("cash")) return symposiumData.generalInfo.prizes;

    // Specific Match Event/Workshop
    const all = [...symposiumData.technicalEvents, ...symposiumData.nonTechnicalEvents];
    const match = all.find(e => q.includes(e.name.toLowerCase()));
    if (match) return formatEvent(match) + getGeneralInfo();

    const wsMatch = symposiumData.workshops.find(w => q.includes(w.name.toLowerCase()) || q.includes(w.topic.toLowerCase()));
    if (wsMatch) return formatWorkshop(wsMatch) + getGeneralInfo();

    // Intent Inference for Short/Informal Queries
    if (q.length < 15) {
        if (q.includes("tech")) return findResponse("technical");
        if (q.includes("non")) return findResponse("non technical");
        if (q.includes("work")) return findResponse("workshop");
        if (q.includes("pass")) return findResponse("packages");
        if (q.includes("coord")) return findResponse("coordinator");
    }

    return "I am the OMNI TECH assistant. You can ask about technical events, non-technical events, workshops, pass packages, or the symposium date and location.";
};
