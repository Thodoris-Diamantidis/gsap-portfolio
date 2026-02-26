import Galaxy from "./components/Galaxy";

import gsap from 'gsap';
import { ScrollTrigger, SplitText} from "gsap/all";

import {DownloadIcon} from "@/components/icons/lucide-download.jsx";
import {ExternalLinkIcon} from "@/components/icons/lucide-external-link.jsx";

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
            <nav className="fixed w-full z-20 flex justify-between items-center h-32">
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
        </>
    )
}
export default App
