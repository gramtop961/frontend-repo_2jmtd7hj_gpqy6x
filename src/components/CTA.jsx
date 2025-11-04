import React from 'react';
import { Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pb-16">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 p-8 backdrop-blur">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              Ready to launch your cross-platform SaaS?
            </h3>
            <p className="mt-2 max-w-2xl text-slate-300">
              Start with secure auth, realtime data, and a production-grade cloud setup.
            </p>
          </div>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
          >
            <Rocket className="h-4 w-4" />
            Get Started
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-slate-400">
        Bonus ideas: Stripe billing, Application Insights, push notifications, and Supabase Edge Functions.
      </p>
    </section>
  );
};

export default CTA;
