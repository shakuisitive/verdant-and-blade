import { cn } from "@/lib/utils";

type Flip = "up" | "down";

/** Inline SVG wave — transitions between stone and forest sections */
export function SectionWave({ className, flip = "down", fill = "hsl(var(--background))" }: { className?: string; flip?: Flip; fill?: string }) {
  return (
    <div className={cn("relative w-full leading-[0] pointer-events-none", className)} aria-hidden>
      <svg
        className="w-full h-[clamp(3rem,8vw,5rem)] block"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={flip === "up" ? { transform: "scaleY(-1)" } : undefined}
      >
        <path
          fill={fill}
          d="M0,80 C180,20 360,120 540,70 C720,20 900,100 1080,60 C1260,20 1350,40 1440,30 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
