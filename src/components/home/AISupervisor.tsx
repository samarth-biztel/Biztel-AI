import { Check } from 'lucide-react';
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

export function AISupervisor() {
  return (
    <section id="ai-supervisor" className="border-b border-line bg-ink text-white">
      <div className="container-x py-28 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Chapter n="03" label="The Product Today" />
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <h2 className="font-display text-5xl font-extrabold leading-none sm:text-6xl lg:text-7xl">AI Supervisor</h2>
              <span className="tag tag-current">Current Product</span>
            </div>
            <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.34em] text-steel-500">Station Intelligence</p>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <p className="text-xl leading-8 text-steel-300">
              AI Supervisor continuously monitors, validates and records manufacturing processes using industrial vision AI. It acts as a digital supervisor at the manufacturing station - understanding operator actions, process execution and visual conditions in real time. It works across manual manufacturing workflows where the process can be observed and the required SOP logic defined.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-7 lg:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 0.1} className="h-full">
              <div className="h-full min-h-[510px] border border-line bg-panel p-9 lg:p-14">
                <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent">{capability.eyebrow}</p>
                <h3 className="mt-8 font-display text-3xl font-extrabold text-white lg:text-4xl">{capability.title}</h3>
                <ul className="mt-16 divide-y divide-line">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-center gap-5 py-5 text-lg text-white">
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
