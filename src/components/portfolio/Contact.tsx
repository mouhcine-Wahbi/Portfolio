import { useState } from "react";
import { SectionHeading } from "./About";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent!", { description: "Thanks for reaching out — I'll reply soon." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-40 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Contact" title="Let's build something together" />
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm currently open to internship opportunities, freelance work, and
              collaborations on exciting projects. Drop me a line — I'd love to hear from you.
            </p>
            <div className="space-y-3">
              <ContactLink icon={Mail} label="mouhcine.wahbi@example.com" href="mailto:mouhcine.wahbi@example.com" />
              <ContactLink icon={Linkedin} label="linkedin.com/in/mouhcine-wahbi" href="https://www.linkedin.com/in/mouhcine-wahbi-2426452a5/" />
              <ContactLink icon={Github} label="github.com/mouhcine-Wahbi" href="https://github.com/mouhcine-Wahbi" />
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="bg-gradient-card border border-border rounded-2xl p-6 space-y-4"
          >
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-smooth resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-smooth disabled:opacity-60"
            >
              <Send className="w-4 h-4" /> {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label className="text-sm font-medium mb-1.5 block">{label}</label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:outline-none transition-smooth"
      />
    </div>
  );
}

function ContactLink({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 p-4 rounded-xl glass hover:border-primary/60 transition-smooth group"
    >
      <span className="w-10 h-10 rounded-lg bg-gradient-primary grid place-items-center shadow-glow">
        <Icon className="w-4 h-4 text-primary-foreground" />
      </span>
      <span className="text-sm group-hover:text-primary transition-smooth">{label}</span>
    </a>
  );
}
