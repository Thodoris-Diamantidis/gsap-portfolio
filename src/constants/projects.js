import {GithubIcon} from "@/components/icons/lucide-github.jsx";
import {ExternalLinkIcon} from "@/components/icons/lucide-external-link.jsx";

// Newest first. `note` replaces links when the code can't be shared.
// `caseStudy` (any of: challenge, solution, decisions, impact, lessons) replaces the `highlights`
// bullets on the card. Keep it to around three short paragraphs so the pinned card fits on one screen.
// `upcoming` is an optional "Coming next" note for work in progress.
export const projects = [
    {
        name: "ThesKourema",
        label: "Barbershop booking platform",
        period: "Aug 2026 – Present",
        summary: "A full-stack barbershop management and booking platform that modernises appointment scheduling through an intuitive online experience for both customers and business owners.",
        upcoming: "The platform is being expanded with an AI-powered receptionist capable of answering phone calls, handling customer inquiries, and automatically scheduling appointments, further reducing administrative workload and improving customer service.",
        caseStudy: {
            challenge: "Help local businesses that rely on outdated booking methods switch to a modern online booking system.",
            solution: "Built a full-stack booking platform with appointment scheduling, service and staff management, AI Call appointment booking (work in progress) and a mobile-first user experience.",
            impact: "Improved booking accessibility, streamlined appointment management, and showcased end-to-end web development skills.",
        },
        tech: ["Next.js 16", "React 19", "TypeScript"],
        links: [],
        note: "Private codebase · demo available on request",
    },
    {
        name: "AI Financial Dashboard",
        label: "Bachelor's thesis",
        period: "Oct 2025",
        summary: "A full-stack web app for analysing stock and crypto trends with AI-assisted insights.",
        caseStudy: {
            challenge: "Financial data is complex, fragmented, and difficult for everyday investors to analyse quickly.",
            solution: "Developed an AI-powered dashboard combining real-time market data, interactive visualisations, personalised alerts, and AI-generated insights.",
            impact: "Made financial analysis more accessible by helping users monitor trends and make data-driven decisions from a single platform.",
        },
        tech: ["Next.js", "TypeScript", "Google Gemini", "Inngest", "MongoDB Atlas"],
        links: [
            {label: "GitHub", href: "https://github.com/Thodoris-Diamantidis/ai-financial-dashboard", icon: GithubIcon},
        ],
    },
    {
        name: "Personal Portfolio",
        label: "Previous portfolio",
        summary: "A simple, responsive React portfolio deployed on Vercel, and the starting point for this site.",
        highlights: [
            "Designed and built a single-page portfolio in React to present my projects, skills and contact details.",
            "Made the layout responsive across mobile, tablet and desktop.",
            "Deployed and hosted it on Vercel.",
        ],
        tech: ["React", "Vercel"],
        links: [
            {label: "Live site", href: "https://thodoris-diamantidis-portfolio.vercel.app/", icon: ExternalLinkIcon},
        ],
    },
];
