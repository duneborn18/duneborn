import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Insights from './pages/Insights';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-brand-black min-h-screen text-sand-offwhite selection:bg-spice-gold selection:text-brand-black flex flex-col justify-between font-sans">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<BlogPost />} />
            {/* Backward compatibility redirects for legacy /blog paths */}
            <Route path="/blog" element={<Navigate to="/insights" replace />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
