import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_INFO } from "@/data/constants";
import { SectionLabel } from "@/components/organic/SectionLabel";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-deep text-cream overflow-hidden" style={{ borderRadius: "3rem 3rem 0 0" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionLabel text="Visit" dark />
        <h2 className="font-serif-display text-4xl md:text-5xl font-semibold text-cream mb-14">
          Find the greenhouse door
        </h2>

        <motion.div
          className="grid lg:grid-cols-2 gap-10 lg:gap-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6 font-body text-cream/90">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-primary-tint2 shrink-0 mt-1" />
              <p>{CONTACT_INFO.address}</p>
            </div>
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-primary-tint2 shrink-0 mt-1" />
              <p>{CONTACT_INFO.phone}</p>
            </div>
            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-primary-tint2 shrink-0 mt-1" />
              <p>{CONTACT_INFO.email}</p>
            </div>
            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-primary-tint2 shrink-0 mt-1" />
              <div>
                {CONTACT_INFO.hours.map((h) => (
                  <p key={h.day}>
                    <span className="text-cream font-medium">{h.day}</span> · {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div
            className="min-h-[280px] rounded-3xl overflow-hidden border-4 border-secondary/40 shadow-2xl bg-deep-tint1"
            style={{ borderRadius: "2.5rem 3rem 2rem 3.5rem / 2rem 2.5rem 3rem 2rem" }}
          >
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.0!2d-122.67!3d45.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMxJzEyLjAiTiAxMjLCsDQwJzEyLjAiVw!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              className="min-h-[280px] w-full border-0 opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.form
          className="mt-16 max-w-2xl mx-auto space-y-5 rounded-3xl border border-cream/15 bg-deep-tint1/40 p-8 md:p-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="c-name" className="text-cream">
                Name
              </Label>
              <Input id="c-name" placeholder="Your name" className="rounded-xl bg-neutral-tint2 border-cream/20 text-deep" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="c-email" className="text-cream">
                Email
              </Label>
              <Input id="c-email" type="email" placeholder="you@email.com" className="rounded-xl bg-neutral-tint2 border-cream/20 text-deep" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="c-msg" className="text-cream">
              Message
            </Label>
            <Textarea id="c-msg" placeholder="How can we help?" className="rounded-xl bg-neutral-tint2 border-cream/20 text-deep min-h-[120px]" />
          </div>
          <Button type="submit" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary-tint1 font-body px-10">
            Send
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
