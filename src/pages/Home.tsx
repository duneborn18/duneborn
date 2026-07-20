import { useEffect } from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solutions from '../components/Solutions';
import Products from '../components/Products';
import Timeline from '../components/Timeline';
import Audience from '../components/Audience';
import SocialProof from '../components/SocialProof';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
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
  }, []);

  return (
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
        <FinalCTA />
      </div>
    </>
  );
}
