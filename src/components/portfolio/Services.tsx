import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { SERVICES } from "@/constants/portfolio";

export function Services() {
  return (
    <Section id="services">
      <SectionHeader kicker="Services" title="What I can build for you" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 hover:-translate-y-1 transition"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-30 blur-2xl transition" />
            <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="relative mt-4 font-semibold">{s.title}</h3>
            <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
