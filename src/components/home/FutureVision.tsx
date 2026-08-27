import { ArrowRight } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const roles = [
  'Production',
  'Quality',
  'Process',
  'Maintenance',
  'Design',
  'Supply Chain',
];

export function FutureVision({ onNavigate }: { onNavigate?: (path: string) => void }) {
  return (
    <section id="future-vision" className="border-b border-line bg-ink text-white">
      <div className="container-x py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Chapter n="04" label="AI Teammates" />
            <h2 className="mt-10 max-w-[780px] font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              AI Teammates for Every Manufacturing Function
            </h2>
            <span className="tag tag-future mt-10">Future / In Development</span>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="max-w-xl text-xl leading-8 text-steel-300">
              Our vision is to turn manufacturing context into AI teammates for the people running the operation.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid border border-line sm:grid-cols-2 lg:grid-cols-6">
          {roles.map((role, index) => (
            <Reveal key={role} delay={(index % 6) * 0.04} className="h-full">
              <article className={`flex min-h-[140px] items-end bg-panel p-6 ${index > 0 ? 'lg:border-l' : ''} ${index >= 2 ? 'sm:border-t lg:border-t-0' : ''} ${index % 2 !== 0 ? 'sm:border-l lg:border-l' : ''}`}>
                <h3 className="font-display text-2xl font-extrabold text-white">{role}</h3>
              </article>
            </Reveal>
          ))}
        </div>

        {onNavigate && (
          <div className="mt-14 flex justify-center">
            <button onClick={() => onNavigate('/ai-teammates')} className="btn-secondary">
              Explore the Vision <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
