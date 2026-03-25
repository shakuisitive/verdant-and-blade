import { Button } from "@/components/ui/button";
import { SHOP_NAME, NAV_LINKS, CONTACT_INFO } from "@/data/constants";

export default function Footer() {
  return (
    <footer className="bg-deep text-cream py-16 md:py-20 border-t border-cream/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-display text-xl font-bold text-cream mb-3">{SHOP_NAME}</p>
            <p className="font-body text-sm text-cream/75 leading-relaxed max-w-xs">
              Biophilic barbering — concrete, glass, and growth in every visit.
            </p>
          </div>
          <div>
            <p className="font-display text-xs tracking-[0.3em] uppercase text-secondary mb-4">Explore</p>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <Button key={l.label} variant="link" asChild className="h-auto p-0 justify-start text-cream/80 hover:text-cream">
                  <a href={l.href}>{l.label}</a>
                </Button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-display text-xs tracking-[0.3em] uppercase text-secondary mb-4">Hours</p>
            <div className="space-y-1 font-body text-sm text-cream/80">
              {CONTACT_INFO.hours.map((h) => (
                <p key={h.day}>
                  <span className="text-cream">{h.day}</span> · {h.time}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-cream/10 text-xs font-body text-cream/60">
          <p>© {new Date().getFullYear()} {SHOP_NAME}</p>
          <p>
            Powered by{" "}
            <Button variant="link" asChild className="h-auto p-0 text-secondary hover:text-secondary-tint1 underline underline-offset-2">
              <a href="https://boxndrops.ca/" target="_blank" rel="noopener noreferrer">
                BoxNDrops
              </a>
            </Button>
          </p>
        </div>
      </div>
    </footer>
  );
}
