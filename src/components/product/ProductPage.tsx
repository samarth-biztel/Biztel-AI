import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, Cpu, Radio } from 'lucide-react';
import { Capabilities } from '@/components/home/Capabilities';
import { HowItWorks } from '@/components/home/HowItWorks';
import { TechnologyDeployment } from '@/components/home/TechnologyDeployment';
import { DemoVideos } from '@/components/home/DemoVideos';
import { ProductionProof } from '@/components/home/ProductionProof';
import { BookDemo } from '@/components/home/BookDemo';
import { Reveal } from '@/components/ui/Reveal';

interface ProductPageProps { onNavigate: (path: string) => void; }

const problems = [
  'Manual processes are difficult to monitor consistently', 'SOP adherence can depend on individual observation',
  'Quality issues may be found downstream instead of at the station', 'Manual workflows often lack cycle-level evidence',
  'Process deviations can become defects before they are understood',
];
const applications = ['Engine surface cleaning', 'Bolt tightening sequence', 'Manual assembly', 'Other observable manual manufacturing workflows'];

function ProductVisual() {
  return <div className="overflow-hidden rounded-[20px] border border-white/[0.09] bg-navy-900"><div className="flex h-12 items-center justify-between border-b border-white/[0.08] px-5"><div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-steel-300"><Radio className="h-3.5 w-3.5 text-green-400" />Station 07 / Live</div><span className="text-[10px] text-steel-600">AI Supervisor</span></div><div className="grid min-h-[330px] grid-cols-[1.25fr_.75fr]"><div className="relative border-r border-white/[0.08] grid-bg-fine"><div className="absolute inset-[18%] rounded-lg border border-cyan-400/45"><span className="absolute -top-7 left-0 rounded bg-cyan-400 px-2 py-1 text-[9px] font-semibold text-navy-950">STEP 04 / VALIDATING</span></div><Cpu className="absolute bottom-5 left-5 h-5 w-5 text-steel-600" strokeWidth={1.4} /></div><div className="p-5"><div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-steel-500">Cycle decision</div><div className="mt-4 flex items-center gap-2 text-sm font-semibold text-green-400"><Check className="h-4 w-4" />Process compliant</div><div className="mt-6 space-y-4 border-t border-white/[0.07] pt-5">{[['Sequence', '04 / 05'], ['PLC state', 'Ready'], ['Evidence', 'Recording']].map(([a,b]) => <div key={a} className="flex justify-between text-xs"><span className="text-steel-500">{a}</span><span className="text-steel-200">{b}</span></div>)}</div></div></div></div>;
}

export function ProductPage({ onNavigate }: ProductPageProps) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const localNavigate = (path: string) => onNavigate(path === '/#book-demo' ? '/products/ai-supervisor#book-demo' : path);

  return (
    <div className="pt-[84px]">
      <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-28"><div className="absolute inset-0 opacity-35 grid-bg" /><div className="container-x relative"><div className="content-x grid gap-14 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-6"><button onClick={() => onNavigate('/')} className="mb-8 flex items-center gap-2 text-sm text-steel-500 hover:text-white"><ArrowLeft className="h-4 w-4" />Back to home</button><div className="mb-6 flex items-center gap-3"><span className="tag tag-current">Available today</span><span className="text-xs font-semibold uppercase tracking-[0.13em] text-steel-500">Station Intelligence</span></div><h1 className="heading-1">AI Supervisor</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-steel-300">AI Supervisor continuously monitors, validates and records manufacturing processes using industrial vision AI. It acts as a digital supervisor at the manufacturing station, understanding operator actions, process execution and visual conditions in real time.</p><div className="mt-9 flex flex-wrap gap-3"><button onClick={() => localNavigate('/#book-demo')} className="btn-primary">Book a Demo <ArrowRight className="h-4 w-4" /></button><button onClick={() => onNavigate('/products/ai-supervisor#demo-videos')} className="btn-secondary">See Demo Videos</button></div></Reveal>
        <Reveal className="lg:col-span-6" delay={.1}><ProductVisual /></Reveal>
      </div></div></section>

      <section className="section-pad bg-navy-900 text-white"><div className="container-x"><div className="content-x grid gap-14 lg:grid-cols-12"><Reveal className="lg:col-span-5"><div className="eyebrow mb-6">The problem it solves</div><h2 className="heading-2">Make manual work observable and verifiable.</h2><p className="mt-6 text-base leading-7 text-steel-400">AI Supervisor can be used where the process can be observed and the required SOP or process logic can be defined.</p></Reveal><Reveal className="lg:col-span-7" delay={.07}><div className="border-t border-white/[0.08]">{problems.map((item, i) => <div key={item} className="flex gap-4 border-b border-white/[0.08] py-5"><span className="text-[10px] font-semibold text-cyan-400">0{i + 1}</span><span className="text-sm text-steel-300">{item}</span></div>)}</div></Reveal></div></div></section>

      <HowItWorks />
      <Capabilities />

      <section className="section-pad bg-navy-900 text-white"><div className="container-x"><div className="content-x"><Reveal className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-5"><div className="eyebrow mb-6">Applications</div><h2 className="heading-2">Across observable manufacturing workflows.</h2></div><div className="border-t border-white/[0.08] lg:col-span-7">{applications.map((item, i) => <div key={item} className="flex items-center justify-between border-b border-white/[0.08] py-5"><span className="text-sm font-medium text-steel-300">{item}</span><span className="text-[10px] text-steel-600">0{i + 1}</span></div>)}</div></Reveal></div></div></section>

      <TechnologyDeployment />
      <DemoVideos />
      <ProductionProof />
      <BookDemo />
    </div>
  );
}
