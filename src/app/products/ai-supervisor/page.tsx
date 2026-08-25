'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ProductPage } from '@/components/product/ProductPage';
import { useSiteNavigation } from '@/hooks/useSiteNavigation';

export default function AISupervisorPage() {
  const navigate = useSiteNavigation();
  return (
    <div className="min-h-screen bg-navy-950">
      <Header onNavigate={navigate} currentPath="/products/ai-supervisor" />
      <main><ProductPage onNavigate={navigate} /></main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
