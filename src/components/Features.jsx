import React from 'react';
import { Rocket, Smartphone, Database, Server, Cloud, GitBranch } from 'lucide-react';

const features = [
  {
    title: 'Next.js Web',
    description:
      'SSR dashboards, role-based routing, and secure Supabase sessions with cookies.',
    icon: Rocket,
    accent: 'from-emerald-400 to-cyan-400',
  },
  {
    title: 'React Native Mobile',
    description:
      'Expo-powered iOS and Android with realtime updates and secure JWT storage.',
    icon: Smartphone,
    accent: 'from-fuchsia-400 to-pink-400',
  },
  {
    title: 'Supabase Backend',
    description:
      'Postgres, Auth, Realtime, and Storage with strict Row-Level Security policies.',
    icon: Database,
    accent: 'from-amber-400 to-orange-400',
  },
  {
    title: 'Python Microservices',
    description:
      'FastAPI services for AI, analytics, and heavy compute with JWT validation.',
    icon: Server,
    accent: 'from-violet-400 to-purple-400',
  },
  {
    title: 'Azure Cloud',
    description:
      'Deploy web and APIs with CI/CD, container apps, and monitored performance.',
    icon: Cloud,
    accent: 'from-sky-400 to-blue-400',
  },
  {
    title: 'CI/CD Pipeline',
    description:
      'Automated tests, builds, and deployments via GitHub Actions or Azure Pipelines.',
    icon: GitBranch,
    accent: 'from-lime-400 to-emerald-400',
  },
];

const FeatureCard = ({ title, description, icon: Icon, accent }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 transition hover:translate-y-[-2px] hover:bg-white/[0.06]">
    <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-slate-950 shadow-lg shadow-black/10`}>
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-1 text-sm leading-relaxed text-slate-300">{description}</p>
    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-12 -left-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="bg-gradient-to-br from-white to-slate-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Everything you need to launch a modern SaaS
        </h2>
        <p className="mt-3 text-slate-300">
          Unified auth, realtime data, native mobile, and cloud-native automation — all wired together.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
};

export default Features;
