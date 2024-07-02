import PricingCard from '@/components/Pricing';
import Factors from '@/components/Factors';
import Features from '@/components/Features';
import Hero from '@/components/Hero';

const LandingPage: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        <section>
          <div>
            <Features/>
          </div>            
        </section>
        <section>
          <div>
            <Factors/>
          </div>
        </section>
        <section>
          <PricingCard/>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
