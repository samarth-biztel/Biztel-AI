import { Activity, Check, Eye } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const process = [
  'Monitor operator actions in real time', 'Validate SOP execution', 'Detect missed or incorrect steps',
  'Monitor process sequence', 'Detect workflow deviations', 'Alert operators',
  'Trigger PLC-linked actions/interlocks', 'Record cycle-level traceability', 'Create operational logs and metrics',
];
const inspection = [
  'Defect detection', 'Presence / absence verification', 'Assembly verification',
  'Position / orientation verification', 'Surface inspection', 'Visual quality validation',
  'Inspection evidence', 'Quality traceability',
];
const applications = ['Engine surface cleaning', 'Bolt tightening sequence', 'Manual assembly', 'Other manual manufacturing workflows'];

function CapabilityList({ items }: { items: string[] }) {
  return <div className="grid gap-x-6 gap-y-0 sm:grid-cols-2">{items.map(item => <div key={item} className="flex items-start gap-3 border-b border-white/[0.07] py-3.5"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" strokeWidth={1.8} /><span className="text-sm leading-5 text-steel-200">{item}</span></div>)}</div>;
}

export function Capabilities() {
  return (
    <section id="capabilities" className="section-pad bg-navy-950">
      <div className="container-x"><div className="content-x">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-7"><Chapter n="02" label="Process Monitoring + Visual Inspection" /><h2 className="mt-8 heading-2">Two capabilities. One product.</h2></div><p className="body-lg lg:col-span-5">Video and image intelligence work together inside AI Supervisor. Visual Inspection is a capability inside the station intelligence product, not a separate product.</p></Reveal>

        <div className="mt-14 space-y-5">
          <Reveal id="process-monitoring" className="grid overflow-hidden border border-white/[0.09] bg-navy-800 lg:grid-cols-[.75fr_1.25fr]">
            <div className="border-b border-white/[0.08] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10"><div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-400"><Activity className="h-4 w-4" strokeWidth={1.5} />Capability 01</div><h3 className="mt-8 text-3xl font-semibold tracking-normal">Process Monitoring</h3><p className="mt-4 text-base leading-7 text-steel-300">Understand how the work is being performed.</p><div className="mt-9 border-t border-white/[0.08] pt-5"><div className="text-[10px] font-semibold uppercase tracking-[0.13em] text-steel-500">Example applications</div><div className="mt-3 flex flex-wrap gap-2">{applications.map(item => <span key={item} className="border border-white/[0.08] px-3 py-1.5 text-xs text-steel-400">{item}</span>)}</div></div></div>
            <div className="p-7 sm:p-9 lg:p-10"><CapabilityList items={process} /></div>
          </Reveal>

          <Reveal id="visual-inspection" className="grid overflow-hidden border border-white/[0.09] bg-navy-800 lg:grid-cols-[.75fr_1.25fr]" delay={.06}>
            <div className="border-b border-white/[0.08] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10"><div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-400"><Eye className="h-4 w-4" strokeWidth={1.5} />Capability 02</div><h3 className="mt-8 text-3xl font-semibold tracking-normal">Visual Inspection</h3><p className="mt-4 text-base leading-7 text-steel-300">Understand what is happening to the part.</p><div className="mt-9 border border-cyan-400/15 bg-cyan-400/[0.04] p-4 text-sm leading-6 text-steel-300"><span className="font-semibold text-cyan-300">One AI Supervisor.</span> Process and visual intelligence share the same station context.</div></div>
            <div className="p-7 sm:p-9 lg:p-10"><CapabilityList items={inspection} /></div>
          </Reveal>
        </div>
      </div></div>
    </section>
  );
}
