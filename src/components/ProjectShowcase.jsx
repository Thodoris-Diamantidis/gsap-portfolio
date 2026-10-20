import {useLayoutEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ProjectCard from "@/components/ProjectCard.jsx";

gsap.registerPlugin(ScrollTrigger);

// Pinned, scroll-driven carousel on every screen width. Must match the `pinned` variant in index.css.
// Reduced-motion users, and screens too short to fit a pinned card (e.g. landscape phones),
// get a native swipe carousel with CSS snap instead.
const PINNED_QUERY = "(prefers-reduced-motion: no-preference) and (min-height: 560px)";

function ProjectShowcase({projects}) {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useLayoutEffect(() => {
        const mm = gsap.matchMedia();

        mm.add(PINNED_QUERY, () => {
            const section = sectionRef.current;
            const track = trackRef.current;
            const cards = gsap.utils.toArray("[data-card]", track);
            if (cards.length < 2) return;

            // The track's side padding centres the first and last card, so this distance
            // is exactly (cards - 1) card steps and every snap point lands a card in the centre.
            const distance = () => track.scrollWidth - track.parentElement.clientWidth;
            // How much vertical scroll drives the carousel. Lower values feel lighter, higher feel stickier.
            // SCROLL_PER_PX: scroll per pixel of horizontal travel (sets the feel on wide screens).
            // SCREENS_PER_CARD: minimum scroll per card as a fraction of screen height (sets the feel on phones,
            // where cards are narrow and the horizontal distance alone would be far too short).
            const SCROLL_PER_PX = 0.75;
            const SCREENS_PER_CARD = 0.6;
            const scrollLength = () => Math.max(
                distance() * SCROLL_PER_PX,
                (cards.length - 1) * window.innerHeight * SCREENS_PER_CARD,
            );

            const tween = gsap.to(track, {
                x: () => -distance(),
                ease: "none", // linear progress; scrub and snap supply the easing
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${scrollLength()}`,
                    pin: true,
                    scrub: 1,
                    snap: {
                        snapTo: 1 / (cards.length - 1),
                        // Settle on the nearest card. Directional snapping would jump to the next card
                        // after even a few pixels of scroll, and inertia would let fast flicks,
                        // nav-link jumps and the focus handler below skip past the intended card.
                        directional: false,
                        inertia: false,
                        duration: {min: 0.2, max: 0.6},
                        delay: 0.1,
                        ease: "power2.inOut",
                    },
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            // Tabbing to a link in an off-screen card scrolls the page to the point where that card is centred.
            const onFocusIn = (event) => {
                const index = cards.indexOf(event.target.closest("[data-card]"));
                if (index < 0) return;
                const st = tween.scrollTrigger;
                window.scrollTo({top: st.start + (st.end - st.start) * (index / (cards.length - 1)), behavior: "instant"});
            };
            track.addEventListener("focusin", onFocusIn);
            return () => track.removeEventListener("focusin", onFocusIn);
        });

        return () => mm.revert();
    }, []);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="flex flex-col items-center w-full py-16 lg:py-24 scroll-mt-24 overflow-x-clip pinned:h-svh pinned:justify-center pinned:pt-24 pinned:pb-6 lg:pinned:pt-32 lg:pinned:pb-8 pinned:scroll-mt-0"
        >
            <h2 className="section-title">Projects</h2>
            <div className="w-full overflow-x-auto snap-x snap-mandatory max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden pinned:overflow-visible pinned:snap-none [--card-w:85vw] md:[--card-w:min(80vw,64rem)]">
                <ul ref={trackRef} className="flex w-max gap-4 md:gap-8 px-[calc((100%-var(--card-w))/2)] pinned:will-change-transform">
                    {/* `relative` on each card keeps its absolutely positioned sr-only text inside the scroll container */}
                    {projects.map((project, index) => (
                        <li key={project.name} data-card className="relative flex w-(--card-w) shrink-0 snap-center">
                            <ProjectCard index={index} {...project}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ProjectShowcase
