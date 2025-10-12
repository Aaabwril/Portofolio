import { Download, Code2, Sparkles, Rocket, Heart, Coffee, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";

const About = () => {
  const { ref, isVisible } = useScrollReveal(0.2);
  const parallaxOffset = useParallax(0.3);

  const highlights = [
    { icon: Code2, label: "Clean Code", emoji: "✨", color: "from-primary to-accent" },
    { icon: Sparkles, label: "AI Integration", emoji: "🤖", color: "from-accent to-primary" },
    { icon: Coffee, label: "Always Learning", emoji: "📚", color: "from-primary to-accent" },
    { icon: Zap, label: "Performance", emoji: "⚡", color: "from-accent to-primary" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-28 right-60 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }} />
      <div className="absolute bottom-24 left-60 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0.1s", transform: `translateY(${-parallaxOffset * 0.5}px)` }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}>
              <div className="space-y-4">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Hey there! 👋 I'm a <span className="text-primary font-semibold">fullstack developer</span> who 
                  loves crafting efficient, user-focused apps. I enjoy working with React, Next.js, and Supabase, 
                  and recently exploring <span className="text-accent font-semibold">AI integrations</span>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My passion lies in building products that solve real problems while delivering 
                  exceptional user experiences. I believe in clean code, beautiful design, and 
                  continuous learning. 🚀
                </p>
              </div>
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all group mt-4"
              >
                <Download className="mr-2 group-hover:translate-y-1 transition-transform" size={18} />
                Download Resume
              </Button>
            </div>

            <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}>
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.label}
                    className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-3 text-center">
                      <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="space-y-1">
                        <div className="text-2xl group-hover:animate-wiggle">{item.emoji}</div>
                        <h3 className="text-sm font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                          {item.label}
                        </h3>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
