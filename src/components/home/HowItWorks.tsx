import { ClipboardCheck, Database, Eye, ScanSearch, Zap } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const steps = [
  {
    icon: Eye,
    name: 'SEE',
    text: 'Industrial cameras observe the station as work is performed.',
  },
  {
    icon: ScanSearch,
    name: 'UNDERSTAND',
    text: 'AI interprets actions, parts, timing and station context.',
  },
  {
    icon: ClipboardCheck,
    name: 'VALIDATE',
    text: 'The system checks what happened against the expected process logic.',
  },
  {
    icon: Zap,
    name: 'ACT',
    text: 'The system can send alerts or trigger control actions before the cycle advances.',
  },
  {
    icon: Database,
    name: 'RECORD',
    text: 'The outcome is stored so teams can review exceptions later.',
  },
];

const cycleFields = ['Cycle ID', 'Timestamp', 'Station', 'Decision', 'Exception', 'Evidence'];

export function HowItWorks({ chapterNumber = '02' }: { chapterNumber?: string }) {
  return (
    <section id="how-it-works" className="border-b border-line bg-muted text-ink">
      <div className="container-x py-28 lg:py-36">
        <Reveal>
          <Chapter n={chapterNumber} label="How AI Supervisor Works" />
          <h2 className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-xl font-extrabold leading-normal sm:text-2xl lg:text-3xl">
            {steps.map((step, index) => (
              <span key={step.name} className="inline-flex items-center gap-3">
                {index > 0 && <span className="text-accent">→</span>}
                {step.name}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel-300">
            Deployed beside the line, station cameras and edge AI apply process rules to live workflows. Outputs connect to operator alerts, PLC-linked actions and cycle records for engineering review.
          </p>
        </Reveal>

        <div className="mt-10 grid border border-line sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.name} delay={index * 0.08} className="h-full">
              <div className={`group relative flex h-full flex-col bg-muted p-6 transition-colors hover:bg-subtle ${index > 0 ? 'border-t lg:border-l lg:border-t-0' : ''} ${index === 1 ? 'sm:border-t-0' : ''} ${index % 2 !== 0 ? 'sm:border-l' : ''}`}>
                <div className="flex items-center justify-between">
                  <step.icon className="h-6 w-6 text-accent" strokeWidth={1.8} />
                  <span className="font-mono text-xs text-steel-600">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-6 font-mono text-base font-bold uppercase tracking-[0.08em] text-ink">{step.name}</p>
                <p className="mt-3 text-base leading-7 text-steel-300">{step.text}</p>
                <span className="absolute inset-x-0 top-0 h-px bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <ul aria-label="Cycle record fields" className="flex flex-wrap gap-y-3 border-y border-line py-5 text-sm text-steel-300">
            {cycleFields.map((field, index) => (
              <li key={field} className="flex items-center">
                {index > 0 && <span aria-hidden="true" className="mx-3 text-steel-500">|</span>}
                {field}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
