// 'use client';

import React, { useEffect, useState } from 'react';
import Modal from '../signupModal/page';
import BackgroundAnimation from '../BackgroundAnimation/backgroundAnimation';
import LoginModal from '../loginModal/loginModal';
import {
  verifyUserDataAction,
  loginRequest,
  googleLogin,
} from '@/redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import './hero.css';
import { useRouter } from 'next/navigation';
import { RootState } from '@/redux/configureStore';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const userData = useSelector((state: RootState) => state.root?.userData);
  const googleVerifyRedux = useSelector(
    (state: RootState) => state.root.googleLogin
  );
  const userRedux = useSelector((state: RootState) => state?.root?.user);
  const googleLoginUser = useSelector(
    (state: RootState) => state?.root?.googleLogin
  );

  const router = useRouter();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSignUp = (userData: any, router: any) => {
    // closeModal();
    // router.push('/dashboard');
  };

  const handleSignIn = () => {
    dispatch(loginRequest());
  };
  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen || isLoginModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isModalOpen, isLoginModalOpen]);

  useEffect(() => {
    if (googleVerifyRedux) {
      const email = userRedux?.email;
      dispatch(verifyUserDataAction(email));
    }
  }, [googleVerifyRedux]);

  const userIdLocal = localStorage.getItem('user_id');

  // useEffect(() => {
  //   if (googleVerifyRedux) {
  //     const [firstName, lastName] = userRedux?.displayName.split(' ');
  //     const email = userRedux?.email;
  //     const payload = {
  //       firstName: firstName,
  //       lastName: lastName ? lastName : '',
  //       emailId: email,
  //       mobileNo: '',
  //     };
  //     if (!userIdLocal?.length) {
  //       dispatch(googleLogin(payload));
  //     }
  //   }
  // }, [userIdLocal]);
  useEffect(() => {
    if (googleVerifyRedux) {
      const [firstName, lastName] = userRedux?.displayName.split(' ');
      const email = userRedux?.email;
      const payload = {
        firstName: firstName,
        lastName: lastName || '',
        emailId: email,
        mobileNo: '',
      };

      // Check if user is verified (you might have a state like 'isVerified' to handle this)
      if (!userIdLocal?.length) {
        // If the user is not in local storage, check if the user is already verified
        if (!googleLoginUser?.isVerified) {
          // User is not verified, so proceed with the signup
          dispatch(googleLogin(payload));
        }
      } else {
        // User exists, proceed to fetch user data (only if they aren't verified yet)
        dispatch(verifyUserDataAction(email));
      }
    }
  }, [googleVerifyRedux, userIdLocal, googleLoginUser]);

  return (
    <section>
      <BackgroundAnimation className="opacity-70">
        <div className="flex flex-col items-center px-5 pt-6">
          <div className="shrink-0 mt-6 max-w-full" />
          <h1 className="mt-4 text-6xl font-black text-center text-gray-100 max-md:text-4xl">
            Build the Easiest No-Code <br /> AI Chatbot here!
          </h1>
          <p className="mt-4 text-2xl text-center text-gray-100 w-[691px]">
            Click. Create. Chat.
          </p>
          <button
            onClick={handleSignIn}
            className="flex gap-4 justify-center px-6 py-4 mt-20 text-2xl text-white-200 bg-black rounded-[99px] max-md:px-6 max-md:mt-10 border-gradient hover:bg-[conic-gradient(from_180deg_at_50%_50%,#B52BBA_4.666563235223293deg,#A12CBC_23.647727966308594deg,#8C2EBE_44.85525995492935deg,#792FBF_72.45651304721832deg,#6C30C0_82.50000178813934deg,#4B32C3_127.99007892608643deg,#5831C2_160.968976020813deg,#6330C1_178.45529437065125deg,#742FC0_189.47770357131958deg,#8D2DBE_202.95226335525513deg,#A62CBC_230.65982580184937deg,#B92ABA_251.35178089141846deg,#D029B8_276.4414644241333deg,#EC27B6_306.45145654678345deg,#C729B9_331.67617321014404deg)]"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d93ba5668e07ac5641e3594021204163310d77646347ffedfc007d75ba09821?apiKey=555c811dd3f44fc79b6b2689129389e8&"
              alt="Google logo"
              className="shrink-0 self-start aspect-square w-[35px]"
            />
            <span className="text-[#EEEEF0]">Sign in with Google</span>
          </button>
          <button
            className="flex gap-4 justify-center px-6 py-4 mt-4 text-2xl  text-white rounded-[99px] max-md:px-5"
            onClick={handleButtonClick}
          >
            <span className=" text-[#EEEEF0]">Sign Up With Your Email</span>
          </button>

          {isModalOpen && (
            <Modal closeModal={closeModal} handleSignUp={handleSignUp} />
          )}

          <button
            className="flex gap-4 justify-center px-3 py-2 text-4xl text-white rounded-[99px] max-md:px-5"
            onClick={handleLoginButtonClick}
          >
            <span className="text-sm">
              Already have an account? <span className="underline">Log in</span>
            </span>
          </button>
          {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
        </div>
      </BackgroundAnimation>
    </section>
  );
};

export default Hero;
