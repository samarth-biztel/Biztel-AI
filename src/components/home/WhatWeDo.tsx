import { Reveal, Chapter } from '@/components/ui/Reveal';

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-b border-line bg-panel text-white">
      <div className="container-x py-24 lg:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <Chapter n="01" label="What We Do" />
            <h2 className="mt-8 max-w-2xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              Intelligence for manufacturing decisions.
            </h2>
          </div>
          <p className="max-w-2xl text-xl leading-9 text-steel-300 lg:col-span-6">
            BiztelAI builds AI systems that understand manufacturing processes and visual conditions, starting with station-level intelligence and evolving toward AI teammates for every manufacturing function.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
