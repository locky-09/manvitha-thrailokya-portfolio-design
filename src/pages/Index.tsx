
// Home page with animated hero and testimonials
import { useEffect } from "react";

const testimonials = [
  {
    quote: "An absolute pleasure to work with. Professional, creative, and meets every deadline!",
    name: "Akhil, Client",
  },
  {
    quote:
      "Manvitha’s attention to detail and passion for design make every project shine.",
    name: "Sreeja, Collaborator",
  },
  {
    quote:
      "A visionary developer and designer – the results always exceed expectations.",
    name: "Rohan, Project Manager",
  },
];

export default function Index() {
  // Animate the hero section on load
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.classList.add("animate-fade-in");
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-background to-accent/30 min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="pt-32 pb-24 container max-w-5xl flex flex-col items-center gap-8 text-center"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-primary drop-shadow-lg mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          BUDDHA SRI THRAILOKYA MANVITHA
        </h1>
        <p className="max-w-2xl text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in">
          Portfolio of a Creative Designer &amp; Developer | Experience the intersection of style, interaction, and technology.
        </p>
        <a
          href="/portfolio"
          className="inline-block px-8 py-3 rounded-full text-lg font-semibold bg-primary text-primary-foreground shadow-lg hover:scale-105 hover:bg-primary/80 transition-transform animate-scale-in"
        >
          View my work
        </a>
      </section>

      {/* Testimonials Section */}
      <section className="pb-20 container max-w-3xl">
        <h2 className="text-3xl font-bold text-primary mb-8 animate-fade-in text-center">Testimonials</h2>
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-1 bg-card rounded-xl shadow-xl p-6 border border-border hover:shadow-2xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="text-xl font-medium mb-4 italic">{t.quote}</p>
              <p className="text-primary font-bold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
