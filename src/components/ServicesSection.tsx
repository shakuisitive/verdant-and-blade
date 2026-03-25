import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/constants";
import { SectionLabel } from "@/components/organic/SectionLabel";
import { SectionWave } from "@/components/organic/SectionWave";
import { ParallaxBlob } from "@/components/organic/ParallaxBlob";

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden bg-background" style={{ borderRadius: "0 0 5rem 4rem" }}>
      <ParallaxBlob className="w-72 h-72 -left-20 top-20 opacity-60" colorClass="bg-secondary/20" />
      <div className="relative z-[1] max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionLabel text="Rituals" />
        <h2 className="font-serif-display text-4xl md:text-5xl font-semibold text-deep max-w-xl mb-14">
          Cut &amp; care in the atrium
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <Card className="h-full rounded-3xl border border-neutral-shade1 bg-card shadow-[0_12px_40px_hsl(166_35%_45%/0.12)] transition-all duration-300 hover:border-l-4 hover:border-l-primary hover:shadow-[0_16px_48px_hsl(166_35%_45%/0.18)]">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge className="rounded-full bg-primary text-primary-foreground border-0 font-body text-[0.65rem] tracking-wide">
                      {s.duration}
                    </Badge>
                    <span className="font-serif-display text-2xl font-semibold text-secondary">${s.price}</span>
                  </div>
                  <CardTitle className="font-serif-display text-xl text-deep">{s.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-sm text-[#3D3D3D] leading-relaxed">{s.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    type="button"
                    onClick={() => navigate(`/book?service=${s.id}`)}
                    className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary-shade1 font-body tracking-wide"
                  >
                    Select
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <SectionWave className="mt-16" fill="hsl(var(--deep))" />
    </section>
  );
}
