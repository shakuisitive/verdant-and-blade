import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/data/constants";

gsap.registerPlugin(ScrollTrigger);

export default function AboutStrip() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>(".about-num").forEach((numEl) => {
        const target = parseInt(numEl.dataset.value || "0", 10);
        const o = { v: 0 };
        gsap.to(o, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: numEl, start: "top 88%", once: true },
          onUpdate: () => {
            numEl.textContent = Math.round(o.v).toLocaleString();
          },
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-deep text-cream py-16 md:py-24 overflow-hidden"
      style={{ borderRadius: "0 0 12% 8% / 0 0 4rem 3rem" }}
    >
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_70%_30%,white,transparent_55%)] pointer-events-none" />
      <div className="relative z-[1] max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-stretch justify-center gap-12 md:gap-0">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="flex flex-1 items-stretch justify-center">
            <div className="flex flex-col items-center text-center px-6 md:px-12">
              <span
                className="about-num font-display text-5xl md:text-7xl font-bold text-secondary tabular-nums"
                data-value={stat.value}
              >
                0
              </span>
              <span className="font-body text-xs md:text-sm tracking-[0.25em] uppercase text-cream/85 mt-4 max-w-[14rem] leading-snug">
                {stat.label}
              </span>
            </div>
            {i < STATS.length - 1 && (
              <div className="hidden md:block w-px bg-secondary/40 self-center min-h-[5rem]" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
