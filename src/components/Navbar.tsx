import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NAV_LINKS, SHOP_NAME } from "@/data/constants";

function NavUnderlineLink({
  href,
  children,
  forestNav,
}: {
  href: string;
  children: React.ReactNode;
  forestNav: boolean;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Button
      variant="ghost"
      asChild
      className={
        forestNav
          ? "relative h-auto px-3 py-2 text-sm font-body tracking-wide text-cream/90 hover:text-cream hover:bg-transparent"
          : "relative h-auto px-3 py-2 text-sm font-body tracking-wide text-deep hover:text-primary-shade1 hover:bg-transparent"
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a href={href} className="relative inline-flex flex-col items-center">
        <span className="relative z-[1]">{children}</span>
        <motion.span
          className={
            forestNav
              ? "absolute left-0 right-0 bottom-0 h-0.5 rounded-full bg-primary-tint2 origin-center"
              : "absolute left-0 right-0 bottom-0 h-0.5 rounded-full bg-primary origin-center"
          }
          initial={false}
          animate={{ scaleX: hover ? 1 : 0, opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
      </a>
    </Button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);

  const onStone = !scrolled;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[90] px-4 pt-4 md:px-8"
      initial={false}
      animate={{
        paddingTop: scrolled ? 12 : 16,
      }}
    >
      <motion.nav
        className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 rounded-full px-4 md:px-6 py-3 transition-shadow duration-500"
        animate={{
          backgroundColor: onStone ? "rgba(31, 61, 53, 0)" : "rgba(31, 61, 53, 0.92)",
          backdropFilter: onStone ? "blur(0px)" : "blur(16px)",
          boxShadow: onStone ? "0 0 0 transparent" : "0 12px 40px rgba(31,61,53,0.25)",
        }}
        style={{ WebkitBackdropFilter: scrolled ? "blur(16px)" : "none" }}
      >
        <Link
          to="/"
          className="font-display text-lg md:text-xl font-bold tracking-tight text-deep shrink-0 rounded-full px-2"
          style={{ color: onStone ? "hsl(var(--deep))" : "hsl(var(--cream))" }}
        >
          {SHOP_NAME}
        </Link>

        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {NAV_LINKS.map((l) => (
            <NavUnderlineLink key={l.label} href={l.href} forestNav={scrolled}>
              {l.label}
            </NavUnderlineLink>
          ))}
        </div>

        <Button
          onClick={() => navigate("/book")}
          className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary-tint1 hover:text-secondary-foreground font-body text-xs md:text-sm tracking-wide px-5 md:px-7 shadow-md shrink-0"
        >
          Book now
        </Button>

        <div className="lg:hidden flex items-center gap-2">
          <Button
            onClick={() => navigate("/book")}
            size="sm"
            className="rounded-full bg-secondary text-secondary-foreground text-[0.65rem] px-3"
          >
            Book
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={onStone ? "text-deep" : "text-cream"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[min(100%,20rem)] border-r border-deep-tint1 bg-deep p-0 text-cream"
            >
              <div className="flex flex-col h-full pt-16 pb-10 px-8 relative overflow-hidden">
                <svg className="absolute -right-8 top-20 w-32 h-32 text-primary/20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 3C7 7 4 12 4 17c0 2 1.5 3.5 3.5 3.5 1.2 0 2.3-.5 3-1.3.7.8 1.8 1.3 3 1.3C15.5 20.5 17 19 17 17c0-5-3-10-8-14Z" />
                </svg>
                <span className="font-display text-xl font-bold text-cream mb-10">{SHOP_NAME}</span>
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((l) => (
                    <Button
                      key={l.label}
                      variant="ghost"
                      asChild
                      className="justify-start h-auto py-3 text-cream hover:text-primary-tint3 hover:bg-deep-tint1"
                    >
                      <a href={l.href} onClick={() => setOpen(false)}>
                        {l.label}
                      </a>
                    </Button>
                  ))}
                </nav>
                <Button
                  className="mt-auto rounded-full bg-secondary text-secondary-foreground w-full py-6"
                  onClick={() => {
                    setOpen(false);
                    navigate("/book");
                  }}
                >
                  Book your session
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>
    </motion.header>
  );
}
