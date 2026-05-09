import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { TESTIMONIALS } from "@/constants/portfolio";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader kicker="Testimonials" title="Kind words from collaborators" />
      <div className="grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-strong rounded-2xl p-6 relative"
          >
            <Quote className="h-6 w-6 text-[var(--neon)] opacity-70" />
            <p className="mt-3 text-foreground/85">{t.quote}</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-semibold">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
