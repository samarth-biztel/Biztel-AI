import { Factory, FileSearch, Gauge, Plug, ScanEye, ServerCog } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const reasons = [
  {
    icon: Gauge,
    title: 'Real-Time Intelligence',
    text: 'Understand and validate processes while work is happening - not after the shift report.',
  },
  {
    icon: ScanEye,
    title: 'Visual Understanding',
    text: 'Use video and images to understand manufacturing workflows and products.',
  },
  {
    icon: Factory,
    title: 'Industrial Deployment',
    text: 'Designed for real factory environments, not lab conditions.',
  },
  {
    icon: ServerCog,
    title: 'Flexible Deployment',
    text: 'On-premise, at the edge, or in your own cloud environment.',
  },
  {
    icon: Plug,
    title: 'Factory Integration',
    text: 'Integrates with PLCs and existing manufacturing systems.',
  },
  {
    icon: FileSearch,
    title: 'Traceability',
    text: 'Turn manual manufacturing actions into structured operational records.',
  },
];

export function WhyBiztelAI() {
  return (
    <section id="why-biztel" className="border-b border-line bg-ink text-white">
      <div className="container-x py-28 lg:py-36">
        <Reveal className="max-w-4xl">
          <Chapter n="09" label="Why BiztelAI" />
          <h2 className="mt-10 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Concrete capability, <span className="text-steel-600">not marketing claims</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid border border-line sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 3) * 0.06} className="h-full">
              <article className={`group flex h-full min-h-[280px] flex-col bg-ink p-10 transition-colors hover:bg-navy3 ${index % 3 !== 0 ? 'lg:border-l' : ''} ${index >= 3 ? 'border-t' : ''} ${index % 2 !== 0 ? 'sm:border-l lg:border-l' : ''}`}>
                <reason.icon className="h-6 w-6 text-accent" strokeWidth={1.7} />
                <h3 className="mt-14 font-display text-xl font-extrabold text-white">{reason.title}</h3>
                <p className="mt-4 text-base leading-7 text-steel-400">{reason.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
