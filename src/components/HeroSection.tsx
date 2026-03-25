import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SHOP_NAME, SHOP_TAGLINE, STATS, HERO_IMAGE } from "@/data/constants";
import { SectionWave } from "@/components/organic/SectionWave";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lines = SHOP_NAME.split(/\s+/);

export default function HeroSection() {
  const navigate = useNavigate();
  const root = useRef<HTMLElement>(null);
  const blob = useRef<HTMLDivElement>(null);
  const oval = useRef<HTMLDivElement>(null);
  const parallaxTween = useRef<gsap.core.Tween | null>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if (blob.current) {
      tl.fromTo(blob.current, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.9 }, 0);
      parallaxTween.current = gsap.to(blob.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });
    }
    if (wordsRef.current) {
      const words = wordsRef.current.querySelectorAll(".hero-line");
      tl.fromTo(words, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.55, stagger: 0.12 }, 0.15);
    }
    tl.fromTo(".hero-sub", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.45 }, "-=0.2")
      .fromTo(".hero-btns .hero-btn", { opacity: 0, y: 20, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.08, ease: "back.out(1.4)" }, "-=0.15")
      .fromTo(oval.current, { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 0.75 }, 0.2)
      .fromTo(".hero-stat-pill", { opacity: 0, scale: 0.85, y: 16 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.4");

    const leaves = root.current?.querySelectorAll(".float-leaf");
    leaves?.forEach((el, i) => {
      gsap.to(el, {
        y: i % 2 === 0 ? 10 : -10,
        duration: 2.5 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });

    return () => {
      tl.kill();
      parallaxTween.current?.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section ref={root} className="relative min-h-[100svh] overflow-hidden bg-background organic-section-top">
      <div
        ref={blob}
        className="absolute w-[min(85vw,480px)] h-[min(65vh,560px)] blob-organic bg-primary/35 blur-2xl -right-[10%] top-[15%] md:top-[18%] pointer-events-none"
      />

      <svg className="float-leaf absolute top-28 left-[8%] w-10 h-10 text-primary-shade1/40" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 3C7 7 4 12 4 17c0 2 1.5 3.5 3.5 3.5 1.2 0 2.3-.5 3-1.3.7.8 1.8 1.3 3 1.3C15.5 20.5 17 19 17 17c0-5-3-10-8-14Z" />
      </svg>
      <svg className="float-leaf absolute top-[42%] left-[4%] w-8 h-8 text-secondary/35" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 3C7 7 4 12 4 17c0 2 1.5 3.5 3.5 3.5 1.2 0 2.3-.5 3-1.3.7.8 1.8 1.3 3 1.3C15.5 20.5 17 19 17 17c0-5-3-10-8-14Z" />
      </svg>

      <div className="relative z-[2] max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 pt-28 pb-8 lg:pt-32 lg:pb-16 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-[calc(100svh-4rem)]">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div ref={wordsRef} className="overflow-hidden">
            {lines.map((line, i) => (
              <div key={i} className="hero-line overflow-hidden">
                <h1 className="font-display font-extrabold text-deep leading-[0.95] tracking-tight text-[clamp(4rem,12vw,9rem)]">
                  {line}
                </h1>
              </div>
            ))}
          </div>
          <p className="hero-sub font-serif-display text-xl md:text-2xl italic text-primary-shade2 mt-6 max-w-md">
            {SHOP_TAGLINE}
          </p>
          <div className="hero-btns flex flex-col sm:flex-row gap-4 mt-10">
            <Button
              type="button"
              onClick={() => navigate("/book")}
              className="hero-btn rounded-full bg-deep text-cream hover:bg-deep-tint1 hover:text-cream font-body tracking-wide px-10 py-7 text-base shadow-lg"
            >
              Book your session
            </Button>
            <Button
              type="button"
              variant="outline"
              asChild
              className="hero-btn rounded-full border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground font-body tracking-wide px-10 py-7 text-base"
            >
              <a href="/#services">Our services</a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div ref={oval} className="relative w-full max-w-md lg:max-w-lg">
            <div
              className="relative overflow-hidden shadow-2xl border-4 border-neutral-tint1 bg-card"
              style={{ borderRadius: "9999px / 48%" }}
            >
              <img src={HERO_IMAGE} alt="" className="w-full aspect-[3/5] object-cover" width={800} height={1200} />
            </div>
            <div className="absolute -bottom-4 -left-2 md:left-4 flex flex-col gap-2 z-[3]">
              {STATS.map((s) => (
                <Card
                  key={s.label}
                  className="hero-stat-pill rounded-full border-2 border-primary/20 bg-card/95 backdrop-blur-md shadow-lg"
                >
                  <CardContent className="px-5 py-3 flex items-baseline gap-3">
                    <span className="font-display text-2xl font-bold text-deep">{s.value.toLocaleString()}</span>
                    <span className="font-body text-[0.65rem] uppercase tracking-wider text-neutral-shade3 max-w-[7rem] leading-tight">
                      {s.label}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionWave className="mt-4" fill="hsl(var(--deep))" />
    </section>
  );
}
