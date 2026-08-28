import { ArrowRight } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

export function AISupervisor({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <section id="ai-supervisor" className="border-b border-line bg-ink text-white">
      <div className="container-x py-20 lg:py-24">
        <Reveal className="max-w-4xl">
          <Chapter n="02" label="AI Supervisor" />
          <span className="tag tag-current mt-10">Current Product</span>
          <h2 className="mt-8 font-display text-5xl font-extrabold leading-none sm:text-6xl">AI Supervisor</h2>
          <p className="mt-7 font-mono text-[12px] uppercase tracking-[0.34em] text-accent">Station Intelligence</p>
          <p className="mt-4 font-display text-2xl font-bold text-white">Process Monitoring + Visual Inspection</p>
          <p className="mt-7 text-xl leading-8 text-steel-300">
            AI Supervisor helps manufacturing teams understand what is happening at a station, validate process execution and catch visual issues as work happens.
          </p>
          {onNavigate && (
            <button onClick={() => onNavigate('/products/ai-supervisor')} className="btn-primary mt-10">
              Explore AI Supervisor <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
