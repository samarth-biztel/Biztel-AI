'use client';

import { ArrowRight } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ProductionProof } from '@/components/home/ProductionProof';
import { Reveal, Chapter } from '@/components/ui/Reveal';
import { useSiteNavigation } from '@/hooks/useSiteNavigation';

export default function AboutPage() {
  const navigate = useSiteNavigation();

  return (
    <div className="min-h-screen bg-navy-950">
      <Header onNavigate={navigate} currentPath="/about" />
      <main className="pt-[84px] text-white">
        <section className="relative overflow-hidden border-b border-line bg-ink py-20 lg:py-28">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="container-x relative grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Chapter n="01" label="About BiztelAI" />
              <h1 className="mt-10 max-w-3xl font-display text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
                The AI decision layer for manufacturing.
              </h1>
            </Reveal>
            <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
              <p className="text-xl leading-9 text-steel-300">
                BiztelAI builds AI-powered systems that help manufacturing teams understand what is happening on the shop floor, validate processes and make better operational decisions.
              </p>
              <div className="mt-10 grid border-y border-line sm:grid-cols-2">
                <div className="py-6 sm:border-r sm:pr-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">Current</div>
                  <div className="mt-2 text-sm text-steel-200">AI Supervisor - Process Monitoring + Visual Inspection</div>
                </div>
                <div className="border-t py-6 sm:border-t-0 sm:pl-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-steel-500">Future / In Development</div>
                  <div className="mt-2 text-sm text-steel-300">AI Teammates for manufacturing functions</div>
                </div>
              </div>
              <button onClick={() => navigate('/contact#book-demo')} className="btn-primary mt-10">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </button>
            </Reveal>
          </div>
        </section>
        <ProductionProof />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
