'use client';

import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useSiteNavigation } from '@/hooks/useSiteNavigation';

export function LegalPage({ title, path, children }: { title: string; path: string; children: ReactNode }) {
  const navigate = useSiteNavigation();

  return (
    <div className="min-h-screen bg-surface">
      <Header onNavigate={navigate} currentPath={path} />
      <main className="pt-[84px] text-ink">
        <article className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-24">
          <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 text-sm font-semibold text-steel-500">Last Updated: September 2026</p>
          <div className="mt-10 space-y-6 text-base leading-8 text-steel-300 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:text-ink [&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </article>
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
