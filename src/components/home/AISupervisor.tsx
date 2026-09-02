import { ArrowRight } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const proofStats = [
  '50,000+ cycles',
  'Production deployment',
  'Global Automotive OEM',
  'Edge AI + PLC',
];

export function AISupervisor({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <section id="ai-supervisor" className="border-b border-line bg-ink text-white">
      <div className="container-x grid gap-16 py-24 lg:grid-cols-12 lg:items-center lg:py-28">
        <Reveal className="lg:col-span-6">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <Chapter n="02" label="Product" />
            <span className="tag tag-current">Current Product</span>
          </div>
          <h2 className="mt-8 font-display text-4xl font-extrabold leading-none sm:text-5xl">AI Supervisor</h2>
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">Station Intelligence</p>
          <p className="mt-4 font-display text-xl font-bold text-white">Process Monitoring + Visual Inspection</p>
          <p className="mt-7 text-lg leading-8 text-steel-300">
            AI Supervisor helps manufacturing teams understand what is happening at a station, validate process execution and catch visual issues as work happens.
          </p>
          {onNavigate && (
            <button onClick={() => onNavigate('/products/ai-supervisor')} className="btn-primary mt-10">
              Explore AI Supervisor <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.12}>
          <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-steel-500">
            Production Proof
          </p>
          <div className="mt-8 grid border-y border-line sm:grid-cols-2">
            {proofStats.map((point, index) => (
              <p
                key={point}
                className={`min-h-[128px] border-line py-8 text-xl font-semibold leading-tight text-white sm:px-8 ${
                  index % 2 === 1 ? 'sm:border-l' : ''
                } ${index > 1 ? 'border-t' : index === 1 ? 'border-t sm:border-t-0' : ''}`}
              >
                {point}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
