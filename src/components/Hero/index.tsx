import React, { useState } from 'react';
import Modal from '../signupModal/page';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { SIGN_IN_REQUEST } from '@/redux/actions/actionTypes';
const provider = new GoogleAuthProvider();
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();
  const handleSignIn = (): any => {
    dispatch({ type: SIGN_IN_REQUEST });
  };

  return (
    <section>
      <div className="flex flex-col items-center px-5 pt-6">
        <div className="shrink-0 mt-6 max-w-full" />
        <h1 className="mt-4 text-6xl font-black text-center text-gray-100  max-md:text-4xl">
          Create Your Own No-Code <br /> AI Chatbot with Ease!
        </h1>
        <p className="mt-4 text-2xl text-center text-gray-100 w-[691px] ">
          Effortlessly build your AI chatbot with our no-code platform. Ideal
          for beginners and experts alike, start now to enhance your customer
          interactions!
        </p>
        <button
          onClick={handleSignIn}
          className="flex gap-4 justify-center px-6 py-4 mt-20 text-2xl text-pink-200 bg-gray-800 rounded-[99px] max-md:px-5 max-md:mt-10"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d93ba5668e07ac5641e3594021204163310d77646347ffedfc007d75ba09821?apiKey=555c811dd3f44fc79b6b2689129389e8&"
            alt="Google logo"
            className="shrink-0 self-start aspect-square w-[35px]"
          />
          <span>Sign in with Google</span>
        </button>
        <button
          className="flex gap-4 justify-center px-6 py-4 mt-20 text-2xl text-pink-200 bg-gray-800 rounded-[99px] max-md:px-5 max-md:mt-10"
          onClick={handleButtonClick}
        >
          <span>Sign in With Your Email</span>
        </button>
        {isModalOpen && <Modal closeModal={closeModal} />}
      </div>
    </section>
  );
};

export default Hero;
