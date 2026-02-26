import Galaxy from "./components/Galaxy";

import gsap from 'gsap';
import { ScrollTrigger, SplitText} from "gsap/all";

import {DownloadIcon} from "@/components/icons/lucide-download.jsx";
import {ExternalLinkIcon} from "@/components/icons/lucide-external-link.jsx";
import {GithubIcon} from "@/components/icons/lucide-github.jsx";
import {FacebookIcon} from "@/components/icons/lucide-facebook.jsx";
import {InstagramIcon} from "@/components/icons/lucide-instagram.jsx";
import {LinkedinIcon} from "@/components/icons/lucide-linkedin.jsx";
import {TwitterIcon} from "@/components/icons/lucide-twitter.jsx";
import Cube from "@/components/HeroModels/Cube.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <>
            {/* Background Galaxy*/}
            <div className="fixed inset-0 -z-10">
                <Galaxy
                    mouseRepulsion
                    mouseInteraction
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
            <nav className="fixed w-full z-50 flex justify-between items-center h-32">
                {/* Left Side */}
                <button
                    type="button"
                    onClick={ () => window.scrollTo({top:0, behavior: "smooth"})}
                    className="ml-4 lg:ml-10 cursor-pointer"
                >
                    <img src="/logo.png" alt="logo" className="h-12 w-14 md:h-14 md:w-16"/>
                </button>

                {/* Middle */}
                <div className="p-3 md:p-4 backdrop-blur-md rounded-4xl border border-amber-200 shadow-[0_0_15px_rgba(252,211,77,0.8)]">
                    <ul className="flex gap-4 text-xl">
                        <li><button className="btn-neon-amber">About</button></li>
                        <li><button className="btn-neon-amber">Skills</button></li>
                        <li className="hidden md:inline-flex"><button className="btn-neon-amber">Experience</button></li>
                        <li className="hidden md:inline-flex"><button className="btn-neon-amber">Projects</button></li>
                        <li><button className="btn-neon-amber">Contact</button></li>
                    </ul>
                </div>

                {/* Right side*/}
                <div className="flex justify-center items-center gap-4 text-xl mr-4 lg:mr-10">
                    <button className="hidden lg:inline-flex cursor-pointer hover:text-amber-300">
                        <span className="mr-2">Blog</span>
                        <ExternalLinkIcon className="w-5 h-5" />
                    </button>
                    <button
                        type="button"
                        className="btn-primary">
                        <span className="hidden md:inline-flex md:font-bold md:text-md">CV</span>
                        <DownloadIcon className="w-6 h-6"/>
                    </button>
                </div>
            </nav>

            <section className="w-full">
                <div id="Hero" className="relative flex flex-col xl:flex-row h-screen w-full items-center justify-center lg:justify-between z-20 px-3 lg:px-10 overflow-hidden">
                    <div className="hidden xl:flex flex-col gap-6 border px-5 py-10 rounded-full border-amber-300/70 bg-amber-300/10 shadow-lg shadow-amber-300/30">
                        <a className="btn-hero"
                           target="_blank"
                           rel="noopener noreferrer"
                            href="https://github.com/Thodoris-Diamantidis"
                        >
                            <GithubIcon className='w-9 h-9'/>
                        </a>
                        <a className="btn-hero"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            <LinkedinIcon className='w-9 h-9'/>
                        </a>
                        <a className="btn-hero"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            <TwitterIcon className='w-9 h-9'/>
                        </a>
                        <a className="btn-hero"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            <FacebookIcon className='w-9 h-9'/>
                        </a>
                        <a className="btn-hero"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                            <InstagramIcon className='w-9 h-9'/>
                        </a>
                    </div>
                    <div className="ml-5 flex-1 flex flex-col gap-6 justify-center text-justify md:text-center lg:text-start z-30 max-w-2xl px-5 lg:px-0 xl:px-5">
                        <div className="mt-28 text-center xl:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider">
                                Thodoris Diamantidis
                            </h1>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-rose-400 to-amber-400 p-1">Software Engineer</h2>
                        </div>
                        <div>
                            <p className="text-lg lg:text-xl xl:text-2xl my-5 max-w-150 leading-relaxed">I craft immersive digital experiences that blend engineering depth with creative clarity. As a <span className="text-transparent bg-clip-text font-bold bg-linear-to-r from-indigo-400 via-rose-400 to-amber-400 ">Full Stack Engineer</span>, I turn complex ideas into elegant, high‑performance solutions.</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center lg:justify-start">
                            <a className="px-8 py-3 bg-linear-to-r from-rose-500 to-amber-300 text-center cursor-pointer rounded-full text-base md:text-lg font-bold hover:shadow-[0_0_30px_rgba(252,211,77,0.6)]
 transition duration-300">View Projects</a>
                            <a className="px-8 py-3 rounded-full border border-amber-300/70 bg-amber-300/10 text-center cursor-pointer text-base font-bold">Contact Me</a>
                        </div>
                    </div>
                    {/* Right 3d MODEL*/}
                    <div className="w-full sm:w-100 sm:h-100 lg:w-120 lg:h-120 xl:w-150 xl:h-150 flex items-center justify-center relative z-20 mb-10">
                        <figure className="w-full h-full">
                            <div className="w-full h-full">
                                <Cube/>
                            </div>
                        </figure>
                    </div>
                </div>
            </section>
            <section>
                <div id="about" className="flex flex-col items-center justify-center gap-4 h-full relative overflow-hidden pb-20 py-20 z-20">
                    <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px] w-full px-5">
                        <div className="w-full text-center">
                            <h1 className="text-[40px] lg:text-[55px]  font-semibold text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-cyan-500 py-5">About Me</h1>
                            <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto">
                                I’m a <span className="text-white font-medium">Software Engineer</span> with a <span className="text-white font-medium">Computer Science degree</span> from DIPAE, building scalable digital products across the full stack.
                                <br/>
                                <br/>
                                I work with <span className="text-amber-200 font-medium">React</span> and <span className="text-amber-200 font-medium">Next.js</span> on the front end, <span className="text-amber-200 font-medium">Node.js</span>, <span className="text-amber-200 font-medium">Express</span>, and <span className="text-amber-200 font-medium">MongoDB</span> on the back end and I enjoy shaping systems that are <span className="text-amber-200 font-medium">fast</span>, <span className="text-amber-200 font-medium">secure</span>, and easy to extend.
                                <br/>
                                <br/>
                                My experience includes <span className="text-white font-medium">REST API design</span>, <span className="text-white font-medium">TypeScript</span> development, and project structures that support real‑world growth.
                                <br/>
                                <br/>
                                I’ve also worked with <span className="text-amber-200 font-medium">Java</span> and <span className="text-amber-200 font-medium">Python</span> during my studies, giving me a strong foundation in algorithms, problem‑solving, and software architecture.
                                <br/>
                                <br/>
                                I’m driven by learning, improving, and building software that actually solves problems—and I’m always excited for new challenges and opportunities.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default App
