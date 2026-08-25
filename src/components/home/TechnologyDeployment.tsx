import { BrainCircuit, Camera, Cloud, Cpu, Factory, Link2, Server } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const stack = [
  { icon: Camera, label: 'Industrial Cameras' }, { icon: Cpu, label: 'Edge Computing' },
  { icon: BrainCircuit, label: 'AI Software' }, { icon: Factory, label: 'Factory Integration' },
];

export function TechnologyDeployment() {
  return (
    <section id="technology" className="section-pad bg-navy-950">
      <div className="container-x"><div className="content-x">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-7"><div className="eyebrow mb-6"><span className="h-px w-8 bg-cyan-400" />Technology & deployment</div><h2 className="heading-2 max-w-3xl">Designed to fit the factory environment.</h2></div><p className="body-lg lg:col-span-5">Deploy on-premise, at the edge, or in your cloud environment depending on your requirements.</p></Reveal>

        <Reveal className="mt-14 overflow-hidden rounded-[20px] border border-white/[0.09] bg-navy-950" delay={.08}>
          <div className="grid border-b border-white/[0.08] sm:grid-cols-4">{stack.map((item, i) => <div key={item.label} className={`relative p-6 sm:p-7 ${i < stack.length - 1 ? 'border-b border-white/[0.08] sm:border-b-0 sm:border-r' : ''}`}><div className="flex items-center justify-between"><item.icon className="h-5 w-5 text-cyan-400" strokeWidth={1.5} /><span className="text-[10px] text-steel-600">0{i + 1}</span></div><div className="mt-10 text-sm font-medium text-steel-100">{item.label}</div></div>)}</div>
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-white/[0.08] p-7 sm:p-9 lg:border-b-0 lg:border-r"><div className="flex items-center gap-3"><Link2 className="h-4 w-4 text-cyan-400" /><h3 className="text-sm font-semibold uppercase tracking-[0.1em]">Possible integration</h3></div><div className="mt-6 grid gap-3 sm:grid-cols-3">{['PLC', 'Manufacturing systems', 'Customer infrastructure'].map(item => <div key={item} className="rounded-xl border border-white/[0.07] px-4 py-3 text-xs text-steel-300">{item}</div>)}</div></div>
            <div className="p-7 sm:p-9"><div className="flex items-center gap-3"><Server className="h-4 w-4 text-cyan-400" /><h3 className="text-sm font-semibold uppercase tracking-[0.1em]">Deployment options</h3></div><div className="mt-6 grid gap-3 sm:grid-cols-3">{['On-premise', 'Edge', 'Customer cloud'].map((item, i) => <div key={item} className="flex items-center gap-2 rounded-xl border border-white/[0.07] px-4 py-3 text-xs text-steel-300">{i === 2 ? <Cloud className="h-3.5 w-3.5 text-steel-500" /> : <Server className="h-3.5 w-3.5 text-steel-500" />}{item}</div>)}</div></div>
          </div>
        </Reveal>
        <p className="mt-5 text-xs leading-5 text-steel-500">BiztelAI does not require customers to use a BiztelAI-hosted cloud. Deployment is selected around operational and infrastructure requirements.</p>
      </div></div>
    </section>
  );
}
