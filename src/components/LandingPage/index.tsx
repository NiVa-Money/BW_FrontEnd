'use client';
// import PricingCard from '@/components/Pricing';
import Factors from '@/components/Factors';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Testimonials from '@/components/testemonial/Testimonials';
import Media from '@/components/Media/mediaLinks';
const LandingPage: React.FC = () => {
  return (
    <>
      {/* <Script src="https://messages-dump.s3.amazonaws.com/widget/66cf26cda51861b4b167422c/66ec1e16a0ffb67f4eb2cce3.js" /> */}

      <>
        <Hero />
        <section>
          <div>
            <Features />
          </div>
        </section>
        <section>
          <div>
            <Factors />
          </div>
        </section>
        <section>
          <div>
            <Testimonials />
          </div>
        </section>
        <section>
          <Media />
        </section>
        {/* <section>
          <PricingCard />
        </section> */}
      </>
    </>
  );
};

export default LandingPage;
