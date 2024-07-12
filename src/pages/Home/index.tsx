import PricingCard from '@/components/Pricing';
import Factors from '@/components/Factors';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/configureStore';
import { useEffect } from 'react';
import { fetchUserData } from '@/redux/services';
import { fetchUserDataAction } from '@/redux/actions/authActions';
=======
import Testimonials from '@/components/testemonial/Testimonials';
>>>>>>> origin/predev

const LandingPage: React.FC = () => {
  const userEmail = useSelector((state: RootState) => state.root?.user?.email);
  const userVerify = useSelector((state: RootState) => state.root?.userVerify);
  console.log(userEmail);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userEmail?.length) {
      dispatch(fetchUserDataAction(userEmail));
    }
  }, [userEmail]);
  useEffect(() => {
    if (userEmail?.length) {
      dispatch(fetchUserDataAction(userEmail));
    }
  }, [userVerify]);

  return (
    <>
      <main>
        <Hero />
        <section>
          <div>
            <Features />
          </div>
        </section>
        <section>
          <div>
<<<<<<< HEAD
            <Factors />
          </div>
        </section>
        <section>
          <PricingCard />
=======
          <Testimonials />
          </div>
        </section>
        <section>
          <PricingCard/>
>>>>>>> origin/predev
        </section>
      </main>
    </>
  );
};

export default LandingPage;
