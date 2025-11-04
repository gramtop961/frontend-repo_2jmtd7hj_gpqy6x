import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 font-inter text-white">
      <Hero />
      <Features />
      <Architecture />
      <CTA />
      <footer className="mx-auto max-w-6xl px-6 pb-12 pt-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Unified SaaS Starter • Next.js • Expo • Supabase • FastAPI • Azure
      </footer>
    </div>
  );
}

export default App;
