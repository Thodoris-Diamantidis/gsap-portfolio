import {GithubIcon} from "@/components/icons/lucide-github.jsx";
import {ExternalLinkIcon} from "@/components/icons/lucide-external-link.jsx";

// Newest first. `note` replaces links when the code can't be shared.
export const projects = [
    {
        name: "ThesKourema",
        label: "AI receptionist SaaS",
        period: "Aug 2026 – Present",
        summary: "An AI receptionist for barbershops, in development. I'm the frontend developer.",
        highlights: [
            "Built the booking dashboard: calendar view, staff management and scheduling settings.",
            "Integrated the frontend with a Go REST API.",
        ],
        tech: ["Next.js 16", "React 19", "TypeScript"],
        links: [],
        note: "Private codebase · demo available on request",
    },
    {
        name: "AI Financial Dashboard",
        label: "Bachelor's thesis",
        period: "Oct 2025",
        summary: "A full-stack web app for analysing stock and crypto trends with AI-assisted insights.",
        highlights: [
            "Pulled market data from the Finnhub and CoinGecko APIs into interactive charts.",
            "Integrated Google Gemini to analyse 30 days of price data and answer questions on a stock's outlook, risk and recent trend, and to summarise market news.",
            "Built user watchlists, price alerts and personalised daily news emails, run as event-driven background jobs with Inngest on MongoDB Atlas.",
        ],
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
