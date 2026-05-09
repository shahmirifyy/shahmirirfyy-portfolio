import { motion } from "framer-motion";
import type { ReactNode } from "react";
export function SectionHeader({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center mb-12"
    >
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--neon)]">{kicker}</p>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </motion.div>
  );
}
export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}
