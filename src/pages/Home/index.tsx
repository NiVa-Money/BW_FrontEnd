'use client';
import PricingCard from '@/components/Pricing';
import Factors from '@/components/Factors';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/configureStore';
import { useEffect } from 'react';
import {
  verifyUserDataAction,
  signUpDataAction,
} from '@/redux/actions/authActions';
import Testimonials from '@/components/testemonial/Testimonials';
import { useRouter } from 'next/navigation';
const LandingPage: React.FC = () => {
  const userEmail = useSelector((state: RootState) => state.root?.user?.email);
  const userVerify = useSelector((state: RootState) => state.root?.userVerify);
  const userData = useSelector((state: RootState) => state.root?.userData);
  const resOtp = useSelector((state: RootState) => state.root?.otp);
  const userRedux = useSelector((state: RootState) => state?.root?.user);
  const GLoginData = useSelector((state: RootState) => state?.root?.GLoginData);
  const googleVerifyRedux = useSelector(
    (state: RootState) => state.root.googleLogin
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (GLoginData?.data?.success) {
      localStorage.setItem('user_id', GLoginData?.data?.user_id);
      localStorage.setItem('token', GLoginData?.data?.token);
      if (GLoginData?.data?.success) {
        router.push('/dashBoard');
      }
    }
  }, [GLoginData]);

  useEffect(() => {
    if (userEmail?.length && !googleVerifyRedux) {
      dispatch(verifyUserDataAction(userEmail));
    }
  }, [userEmail]);

  useEffect(() => {
    if (userEmail?.length && !googleVerifyRedux) {
      dispatch(verifyUserDataAction(userEmail));
    }
    if (resOtp?.data?.success || userData?.token) {
      router.replace('/dashBoard');
    } else {
      if (googleVerifyRedux) {
        const [firstName, lastName] = userRedux?.displayName.split(' ');
        const email = userRedux?.email;
        const payload = {
          firstName: firstName,
          lastName: lastName,
          emailId: email,
          mobileNo: '7779797977',
          password: 'password',
        };
        dispatch(signUpDataAction(payload));
      }
    }
  }, [userVerify]);

  useEffect(() => {
    if (userData?.token) {
      router.replace('/dashBoard');
    }
  }, [userData]);

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
            <Factors />
          </div>
        </section>
        <section>
          <div>
            <Testimonials />
          </div>
        </section>
        <section>
          <PricingCard />
        </section>
      </main>
    </>
  );
};

export default LandingPage;
