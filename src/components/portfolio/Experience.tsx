import { SectionHeading } from "./About";
import { GraduationCap, Briefcase } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    period: "2023 — 2025",
    title: "Web Full Stack Development",
    org: "ISTA Agadir",
    desc: "Two-year program covering modern web development, databases, and full stack engineering.",
  },
  {
    icon: Briefcase,
    period: "2025",
    title: "Full Stack Developer Intern",
    org: "Resseleer Agency — Maroc Telecom",
    desc: "Three-month internship building and maintaining web applications alongside the agency's dev team.",
  },
  {
    icon: GraduationCap,
    period: "2026 — Present",
    title: "Python Application Development",
    org: "CMC Agadir",
    desc: "Currently training in Python application development, focusing on scalable backend systems.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Journey" title="Experience & Education" />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <div
                key={it.title}
                className={`relative md:grid md:grid-cols-2 md:gap-10 items-start ${
                  i % 2 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-smooth">
                    <span className="text-xs font-mono text-primary">{it.period}</span>
                    <h3 className="text-lg font-bold mt-1">{it.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{it.org}</p>
                    <p className="text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-primary grid place-items-center shadow-glow ring-4 ring-background">
                  <it.icon className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
