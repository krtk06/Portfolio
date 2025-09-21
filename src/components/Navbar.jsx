import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const navigationLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className={`mx-auto max-w-7xl rounded-2xl navbar-backdrop transition-all duration-300 ${isScrolled ? 'py-3 px-6' : 'py-4 px-8'
        }`}>
        <div className="flex items-center justify-between">

          <button
            onClick={() => scrollToSection("home")}
            className="bitcount-grid-double-ink text-xl px-2 py-1"
          >
            KN
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors focus-ring rounded-lg px-3 py-2"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right side - Theme toggle and social links */}
          <div className="flex items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/krtk06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors focus-ring rounded-lg p-2"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/kartheek-nistala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors focus-ring rounded-lg p-2"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 pt-4 border-t border-border/50">
          <div className="flex flex-wrap gap-4 justify-center">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors focus-ring rounded-lg px-3 py-2"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;