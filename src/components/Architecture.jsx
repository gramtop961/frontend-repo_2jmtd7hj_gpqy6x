import React from 'react';
import { Cloud, Database, Server, Smartphone, Rocket, Shield } from 'lucide-react';

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
    {children}
  </span>
);

const Architecture = () => {
  return (
    <section id="architecture" className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          A clear architecture for scale
        </h2>
        <p className="mt-3 text-slate-300">
          Each layer is specialized, secure, and built to evolve independently — with end-to-end type safety and auth.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Web */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-3 flex items-center gap-2">
            <Rocket className="h-5 w-5 text-emerald-400" />
            <h3 className="text-lg font-semibold text-white">Web App (Next.js)</h3>
          </div>
          <p className="text-sm text-slate-300">
            Server Components with Supabase cookies for SSR and RLS-aware data fetching.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>App Router</Pill>
            <Pill>RSC</Pill>
            <Pill>Middleware</Pill>
            <Pill>RLS</Pill>
          </div>
        </div>

        {/* Mobile */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-3 flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-fuchsia-400" />
            <h3 className="text-lg font-semibold text-white">Mobile (Expo)</h3>
          </div>
          <p className="text-sm text-slate-300">
            Native iOS/Android with secure JWT storage and realtime subscriptions.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>React Navigation</Pill>
            <Pill>SecureStore</Pill>
            <Pill>Realtime</Pill>
          </div>
        </div>

        {/* Supabase */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-3 flex items-center gap-2">
            <Database className="h-5 w-5 text-amber-400" />
            <h3 className="text-lg font-semibold text-white">Supabase</h3>
          </div>
          <p className="text-sm text-slate-300">
            Postgres, Auth, Storage, and Realtime with strict policies enforced by default.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Postgres</Pill>
            <Pill>Auth</Pill>
            <Pill>Storage</Pill>
            <Pill>Edge</Pill>
          </div>
        </div>

        {/* Python Service */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-3 flex items-center gap-2">
            <Server className="h-5 w-5 text-violet-400" />
            <h3 className="text-lg font-semibold text-white">Python Microservice</h3>
          </div>
          <p className="text-sm text-slate-300">
            FastAPI for compute-heavy workloads with Supabase JWT verification.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>FastAPI</Pill>
            <Pill>AI/ML</Pill>
            <Pill>Analytics</Pill>
          </div>
        </div>

        {/* Azure */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-3 flex items-center gap-2">
            <Cloud className="h-5 w-5 text-sky-400" />
            <h3 className="text-lg font-semibold text-white">Azure Cloud</h3>
          </div>
          <p className="text-sm text-slate-300">
            Containerized deployments, private networking, and observability at scale.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>App Service</Pill>
            <Pill>Container Apps</Pill>
            <Pill>Application Insights</Pill>
          </div>
        </div>

        {/* Security */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5 text-emerald-400" />
            <h3 className="text-lg font-semibold text-white">Security & RLS</h3>
          </div>
          <p className="text-sm text-slate-300">
            JWT auth, RLS policies, and TLS across all connections by default.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>JWT</Pill>
            <Pill>RLS</Pill>
            <Pill>TLS</Pill>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
