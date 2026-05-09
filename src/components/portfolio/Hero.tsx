import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE, TYPING_ROLES } from "@/constants/portfolio";
import { useTyping } from "@/hooks/use-typing";
import profile from "@/assets/profile.jpg";

export function Hero() {
  const typed = useTyping(TYPING_ROLES);
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--neon)]" />
            Available for new opportunities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Hi, I'm <span className="text-gradient">{PROFILE.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-xl md:text-2xl text-foreground/80"
          >
            {PROFILE.title}
          </motion.p>
          <div className="mt-3 font-mono text-sm md:text-base text-[var(--neon)] h-6">
            <span className="text-muted-foreground">$ </span>
            {typed}
            <span className="ml-0.5 inline-block w-2 animate-pulse bg-[var(--neon)]">&nbsp;</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-muted-foreground"
          >
            {PROFILE.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button
              size="lg"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
            >
              Hire Me <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="glass border-white/10 hover:bg-white/5"
            >
              <a href={PROFILE.resume} download>
                <Download className="mr-1.5 h-4 w-4" /> Download CV
              </a>
            </Button>
          </motion.div>
          <div className="mt-8 flex items-center gap-3">
            {[
              { href: PROFILE.github, Icon: Github, label: "GitHub" },
              { href: PROFILE.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${PROFILE.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10 hover:-translate-y-0.5 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-30 blur-2xl animate-pulse-glow" />
          <div className="relative overflow-hidden rounded-[1.75rem] glass-strong p-1.5">
            <img
              src={profile}
              alt={PROFILE.name}
              width={768}
              height={896}
              className="rounded-[1.4rem] w-full h-auto object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 glass rounded-xl px-3 py-2 flex items-center justify-between text-xs">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Open to work
              </span>
              <span className="font-mono text-muted-foreground">{PROFILE.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
