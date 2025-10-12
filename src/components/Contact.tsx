import { useEffect, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useParallax } from "@/hooks/use-parallax";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollReveal(0.2);
  const parallaxOffset = useParallax(0.1);

  const [state, handleSubmit] = useForm("xqaygzgq"); // your Formspree form ID
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }
  }, [state.succeeded]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-secondary/30 relative overflow-hidden"
      ref={ref}
    >
      {/* Background orb with parallax */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side info */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach
                  out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <span>abriel.devs@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <span>Available for remote work</span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/Aaabwril"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 0 0 8.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a10.09 10.09 0 0 1 6.009 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.013 12.013 0 0 0 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zm-1.5-12.268A1.764 1.764 0 1 1 8.25 4.97a1.764 1.764 0 0 1-1.75 1.762zM19 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side form */}
            <form
              onSubmit={handleSubmit}
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                />
              </div>
              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <Send
                  className="mr-2 group-hover:translate-x-1 group-hover:rotate-12 transition-transform"
                  size={18}
                />
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
