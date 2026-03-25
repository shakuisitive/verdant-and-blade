import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SectionHeader({ number, title, align = "left" }: { number: string; title: string; align?: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const target = parseInt(number);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = () => {
            start++;
            setCount(start);
            if (start < target) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex items-end gap-6 mb-12 md:mb-16 ${align === "right" ? "flex-row-reverse text-right" : ""}`}
    >
      <span className="section-number">{String(count).padStart(2, "0")}</span>
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none pb-2">{title}</h2>
    </motion.div>
  );
}
