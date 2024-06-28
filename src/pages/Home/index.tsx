import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/Pricing';
import Factors from '@/components/Factors';
import Features from '@/components/Features';
import Hero from '@/components/Hero';


const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
            <Hero/>
            <Features/>
            <Factors/>
          <PricingCard/>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
