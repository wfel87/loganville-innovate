
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="font-bold text-white">MA</span>
          </div>
          <span className="font-bold text-xl tracking-tight">Anderson IT</span>
        </a>
        
        <div className="hidden md:flex gap-8 items-center">
          <nav className="flex gap-8">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="button-primary">
            Get Started
          </a>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 z-40 bg-background pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg">
          <a 
            href="#services" 
            className="py-3 border-b border-border text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="py-3 border-b border-border text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="py-3 border-b border-border text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a 
            href="#contact" 
            className="button-primary text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
