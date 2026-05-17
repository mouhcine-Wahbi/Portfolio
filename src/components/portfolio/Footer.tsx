import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mouhcine Wahbi. Crafted with passion.
        </p>
        <div className="flex gap-3">
          {[
            { icon: Github, href: "https://github.com/mouhcine-Wahbi", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mouhcine-wahbi-2426452a5/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:mouhcine.wahbi@example.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="w-10 h-10 grid place-items-center rounded-lg glass hover:border-primary/60 hover:text-primary transition-smooth"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
