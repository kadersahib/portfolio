import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Profile Image Placeholder */}
          <div className="inline-block relative">
            <div className="w-40 h-40 rounded-full bg-gradient-primary animate-glow-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
              <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                KS
              </span>
            </div>
          </div>

          {/* Name with gradient */}
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent animate-fade-in">
              Kader Sahib Maraikar
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Software Developer
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Chennai</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer building efficient, scalable, and user-friendly applications with modern web technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8"
              asChild
            >
              <a href="/kader_sahib.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 text-lg px-8"
              asChild
            >
              <a href="mailto:kadermaraikar99@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://github.com/kadersahib"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:shadow-glow transition-all duration-300 border border-border hover:border-primary"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kader-sahib/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:shadow-glow transition-all duration-300 border border-border hover:border-primary"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:kadermaraikar99@gmail.com"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 hover:shadow-glow transition-all duration-300 border border-border hover:border-primary"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
