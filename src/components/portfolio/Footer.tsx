import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/constants/portfolio";

export function Footer() {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-mono">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground font-bold">
              S
            </span>
            <span>
              {PROFILE.username.split(" ")[0]}
              <span className="text-gradient">.dev</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Senior full stack developer building scalable products with modern tech.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Quick Links</div>
          <ul className="grid grid-cols-2 gap-y-1.5 text-sm text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a className="hover:text-foreground transition" href={`#${l.id}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Connect</div>
          <div className="flex gap-2">
            {[
              { Icon: Github, href: PROFILE.github, label: "GitHub" },
              { Icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
              { Icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10 transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </span>
          <button
            onClick={top}
            className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10 transition"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
