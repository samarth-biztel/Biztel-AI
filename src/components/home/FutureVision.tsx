import { ArrowRight } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const roles = [
  {
    area: 'Production',
    name: 'AI Production Engineer',
    question: 'Why did Line 3 lose 42 minutes?',
  },
  {
    area: 'Quality',
    name: 'AI Quality Engineer',
    question: 'What changed before the defect spike?',
  },
  {
    area: 'Process',
    name: 'AI Process Engineer',
    question: 'Where is the process deviating from standard?',
  },
  {
    area: 'Maintenance',
    name: 'AI Maintenance Engineer',
    question: 'What preceded the last five failures?',
  },
  {
    area: 'Design',
    name: 'AI Design Engineer',
    question: 'What does this drawing require for manufacturing?',
  },
  {
    area: 'Supply Chain',
    name: 'AI Supply Chain Engineer',
    question: 'What is driving this production or material delay?',
  },
];

export function FutureVision({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <section id="future-vision" className="border-b border-line bg-ink text-white">
      <div className="container-x py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Chapter n="04" label="AI Teammates" />
            <h2 className="mt-10 max-w-[780px] font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              AI for every manufacturing function
            </h2>
            <span className="tag tag-future mt-10">Future / In Development</span>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="max-w-xl text-xl leading-8 text-steel-300">
              As BiztelAI builds deeper manufacturing context, AI can assist the engineers responsible for production, quality, process, maintenance and engineering decisions.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid border border-line md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, index) => (
            <Reveal key={role.name} delay={(index % 3) * 0.06} className="h-full">
              <article className={`h-full min-h-[250px] bg-panel p-8 lg:p-10 ${index % 3 !== 0 ? 'lg:border-l' : ''} ${index >= 3 ? 'border-t' : ''} ${index % 2 !== 0 ? 'md:border-l lg:border-l' : ''}`}>
                <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-steel-600">{role.area}</p>
                <h3 className="mt-7 font-display text-2xl font-extrabold text-white">{role.name}</h3>
                <blockquote className="mt-7 border-l-2 border-accent pl-5 text-lg italic leading-8 text-white">
                  "{role.question}"
                </blockquote>
              </article>
            </Reveal>
          ))}
        </div>

        {onNavigate && (
          <div className="mt-20 flex justify-center">
            <button onClick={() => onNavigate('/ai-teammates')} className="btn-secondary">
              Explore AI Teammates <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
