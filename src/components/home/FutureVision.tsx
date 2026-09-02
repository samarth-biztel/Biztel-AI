import { ArrowRight } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const roles = [
  'Production',
  'Quality',
  'Process',
  'Maintenance',
  'Design',
  'Supply Chain',
];

export function FutureVision({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <section id="future-vision" className="border-b border-line bg-panel text-white">
      <div className="container-x grid gap-16 py-24 lg:grid-cols-12 lg:items-center lg:py-28">
        <Reveal className="lg:col-span-6">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <Chapter n="03" label="Roadmap" />
            <span className="tag tag-future">Future Direction</span>
          </div>
          <h2 className="mt-8 font-display text-4xl font-extrabold leading-none sm:text-5xl">AI support across manufacturing</h2>
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">Manufacturing Functions</p>
          <p className="mt-4 font-display text-xl font-bold text-white">Role-aware assistance for factory teams</p>
          <p className="mt-7 text-lg leading-8 text-steel-300">
            As BiztelAI builds deeper manufacturing context, AI can assist the people responsible for production, quality, process, maintenance, design and supply-chain decisions.
          </p>
          {onNavigate && (
            <button onClick={() => onNavigate('/contact#book-demo')} className="btn-secondary mt-10">
              Discuss Roadmap <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.12}>
          <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-steel-500">
            Focus Areas
          </p>
          <div className="mt-8 grid border-y border-line sm:grid-cols-2">
            {roles.map((role, index) => (
              <p
                key={role}
                className={`min-h-[96px] border-line py-8 text-xl font-semibold leading-tight text-white sm:px-8 ${
                  index % 2 === 1 ? 'sm:border-l' : ''
                } ${index > 1 ? 'border-t' : index === 1 ? 'border-t sm:border-t-0' : ''}`}
              >
                {role}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
