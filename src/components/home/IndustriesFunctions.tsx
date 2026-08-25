import { Reveal, Chapter } from '@/components/ui/Reveal';

const industries = [
  { index: 'A', name: 'Automotive', detail: 'OEMs and Tier-1 suppliers' },
  { index: 'B', name: 'Aerospace', detail: 'Manufacturing and engineering operations' },
  { index: 'C', name: 'Industrial Manufacturing', detail: 'Machining, assembly and other industrial processes' },
];

const functions = ['Production', 'Quality', 'Process', 'Maintenance', 'Operations', 'Engineering'];

export function IndustriesFunctions() {
  return (
    <section id="industries" className="border-b border-line bg-panel text-white">
      <div className="container-x py-28 lg:py-36">
        <Reveal>
          <Chapter n="08" label="Who It's For" />
          <h2 className="mt-10 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Built for industrial manufacturing
          </h2>
        </Reveal>

        <div className="mt-20 grid border border-line lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.name} delay={index * 0.08} className="h-full">
              <article className={`flex min-h-[330px] h-full flex-col justify-between bg-panel p-10 lg:p-12 ${index > 0 ? 'border-t lg:border-l lg:border-t-0' : ''}`}>
                <span className="font-mono text-sm text-steel-600">{industry.index}</span>
                <div>
                  <h3 className="font-display text-3xl font-extrabold text-white">{industry.name}</h3>
                  <p className="mt-6 text-lg text-steel-300">{industry.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-28" delay={0.12}>
          <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-steel-500">
            Built for the people running the plant
          </p>
          <div className="mt-10 grid border border-line sm:grid-cols-2 lg:grid-cols-6">
            {functions.map((item, index) => (
              <div key={item} className={`bg-ink px-6 py-8 text-center font-display text-lg font-extrabold text-white transition-colors hover:text-accent ${index > 0 ? 'border-t sm:border-l sm:border-t-0' : ''} ${index === 2 || index === 4 ? 'sm:border-t lg:border-t-0' : ''}`}>
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
