import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solutions from './components/Solutions';
import Products from './components/Products';
import Timeline from './components/Timeline';
import Audience from './components/Audience';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Schedule from './pages/Schedule';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'schedule'>('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50px 0px -50px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.scroll-fade');
    fadeElements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out');
      observer.observe(el);
    });

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, [currentPage]); // re-run observer when switching page views

  // Smooth top-scroll on page change
  const navigateTo = (page: 'home' | 'schedule') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="bg-brand-black min-h-screen text-sand-offwhite selection:bg-spice-gold selection:text-brand-black">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          
          <div className="scroll-fade">
            <Problem />
          </div>
          
          <div className="scroll-fade">
            <Solutions />
          </div>
          
          <div className="scroll-fade">
            <Products />
          </div>
          
          <div className="scroll-fade">
            <Timeline />
          </div>
          
          <div className="scroll-fade">
            <Audience />
          </div>
          
          <div className="scroll-fade">
            <SocialProof />
          </div>
          
          <div className="scroll-fade">
            <FinalCTA onNavigate={navigateTo} />
          </div>
        </>
      ) : (
        <Schedule onBack={() => navigateTo('home')} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
