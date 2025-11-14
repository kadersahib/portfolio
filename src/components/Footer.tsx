import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-muted-foreground text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> by Kader Sahib Maraikar
            </p>
            {/* <p className="text-sm mt-1">© 2025 All rights reserved</p> */}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/kadersahib"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 hover:shadow-glow transition-all duration-300 border border-border hover:border-primary"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kader-sahib/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 hover:shadow-glow transition-all duration-300 border border-border hover:border-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kadermaraikar99@gmail.com"
              className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary/20 hover:shadow-glow transition-all duration-300 border border-border hover:border-primary"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
