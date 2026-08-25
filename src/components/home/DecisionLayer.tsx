import { ArrowDown, ArrowRight } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const panels = [
  {
    title: 'Factory Reality',
    items: ['Video', 'Images', 'Machine signals', 'PLC data', 'Production events', 'Quality information'],
    highlight: false,
  },
  {
    title: 'BiztelAI AI Layer',
    items: ['Understand', 'Validate', 'Correlate', 'Reason'],
    highlight: true,
  },
  {
    title: 'Manufacturing Intelligence',
    items: ['Process', 'Quality', 'Production', 'Maintenance', 'Engineering'],
    highlight: false,
  },
];

export function DecisionLayer() {
  return (
    <section id="ai-decision-layer" className="border-b border-line bg-panel text-white">
      <div className="container-x py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <Chapter n="02" label="The BiztelAI Idea" />
            <h2 className="mt-10 max-w-[900px] font-display text-4xl font-extrabold leading-[1.04] sm:text-5xl lg:text-6xl">
              From factory signals to <span className="text-accent">manufacturing intelligence</span>
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={0.12}>
            <p className="max-w-md text-base leading-7 text-steel-500">
              One intelligence layer that observes operational reality, reasons over it, and returns answers the plant can act on. Not four products - one decision layer.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[1fr_38px_1fr_38px_1fr] lg:items-stretch">
          {panels.map((panel, index) => (
            <div key={panel.title} className="contents">
              <Reveal className="h-full" delay={index * 0.08}>
                <div className={`flex h-full min-h-[510px] flex-col border bg-ink p-9 lg:p-12 ${panel.highlight ? 'border-accent' : 'border-line'}`}>
                  <p className={`font-mono text-[11px] uppercase tracking-[0.34em] ${panel.highlight ? 'text-accent' : 'text-steel-500'}`}>
                    {panel.title}
                  </p>
                  <ul className="mt-14 divide-y divide-line">
                    {panel.items.map((item) => (
                      <li key={item} className="py-4 text-xl text-white">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              {index < panels.length - 1 && (
                <Reveal className="flex items-center justify-center" delay={index * 0.08 + 0.05}>
                  <ArrowRight className="hidden h-6 w-6 text-accent lg:block" strokeWidth={1.7} />
                  <ArrowDown className="h-6 w-6 text-accent lg:hidden" strokeWidth={1.7} />
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
