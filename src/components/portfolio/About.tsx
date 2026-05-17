import { Lightbulb, Users, Puzzle, Rocket } from "lucide-react";

const qualities = [
  { icon: Lightbulb, title: "Creativity", desc: "Bringing fresh ideas to every project." },
  { icon: Users, title: "Teamwork", desc: "Thriving in collaborative environments." },
  { icon: Puzzle, title: "Problem Solving", desc: "Breaking down complex challenges." },
  { icon: Rocket, title: "Curiosity", desc: "Always learning new technologies." },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="About Me" title="Building the web, one line at a time" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a python application developer student, focused
              on building full stack web applications. My journey began with curiosity for
              how websites work and quickly turned into a passion for crafting clean,
              elegant software.
            </p>
            <p>
              My goal is to grow into a senior full stack engineer — building products
              that solve real problems and bring joy to users. I'm constantly exploring
              new frameworks, contributing to side projects, and refining my craft.
            </p>
            <p className="text-foreground">
              I believe great software is born at the intersection of design, performance,
              and empathy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {qualities.map((q, i) => (
              <div
                key={q.title}
                className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-smooth hover:-translate-y-1"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-primary grid place-items-center mb-3 shadow-glow">
                  <q.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-1">{q.title}</h3>
                <p className="text-sm text-muted-foreground">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
    </div>
  );
}
