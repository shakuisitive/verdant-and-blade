import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SHOP_NAME } from "@/data/constants";

export default function LoadingCurtain() {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        yPercent: -100,
        duration: 1,
        ease: "power3.inOut",
        delay: 0.45,
        onComplete: () => setDone(true),
      });
    }
  }, []);

  if (done) return null;

  return (
    <div ref={ref} className="fixed inset-0 z-[100] bg-deep flex flex-col items-center justify-center gap-3">
      <span className="font-display text-2xl md:text-3xl font-bold text-cream tracking-tight text-center px-6">{SHOP_NAME}</span>
      <span className="font-body text-xs uppercase tracking-[0.35em] text-primary-tint2">Opening</span>
    </div>
  );
}
