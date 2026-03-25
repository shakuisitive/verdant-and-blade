import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/constants";
import { SectionLabel } from "@/components/organic/SectionLabel";

export default function FaqSection() {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <SectionLabel text="Before you visit" />
        <h2 className="font-serif-display text-4xl md:text-5xl font-semibold text-deep text-center mb-12">
          Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              layout
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="rounded-2xl bg-card border border-neutral-shade1 px-1 data-[state=open]:shadow-md overflow-hidden"
              >
                <AccordionTrigger className="font-body text-deep hover:text-deep px-5 py-5 text-left hover:no-underline [&[data-state=open]]:border-l-4 [&[data-state=open]]:border-primary [&[data-state=open]]:pl-4 transition-[padding,border] duration-200">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-[#3D3D3D] px-5 pb-5 pt-0 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
