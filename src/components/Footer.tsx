import { Mail, Github, Linkedin, Twitter, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/Aaabwril', 
      icon: <Github className="w-5 h-5" /> 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com', 
      icon: <Linkedin className="w-5 h-5" /> 
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com', 
      icon: <Twitter className="w-5 h-5" /> 
    },
    { 
      name: 'Email', 
      url: 'mailto:your.email@example.com', 
      icon: <Mail className="w-5 h-5" /> 
    },
  ];

  const techStack = [
    'Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* About Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Code2 className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Abriel Alhafidz
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fullstack Developer passionate about building beautiful, functional, and accessible web applications that make an impact.
              </p>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-muted-foreground hover:text-foreground transition-colors text-sm hover:translate-x-1 duration-200 w-full text-left"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-border/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} Abriel Alhafidz. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
