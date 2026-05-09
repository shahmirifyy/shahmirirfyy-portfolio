import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/constants/portfolio";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "home";
      for (const l of NAV_LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass-strong shadow-elegant" : "glass"}`}
        >
          <button onClick={() => go("home")} className="flex items-center gap-2 font-mono text-sm">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-primary text-primary-foreground font-bold">
              S
            </span>
            <span className="hidden sm:inline text-foreground/90">
              {PROFILE.username.split(" ")[0]}
              <span className="text-gradient">.dev</span>
            </span>
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/5"
                  />
                )}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => go("contact")}
              className="hidden sm:inline-flex bg-gradient-primary text-primary-foreground hover:opacity-90"
            >
              Hire Me
            </Button>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden grid h-9 w-9 place-items-center rounded-lg glass"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 md:hidden glass-strong rounded-2xl p-2"
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-white/5"
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
