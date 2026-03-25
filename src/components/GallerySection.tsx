import { motion } from "framer-motion";
import { galleryImages } from "@/data/constants";
import { SectionLabel } from "@/components/organic/SectionLabel";

/** Mosaic pattern: tall | sq sq | wide | ... */
const mosaicClasses: string[] = [
  "md:col-span-4 md:row-span-2 min-h-[280px] md:min-h-[420px]",
  "md:col-span-4 min-h-[200px]",
  "md:col-span-4 min-h-[200px]",
  "md:col-span-8 min-h-[220px]",
  "md:col-span-4 min-h-[240px]",
  "md:col-span-4 min-h-[240px]",
  "md:col-span-4 min-h-[200px]",
  "md:col-span-8 min-h-[200px]",
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-background overflow-hidden" style={{ borderRadius: "4rem 2rem 0 0 / 3rem 2rem 0 0" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionLabel text="Portfolio" />
        <h2 className="font-serif-display text-4xl md:text-5xl font-semibold text-deep mb-12 max-w-xl">
          Cuts in the light
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 md:auto-rows-[minmax(180px,auto)]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              className={`relative rounded-3xl overflow-hidden group ${mosaicClasses[i] ?? "md:col-span-4 min-h-[200px]"}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
            >
              <motion.div className="absolute inset-0" initial="rest" whileHover="hover">
                <img src={img.src} alt="" className="w-full h-full object-cover" loading="lazy" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-primary/85 px-4"
                  variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-serif-display text-xl md:text-2xl font-semibold text-cream text-center">{img.label}</span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
