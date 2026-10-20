import Galaxy from "./components/Galaxy";

import gsap from 'gsap';

import {DownloadIcon} from "@/components/icons/lucide-download.jsx";
import {ExternalLinkIcon} from "@/components/icons/lucide-external-link.jsx";
import {lazy, Suspense, useLayoutEffect, useRef, useState} from "react";
import StackBox from "@/components/Stackbox.jsx";
import { stack } from "@/constants/stack.js";
import { blogUrl, cvUrl, navLinks, socials } from "@/constants/navigation.js";
import {StackIcon} from "@/components/icons/lucide-stack.jsx";
import ExperienceCard from "@/components/ExperienceCard.jsx";
import { experience } from "@/constants/experience.js";
import ProjectShowcase from "@/components/ProjectShowcase.jsx";
import { projects } from "@/constants/projects.js";

// three.js is most of the bundle; loading it separately lets the hero text paint first.
const Cube = lazy(() => import("@/components/HeroModels/Cube.jsx"));

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const App = () => {
    // Hero section Loading Refs
    const socialRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonsRef = useRef(null);
    const cubeRef = useRef(null);

    //Tab:
    const [activeTab, setActiveTab] = useState("software");

    useLayoutEffect(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.timeline({defaults: {autoAlpha: 0, duration: 0.9, ease: "power3.out"}})
                .from(socialRef.current, {x: -80})
                .from(titleRef.current, {x: -60}, "-=0.7")
                .from(subtitleRef.current, {x: -60}, "-=0.7")
                .from(paragraphRef.current, {x: -40}, "-=0.7")
                .from(buttonsRef.current, {x: -40}, "-=0.7")
                .from(cubeRef.current, {x: 120, duration: 1.6}, 0.3);
        });

        return () => mm.revert();
    }, []);

    return (
        <>
            {/* Background Galaxy*/}
            <div className="fixed inset-0 -z-10" aria-hidden="true">
                <Galaxy
                    mouseRepulsion
                    mouseInteraction={!prefersReducedMotion}
                    disableAnimation={prefersReducedMotion}
                    density={2}
                    glowIntensity={0.2}
                    saturation={0.1}
                    hueShift={100}
                    twinkleIntensity={0.4}
                    rotationSpeed={0.05}
                    repulsionStrength={0.1}
                    autoCenterRepulsion={0}
                    starSpeed={0.7}
                    speed={0.7}
                />
            </div>

            {/* Navbar */}
            <nav aria-label="Primary" className="fixed w-full z-50 flex justify-between items-center gap-2 h-24 lg:h-32 px-3 lg:px-10">
                {/* Left Side */}
                <a href="#hero" aria-label="Back to top" className="shrink-0">
                    <img src="/logo.png" alt="" className="h-10 w-12 md:h-14 md:w-16"/>
                </a>

                {/* Middle */}
                <div className="p-2 md:p-4 backdrop-blur-md rounded-4xl border border-amber-200 shadow-[0_0_15px_rgba(252,211,77,0.8)]">
                    <ul className="flex gap-1 md:gap-4 text-base md:text-xl">
                        {navLinks.map(({label, href, mobile}) => (
                            <li key={href} className={mobile ? undefined : "hidden md:inline-flex"}>
                                <a href={href} className="btn-neon-amber">{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right side*/}
                <div className="flex justify-center items-center gap-4 text-xl shrink-0">
                    {blogUrl && (
                        <a href={blogUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="hidden xl:inline-flex items-center hover:text-amber-300 focus-visible:text-amber-300 transition-colors">
                            <span className="mr-2">Blog</span>
                            <ExternalLinkIcon className="w-5 h-5" aria-hidden="true" />
                        </a>
                    )}
                    <a href={cvUrl}
                       download
                       aria-label="Download CV (PDF)"
                       className="btn-primary">
                        <span className="hidden md:inline-flex md:font-bold md:text-md" aria-hidden="true">CV</span>
                        <DownloadIcon className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true"/>
                    </a>
                </div>
            </nav>

            {/* Hero Section*/}
            <section id="hero" className="relative flex flex-col xl:flex-row min-h-svh w-full items-center justify-center xl:justify-between gap-10 xl:gap-0 z-20 px-5 lg:px-10 pt-28 lg:pt-36 pb-12 overflow-hidden">
                <div ref={socialRef} className="hidden xl:flex flex-col gap-6 border px-5 py-10 rounded-full border-amber-300/70 bg-amber-300/10 shadow-lg shadow-amber-300/30">
                    {socials.map(({name, href, icon: Icon}) => (
                        <a key={name}
                           className="btn-hero"
                           href={href || undefined}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={name}
                        >
                            <Icon className='w-9 h-9' aria-hidden="true"/>
                        </a>
                    ))}
                </div>
                <div className="xl:ml-5 xl:flex-1 flex flex-col gap-6 text-center xl:text-start z-30 max-w-2xl xl:px-5">
                    <div>
                        <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider">
                            Thodoris Diamantidis
                        </h1>
                        <p ref={subtitleRef} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-balance font-semibold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-rose-400 to-amber-400 p-2">Junior Full‑Stack Web Developer</p>
                    </div>
                    <p ref={paragraphRef} className="text-lg lg:text-xl xl:text-2xl my-2 xl:my-5 max-w-150 mx-auto xl:mx-0 leading-relaxed">I build <span className="text-transparent bg-clip-text font-bold bg-linear-to-r from-indigo-400 via-rose-400 to-amber-400">full‑stack web apps</span> with React, Next.js and Node.js, from an AI‑powered financial dashboard to the booking system behind a barbershop SaaS. Running IT for a wholesale business taught me to start from the real problem, not the tech.</p>

                    <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center xl:justify-start">
                        <a href="#projects" className="px-8 py-3 bg-linear-to-r from-rose-500 to-amber-300 text-center rounded-full text-base md:text-lg font-bold hover:shadow-[0_0_30px_rgba(252,211,77,0.6)] focus-visible:shadow-[0_0_30px_rgba(252,211,77,0.6)] transition duration-300">View Projects</a>
                        <a href="#contact" className="px-8 py-3 rounded-full border border-amber-300/70 bg-amber-300/10 hover:bg-amber-300/20 focus-visible:bg-amber-300/20 text-center text-base font-bold transition-colors duration-300">Contact Me</a>
                    </div>
                </div>
                {/* Right 3d MODEL*/}
                <div ref={cubeRef} className="w-full h-64 sm:w-100 sm:h-100 lg:w-120 lg:h-120 xl:w-150 xl:h-150 shrink-0 relative z-20">
                    <Suspense fallback={null}>
                        <Cube/>
                    </Suspense>
                </div>
            </section>

            {/* About Me Section*/}
            <section id="about" className="section-block">
                <h2 className="section-title">About Me</h2>
                <div className="max-w-3xl space-y-6 text-center text-lg sm:text-xl leading-relaxed text-gray-300">
                    <p className="text-xl sm:text-2xl text-white">
                        I’m a junior full‑stack web developer completing a degree in Information and Electronic Engineering at the International Hellenic University, building scalable digital products.
                    </p>
                    <p>
                        I work with React and Next.js on the front end, Node.js, Express, and MongoDB on the back end, and I enjoy shaping systems that are <span className="text-amber-200 font-medium">fast</span>, <span className="text-amber-200 font-medium">secure</span>, and <span className="text-amber-200 font-medium">easy to extend</span>.
                    </p>
                    <p>
                        My experience includes REST API design, TypeScript development, and project structures that support real‑world growth.
                    </p>
                    <p>
                        I’ve also worked with Java and Python during my studies, giving me a strong foundation in algorithms, problem‑solving, and software architecture.
                    </p>
                    <p>
                        I’m driven by learning, improving, and building software that actually solves problems—and I’m always excited for new challenges and opportunities.
                    </p>
                </div>
            </section>

            {/* Current Stack Section*/}
            <section id="stack" className="section-block">
                <h2 className="section-title flex items-center gap-3">
                    <StackIcon className="w-10 h-10 lg:w-12 lg:h-12 text-white" aria-hidden="true"/>
                    Current Stack
                </h2>
                <ul className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl w-full">
                    {stack.map((item) => (
                        <li key={item.name}>
                            <StackBox name={item.name} icon={item.icon}/>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Experience Section*/}
            <section id="experience" className="section-block">
                <h2 className="section-title">Experience</h2>
                <div className="flex items-center p-2 bg-[#0300145e] border border-[#7042f861] rounded-full mb-10 relative">
                    <div
                        className="absolute inset-0 w-[136px] bg-linear-to-r from-amber-500 to-cyan-500 rounded-full transition-transform duration-500 ease-in-out"
                        style={{
                            transform: activeTab === "software" ? "translateX(0%)" : "translateX(100%)",
                        }}
                    ></div>
                    <button
                        type="button"
                        aria-pressed={activeTab === "software"}
                        onClick={() => setActiveTab("software")}
                        className="cursor-pointer relative z-10 px-8 py-2 text-sm lg:text-lg font-medium rounded-full w-32"
                    >
                        Software
                    </button>
                    <button
                        type="button"
                        aria-pressed={activeTab === "business"}
                        onClick={() => setActiveTab("business")}
                        className="cursor-pointer relative z-10 px-8 py-2 text-sm lg:text-lg font-medium rounded-full w-32"
                    >
                        Business
                    </button>
                </div>

                {/*Dynamic Content Area*/}
                <div className="w-full max-w-3xl space-y-6">
                    {experience[activeTab].map((item) => (
                        <ExperienceCard key={`${item.company}-${item.role}`} {...item}/>
                    ))}
                </div>
            </section>

            {/* Projects Section*/}
            <ProjectShowcase projects={projects}/>
        </>
    )
}
export default App
