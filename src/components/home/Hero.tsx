import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (path: string) => void;
}

const stats = [
  ['AI Supervisor', 'In production today'],
  ['Global Automotive OEM', 'Engine assembly environment'],
  ['50,000+ Cycles', 'Production cycles monitored'],
];

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-line bg-ink pt-[92px]">
      <img
        src="https://www.silberhorn-gruppe.de/fileadmin/_processed_/0/0/csm_Roboterzellen_1bc4539985.png"
        alt="Industrial robotic manufacturing line"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,15,24,.96)_0%,rgba(10,15,24,.88)_44%,rgba(10,15,24,.72)_100%)]" />
      <div className="absolute inset-0 grid-bg opacity-80" />

      <div className="container-x relative flex min-h-[calc(100vh-92px)] flex-col justify-center pb-28 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1180px]"
        >
          <div className="eyebrow mb-14">
            <span className="h-2 w-2 bg-accent" />
            Industrial AI Systems for Manufacturing
          </div>

          <h1 className="heading-1 max-w-[1220px] text-white">
            The AI Decision
            <span className="block">
              Layer for <span className="text-accent">Manufacturing</span>
            </span>
          </h1>

          <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center">
            <p className="max-w-[680px] text-xl leading-8 text-steel-300 lg:col-span-7">
              Turn factory data and operational reality into intelligence for the people who run the plant.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row lg:col-span-5 lg:justify-end">
              <button onClick={() => onNavigate('/#book-demo')} className="btn-primary">
                Book a Demo <ArrowUpRight className="h-4 w-4" />
              </button>
              <button onClick={() => onNavigate('/#ai-supervisor')} className="btn-secondary">
                See AI Supervisor <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-line bg-ink/40 backdrop-blur-[1px]">
        <div className="container-x grid md:grid-cols-3">
          {stats.map(([value, label], index) => (
            <div key={value} className={`py-7 md:px-8 ${index > 0 ? 'border-t border-line md:border-l md:border-t-0' : ''}`}>
              <div className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent">{value}</div>
              <div className="mt-3 text-base text-steel-300">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
