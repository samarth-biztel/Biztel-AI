import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, Cpu, Database, Plug, Radio, ShieldCheck } from 'lucide-react';
import { Capabilities } from '@/components/home/Capabilities';
import { HowItWorks } from '@/components/home/HowItWorks';
import { DemoVideos } from '@/components/home/DemoVideos';
import { ProductionProof } from '@/components/home/ProductionProof';
import { BookDemo } from '@/components/home/BookDemo';
import { Reveal, Chapter } from '@/components/ui/Reveal';

interface ProductPageProps {
  onNavigate: (path: string) => void;
}

const stationOutcomes = [
  'Understands operator actions and process execution',
  'Validates SOP sequence and completion in real time',
  'Inspects visual conditions at the same station',
  'Records cycle evidence for traceability and review',
];

const plcPoints = [
  'Operator alerts when a process step is missed or incorrect',
  'OK / NOK decisions where the process logic can be defined',
  'PLC-linked actions or interlocks for critical workflow control',
  'Station-level validation before the part moves forward',
];

const traceabilityPoints = [
  'Cycle history',
  'Process events',
  'Inspection evidence',
  'SOP status',
  'Operator or station context',
  'Operational metrics',
];

function ProductVisual() {
  return (
    <div className="overflow-hidden border border-white/[0.09] bg-navy-900">
      <div className="flex h-12 items-center justify-between border-b border-white/[0.08] px-5">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-steel-300">
          <Radio className="h-3.5 w-3.5 text-green-400" />
          Station 07 / Live
        </div>
        <span className="text-[10px] uppercase tracking-[0.18em] text-steel-600">AI Supervisor</span>
      </div>
      <div className="grid min-h-[330px] grid-cols-[1.25fr_.75fr]">
        <div className="relative border-r border-white/[0.08] grid-bg-fine">
          <div className="absolute inset-[18%] border border-cyan-400/45">
            <span className="absolute -top-7 left-0 bg-cyan-400 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-navy-950">
              Step 04 / Validating
            </span>
          </div>
          <div className="absolute inset-x-[18%] top-[18%] h-1 bg-cyan-400/60 animate-scan" />
          <Cpu className="absolute bottom-5 left-5 h-5 w-5 text-steel-600" strokeWidth={1.4} />
        </div>
        <div className="p-5">
          <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-steel-500">Cycle decision</div>
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-green-400">
            <Check className="h-4 w-4" />
            Process compliant
          </div>
          <div className="mt-6 space-y-4 border-t border-white/[0.07] pt-5">
            {[
              ['Sequence', '04 / 05'],
              ['PLC state', 'Ready'],
              ['Evidence', 'Recording'],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between text-xs">
                <span className="text-steel-500">{label}</span>
                <span className="text-steel-200">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductPage({ onNavigate }: ProductPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[84px]">
      <section id="what-is-ai-supervisor" className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
        <div className="absolute inset-0 opacity-35 grid-bg" />
        <div className="container-x relative">
          <div className="content-x grid gap-14 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-6">
              <button onClick={() => onNavigate('/')} className="mb-8 flex items-center gap-2 text-sm text-steel-500 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </button>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="tag tag-current">Available today</span>
                <span className="text-xs font-semibold uppercase tracking-[0.13em] text-steel-500">Station Intelligence</span>
              </div>
              <h1 className="heading-1">AI Supervisor</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-steel-300">
                AI Supervisor gives manufacturing teams real-time visual intelligence at the station level. It combines Process Monitoring and Visual Inspection so teams can validate how work is performed and what happened to the part.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button onClick={() => onNavigate('/products/ai-supervisor#book-demo')} className="btn-primary">
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => onNavigate('/products/ai-supervisor#demo-videos')} className="btn-secondary">
                  See Demo Videos
                </button>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-6" delay={0.1}>
              <ProductVisual />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-900 text-white">
        <div className="container-x">
          <div className="content-x grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Chapter n="01" label="What Is AI Supervisor?" />
              <h2 className="mt-8 heading-2">A digital supervisor for observable station work.</h2>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.07}>
              <div className="border-t border-white/[0.08]">
                {stationOutcomes.map((item, index) => (
                  <div key={item} className="flex gap-4 border-b border-white/[0.08] py-5">
                    <span className="text-[10px] font-semibold text-cyan-400">0{index + 1}</span>
                    <span className="text-base text-steel-300">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Capabilities />
      <HowItWorks />

      <section id="plc-integration" className="section-pad bg-navy-900 text-white">
        <div className="container-x">
          <Reveal className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Chapter n="05" label="Real-Time Intervention / PLC Integration" />
              <h2 className="mt-8 heading-2">Act while the cycle is still happening.</h2>
              <p className="mt-6 text-base leading-7 text-steel-400">
                AI Supervisor can connect station intelligence to operator alerts and factory controls, including PLC-linked actions where required.
              </p>
            </div>
            <div className="grid gap-4 lg:col-span-7">
              {plcPoints.map((point) => (
                <div key={point} className="flex items-start gap-4 border border-line bg-ink p-5">
                  <Plug className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.6} />
                  <span className="text-base leading-7 text-steel-200">{point}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="traceability" className="section-pad bg-navy-950 text-white">
        <div className="container-x">
          <Reveal className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <Chapter n="06" label="Traceability" />
              <h2 className="mt-8 heading-2">Turn station activity into cycle evidence.</h2>
            </div>
            <p className="body-lg lg:col-span-5 lg:col-start-8">
              Every monitored cycle can create a structured record of what happened, what was validated and what evidence supports the decision.
            </p>
          </Reveal>
          <div className="mt-14 grid border border-line sm:grid-cols-2 lg:grid-cols-3">
            {traceabilityPoints.map((point, index) => (
              <Reveal key={point} delay={(index % 3) * 0.05} className="h-full">
                <div className={`flex min-h-[140px] items-center justify-between bg-panel p-8 ${index % 3 !== 0 ? 'lg:border-l' : ''} ${index >= 3 ? 'border-t' : ''} ${index % 2 !== 0 ? 'sm:border-l lg:border-l' : ''}`}>
                  <div className="flex items-center gap-4">
                    {index % 2 === 0 ? <Database className="h-5 w-5 text-accent" /> : <ShieldCheck className="h-5 w-5 text-accent" />}
                    <span className="text-lg font-semibold text-white">{point}</span>
                  </div>
                  <span className="font-mono text-xs text-steel-600">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DemoVideos />
      <ProductionProof detailed />
      <BookDemo />
    </div>
  );
}
