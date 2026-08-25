'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/home/Hero';
import { Marquee } from '@/components/home/Marquee';
import { ManufacturingProblem } from '@/components/home/ManufacturingProblem';
import { DecisionLayer } from '@/components/home/DecisionLayer';
import { AISupervisor } from '@/components/home/AISupervisor';
import { HowItWorks } from '@/components/home/HowItWorks';
import { DemoVideos } from '@/components/home/DemoVideos';
import { ProductionProof } from '@/components/home/ProductionProof';
import { FutureVision } from '@/components/home/FutureVision';
import { IndustriesFunctions } from '@/components/home/IndustriesFunctions';
import { WhyBiztelAI } from '@/components/home/WhyBiztelAI';
import { BookDemo } from '@/components/home/BookDemo';
import { useSiteNavigation } from '@/hooks/useSiteNavigation';

export default function HomePage() {
  const navigate = useSiteNavigation();
  return (
    <div className="min-h-screen bg-navy-950">
      <Header onNavigate={navigate} currentPath="/" />
      <main>
        <Hero onNavigate={navigate} />
        <Marquee />
        <ManufacturingProblem />
        <DecisionLayer />
        <AISupervisor />
        <HowItWorks />
        <DemoVideos />
        <ProductionProof />
        <FutureVision onNavigate={navigate} />
        <IndustriesFunctions />
        <WhyBiztelAI />
        <BookDemo />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
