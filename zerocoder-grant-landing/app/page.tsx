import { Header } from "@/components/Header";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { RevealRoot } from "@/components/RevealRoot";
import { Hero } from "@/components/sections/Hero";
import { WhyNow } from "@/components/sections/WhyNow";
import { Advantages } from "@/components/sections/Advantages";
import { CtaForm } from "@/components/sections/CtaForm";
import { Program } from "@/components/sections/Program";
import { Practice } from "@/components/sections/Practice";
import { Format } from "@/components/sections/Format";
import { Activities } from "@/components/sections/Activities";
import { Results } from "@/components/sections/Results";
import { DemoOffer } from "@/components/sections/DemoOffer";
import { SocialProof } from "@/components/sections/SocialProof";
import { Glossary } from "@/components/sections/Glossary";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyNow />
        <Advantages />

        <CtaForm
          id="cta-1"
          title="Оставьте заявку и мы зафиксируем грант за вами"
          highlight="мы зафиксируем грант за вами"
        />

        <Program />
        <Practice />
        <Format />
        <Activities />

        <CtaForm
          id="cta-2"
          title="Оставьте заявку и мы зафиксируем грант за вами"
          highlight="мы зафиксируем грант за вами"
        />

        <Results />
        <DemoOffer />
        <SocialProof />
        <Glossary />

        <CtaForm
          id="cta-3"
          title="Оставьте заявку и мы зафиксируем грант за вами"
          highlight="мы зафиксируем грант за вами"
        />

        <Footer />
      </main>
      <StickyMobileCTA />
      <RevealRoot />
    </>
  );
}
