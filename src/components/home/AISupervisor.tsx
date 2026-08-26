import { ArrowRight, Check } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const capabilities = [
  {
    eyebrow: 'Understand how the work is being performed',
    title: 'Process Monitoring',
    items: [
      'Monitor operator actions in real time',
      'Validate SOP execution',
      'Detect missed or incorrect steps',
      'Monitor process sequence',
      'Detect workflow deviations',
    ],
  },
  {
    eyebrow: 'Understand what is happening to the part',
    title: 'Visual Inspection',
    items: [
      'Defect detection',
      'Presence / absence verification',
      'Assembly verification',
      'Position / orientation verification',
      'Surface inspection',
    ],
  },
];

export function AISupervisor({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <section id="ai-supervisor" className="border-b border-line bg-ink text-white">
      <div className="container-x py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Chapter n="02" label="AI Supervisor" />
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <h2 className="font-display text-5xl font-extrabold leading-none sm:text-6xl">AI-powered station intelligence</h2>
              <span className="tag tag-current">Current Product</span>
            </div>
            <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.34em] text-steel-500">Station Intelligence</p>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <p className="text-xl leading-8 text-steel-300">
              AI Supervisor combines Process Monitoring and Visual Inspection in one product. It helps teams understand operator actions, process execution and visual conditions in real time at the station level.
            </p>
            {onNavigate && (
              <button onClick={() => onNavigate('/products/ai-supervisor')} className="btn-primary mt-10">
                Explore AI Supervisor <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </Reveal>
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 0.1} className="h-full">
              <div className="h-full min-h-[380px] border border-line bg-panel p-8 lg:p-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent">{capability.eyebrow}</p>
                <h3 className="mt-8 font-display text-3xl font-extrabold text-white lg:text-4xl">{capability.title}</h3>
                <ul className="mt-10 divide-y divide-line">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-center gap-5 py-4 text-base text-white">
                      <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
