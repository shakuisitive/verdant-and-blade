import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { barbers } from "@/data/constants";
import { Star } from "lucide-react";
import { SectionLabel } from "@/components/organic/SectionLabel";
import { SectionWave } from "@/components/organic/SectionWave";

function OvalImg({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden border-4 border-deep-tint1 shadow-xl bg-deep-tint1 ${className ?? ""}`}
      style={{ borderRadius: "9999px / 45%" }}
    >
      <img src={src} alt={alt} className="w-full h-full min-h-[220px] object-cover" loading="lazy" />
    </div>
  );
}

export default function BarbersSection() {
  const navigate = useNavigate();
  const [b0, b1, b2, b3] = barbers;

  return (
    <section id="barbers" className="relative bg-deep text-cream py-20 md:py-28 overflow-hidden">
      <SectionWave flip="up" fill="hsl(var(--deep))" className="-mt-px" />
      <div className="relative z-[1] max-w-[1400px] mx-auto px-6 md:px-12 pt-4">
        <SectionLabel text="Artists" dark />
        <h2 className="font-serif-display text-4xl md:text-5xl font-semibold text-cream mb-16 max-w-2xl">
          Hands that know the grain
        </h2>

        <div className="flex flex-col gap-16 md:gap-20">
          {/* Row 1 — full width horizontal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <Card className="rounded-3xl border border-cream/15 bg-deep-tint1/80 backdrop-blur-sm overflow-hidden transition-all hover:border-secondary/60">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6 md:p-10">
                  <OvalImg src={b0.photo} alt={b0.name} className="max-h-[340px] w-full max-w-md mx-auto md:mx-0" />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="font-serif-display text-3xl text-cream">{b0.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {b0.specialty.map((x) => (
                      <Badge key={x} className="rounded-full bg-primary text-primary-foreground border-0 text-xs">
                        {x}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 mt-3 text-secondary">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-body text-sm">{b0.rating}</span>
                  </div>
                  <p className="font-body text-cream/75 text-sm mt-4">{b0.experience}</p>
                  <Button
                    type="button"
                    onClick={() => navigate(`/book?barber=${b0.id}`)}
                    className="mt-8 w-fit rounded-full bg-secondary text-secondary-foreground hover:bg-secondary-tint1 font-body"
                  >
                    Book with {b0.name.split(" ")[0]}
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Row 2 — two col */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {[b1, b2].map((b, idx) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full rounded-3xl border border-cream/15 bg-deep-tint1/80 flex flex-col hover:border-secondary/50 transition-colors">
                  <div className="p-6">
                    <OvalImg src={b.photo} alt={b.name} className="max-h-[280px] mx-auto" />
                  </div>
                  <CardContent className="p-8 pt-0 flex-1 flex flex-col">
                    <h3 className="font-serif-display text-2xl text-cream">{b.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {b.specialty.map((x) => (
                        <Badge key={x} className="rounded-full bg-primary text-primary-foreground border-0 text-xs">
                          {x}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-secondary">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-body">{b.rating}</span>
                    </div>
                    <p className="font-body text-cream/70 text-sm mt-3 flex-1">{b.experience}</p>
                    <Button
                      type="button"
                      onClick={() => navigate(`/book?barber=${b.id}`)}
                      className="mt-6 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary-tint1 w-full"
                    >
                      Book with {b.name.split(" ")[0]}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Row 3 — flipped full width */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <Card className="rounded-3xl border border-cream/15 bg-deep-tint1/80 backdrop-blur-sm overflow-hidden transition-all hover:border-secondary/60">
              <div className="grid md:grid-cols-2 gap-0">
                <CardContent className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="font-serif-display text-3xl text-cream">{b3.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {b3.specialty.map((x) => (
                      <Badge key={x} className="rounded-full bg-primary text-primary-foreground border-0 text-xs">
                        {x}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 mt-3 text-secondary">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-body text-sm">{b3.rating}</span>
                  </div>
                  <p className="font-body text-cream/75 text-sm mt-4">{b3.experience}</p>
                  <Button
                    type="button"
                    onClick={() => navigate(`/book?barber=${b3.id}`)}
                    className="mt-8 w-fit rounded-full bg-secondary text-secondary-foreground hover:bg-secondary-tint1 font-body"
                  >
                    Book with {b3.name.split(" ")[0]}
                  </Button>
                </CardContent>
                <div className="p-6 md:p-10 order-1 md:order-2">
                  <OvalImg src={b3.photo} alt={b3.name} className="max-h-[340px] w-full max-w-md mx-auto md:ml-auto" />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      <SectionWave className="mt-20" fill="hsl(var(--background))" />
    </section>
  );
}
