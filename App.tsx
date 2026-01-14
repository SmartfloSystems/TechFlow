import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Integrations from './components/Integrations';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ToastProvider } from './components/Toast';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <div className="relative flex flex-col min-h-screen">
        {/* Background Mesh Gradients */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-blue/20 rounded-full blur-[120px] opacity-30"></div>
        </div>

        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <Stats />
          <Features />
          <Integrations />
          <CTA />
        </main>

        <Footer />
      </div>
    </ToastProvider>
  );
};

export default App;