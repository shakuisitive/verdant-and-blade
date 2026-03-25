import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxBlob({
  className,
  colorClass = "bg-primary/25",
}: {
  className?: string;
  colorClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tween = gsap.to(el, {
      y: 80,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });
    return () => tween.scrollTrigger?.kill();
  }, []);

  return <div ref={ref} className={cn("blob-organic pointer-events-none absolute blur-3xl", colorClass, className)} aria-hidden />;
}
