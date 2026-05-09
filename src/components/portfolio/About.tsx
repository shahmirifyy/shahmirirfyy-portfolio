import { motion } from "framer-motion";
import { Download, Briefcase, Code2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "./Section";
import { PROFILE } from "@/constants/portfolio";

const facts = [
  { icon: Briefcase, label: "Years of Experience", value: "5+" },
  { icon: Code2, label: "Projects Completed", value: "40+" },
  { icon: Layers, label: "Technologies Mastered", value: "30+" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        kicker="About me"
        title="Engineer focused on outcomes"
        desc="A short story behind the code."
      />
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-6 md:p-8"
        >
          <p className="text-foreground/85 leading-relaxed">
            Senior Full Stack Developer with strong expertise in MERN Stack, Next.js, NestJS,
            Node.js, PostgreSQL, Prisma, and scalable backend architectures. Passionate about
            building modern web applications, automation systems, CRM platforms, and real-time
            experiences. Deep focus on performance, clean architecture, and delightful user
            experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-gradient-primary text-primary-foreground hover:opacity-90"
            >
              <a href={PROFILE.resume} download>
                <Download className="mr-1.5 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild className="glass border-white/10 hover:bg-white/5">
              <a href={`mailto:${PROFILE.email}`}>Get in touch</a>
            </Button>
          </div>
        </motion.div>
        <div className="grid gap-4">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/5 transition"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-bold">{f.value}</div>
                <div className="text-sm text-muted-foreground">{f.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
