import { SectionHeading } from "./About";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Chrome Extension ",
    desc: "Browser extension featuring secure authentication and prints forms, contracts and invoices. ",
    tech: ["HTML","JavaScript","Django API","SheetJS","Tailwind"],
  },
  {
    title: "Portfolio Website",
    desc: "This minimalist personal website built with React, featuring smooth animations and a modern dark theme.",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Ladham Car Rental Website",
    desc: "Landing page for a car rental company in Agadir.",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Web Scrapper",
    desc: "A Chrome extension extract data from an online payement web app, and organize it into excel sheets.",
    tech: ["HTML","JavaScript","Django API","SheetJS","Tailwind"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Projects" title="Things I've recently built" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group bg-gradient-card border border-border rounded-2xl overflow-hidden hover:border-primary/60 transition-smooth hover:-translate-y-2 hover:shadow-glow"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/mouhcine-Wahbi"
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg glass hover:border-primary/60 transition-smooth"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
