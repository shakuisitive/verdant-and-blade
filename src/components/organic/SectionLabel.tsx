import { cn } from "@/lib/utils";

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("w-4 h-4 shrink-0 text-secondary", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3C7 7 4 12 4 17c0 2 1.5 3.5 3.5 3.5 1.2 0 2.3-.5 3-1.3.7.8 1.8 1.3 3 1.3C15.5 20.5 17 19 17 17c0-5-3-10-8-14Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SectionLabel({ text, className, dark }: { text: string; className?: string; dark?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2 mb-3", className)}>
      <LeafIcon className={dark ? "text-secondary-tint2" : undefined} />
      <span
        className={cn(
          "font-display text-[0.65rem] sm:text-xs tracking-[0.35em] uppercase",
          dark ? "text-secondary-tint2" : "text-secondary",
        )}
      >
        {text}
      </span>
    </div>
  );
}
