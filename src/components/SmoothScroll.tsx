import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollTrigger stays aligned with the document. Smooth scrolling uses `scroll-behavior: smooth` on `html` (see index.css).
 *
 * Optional Lenis: after `npm install lenis`, you can extend this effect with:
 *   const Lenis = (await import("lenis")).default;
 *   const lenis = new Lenis();
 *   lenis.on("scroll", ScrollTrigger.update);
 *   gsap.ticker.add((t) => lenis.raf(t * 1000));
 */
export default function SmoothScroll() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
    };
  }, []);

  return null;
}
