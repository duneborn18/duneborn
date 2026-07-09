import { Shield } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-spice-gold/15 py-12 relative overflow-hidden">
      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-sand-medium/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-1.5 group w-fit">
              <Logo height={16} className="text-sand-offwhite" />
            </a>
            <p className="text-xs text-sand-medium/60 font-light max-w-sm leading-relaxed">
              Deploys cognitive software architectures and agentic automation engines for large enterprises and global conglomerates.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-widest text-spice-gold font-semibold mb-2">
              Sectors & Services
            </span>
            {['Solutions', 'Products', 'Partners', 'About'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-xs text-sand-medium hover:text-sand-offwhite transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Secure Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-widest text-spice-gold font-semibold mb-2">
              Secure Operations
            </span>
            <span className="text-xs text-sand-medium">
              HQ: Jaipur, Rajasthan
            </span>
            <span className="text-xs text-sand-medium">
              Secure Line: +1 (800) DUNE-BORN
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-sand-medium/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] text-sand-medium/40 tracking-wider">
            &copy; {currentYear} DUNEBORN INC. ALL RIGHTS RESERVED. SOVEREIGN STATUS GUARANTEED.
          </span>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sand-medium hover:text-spice-gold transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-sand-medium hover:text-spice-gold transition-colors" aria-label="Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-sand-medium hover:text-spice-gold transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <span className="h-4 w-[1px] bg-sand-medium/10" />
            <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-sand-medium/50 font-bold bg-sand-light/30 border border-sand-medium/10 px-2 py-0.5 rounded-sm">
              <Shield size={10} className="text-spice-gold" />
              Secure Status
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
