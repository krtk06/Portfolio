import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from './components/Navbar';
import StarsBackground from './components/background/StarsBackground';
import ShootingStars from './components/background/ShootingStars';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
// import Contact from './sections/Contact';

const queryClient = new QueryClient();

// Theme hook
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
}

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-full">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          {/* Main Content */}
          <main>
            <Hero />
            <Projects />
            <About />
            {/* <Contact /> */}
          </main>
          
          {/* Footer */}
          <footer className="py-8 px-6 text-center text-muted-foreground border-t border-border/50">
            <p>&copy; 2025 Kartheek Nistala. All rights reserved.</p>
          </footer>
        </div>
        
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;