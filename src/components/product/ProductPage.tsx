import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Capabilities } from '@/components/home/Capabilities';
import { HowItWorks } from '@/components/home/HowItWorks';
import { DemoVideos } from '@/components/home/DemoVideos';
import { ProductionProof } from '@/components/home/ProductionProof';
import { BookDemo } from '@/components/home/BookDemo';
import { Reveal, Chapter } from '@/components/ui/Reveal';

interface ProductPageProps {
  onNavigate: (path: string) => void;
}

export function ProductPage({ onNavigate }: ProductPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[84px]">
      <section id="what-is-ai-supervisor" className="relative overflow-hidden bg-surface py-20 text-ink lg:py-28">
        <div className="absolute inset-0 opacity-35 grid-bg" />
        <div className="container-x relative">
          <div className="content-x">
            <Reveal className="max-w-3xl">
              <button onClick={() => onNavigate('/')} className="mb-8 flex items-center gap-2 text-sm text-steel-500 hover:text-ink">
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </button>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="tag tag-current">Available today</span>
                <span className="text-xs font-semibold uppercase tracking-[0.13em] text-steel-500">Station Intelligence</span>
              </div>
              <h1 className="heading-1">AI Supervisor</h1>
              <p className="mt-7 max-w-2xl text-2xl font-semibold leading-9 text-ink">
                Real-time intelligence for production execution.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-steel-300">
                AI Supervisor uses videos / images, process logic and station context to monitor production workflows, validate execution and trigger action when required.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button onClick={() => onNavigate('/products/ai-supervisor#book-demo')} className="btn-primary">
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => onNavigate('/products/ai-supervisor#demo-videos')} className="btn-secondary">
                  See Demo Videos
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-muted text-ink">
        <div className="container-x">
          <div className="content-x grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Chapter n="01" label="AI Supervisor" />
              <h2 className="mt-8 heading-2">AI supervision for live manufacturing workflows.</h2>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.07}>
              <p className="border-y border-line py-8 text-lg leading-9 text-steel-300 md:text-xl">
                AI Supervisor combines camera feeds, station context and defined process logic to understand how work is performed, validate execution and determine when action is required.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Capabilities />
      <HowItWorks chapterNumber="02" />

      <DemoVideos chapterNumber="03" />
      <ProductionProof detailed chapterNumber="04" />
      <BookDemo chapterNumber="05" />
    </div>
  );
}
