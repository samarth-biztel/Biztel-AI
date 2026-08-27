import { ArrowRight, CheckCircle2, Eye, Gauge, Workflow } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const visualRows = [
  { icon: Gauge, label: 'Process', value: 'Sequence valid' },
  { icon: Eye, label: 'Inspection', value: 'Surface clear' },
  { icon: Workflow, label: 'PLC', value: 'Ready to proceed' },
];

function StationVisual() {
  return (
    <div className="border border-line bg-panel/90 p-4 shadow-2xl shadow-black/25">
      <div className="flex items-center justify-between border-b border-line px-3 pb-4">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">
          <span className="h-2 w-2 bg-green-400" />
          AI Supervisor / Station Intelligence
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Live</span>
      </div>
      <div className="grid gap-4 pt-4 lg:grid-cols-[1.3fr_.7fr]">
        <div className="relative min-h-[280px] overflow-hidden border border-line bg-navy-950 grid-bg-fine">
          <div className="absolute inset-x-10 top-10 h-40 border border-accent/60">
            <span className="absolute -top-7 left-0 bg-accent px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
              Station View
            </span>
            <span className="absolute bottom-4 right-4 border border-green-400 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-green-400">
              OK
            </span>
          </div>
          <div className="absolute inset-x-10 top-10 h-1 bg-accent/70 animate-scan" />
        </div>
        <div className="border border-line bg-ink p-5">
          {visualRows.map((row) => (
            <div key={row.label} className="flex items-center gap-4 border-b border-line py-4 last:border-b-0">
              <row.icon className="h-5 w-5 text-accent" strokeWidth={1.6} />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-steel-500">{row.label}</p>
                <p className="mt-1 text-sm text-white">{row.value}</p>
              </div>
            </div>
          ))}
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            Evidence recorded
          </div>
        </div>
      </div>
    </div>
  );
}

export function AISupervisor({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <section id="ai-supervisor" className="border-b border-line bg-ink text-white">
      <div className="container-x py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
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

          <Reveal className="lg:col-span-7" delay={0.1}>
            <StationVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
