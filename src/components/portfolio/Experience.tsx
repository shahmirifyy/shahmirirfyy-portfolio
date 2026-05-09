import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { EXPERIENCE } from "@/constants/portfolio";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader kicker="Experience" title="Where I've shipped" />
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 mb-10"
          >
            <span className="absolute left-2.5 md:left-1/2 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-primary shadow-glow" />
            <div
              className={`${i % 2 === 0 ? "md:text-right md:pr-10" : "md:col-start-2 md:pl-10"}`}
            >
              <div className="glass-strong rounded-2xl p-6 hover:shadow-glow transition">
                <div className="flex items-center gap-2 text-xs text-[var(--neon)] font-mono">
                  <Briefcase className="h-3.5 w-3.5" /> {e.period}
                </div>
                <h3 className="mt-2 text-xl font-semibold">{e.role}</h3>
                <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1 md:justify-start">
                  <span className="text-gradient font-medium">{e.company}</span>
                  <span className="opacity-50">•</span>
                  <MapPin className="h-3 w-3" /> {e.location}
                </div>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/80 list-disc list-inside text-left">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
