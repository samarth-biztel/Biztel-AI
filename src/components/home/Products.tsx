import Image from 'next/image';
import Link from 'next/link';
import { Reveal, Chapter } from '@/components/ui/Reveal';

export function Products() {
  return (
    <section id="products" aria-labelledby="products-heading" className="border-b border-line bg-surface text-ink">
      <div className="container-x py-24 lg:py-28">
        <Reveal>
          <Chapter n="01" label="Products" />
          <h2 id="products-heading" className="mt-8 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Explore our products
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-8 lg:gap-12">
          <Reveal className="min-w-0">
            <Link href="/products/ai-supervisor" aria-label="Explore AI Supervisor" className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent">
              <div className="relative aspect-video overflow-hidden border border-line bg-muted">
                <Image
                  src="/videos/tightening_poster.jpg"
                  alt="AI Supervisor demo UI showing bolt tracking and the SOP compliance dashboard during tightening."
                  fill
                  sizes="(min-width: 1280px) 600px, (min-width: 768px) 46vw, 92vw"
                  className="object-contain"
                />
              </div>
              <span className="tag tag-current mt-7">Current / Live Product</span>
              <h3 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">AI Supervisor</h3>
              <p className="mt-4 text-lg leading-8 text-steel-300">Real-time intelligence for production execution.</p>
            </Link>
          </Reveal>

          <Reveal className="min-w-0" delay={0.1}>
            <Link href="/ai-teammates" aria-label="Explore AI Teammates" className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent">
              <div className="relative aspect-video overflow-hidden border border-line bg-muted">
                <Image
                  src="/ai-teammates-concept.png"
                  alt="AI Teammates concept: a manufacturing engineer and a virtual AI colleague reviewing a machined component and engineering drawings."
                  fill
                  sizes="(min-width: 1280px) 600px, (min-width: 768px) 46vw, 92vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-surface/95 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink">Product concept</span>
              </div>
              <span className="tag tag-future mt-7">In Development</span>
              <h3 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">AI Teammates</h3>
              <p className="mt-4 text-lg leading-8 text-steel-300">AI-powered assistance for manufacturing engineering.</p>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
