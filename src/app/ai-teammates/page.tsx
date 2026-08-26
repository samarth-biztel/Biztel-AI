'use client';

import { ArrowRight, Factory, FileText, Gauge, PackageSearch, Settings, ShieldCheck } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Reveal, Chapter } from '@/components/ui/Reveal';
import { useSiteNavigation } from '@/hooks/useSiteNavigation';

const teammates = [
  {
    icon: Factory,
    name: 'AI Production Engineer',
    question: 'Why did Line 3 lose 42 minutes?',
  },
  {
    icon: ShieldCheck,
    name: 'AI Quality Engineer',
    question: 'What changed before the defect spike?',
  },
  {
    icon: Gauge,
    name: 'AI Process Engineer',
    question: 'Where is the process deviating from standard?',
  },
  {
    icon: Settings,
    name: 'AI Maintenance Engineer',
    question: 'What preceded the last five failures?',
  },
  {
    icon: FileText,
    name: 'AI Design Engineer',
    question: 'What does this drawing require for manufacturing?',
  },
  {
    icon: PackageSearch,
    name: 'AI Supply Chain Engineer',
    question: 'What is driving this production or material delay?',
  },
];

export default function AITeammatesPage() {
  const navigate = useSiteNavigation();

  return (
    <div className="min-h-screen bg-navy-950">
      <Header onNavigate={navigate} currentPath="/ai-teammates" />
      <main className="pt-[84px] text-white">
        <section className="relative overflow-hidden border-b border-line bg-ink py-20 lg:py-28">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="container-x relative">
            <Reveal className="max-w-5xl">
              <Chapter n="01" label="Future / In Development" />
              <span className="tag tag-future mt-10">Future / In Development</span>
              <h1 className="mt-10 max-w-4xl font-display text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
                AI Teammates for Every Manufacturing Function
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-9 text-steel-300">
                As BiztelAI builds deeper manufacturing context, AI can assist the engineers responsible for production, quality, process, maintenance and engineering decisions.
              </p>
              <button onClick={() => navigate('/contact#book-demo')} className="btn-primary mt-10">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </button>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-navy-950">
          <div className="container-x">
            <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <Chapter n="02" label="Roadmap" />
                <h2 className="mt-8 heading-2">AI teammates are the future vision, not current deployed products.</h2>
              </div>
              <p className="body-lg lg:col-span-5">
                The current product is AI Supervisor: Process Monitoring and Visual Inspection at the station level.
              </p>
            </Reveal>

            <div className="mt-14 grid border border-line md:grid-cols-2 lg:grid-cols-3">
              {teammates.map((teammate, index) => (
                <Reveal key={teammate.name} delay={(index % 3) * 0.06} className="h-full">
                  <article className={`h-full min-h-[280px] bg-panel p-8 lg:p-10 ${index % 3 !== 0 ? 'lg:border-l' : ''} ${index >= 3 ? 'border-t' : ''} ${index % 2 !== 0 ? 'md:border-l lg:border-l' : ''}`}>
                    <teammate.icon className="h-6 w-6 text-accent" strokeWidth={1.6} />
                    <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-steel-600">Future / In Development</p>
                    <h3 className="mt-5 font-display text-2xl font-extrabold text-white">{teammate.name}</h3>
                    <blockquote className="mt-7 border-l-2 border-accent pl-5 text-lg italic leading-8 text-white">
                      "{teammate.question}"
                    </blockquote>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-panel py-20">
          <div className="container-x flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-steel-500">Current product</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-white">AI Supervisor is available today.</h2>
            </div>
            <button onClick={() => navigate('/products/ai-supervisor')} className="btn-secondary">
              Explore AI Supervisor <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
