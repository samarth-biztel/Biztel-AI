import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Database, Plug, ShieldCheck } from 'lucide-react';
import { Capabilities } from '@/components/home/Capabilities';
import { HowItWorks } from '@/components/home/HowItWorks';
import { DemoVideos } from '@/components/home/DemoVideos';
import { ProductionProof } from '@/components/home/ProductionProof';
import { BookDemo } from '@/components/home/BookDemo';
import { Reveal, Chapter } from '@/components/ui/Reveal';

interface ProductPageProps {
  onNavigate: (path: string) => void;
}

const plcPoints = [
  'Connect station cameras, edge compute and process rules',
  'Send AI decisions to factory control systems where required',
  'Route operator alerts while action is still possible',
  'Expose live station state and cycle records for engineering teams',
];

const traceabilityPoints = [
  'Cycle ID',
  'Timestamp',
  'Station context',
  'Decision result',
  'Exception reason',
  'Evidence snapshot',
];

export function ProductPage({ onNavigate }: ProductPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[84px]">
      <section id="what-is-ai-supervisor" className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
        <div className="absolute inset-0 opacity-35 grid-bg" />
        <div className="container-x relative">
          <div className="content-x">
            <Reveal className="max-w-3xl">
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
                AI Supervisor turns live process, visual and station context into clear decisions for manufacturing teams running critical workflows.
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
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-900 text-white">
        <div className="container-x">
          <div className="content-x grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Chapter n="01" label="What Is AI Supervisor?" />
              <h2 className="mt-8 heading-2">A product story for live manufacturing work.</h2>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.07}>
              <p className="border-y border-white/[0.08] py-8 text-lg leading-9 text-steel-300 md:text-xl">
                It connects cameras, station context and defined process logic so teams can see whether work is happening as expected, whether the part is visually acceptable and what action should happen next.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Capabilities chapterNumber="02" />
      <HowItWorks chapterNumber="03" />

      <section id="deployment" className="section-pad bg-navy-900 text-white">
        <div className="container-x">
          <Reveal className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Chapter n="04" label="Deployment" />
              <h2 className="mt-8 heading-2">Deploy at the station, then connect to operations.</h2>
              <p className="mt-6 text-base leading-7 text-steel-400">
                AI Supervisor is designed for line-side deployment: cameras observe the workflow, AI runs close to the station, and outputs can connect to operator alerts, traceability systems and PLC-linked actions.
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
              <Chapter n="05" label="Traceability" />
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

      <DemoVideos chapterNumber="06" />
      <ProductionProof detailed chapterNumber="07" />
      <BookDemo chapterNumber="08" />
    </div>
  );
}
