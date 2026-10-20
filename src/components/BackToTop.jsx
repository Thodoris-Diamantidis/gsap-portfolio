import {useEffect, useState} from "react";
import gsap from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {ArrowUp} from "lucide-react";

gsap.registerPlugin(ScrollToPlugin);

// Floating "back to top" arrow. Appears once the hero has scrolled fully out of view.
function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById("hero");
        if (!hero) return;
        const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    const scrollToTop = (event) => {
        // Reduced-motion users get the plain anchor jump.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        event.preventDefault();

        const root = document.documentElement;
        // CSS smooth scrolling would fight the tween frame by frame, so switch it off while it runs.
        root.style.scrollBehavior = "auto";
        const restore = () => root.style.removeProperty("scroll-behavior");
        // The button turns inert at the top, so hand keyboard focus to the first nav link.
        const keyboardFocused = event.currentTarget.matches(":focus-visible");

        gsap.to(window, {
            // Longer trips take a little longer, within a range that never feels sluggish.
            duration: gsap.utils.clamp(0.8, 1.6, window.scrollY / 4000),
            scrollTo: {y: 0, autoKill: true}, // the user scrolling cancels the tween
            ease: "power3.inOut",
            onComplete: () => {
                restore();
                if (keyboardFocused) document.querySelector("nav a")?.focus({preventScroll: true});
            },
            onInterrupt: restore,
        });
    };

    return (
        <a href="#hero"
           aria-label="Back to top"
           onClick={scrollToTop}
           // Hidden state is kept out of the tab order and the accessibility tree.
           inert={!visible}
           className={`fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-40 grid place-items-center w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-amber-300/80 bg-black/60 backdrop-blur-md text-amber-200 shadow-[0_0_15px_rgba(252,211,77,0.4)] hover:bg-amber-300/20 hover:text-amber-300 hover:shadow-[0_0_25px_rgba(252,211,77,0.7)] focus-visible:bg-amber-300/20 focus-visible:text-amber-300 transition duration-300 motion-reduce:transition-none ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
            <ArrowUp className="w-5 h-5 lg:w-6 lg:h-6" aria-hidden="true"/>
        </a>
    )
}

export default BackToTop
