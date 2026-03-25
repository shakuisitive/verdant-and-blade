import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "@/data/constants";
import { SectionLabel } from "@/components/organic/SectionLabel";
import { SectionWave } from "@/components/organic/SectionWave";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative bg-deep text-cream py-20 md:py-28 overflow-hidden">
      <SectionWave flip="up" fill="hsl(var(--deep))" />
      <div className="relative z-[1] max-w-[1400px] mx-auto px-6 md:px-12 pt-8">
        <SectionLabel text="Journal" dark />
        <h2 className="font-serif-display text-4xl md:text-5xl font-semibold text-cream mb-14">
          Voices from the fern wall
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Card className="h-full rounded-3xl border border-cream/10 bg-deep-tint1/50 backdrop-blur-sm hover:border-secondary/40 transition-colors">
                <CardContent className="p-8 flex flex-col gap-4">
                  <span className="font-serif-display text-5xl text-secondary leading-none">&ldquo;</span>
                  <p className="font-body text-cream/90 leading-relaxed -mt-2">{r.text}</p>
                  <div className="mt-auto pt-4 border-t border-cream/10">
                    <p className="font-body font-semibold text-primary-tint2">{r.name}</p>
                    <div className="flex gap-0.5 mt-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3.5 h-3.5 ${j < r.rating ? "fill-secondary text-secondary" : "text-cream/25"}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <SectionWave className="mt-16" fill="hsl(var(--background))" />
    </section>
  );
}
