import { Reveal, Chapter } from '@/components/ui/Reveal';

const signals = [
  'Machines',
  'PLCs',
  'Cameras',
  'Production workflows',
  'Quality inspections',
  'Operator actions',
  'Documents & records',
  'Existing factory systems',
];

export function ManufacturingProblem() {
  return (
    <section id="problem" className="border-b border-line bg-ink text-white">
      <div className="container-x grid gap-16 py-28 lg:grid-cols-12 lg:py-36">
        <Reveal className="lg:col-span-5">
          <Chapter n="01" label="The Problem" />
          <h2 className="mt-10 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
            Manufacturing has data.
            <span className="mt-4 block text-steel-600">The challenge is understanding it.</span>
          </h2>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.1}>
            <p className="max-w-[780px] text-xl leading-9 text-steel-300">
              Manufacturing operations generate information from every corner of the plant. But critical operational knowledge stays fragmented across systems and people - and understanding what is actually happening still depends on someone being there to see it.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.34em] text-steel-500">
              The signals already exist
            </p>
            <div className="mt-7 grid grid-cols-2 border border-line sm:grid-cols-4">
              {signals.map((signal, index) => (
                <div
                  key={signal}
                  className={`min-h-[92px] bg-ink px-5 py-6 text-base text-steel-100 transition-colors hover:bg-navy3 ${index % 4 !== 3 ? 'sm:border-r' : ''} ${index < 4 ? 'border-b' : ''} ${index % 2 === 0 ? 'border-r sm:border-r' : ''}`}
                >
                  {signal}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-16 border-l-2 border-accent pl-8 text-xl leading-8 text-white">
              The opportunity is to use AI to understand this operational reality - and turn it into actionable intelligence.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
