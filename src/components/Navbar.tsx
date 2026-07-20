import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Floating Glass container */}
        <div
          className={`flex justify-between items-center px-6 py-3.5 rounded-sm transition-all duration-500 border ${
            isScrolled
              ? 'bg-brand-black/85 backdrop-blur-xl border-sand-medium/15 shadow-[0_15px_30px_rgba(0,0,0,0.4)]'
              : 'bg-brand-black/40 backdrop-blur-md border-sand-medium/10'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 group outline-none">
            <Logo height={20} className="text-sand-offwhite group-hover:text-sand-light transition-colors" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'text-spice-gold border-b border-spice-gold pb-0.5'
                        : 'text-sand-offwhite/85 hover:text-sand-offwhite'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <button
              onClick={() => navigate('/schedule')}
              className={`px-5 py-2 text-[10px] uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 cursor-pointer ${
                location.pathname === '/schedule'
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
        <div className="flex flex-col items-center justify-center h-full gap-7 pb-20">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.2em] transition-colors ${
                  isActive ? 'text-spice-gold font-bold' : 'text-sand-medium hover:text-sand-offwhite'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              navigate('/schedule');
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
