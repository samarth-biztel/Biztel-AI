import { Reveal, Chapter } from '@/components/ui/Reveal';

const proofPoints = [
  'Live production deployment',
  'Global automotive OEM environment',
  '50,000+ monitored cycles',
  'Approved for public communication',
];

const detailPoints = [
  'Industrial station conditions',
  'Edge inference context',
  'Line-side operational use',
  'No confidential footage shown',
];

export function ProductionProof({ detailed = false, chapterNumber }: { detailed?: boolean; chapterNumber?: string }) {
  if (!detailed) {
    return (
      <section id="production-proof" className="border-b border-line bg-panel text-white">
        <div className="container-x py-20 lg:py-24">
          <Reveal>
            <Chapter n={chapterNumber ?? '03'} label="Production Proof" />
            <div className="mt-10 grid gap-y-7 border-y border-line py-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                '50,000+ cycles',
                'Production deployment',
                'Global Automotive OEM',
                'Edge AI + PLC',
              ].map((point, index) => (
                <p
                  key={point}
                  className={`text-2xl font-semibold text-white ${index > 0 ? 'lg:border-l lg:border-line lg:pl-8' : ''}`}
                >
                  {point}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="production-proof" className="border-b border-line bg-panel text-white">
      <div className="container-x grid gap-16 py-24 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-6">
          <Chapter n={chapterNumber ?? '08'} label="Production Proof" />
          <h2 className="mt-10 max-w-xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Already running
            <span className="block">in production.</span>
          </h2>
          <p className="mt-10 max-w-[520px] text-xl leading-8 text-steel-300">
            AI Supervisor has been used in a real automotive manufacturing environment, with cycle volume and deployment context cleared for public communication.
          </p>

          <div className="mt-16 border-t border-line pt-12">
            <p className="font-display text-7xl font-black leading-none text-white sm:text-8xl lg:text-[7.5rem]">
              50,000<span className="text-accent">+</span>
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.34em] text-steel-500">
              Production cycles monitored
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.12}>
          <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-steel-500">
            Deployment Context
          </p>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {detailPoints.map((point, index) => (
              <div key={point} className="flex items-center justify-between py-6">
                <span className="text-xl text-white">{point}</span>
                <span className="font-mono text-xs text-steel-600">{String(index + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[620px] text-sm leading-7 text-steel-600">
            Shared with approval for public communication. No confidential production footage or customer information is shown.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
