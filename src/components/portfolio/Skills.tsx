import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { SKILLS, type SkillCategory } from "@/constants/portfolio";

const tabs: ("All" | SkillCategory)[] = ["All", "Frontend", "Backend", "Other"];

export function Skills() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const list = tab === "All" ? SKILLS : SKILLS.filter((s) => s.category === tab);
  return (
    <Section id="skills">
      <SectionHeader
        kicker="Skills"
        title="The toolbox"
        desc="Tools and tech I use to ship production-grade products."
      />
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${tab === t ? "bg-gradient-primary text-primary-foreground shadow-glow" : "glass hover:bg-white/5"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 9) * 0.04 }}
              className="group relative overflow-hidden rounded-2xl glass p-5 hover:-translate-y-1 transition"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[var(--neon)]/10 to-[var(--neon-2)]/10" />
              <div className="relative flex items-center justify-between">
                <span className="font-medium">{s.name}</span>
                <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
              </div>
              <div className="relative mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="h-full rounded-full bg-gradient-primary"
                />
              </div>
              <span className="relative mt-3 inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
