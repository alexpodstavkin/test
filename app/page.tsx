import Hero from './components/Hero'
import Gifts from './components/Gifts'
import Prices from './components/Prices'
import Program from './components/Program'
import Research from './components/Research'
import BeforeAfter from './components/BeforeAfter'
import Speaker from './components/Speaker'
import Trust from './components/Trust'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import FloatingCta from './components/FloatingCta'

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Gifts id="gifts-top" />
      <Prices />
      <Program />
      <Research />
      <BeforeAfter />
      <Speaker />
      <Gifts id="gifts" />
      <Trust />
      <FinalCta />
      <Footer />
      <FloatingCta />
    </main>
  )
}
