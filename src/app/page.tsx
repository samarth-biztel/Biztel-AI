'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/home/Hero';
import { Products } from '@/components/home/Products';
import { useSiteNavigation } from '@/hooks/useSiteNavigation';

export default function HomePage() {
  const navigate = useSiteNavigation();
  return (
    <div className="min-h-screen bg-surface">
      <Header onNavigate={navigate} currentPath="/" />
      <main>
        <Hero onNavigate={navigate} />
        <Products />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
