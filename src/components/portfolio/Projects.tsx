import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { PROJECTS } from "@/constants/portfolio";

export function Projects() {
  const cats = useMemo(() => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))], []);
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);
  return (
    <Section id="projects">
      <SectionHeader
        kicker="Projects"
        title="Selected work"
        desc="Production systems built end-to-end."
      />
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${cat === c ? "bg-gradient-primary text-primary-foreground shadow-glow" : "glass hover:bg-white/5"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={cat}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass-strong hover:-translate-y-1 transition flex flex-col"
            >
              <div className={`relative h-40 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs text-white/80 tracking-widest">
                    {p.category.toUpperCase()}
                  </span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/30 backdrop-blur-sm flex items-center justify-center gap-3">
                  <a
                    href={p.github}
                    className="grid h-10 w-10 place-items-center rounded-full glass-strong"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={p.demo}
                    className="grid h-10 w-10 place-items-center rounded-full glass-strong"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] font-mono text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
