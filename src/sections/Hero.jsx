import { ArrowDown, Download } from 'lucide-react';
import heroImage from '../assets/hero-abstract.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 scroll-mt-navbar">
      {/* Hero background image */}
     
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-6 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="block text-gradient">Kartheek Nistala</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
           
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={scrollToProjects}
              className="btn-hero px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2"
            >
              View My Work
              <ArrowDown className="w-5 h-5" />
            </button>
            
            <a
              href="https://drive.google.com/file/d/16N_DB8kaxvW_Pf95Ub3QsLD6k4skpke8/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-2 border border-border"
            >
              Download Resume
              <Download className="w-5 h-5" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="pt-16 animate-bounce">
            <button 
              onClick={scrollToProjects}
              className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-lg p-2"
              aria-label="Scroll to projects"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;