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
      <div className="container-x py-20 lg:py-24">
        <Reveal className="max-w-5xl">
          <Chapter n="04" label="AI Teammates" />
          <h2 className="mt-10 max-w-[780px] font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            AI Teammates for Every Manufacturing Function
          </h2>
          <p className="mt-8 flex max-w-4xl flex-wrap gap-x-4 gap-y-3 text-2xl leading-10 text-steel-200">
            {roles.map((role, index) => (
              <span key={role} className="inline-flex items-center gap-4">
                {index > 0 && (
                  <span aria-hidden="true" className="text-steel-600">
                    &middot;
                  </span>
                )}
                {role}
              </span>
            ))}
          </p>
          <span className="tag tag-future mt-10">Future / In Development</span>
          {onNavigate && (
            <button onClick={() => onNavigate('/ai-teammates')} className="btn-secondary mt-10">
              Explore the Vision <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
