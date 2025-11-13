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
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  className?: string;
  color: string;
  categories: string[];
};

type Category = {
  id: string;
  name: string;
};

const Skills = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const parallaxOffset = useParallax(1);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories: Category[] = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' },
    { id: 'design', name: 'Design' },
    { id: 'tools', name: 'Tools' },
  ];

  const mainStack: Skill[] = [
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", categories: ['frontend', 'backend'] },
    { name: "Clerk", icon: SiClerk, color: "#5C3EE8", categories: ['backend', 'tools'] },
    { name: "Vercel", icon: SiVercel, color: "#ffffff", categories: ['devops'] },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", categories: ['backend', 'database'] },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", categories: ['frontend'] },
    { name: "DaisyUI", icon: SiDaisyui, color: "#F472B6", categories: ['frontend'] }, 
    { name: "shadcn/ui", icon: SiShadcnui, color: "#A855F7", categories: ['frontend'] },
  ];

  const allSkills: Skill[] = [
    // Frontend
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", categories: ['frontend'] },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", categories: ['frontend', 'backend'] },
    { name: "React", icon: SiReact, color: "#61DAFB", categories: ['frontend'] },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", categories: ['frontend', 'backend'] },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", categories: ['frontend'] },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF", categories: ['frontend'] },
    { name: "Vite", icon: SiVite, color: "#646CFF", categories: ['frontend', 'tools'] },
    
    // Backend
    { name: "Python", icon: SiPython, color: "#3776AB", categories: ['backend'] },
    { name: "Node.js", icon: SiNodedotjs, color: "#68A063", categories: ['backend'] },
    { name: "Bun", icon: SiBun, color: "#fbf0df", categories: ['backend', 'tools'] },
    
    // Database
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", categories: ['database'] },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", categories: ['database'] },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", categories: ['database', 'backend'] },
    { name: "Prisma", icon: SiPrisma, color: "#0C344B", categories: ['database', 'backend'] },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098", categories: ['backend', 'tools'] },
    
    // DevOps
    { name: "Docker", icon: SiDocker, color: "#2496ED", categories: ['devops'] },
    { name: "Vercel", icon: SiVercel, color: "#ffffff", categories: ['devops'] },
    { name: "GitHub", icon: SiGithub, color: "#ffffff", categories: ['devops', 'tools'] },
    
    // Design
    { name: "Figma", icon: SiFigma, color: "#F24E1E", categories: ['design'] },
    
    // Tools
    { name: "Git", icon: SiGit, color: "#F05032", categories: ['tools'] },
    { name: "Linux", icon: SiLinux, color: "#FCC624", categories: ['tools', 'devops'] },
    { name: "Notion", icon: SiNotion, color: "#ffffff", categories: ['tools'] },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.categories.includes(activeCategory));

  return (
    <section
      id="skills"
      className="pb-24 pt-8 bg-gradient-to-b from-background via-background/10 to-secondary/0 relative overflow-hidden"
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
        {/* <div className="text-center mb-16 mt-10"> */}
          {/* <h3 className="text-3xl font-semibold mb-8 text-white">Main Tech Stack</h3> */}
          {/* <div className="flex flex-wrap justify-center gap-10 relative">
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
        </div> */}

{/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted hover:bg-muted/80 text-foreground/80"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        {/* TECHNOLOGIES & TOOLS */}
        <div>
          {/* <h3 className="text-2xl font-semibold mb-6 text-white text-center">
            Technologies & Tools
          </h3> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="p-4 flex flex-col items-center justify-center gap-2 h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div 
                  className="text-4xl" 
                  style={{ color: skill.color }}
                >
                  <Icon />
                </div>
                <span className="text-sm font-medium text-center">{skill.name}</span>
                <div className="flex flex-wrap justify-center gap-1 mt-1">
                  {skill.categories.map((cat, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted/50 text-foreground/60"
                    >
                      {categories.find(c => c.id === cat)?.name}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
