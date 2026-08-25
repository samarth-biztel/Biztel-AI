import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function About({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section id="about" className="section-pad bg-ink text-white">
      <div className="container-x">
        <Reveal className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6"><span className="h-px w-8 bg-accent" />About BiztelAI</div>
            <h2 className="heading-2">An AI decision layer for manufacturing.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl leading-[1.6] text-steel-200">
              BiztelAI is building the intelligence layer between factory operations and the people who run them.
            </p>
            <p className="body-lg mt-6">
              The company starts with AI Supervisor - station-level process monitoring and visual inspection running in production - and is building toward AI decision support for manufacturing engineers.
            </p>
            <div className="mt-10 grid border-y border-line sm:grid-cols-2">
              <div className="py-6 sm:border-r sm:pr-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">Current</div>
                <div className="mt-2 text-sm text-steel-200">AI Supervisor - Station Intelligence</div>
              </div>
              <div className="border-t py-6 sm:border-t-0 sm:pl-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-steel-500">Future / In development</div>
                <div className="mt-2 text-sm text-steel-300">AI assistants for manufacturing functions</div>
              </div>
            </div>
            <button onClick={() => onNavigate('/#book-demo')} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Talk to BiztelAI <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
