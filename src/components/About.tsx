const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in-up">
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              I am Kader Sahib Maraikar, a passionate and dedicated software developer with strong skills in full-stack development. I enjoy building efficient, scalable, and user-friendly applications.
            </p>
            
            <p>
              I hold a B.Sc. in Computer Science (2019–2022) from The New College and a Master of Computer Application (2022–2024) from B.S. Abdur Rahman Crescent Institute of Science and Technology.
            </p>
            
            <p>
              I am currently working as a Software Developer at TetradTech, joined in April 2025.
            </p>
            
            <p>
              I have hands-on experience in modern web technologies, backend development, databases, and cloud-ready applications. I love solving problems, learning new technologies, and building meaningful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
