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
    text: 'The system compares what happened against expected process logic.',
  },
  {
    icon: Zap,
    name: 'ACT',
    text: 'Alerts or control actions can be sent before the cycle moves on.',
  },
  {
    icon: Database,
    name: 'RECORD',
    text: 'The outcome is stored so teams can review exceptions later.',
  },
];

export function HowItWorks({ chapterNumber = '04' }: { chapterNumber?: string }) {
  return (
    <section id="how-it-works" className="border-b border-line bg-panel text-white">
      <div className="container-x py-28 lg:py-36">
        <Reveal>
          <Chapter n={chapterNumber} label="How AI Supervisor Works" />
          <h2 className="mt-10 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            A digital supervisor at every station
          </h2>
        </Reveal>

        <div className="mt-24 grid border border-line sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.name} delay={index * 0.08} className="h-full">
              <div className={`group relative flex h-full min-h-[355px] flex-col bg-panel p-10 transition-colors hover:bg-navy3 ${index > 0 ? 'border-t sm:border-l sm:border-t-0' : ''} ${index === 2 ? 'sm:border-t lg:border-t-0' : ''}`}>
                <div className="flex items-center justify-between">
                  <step.icon className="h-6 w-6 text-accent" strokeWidth={1.8} />
                  <span className="font-mono text-xs text-steel-600">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-20 font-mono text-2xl font-bold uppercase tracking-[0.08em] text-white">{step.name}</p>
                <p className="mt-6 text-base leading-7 text-steel-300">{step.text}</p>
                <span className="absolute inset-x-0 top-0 h-px bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
