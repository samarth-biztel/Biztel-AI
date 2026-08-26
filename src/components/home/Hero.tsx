import { ArrowUpRight, CheckCircle2, Eye, Gauge, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (path: string) => void;
}

const stats = [
  ['Current', 'AI Supervisor'],
  ['Does', 'Process Monitoring + Visual Inspection'],
  ['Next', 'Book a Demo'],
];

const visualRows = [
  { icon: Gauge, label: 'Process', value: 'Sequence valid' },
  { icon: Eye, label: 'Inspection', value: 'Surface clear' },
  { icon: Workflow, label: 'PLC', value: 'Ready to proceed' },
];

function StationVisual() {
  return (
    <div className="mt-14 max-w-5xl border border-line bg-panel/95 p-4 shadow-2xl shadow-black/25 lg:mt-16">
      <div className="flex items-center justify-between border-b border-line px-3 pb-4">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-steel-400">
          <span className="h-2 w-2 bg-green-400" />
          AI Supervisor / Station Intelligence
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Live</span>
      </div>
      <div className="grid gap-4 pt-4 lg:grid-cols-[1.3fr_.7fr]">
        <div className="relative min-h-[260px] overflow-hidden border border-line bg-navy-950 grid-bg-fine">
          <div className="absolute inset-x-10 top-10 h-40 border border-accent/60">
            <span className="absolute -top-7 left-0 bg-accent px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
              Step 03 / Cleaning
            </span>
            <span className="absolute bottom-4 right-4 border border-green-400 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-green-400">
              SOP OK
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
            Cycle evidence recorded
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-line bg-ink pt-[92px]">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 grid-bg opacity-80" />

      <div className="container-x relative flex min-h-[calc(100vh-92px)] flex-col justify-center pb-32 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1180px]"
        >
          <div className="eyebrow mb-10">
            <span className="h-2 w-2 bg-accent" />
            Industrial AI Systems for Manufacturing
          </div>

          <h1 className="heading-1 max-w-[1220px] text-white">
            The AI Decision
            <span className="block">
              Layer for <span className="text-accent">Manufacturing</span>
            </span>
          </h1>

          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
            <p className="max-w-[680px] text-xl leading-8 text-steel-300 lg:col-span-7">
              Turn factory data and operational reality into intelligence for the people who run the plant.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row lg:col-span-5 lg:justify-end">
              <button onClick={() => onNavigate('/contact#book-demo')} className="btn-primary">
                Book a Demo <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <StationVisual />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-line bg-ink/40 backdrop-blur-[1px]">
        <div className="container-x grid md:grid-cols-3">
          {stats.map(([value, label], index) => (
            <div key={value} className={`py-7 md:px-8 ${index > 0 ? 'border-t border-line md:border-l md:border-t-0' : ''}`}>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent">{value}</div>
              <div className="mt-3 text-base text-steel-300">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
