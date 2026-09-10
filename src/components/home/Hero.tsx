import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface pt-[84px]">
      <div className="absolute inset-0 hero-industrial-bg" />
      <div className="absolute inset-0 grid-bg opacity-70" />

      <div className="container-x relative flex min-h-[calc(74vh-84px)] flex-col justify-center py-20 lg:min-h-[calc(80vh-84px)] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h1 className="heading-1 max-w-[1040px] text-ink">
            AI-Powered Manufacturing Intelligence
          </h1>

          <p className="mt-9 max-w-[700px] text-lg leading-8 text-steel-300 md:text-xl">
            BiztelAI turns process, visual and operational context into actionable intelligence for the people running the factory.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
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
