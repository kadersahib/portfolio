import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* Experience */}
          <div className="bg-card rounded-3xl p-8 border border-border hover:border-primary hover:shadow-glow transition-all duration-500 animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Software Developer
                </h3>
                <p className="text-primary font-semibold mb-2">TetradTech</p>
                <p className="text-muted-foreground">April 2025 – Present</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-card rounded-3xl p-8 border border-border hover:border-primary hover:shadow-glow transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Master of Computer Application
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    B.S. Abdur Rahman Crescent Institute of Science and Technology
                  </p>
                  <p className="text-muted-foreground">2022 – 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 border border-border hover:border-primary hover:shadow-glow transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    B.Sc. in Computer Science
                  </h3>
                  <p className="text-primary font-semibold mb-1">
                    The New College
                  </p>
                  <p className="text-muted-foreground">2019 – 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
