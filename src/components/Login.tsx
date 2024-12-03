import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { loginRequest, passwordLoginAction } from '@/redux/actions/authActions';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(loginRequest());
  };

  const handleRegisterClick = () => {
    router.push('/signup');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(''); // Reset previous error

    // Simple client-side validation (you can improve it later)
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      // Dispatch the login action with email and password
      dispatch(passwordLoginAction({ email, password }));

      // If login is successful, redirect to the dashboard
      router.push('/dashboard');
    } catch (err) {
      setError('Failed to log in. Please check your email and password.');
    }
  };

  return (
    <>
      <Head>
        <title>BotWot ICX - Login</title>
      </Head>
      <div className="overflow-hidden py-4 pr-4 pl-20 bg-white rounded-none max-md:pl-5">
        <div className="flex gap-5 max-md:flex-col">
          {/* Left Section */}
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center self-stretch my-auto h-[758px] max-md:mt-10 max-md:max-w-full">
              {/* Header */}
              <div className="flex relative flex-col justify-center self-stretch w-full max-md:max-w-full">
                <div className="flex z-0 flex-col justify-center items-start w-full text-3xl font-semibold text-neutral-700 max-md:max-w-full">
                  <div className="flex gap-4 justify-center items-center">
                    <Image
                      loading="lazy"
                      src="/icons/Botwot.png"
                      width={50}
                      height={50}
                      alt="BotWot Logo"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
                    />
                    <div className="self-stretch my-auto">BotWot ICX</div>
                  </div>
                </div>

                {/* Welcome Text */}
                <div className="z-0 mt-6 text-5xl font-bold text-neutral-800">
                  Welcome to
                  <br />
                  Future of ICX
                </div>

                {/* Placeholder Background */}
                <div className="flex z-0 mt-6 w-full rounded-xl bg-neutral-800 min-h-[63px] shadow-[0px_4px_15px_rgba(0,0,0,0.11)] max-md:max-w-full" />

                {/* Google Login */}
                <div className="flex absolute left-2/4 z-0 gap-7 max-w-full text-base leading-none text-white rounded-full -translate-x-2/4 bottom-[19px] h-[26px] translate-y-[0%] w-[198px]">
                  <Image
                    src="icons/google-icon.svg"
                    alt="Google Login"
                    width={28}
                    height={28}
                    className="object-contain shrink-0 w-7 rounded-full aspect-[1.12]"
                  />
                  <button
                    onClick={handleSignIn}
                    className="grow shrink my-auto w-[137px]"
                  >
                    Login with Google
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-10 mb-0 text-base font-medium text-black">
                - OR -
              </div>

              {/* Login Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center max-w-full w-[600px]"
              >
                <div className="flex relative flex-col w-full text-base leading-snug text-black max-md:max-w-full">
                  {/* Input Fields */}
                  <div className="flex flex-col justify-center text-black self-center max-w-full w-[600px]">
                    {[
                      {
                        placeholder: 'Enter your email',
                        imgSrc: '/icons/email-icon.svg',
                        value: email,
                        onChange: setEmail,
                      },
                      {
                        placeholder: 'Enter your password',
                        imgSrc: '/icons/pass-icon.svg',
                        value: password,
                        onChange: setPassword,
                        type: 'password',
                      },
                    ].map((field, index) => (
                      <div
                        key={index}
                        className="flex gap-2.5 items-center px-8 py-4 mt-7 w-full bg-neutral-100 text-black rounded-[128px] max-md:px-5 max-md:max-w-full"
                      >
                        <Image
                          loading="lazy"
                          src={field.imgSrc}
                          alt="Input Icon"
                          width={20}
                          height={20}
                          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.04]"
                        />
                        <input
                          type={field.type || 'text'}
                          placeholder={field.placeholder}
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full bg-transparent outline-none"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="text-red-500 text-sm mt-2">{error}</div>
                  )}

                  {/* Login Button */}
                  <div className="flex flex-col items-center self-center mt-16 w-full max-w-[600px] min-h-[323px] max-md:mt-10 max-md:max-w-full">
                    <button
                      type="submit"
                      className="gap-2.5 self-stretch px-2.5 py-4 w-full text-xl text-white rounded-full bg-neutral-800 min-h-[63px]"
                    >
                      Log in
                    </button>
                    <div className="gap-1 mt-8 text-base text-neutral-400">
                      <span className="leading-6 text-black">
                        Don't have an account?{' '}
                      </span>
                      <button
                        onClick={handleRegisterClick}
                        className="leading-6 text-cyan-700"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="/icons/SignUp.svg"
              width={500}
              height={500}
              alt="Main Banner"
              className="object-contain grow w-full rounded-none aspect-[0.78] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
