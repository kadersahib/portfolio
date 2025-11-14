import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Banking App – Backend Project",
      description: "A robust banking application backend built with Java and Spring Boot, featuring secure transactions and user management.",
      tech: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/kadersahib/Banking-App/tree/master",
      demo: null,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Weather App",
      description: "Real-time weather forecasting application with beautiful UI built using React.js and weather APIs.",
      tech: ["React.js"],
      github: "https://github.com/kadersahib/Weather-App",
      demo: "https://kaderforecastapp.netlify.app/",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      title: "Masala Website",
      description: "Modern and responsive website for a spice/masala business with product showcase and company information.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/kadersahib/MasalaWebsiteMain",
      demo: "https://kadersahib.github.io/MasalaWebsiteMain/",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Beauty Parlour Website",
      description: "Elegant and responsive website for a beauty parlour with service listings and booking features.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/kadersahib/beautyParlourMain",
      demo: "https://kadersahib.github.io/beautyParlourMain/",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      title: "Ecommerce App",
      description: "Full-stack e-commerce platform with modern UI, product management, and secure payment integration.",
      tech: ["React.js", "TailwindCSS", "Spring Boot", "MySQL"],
      github: "https://github.com/kadersahib/ecommerce",
      demo: null,
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary hover:shadow-glow transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/90 text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    {project.title.split(' ')[0]}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
