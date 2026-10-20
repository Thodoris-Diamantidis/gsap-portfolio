import {GithubIcon} from "@/components/icons/lucide-github.jsx";
import {LinkedinIcon} from "@/components/icons/lucide-linkedin.jsx";
import {TwitterIcon} from "@/components/icons/lucide-twitter.jsx";
import {FacebookIcon} from "@/components/icons/lucide-facebook.jsx";
import {InstagramIcon} from "@/components/icons/lucide-instagram.jsx";

// `href` must match a section id. `mobile: false` hides the link below md to keep the bar on one line.
export const navLinks = [
    {label: "About", href: "#about", mobile: true},
    {label: "Stack", href: "#stack", mobile: true},
    {label: "Experience", href: "#experience", mobile: false},
    {label: "Projects", href: "#projects", mobile: false},
    {label: "Contact", href: "#contact", mobile: true},
];

// Served from /public.
export const cvUrl = "/Thodoris_Diamantidis_CV.pdf";

// The Blog link in the nav only renders once this is set.
export const blogUrl = "";

// Contact section email. The email link and copy button only render once this is set.
export const email = "thodoris_diamantidis@hotmail.com";

// TODO: fill in the missing profile URLs before launch.
export const socials = [
    {name: "GitHub", href: "https://github.com/Thodoris-Diamantidis", icon: GithubIcon},
    {name: "LinkedIn", href: "", icon: LinkedinIcon},
    {name: "Twitter", href: "", icon: TwitterIcon},
    {name: "Facebook", href: "", icon: FacebookIcon},
    {name: "Instagram", href: "", icon: InstagramIcon},
];
