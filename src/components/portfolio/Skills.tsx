import { SectionHeading } from "./About";

const skills = [
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css", color: "1572B6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Django", slug: "django", color: "092E20" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "GitHub", slug: "github", color: "ffffff" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "Bootstrap", slug: "bootstrap", color: "7952B3" },
  { name: "Express.js", slug: "express", color: "ffffff" },
  { name: "Chrome Extension", slug: "googlechrome", color: "4285F4" },
  { name: "SheetJS", slug: "googlesheets", color: "217346" },
  { name: "Laravel", slug: "laravel", color: "FF2D20" },
  { name: "PHP", slug: "php", color: "777BB4" },
  { name: "Odoo", slug: "odoo", color: "714B67" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-30 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Skills" title="Tools I work with daily" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group bg-gradient-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-primary/60 hover:-translate-y-1 hover:shadow-glow transition-smooth"
            >
              <img
                src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                alt={`${s.name} logo`}
                width={48}
                height={48}
                loading="lazy"
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-smooth">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
