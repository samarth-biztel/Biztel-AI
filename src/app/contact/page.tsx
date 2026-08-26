'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { BookDemo } from '@/components/home/BookDemo';
import { useSiteNavigation } from '@/hooks/useSiteNavigation';

export default function ContactPage() {
  const navigate = useSiteNavigation();

  return (
    <div className="min-h-screen bg-navy-950">
      <Header onNavigate={navigate} currentPath="/contact" />
      <main className="pt-[84px]">
        <BookDemo />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
