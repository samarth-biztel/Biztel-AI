import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, MessagesSquare, Sparkles } from 'lucide-react';
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
              <span className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-accent group-hover:underline">
                Explore <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>

          <Reveal className="min-w-0" delay={0.1}>
            <Link href="/ai-teammates" aria-label="Explore AI Teammates" className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent">
              <div role="img" aria-label="AI Teammates concept illustration: manufacturing documents and conversations connected with AI assistance." className="relative flex aspect-video items-center justify-center overflow-hidden border border-line bg-muted">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div aria-hidden="true" className="relative flex items-center justify-center px-6 text-accent">
                  <FileText className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" strokeWidth={1.2} />
                  <span className="mx-3 h-px w-6 bg-accent/40 sm:mx-5 sm:w-10" />
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-surface sm:h-28 sm:w-28">
                    <Sparkles className="h-9 w-9 sm:h-12 sm:w-12" strokeWidth={1.2} />
                  </div>
                  <span className="mx-3 h-px w-6 bg-accent/40 sm:mx-5 sm:w-10" />
                  <MessagesSquare className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" strokeWidth={1.2} />
                </div>
                <span className="absolute bottom-4 font-mono text-[10px] uppercase tracking-[0.2em] text-steel-500">Product concept</span>
              </div>
              <span className="tag tag-future mt-7">In Development</span>
              <h3 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">AI Teammates</h3>
              <p className="mt-4 text-lg leading-8 text-steel-300">AI-powered assistance for manufacturing engineering.</p>
              <span className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-accent group-hover:underline">
                Explore <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
