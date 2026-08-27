import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-line bg-ink pt-[92px]">
      <div className="absolute inset-0 hero-industrial-bg" />
      <img
        src="https://www.silberhorn-gruppe.de/fileadmin/_processed_/0/0/csm_Roboterzellen_1bc4539985.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.58]"
      />
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,15,24,.88)_0%,rgba(10,15,24,.58)_44%,rgba(10,15,24,.38)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,24,.38)_0%,rgba(10,15,24,.02)_45%,rgba(10,15,24,.62)_100%)]" />

      <div className="container-x relative flex min-h-[calc(100vh-92px)] flex-col justify-center pb-32 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="eyebrow mb-10">
            <span className="h-2 w-2 bg-accent" />
            Industrial AI Systems for Manufacturing
          </div>

          <h1 className="heading-1 max-w-[1220px] text-white">
            The AI Decision
            <span className="block">
              Layer for <span className="text-accent">Manufacturing</span>
            </span>
          </h1>

          <p className="mt-12 max-w-[760px] text-xl leading-8 text-steel-300">
            BiztelAI helps manufacturing teams turn process context, visual conditions and operational data into faster, better decisions.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <button onClick={() => onNavigate('/contact#book-demo')} className="btn-primary">
              Book a Demo <ArrowUpRight className="h-4 w-4" />
            </button>
            <button onClick={() => onNavigate('/products/ai-supervisor')} className="btn-secondary">
              Explore AI Supervisor <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
