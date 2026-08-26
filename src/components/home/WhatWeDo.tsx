import { ArrowRight } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const stages = [
  {
    label: 'Today',
    title: 'AI Supervisor',
    subtitle: 'Station Intelligence',
    text: 'Process Monitoring and Visual Inspection for observable station-level workflows.',
    tag: 'Current',
    current: true,
  },
  {
    label: 'Future',
    title: 'AI Teammates',
    subtitle: 'AI for every manufacturing function',
    text: 'Assistants for production, quality, process, maintenance, design and supply chain decisions.',
    tag: 'Future / In Development',
    current: false,
  },
];

export function WhatWeDo({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section id="what-we-do" className="border-b border-line bg-panel text-white">
      <div className="container-x py-24 lg:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Chapter n="01" label="What We Do" />
            <h2 className="mt-8 max-w-2xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              Intelligence for manufacturing decisions.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-steel-300 lg:col-span-5 lg:col-start-8">
            BiztelAI starts at the station, where production reality can be observed, validated and turned into useful operational evidence.
          </p>
        </Reveal>

        <div className="mt-14 grid border border-line lg:grid-cols-[1fr_56px_1fr]">
          {stages.map((stage, index) => (
            <div key={stage.label} className="contents">
              <Reveal delay={index * 0.08} className="h-full">
                <article className="h-full bg-ink p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={stage.current ? 'tag tag-current' : 'tag tag-future'}>{stage.tag}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-steel-500">{stage.label}</span>
                  </div>
                  <h3 className="mt-10 font-display text-3xl font-extrabold text-white">{stage.title}</h3>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.26em] text-accent">{stage.subtitle}</p>
                  <p className="mt-8 max-w-lg text-base leading-7 text-steel-300">{stage.text}</p>
                </article>
              </Reveal>
              {index === 0 && (
                <div className="flex items-center justify-center border-y border-line bg-ink py-6 lg:border-x lg:border-y-0">
                  <ArrowRight className="h-5 w-5 rotate-90 text-accent lg:rotate-0" strokeWidth={1.6} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <button onClick={() => onNavigate('/products/ai-supervisor')} className="btn-primary">
            Explore AI Supervisor <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => onNavigate('/ai-teammates')} className="btn-secondary">
            Explore AI Teammates
          </button>
        </div>
      </div>
    </section>
  );
}
