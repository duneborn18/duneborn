import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (page: 'home' | 'schedule') => void;
  currentPage: 'home' | 'schedule';
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (hash: string) => {
    setIsOpen(false);
    onNavigate('home');
    
    // Allow React state to update first, then scroll to section
    setTimeout(() => {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Floating Glass container */}
        <div className={`flex justify-between items-center px-6 py-3.5 rounded-sm transition-all duration-500 border ${
          isScrolled
            ? 'bg-brand-black/75 backdrop-blur-xl border-sand-medium/15 shadow-[0_15px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-transparent'
        }`}>
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 group cursor-pointer border-none bg-transparent outline-none"
          >
            <Logo height={20} className="text-sand-offwhite group-hover:text-sand-light" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {[
                { label: 'Solutions', target: '#solutions' },
                { label: 'Products', target: '#products' },
                { label: 'Partners', target: '#partners' },
                { label: 'About', target: '#about' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.target)}
                  className="text-xs uppercase tracking-[0.2em] text-sand-medium hover:text-sand-offwhite transition-colors duration-200 cursor-pointer bg-transparent border-none outline-none"
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => onNavigate('schedule')}
              className={`px-5 py-2 text-[10px] uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 cursor-pointer ${
                currentPage === 'schedule'
                  ? 'bg-spice-gold text-brand-black shadow-[0_0_20px_rgba(216,155,74,0.3)] border border-spice-gold'
                  : 'bg-transparent border border-spice-gold text-spice-gold hover:bg-spice-gold hover:text-brand-black shadow-[0_0_10px_rgba(216,155,74,0.1)] hover:shadow-[0_0_20px_rgba(216,155,74,0.3)]'
              }`}
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-sand-offwhite hover:text-spice-gold transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-brand-black/95 backdrop-blur-lg border-t border-sand-medium/10 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          {[
            { label: 'Solutions', target: '#solutions' },
            { label: 'Products', target: '#products' },
            { label: 'Partners', target: '#partners' },
            { label: 'About', target: '#about' }
          ].map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.target)}
              className="text-sm uppercase tracking-[0.2em] text-sand-medium hover:text-sand-offwhite transition-colors cursor-pointer bg-transparent border-none outline-none"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onNavigate('schedule');
            }}
            className="mt-4 px-8 py-3 text-[10px] uppercase tracking-widest font-semibold bg-spice-gold text-brand-black hover:bg-transparent hover:text-spice-gold border border-spice-gold transition-all duration-300 rounded-sm cursor-pointer"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
}
