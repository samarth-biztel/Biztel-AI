import { Reveal, Chapter } from '@/components/ui/Reveal';

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="border-b border-line bg-panel text-white">
      <div className="container-x py-20 lg:py-24">
        <Reveal>
          <Chapter n="01" label="What We Do" />
          <p className="mt-8 max-w-4xl text-2xl leading-10 text-steel-200">
            BiztelAI builds AI systems that understand manufacturing processes and visual conditions, starting with station-level intelligence and evolving toward AI teammates for every manufacturing function.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
