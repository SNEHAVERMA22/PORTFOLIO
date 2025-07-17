
import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import LoadingScreen from '@/components/shared/LoadingScreen';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Loading Screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-x-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-emerald-200/10 to-blue-200/10 dark:from-emerald-400/5 dark:to-blue-400/5 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              top: '10%',
              left: '10%'
            }}
          ></div>
          <div 
            className="absolute w-80 h-80 bg-gradient-to-r from-purple-200/10 to-pink-200/10 dark:from-purple-400/5 dark:to-pink-400/5 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
              bottom: '10%',
              right: '10%'
            }}
          ></div>
        </div>

        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
