import { Code2, Palette, Zap, Atom, Hexagon, Coffee, Leaf, Database, Server, Terminal, Network, GitBranch } from "lucide-react";

const Skills = () => {
  const skills = {
    Frontend: [
      { name: "HTML5", Icon: Code2 },
      { name: "CSS3", Icon: Palette },
      { name: "JavaScript", Icon: Zap },
      { name: "React.js", Icon: Atom },
    ],
    Backend: [
      { name: "Node.js", Icon: Hexagon },
      { name: "Java", Icon: Coffee },
      { name: "Spring Boot", Icon: Leaf },
    ],
    Databases: [
      { name: "MySQL", Icon: Database },
      { name: "PostgreSQL", Icon: Server },
    ],
    Other: [
      { name: "Linux", Icon: Terminal },
      { name: "Networking", Icon: Network },
      { name: "Git & GitHub", Icon: GitBranch },
    ],
  };

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div
              key={category}
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((skill, index) => {
                  const IconComponent = skill.Icon;
                  return (
                    <div
                      key={skill.name}
                      className="group bg-card rounded-2xl p-4 border border-border hover:border-primary hover:shadow-glow transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
