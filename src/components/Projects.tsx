import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

const Projects = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const parallaxOffset = useParallax(0.15);
  
  const projects = [
    {
      title: "AI Chat Assistant",
      description: "A conversational AI chatbot built with React and integrated with OpenAI API. Features real-time responses and context awareness.",
      tags: ["React", "AI", "TypeScript", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "E-Commerce Dashboard",
      description: "Full-featured admin dashboard for e-commerce management. Built with Next.js and Supabase for real-time data updates.",
      tags: ["Next.js", "Supabase", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time synchronization. Features drag-and-drop interface and team collaboration.",
      tags: ["React", "Node.js", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Portfolio Builder",
      description: "SaaS platform that helps developers create beautiful portfolios in minutes. No-code solution with customizable templates.",
      tags: ["Next.js", "Tailwind", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${-parallaxOffset}px)` }}>
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-14 h-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}>
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`p-6 bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border-border hover:border-primary/50 group cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-secondary hover:bg-primary/20 rounded-full text-secondary-foreground transition-all duration-300 hover:scale-110 cursor-pointer"
                        style={{ 
                          animationDelay: `${tagIndex * 0.1}s`,
                          animation: "bounce-in 0.5s ease-out forwards"
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 hover:bg-primary/10 group/btn"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 group-hover/btn:scale-110 transition-transform" size={16} />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 hover:bg-primary/10 group/btn"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 group-hover/btn:scale-110 transition-transform" size={16} />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
