import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Chat Assistant",
      description: "An Ai chat assistant,Real-time chat interface with OpenAI integration. Built message streaming, conversation history, and typing indicators.",
      tags: ["React", "Tailwind", "Typescript","OpenAi API"],
      githubUrl: "https://github.com/krtk06/Ai-chat-assistant",
      demoUrl: "",
      featured: true,
    },
    {
      id: 2,
      title: "Uber Cancellation and No Cab Availability Analysis",
      description: "",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      githubUrl: "https://github.com/krtk06/Uber-Analysis",
      demoUrl: "",
      featured: true,
    },
    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description: "A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.",
    //   tags: ["JavaScript", "OpenWeather API", "Chart.js", "PWA"],
    //   githubUrl: "https://github.com/krtk06/weather-dashboard",
    //   demoUrl: "https://weather-dashboard-demo.surge.sh",
    //   featured: false,
    // },
    // {
    //   id: 4,
    //   title: "AI Chat Interface",
    //   description: "An intelligent chatbot interface with natural language processing capabilities and customizable conversation flows.",
    //   tags: ["Python", "Flask", "OpenAI API", "React"],
    //   githubUrl: "https://github.com/krtk06/ai-chat",
    //   demoUrl: "https://ai-chat-demo.herokuapp.com",
    //   featured: false,
    // },
    // {
    //   id: 5,
    //   title: "Portfolio CMS",
    //   description: "A headless content management system for portfolio websites with drag-and-drop page builder and SEO optimization.",
    //   tags: ["Next.js", "Strapi", "GraphQL", "Tailwind CSS"],
    //   githubUrl: "https://github.com/krtk06/portfolio-cms",
    //   demoUrl: "https://portfolio-cms-demo.vercel.app",
    //   featured: false,
    // },
    // {
    //   id: 6,
    //   title: "Cryptocurrency Tracker",
    //   description: "Real-time cryptocurrency price tracking with portfolio management, alerts, and detailed market analysis tools.",
    //   tags: ["React Native", "CoinGecko API", "Redux", "TypeScript"],
    //   githubUrl: "https://github.com/krtk06/crypto-tracker",
    //   demoUrl: "https://crypto-tracker-demo.expo.dev",
    //   featured: false,
    // },
  ];

  return (
    <section id="projects" className="py-20 px-6 scroll-mt-navbar">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card-elegant rounded-2xl p-6 group hover:scale-105 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-lg px-3 py-2"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">Code</span>
                </a>
                
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-lg px-3 py-2"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/krtk06"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 border border-border"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;