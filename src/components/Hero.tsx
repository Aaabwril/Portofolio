import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";
import { useEffect, useState } from "react";

const phrases = [
  "Fullstack Developer building modern, AI-integrated web apps",
  "Creating responsive and beautiful UI with React & Tailwind",
  "Passionate about AI, open-source, and web performance",
  "Building projects that solve real-world problems",
];

const Hero = () => {
  const offsetSlow = useParallax(0.1);
  const offsetMedium = useParallax(0.25);
  const offsetFast = useParallax(0.4);

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* === GEOMETRIC PARALLAX BACKGROUND === */}
      {/* Layer 1: Grid */}
      <div
        className="absolute inset-0 opacity-100"
        style={{ transform: `translateY(${offsetSlow}px)` }}
      >
        <svg
          className="absolute inset-0 w-full h-full animate-pan-slow"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="white"
                strokeWidth="0.8"
                opacity="0.08"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Layer 2: Medium-speed shapes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${offsetMedium}px)` }}
      >
        <div className="absolute w-40 h-40 sm:w-64 sm:h-64 border border-white/60 rotate-45 blur-[1px] animate-float-slow top-[15%] left-[12%] sm:top-[20%] sm:left-[10%]" />
        <div className="absolute w-32 h-32 sm:w-40 sm:h-40 border border-yellow-500/50 animate-float-delayed bottom-[20%] right-[0%] sm:bottom-[35%] sm:right-[10%]" />
      </div>

      {/* Layer 3: Foreground shapes */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${offsetFast}px)` }}
      >
        <div className="absolute w-14 h-14 sm:w-24 sm:h-24 border border-accent/80 rounded-lg animate-pulse-glow left-[80%] top-[45%] sm:left-[50%] sm:top-[66%]" />
        <div className="absolute sm:w-32 sm:h-32 w-20 h-20 border border-green-500/60 rounded-full animate-float-slow top-[74%] left-[10%]" />
      </div>

      {/* === CONTENT === */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Hey, I’m{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Abriel
              </span>{" "}
              👋
            </h1>

            <div className="relative overflow-hidden">
              <p
                className={`text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto transition-all duration-500 ${
                  fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {phrases[current]}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-primary-foreground group"
            >
              View My Work
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary/50 hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </div>

          {/* Socials */}
          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <i className="devicon-github-original text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <i className="devicon-linkedin-plain text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
