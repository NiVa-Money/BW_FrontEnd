import PricingCard from '@/components/Pricing';
import Factors from '@/components/Factors';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Testimonials from '@/components/testemonial/Testimonials';

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
          <div>
          <Testimonials />
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
