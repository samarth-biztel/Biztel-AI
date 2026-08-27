'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/home/Hero';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { AISupervisor } from '@/components/home/AISupervisor';
import { FutureVision } from '@/components/home/FutureVision';
import { BookDemo } from '@/components/home/BookDemo';
import { useSiteNavigation } from '@/hooks/useSiteNavigation';

export default function HomePage() {
  const navigate = useSiteNavigation();
  return (
    <div className="min-h-screen bg-navy-950">
      <Header onNavigate={navigate} currentPath="/" />
      <main>
        <Hero onNavigate={navigate} />
        <WhatWeDo />
        <AISupervisor onNavigate={navigate} />
        <FutureVision onNavigate={navigate} />
        <BookDemo compact onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
