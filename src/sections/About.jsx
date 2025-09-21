import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "FastAPI"]
    },
    {
      category: "Tools & Platforms",
      technologies: ["Git", "AWS", "Vercel", "Figma", "Jest"]
    },
  ];

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design-Focused",
      description: "Creating beautiful user interfaces with attention to detail and user experience."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user interactions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working effectively in teams using agile methodologies and modern development practices."
    },
  ];

  return (
    <section id="about" className="py-20 px-6 scroll-mt-navbar">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text
          <div className="space-y-6">
            <div className="card-elegant rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack developer with over 5 years of experience creating web and mobile applications. 
                  My journey started with a curiosity about how websites work, which led me to dive deep into 
                  programming and discover my passion for building digital solutions.
                </p>
                <p>
                  I specialize in modern JavaScript frameworks, cloud technologies, and creating seamless user 
                  experiences. Whether it's a complex web application or a simple landing page, I believe in 
                  writing clean, efficient code that solves real problems.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community through blog posts and mentoring.
                </p>
              </div>
            </div>
          </div> */}

          {/* Skills */}
          <div className="space-y-6">
            <div className="card-elegant rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Skills & Technologies</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div
                    key={skillGroup.category}
                    className="space-y-3"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <h4 className="font-semibold text-foreground">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full border border-border/50 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="card-elegant rounded-xl p-6 text-center"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
        </div>
          
      </div>
    </section>
  );
};

export default About;