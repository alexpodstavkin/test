import { Hero } from '@/components/Hero';
import { GiftsTeaser } from '@/components/GiftsTeaser';
import { AudienceFit } from '@/components/AudienceFit';
import { Program } from '@/components/Program';
import { GiftsFull } from '@/components/GiftsFull';
import { BeforeAfter } from '@/components/BeforeAfter';
import { Speaker } from '@/components/Speaker';
import { AboutZerocoder } from '@/components/AboutZerocoder';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { FloatingCta } from '@/components/FloatingCta';
import { RevealMount } from '@/components/RevealMount';

export default function Page() {
  return (
    <main id="main">
      <RevealMount />
      <Hero />
      <GiftsTeaser />
      <AudienceFit />
      <Program />
      <GiftsFull />
      <BeforeAfter />
      <Speaker />
      <AboutZerocoder />
      <FinalCta />
      <Footer />
      <FloatingCta />
    </main>
  );
}
