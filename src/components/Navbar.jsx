import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {DownloadIcon} from "@/components/icons/lucide-download.jsx";
import {ExternalLinkIcon} from "@/components/icons/lucide-external-link.jsx";
import {blogUrl, cvUrl, navLinks} from "@/constants/navigation.js";

// Tracks which section crosses the middle of the viewport, so the nav can mark where the reader is.
function useActiveSection(ids) {
    const [active, setActive] = useState(null);

    useEffect(() => {
        const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(entry.target.id);
                    else setActive((current) => (current === entry.target.id ? null : current));
                }
            },
            // A thin band across the middle of the screen.
            {rootMargin: "-45% 0px -54% 0px"},
        );
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [ids]);

    return active;
}

const sectionIds = navLinks.map(({href}) => href.slice(1));

function Navbar() {
    const active = useActiveSection(sectionIds);
    const listRef = useRef(null);
    const [indicator, setIndicator] = useState(null);

    // Slide the highlight pill under the active link. Re-measure when the list resizes (breakpoints, font load).
    useLayoutEffect(() => {
        const list = listRef.current;
        const measure = () => {
            const link = active && list.querySelector(`a[href="#${active}"]`);
            // Links hidden on small screens have no width; hide the pill rather than point at nothing.
            setIndicator(link && link.offsetWidth ? {left: link.offsetLeft, width: link.offsetWidth} : null);
        };
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(list);
        return () => observer.disconnect();
    }, [active]);

    return (
        <nav aria-label="Primary" className="fixed w-full z-50 flex justify-between items-center gap-2 h-24 lg:h-32 px-3 lg:px-10">
            {/* Left Side */}
            <a href="#hero" aria-label="Back to top" className="shrink-0">
                <img src="/logo.png" alt="" className="h-10 w-12 md:h-14 md:w-16"/>
            </a>

            {/* Middle */}
            <div className="p-1 md:p-1.5 rounded-full border border-amber-300/25 bg-black/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]">
                <ul ref={listRef} className="relative flex gap-0.5 md:gap-1">
                    <li aria-hidden="true"
                        className="absolute inset-y-0 left-0 rounded-full bg-amber-300/15 ring-1 ring-amber-300/40 transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none"
                        style={{
                            width: indicator?.width ?? 0,
                            transform: `translateX(${indicator?.left ?? 0}px)`,
                            opacity: indicator ? 1 : 0,
                        }}
                    />
                    {navLinks.map(({label, href, mobile}) => (
                        <li key={href} className={mobile ? undefined : "hidden md:block"}>
                            <a href={href}
                               aria-current={active === href.slice(1) ? "location" : undefined}
                               className="nav-link">
                                {label}
                            </a>
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
    )
}

export default Navbar
