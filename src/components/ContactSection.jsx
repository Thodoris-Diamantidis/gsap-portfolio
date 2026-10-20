import {useEffect, useLayoutEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ArrowUpRight, Check, Copy, Mail} from "lucide-react";
import {email, socials} from "@/constants/navigation.js";

gsap.registerPlugin(ScrollTrigger);

// The contact section lists only these profiles, and only once their URLs are set.
const CONTACT_PROFILES = ["GitHub", "LinkedIn"];

function ContactSection() {
    const sectionRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const profiles = socials.filter(({name, href}) => href && CONTACT_PROFILES.includes(name));

    useLayoutEffect(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.from(gsap.utils.toArray("[data-reveal]", sectionRef.current), {
                autoAlpha: 0,
                y: 32,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.12,
                scrollTrigger: {trigger: sectionRef.current, start: "top 75%", once: true},
            });
        });

        return () => mm.revert();
    }, []);

    // Reset the "Copied" confirmation after a moment.
    useEffect(() => {
        if (!copied) return;
        const id = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(id);
    }, [copied]);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
        } catch {
            // Clipboard can be blocked (e.g. insecure context); the mailto link still works.
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="section-block min-h-[80svh] justify-center">
            <h2 data-reveal className="section-title">Contact</h2>

            <div className="flex flex-col items-center gap-8 max-w-3xl text-center">
                <p data-reveal className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                    Have a problem worth solving? <span className="text-amber-200">Let’s talk.</span>
                </p>
                <p data-reveal className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
                    I’m open to junior full‑stack roles and new collaborations. Email is the fastest way to reach me.
                </p>

                {email && (
                    <div data-reveal className="flex flex-col sm:flex-row items-center gap-3">
                        <a href={`mailto:${email}`}
                           className="inline-flex items-center gap-3 px-8 py-3 bg-linear-to-r from-rose-500 to-amber-300 rounded-full text-base md:text-lg font-bold hover:shadow-[0_0_30px_rgba(252,211,77,0.6)] focus-visible:shadow-[0_0_30px_rgba(252,211,77,0.6)] transition duration-300">
                            <Mail className="w-5 h-5" aria-hidden="true"/>
                            {email}
                        </a>
                        <button type="button"
                                onClick={copyEmail}
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-amber-300/70 bg-amber-300/10 hover:bg-amber-300/20 focus-visible:bg-amber-300/20 font-bold cursor-pointer transition-colors duration-300">
                            {copied
                                ? <Check className="w-5 h-5 text-amber-300" aria-hidden="true"/>
                                : <Copy className="w-5 h-5" aria-hidden="true"/>}
                            <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
                        </button>
                    </div>
                )}

                {profiles.length > 0 && (
                    <ul data-reveal className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-lg">
                        {profiles.map(({name, href, icon: Icon}) => (
                            <li key={name}>
                                <a href={href}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="group inline-flex items-center gap-2 font-medium text-amber-200 underline decoration-amber-300/40 underline-offset-4 hover:text-amber-300 focus-visible:text-amber-300 transition-colors">
                                    <Icon className="w-5 h-5" aria-hidden="true"/>
                                    {name}
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true"/>
                                    <span className="sr-only">(opens in a new tab)</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <footer className="mt-24 lg:mt-32 w-full max-w-5xl pt-6 border-t border-amber-300/20 text-center text-sm text-gray-400">
                <p>© {new Date().getFullYear()} Thodoris Diamantidis</p>
            </footer>
        </section>
    )
}

export default ContactSection
