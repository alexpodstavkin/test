import { Hero } from '@/components/Hero';
import { Gifts } from '@/components/Gifts';
import { WhyParent } from '@/components/WhyParent';
import { Research } from '@/components/Research';
import { WhatWeCover } from '@/components/WhatWeCover';
import { Program } from '@/components/Program';
import { Speaker } from '@/components/Speaker';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { StickyMobileCta } from '@/components/StickyMobileCta';
import { FloatingCta } from '@/components/FloatingCta';

export default function Page() {
  return (
    <main>
      <Hero />
      <Gifts variant="teaser" />
      <WhyParent />
      <Research />
      <WhatWeCover />
      <Program />
      <Speaker />
      <Gifts variant="full" />
      <FinalCta />
      <Footer />
      <div className="mobile-cta-spacer" />
      <StickyMobileCta />
      <FloatingCta />
    </main>
  );
}
