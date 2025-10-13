import {
  SiNextdotjs,
  SiClerk,
  SiVercel,
  SiShadcnui,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiSupabase,
  SiTypescript,
  SiMongodb,
  SiGit,
  SiGithub,
  SiLinux,
  SiFramer,
  SiVite,
  SiDocker,
  SiPrisma,
  SiGraphql,
  SiPostgresql,
  SiBun,
  SiFigma,
  SiNotion,
  SiDaisyui,
} from "react-icons/si";
import { Card } from "./ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

const Skills = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const parallaxOffset = useParallax(1);

  const mainStack = [
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Clerk", icon: SiClerk, color: "#5C3EE8" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "DaisyUI", icon: SiDaisyui, color: "#F472B6" }, 
    { name: "shadcn/ui", icon: SiShadcnui, color: "#A855F7" },
  ];

  const tools = [
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Prisma", icon: SiPrisma, color: "#0C344B" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Bun", icon: SiBun, color: "#fbf0df" },
    { name: "Clerk", icon: SiClerk, color: "#5C3EE8" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Notion", icon: SiNotion, color: "#ffffff" },
    { name: "DaisyUI", icon: SiDaisyui, color: "#F472B6" },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-background via-background/10 to-secondary/0 relative overflow-hidden"
      ref={ref}
    >
       {/* === Parallax background blobs === */}
       <div
        className="absolute inset-0 opacity-50"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse delay-300" />
      </div>

      {/* === Content === */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        {/* Title */}
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center mb-6 sm:h-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Skills & Technologies
        </h2>

        {/* Main Stack */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-white">Main Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-10 relative">
            {mainStack.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="flex flex-col items-center group transition-transform hover:scale-110"
              >
                <div className="p-6 bg-card/70 backdrop-blur-xl rounded-2xl shadow-md group-hover:shadow-primary/40 transition-all duration-300">
                  <Icon
                    className="text-5xl drop-shadow-md transition-transform duration-500 group-hover:rotate-6"
                    style={{ color }}
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGIES & TOOLS */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white text-center">
            Technologies & Tools
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
            {tools.map(({ name, icon: Icon, color }, i) => (
              <Card
                key={name}
                className={`p-4 bg-card/70 backdrop-blur-md border-border hover:border-primary/40 transition-all duration-100 hover:scale-105 hover:shadow-lg ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 0.03}s` }}
              >
                <Icon className="text-3xl mx-auto mb-2" style={{ color }} />
                <p className="text-xs text-muted-foreground">{name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
