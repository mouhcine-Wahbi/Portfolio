import profile from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            Available for internships
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
            Hi, I'm <span className="text-gradient">Mouhcine Wahbi</span>
            <br />
            Full Stack Developer & Problem Solver
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            A Full stack developer passionate about programming and crafting modern,
            performant web experiences. I love turning ideas into clean, scalable code.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-smooth"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium hover:border-primary/60 transition-smooth"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-50 animate-glow-pulse" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 animate-float shadow-elegant">
              <img
                src={profile}
                alt="Mouhcine Wahbi portrait"
                width={768}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
