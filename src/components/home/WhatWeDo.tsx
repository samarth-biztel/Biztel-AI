import { Reveal, Chapter } from '@/components/ui/Reveal';

const points = [
  {
    label: 'Understand',
    text: 'Manufacturing processes and station-level context',
  },
  {
    label: 'Inspect',
    text: 'Visual conditions, defects and process state',
  },
  {
    label: 'Validate',
    text: 'Execution, SOP adherence and real-time decisions',
  },
  {
    label: 'Scale',
    text: 'Operational intelligence across manufacturing functions',
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-b border-line bg-panel text-white">
      <div className="container-x grid gap-16 py-24 lg:grid-cols-12 lg:items-start lg:py-28">
        <Reveal className="lg:col-span-5">
          <Chapter n="01" label="What We Do" />
          <p className="mt-10 max-w-xl font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl">
            AI systems built for manufacturing reality.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.12}>
          <div className="grid border-y border-line sm:grid-cols-2">
            {points.map((point, index) => (
              <div
                key={point.label}
                className={`min-h-[148px] border-line py-8 sm:px-8 ${
                  index % 2 === 1 ? 'sm:border-l' : ''
                } ${index > 1 ? 'border-t' : index === 1 ? 'border-t sm:border-t-0' : ''}`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">{point.label}</p>
                <p className="mt-4 text-xl font-semibold leading-tight text-white">{point.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
