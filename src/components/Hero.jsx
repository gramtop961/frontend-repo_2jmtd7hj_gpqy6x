import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Cloud } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block the scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
          <Shield className="h-3.5 w-3.5 text-emerald-400" />
          Enterprise-grade • RLS • OAuth • TLS
        </span>
        <h1 className="mt-6 bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
          Build once. Ship everywhere.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
          A unified, cross-platform SaaS starter powered by Next.js, Expo, Supabase, and Python microservices — designed for Azure-scale reliability.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
          >
            <Rocket className="h-4 w-4" />
            Explore Features
          </a>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <Cloud className="h-4 w-4" />
            See the Architecture
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
