import Hero from './components/Hero'
import InfoStrip from './components/InfoStrip'
import WhyNow from './components/WhyNow'
import WhatLearn from './components/WhatLearn'
import HowItGoes from './components/HowItGoes'
import Gifts from './components/Gifts'
import CtaBanner from './components/CtaBanner'
import Advantages from './components/Advantages'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function Page() {
  return (
    <main>
      <Hero />
      <InfoStrip />
      <WhyNow />
      <WhatLearn />
      <HowItGoes />
      <Advantages />
      <CtaBanner />
      <Gifts />
      <FinalCta />
      <Footer />
    </main>
  )
}
