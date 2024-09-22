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
import { usePathname, useRouter } from 'next/navigation';
import Media from '@/components/Media/mediaLinks';
import BackgroundAnimation from '@/components/BackgroundAnimation/backgroundAnimation';
import Script from 'next/script';
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
  const pathname = usePathname();

  useEffect(() => {
    if (GLoginData?.data?.success) {
      localStorage.setItem('user_id', GLoginData?.data?.user_id);
      localStorage.setItem('token', GLoginData?.data?.token);
      if (GLoginData?.data?.success) {
        router.push('/dashboard');
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
      router.replace('/dashboard');
    } else {
      if (googleVerifyRedux) {
        const [firstName, lastName] = userRedux?.displayName.split(' ');
        const email = userRedux?.email;
        const payload = {
          firstName: firstName,
          lastName: lastName,
          emailId: email,
          mobileNo: '',
          password: 'password',
        };
        dispatch(signUpDataAction(payload));
      }
    }
  }, [userVerify]);

  useEffect(() => {
    if (userData?.token) {
      router.replace('/dashboard');
    }
  }, [userData]);

  return (
    <>
      {pathname === '/home' && (
        <Script src="https://messages-dump.s3.amazonaws.com/widget/66cf26cda51861b4b167422c/66ec1e16a0ffb67f4eb2cce3.js" />
      )}
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
          <Media />
        </section>
        <section>
          <PricingCard />
        </section>
      </main>
    </>
  );
};

export default LandingPage;
