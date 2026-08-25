import { ArrowRight } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const progression = [
  ['Station', 'AI Supervisor - available today'],
  ['Line', 'Increasing manufacturing context'],
  ['Plant', 'Increasing manufacturing context'],
  ['Engineer', 'AI assistants for manufacturing functions'],
];

const roles = [
  {
    name: 'AI Process Engineer',
    question: 'Where is the process deviating from standard?',
    copy: 'Understand process execution, identify deviations, compare actual vs expected workflows.',
  },
  {
    name: 'AI Quality Engineer',
    question: 'What changed before the defect spike?',
    copy: 'Correlate quality outcomes with process events and assist root-cause investigation.',
  },
  {
    name: 'AI Production Engineer',
    question: 'Why did Line 3 lose 42 minutes yesterday?',
    copy: 'Understand production events, identify downtime patterns, correlate events across workflows.',
  },
  {
    name: 'AI Maintenance Engineer',
    question: 'What preceded the last five failures?',
    copy: 'Connect machine and process events, and surface the patterns that precede failures.',
  },
  {
    name: 'AI Design Engineer',
    question: 'What does this drawing require for manufacturing?',
    copy: 'Understand engineering documentation and connect design information with manufacturing context.',
  },
  {
    name: 'AI Supply Chain Engineer',
    question: "How will material delays affect tomorrow's plan?",
    copy: 'Connect supply signals with production context to assist planning decisions.',
  },
];

export function FutureVision({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <section id="future-vision" className="border-b border-line bg-ink text-white">
      <div className="container-x py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Chapter n="07" label="Where This Goes" />
            <h2 className="mt-10 max-w-[780px] font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              AI for every manufacturing function
            </h2>
            <span className="tag tag-future mt-10">Future / In Development</span>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="max-w-xl text-xl leading-8 text-steel-300">
              As BiztelAI builds deeper manufacturing context, AI can move from monitoring individual workflows to assisting the engineers responsible for the operation.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-24 border-y border-line py-10" delay={0.08}>
          <div className="grid gap-8 md:grid-cols-4">
            {progression.map(([title, subtitle], index) => (
              <div key={title} className="relative">
                <h3 className={`font-display text-3xl font-extrabold uppercase ${index === 0 ? 'text-accent' : 'text-white'}`}>{title}</h3>
                <p className="mt-3 text-sm text-steel-500">{subtitle}</p>
                {index < progression.length - 1 && <ArrowRight className="absolute right-10 top-3 hidden h-6 w-6 text-steel-700 md:block" />}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid border border-line md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, index) => (
            <Reveal key={role.name} delay={(index % 3) * 0.06} className="h-full">
              <article className={`h-full min-h-[300px] bg-panel p-10 lg:p-12 ${index % 3 !== 0 ? 'lg:border-l' : ''} ${index >= 3 ? 'border-t' : ''} ${index % 2 !== 0 ? 'md:border-l lg:border-l' : ''}`}>
                <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-steel-600">In Development</p>
                <h3 className="mt-8 font-display text-2xl font-extrabold text-white">{role.name}</h3>
                <blockquote className="mt-8 border-l-2 border-accent pl-6 text-lg italic leading-8 text-white">
                  "{role.question}"
                </blockquote>
                <p className="mt-9 text-base leading-7 text-steel-500">{role.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {onNavigate && (
          <div className="mt-20 flex justify-center">
            <button onClick={() => onNavigate('/#book-demo')} className="btn-secondary">
              Discuss the roadmap with our team
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
