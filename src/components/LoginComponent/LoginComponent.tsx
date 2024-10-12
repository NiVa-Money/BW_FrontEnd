'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch
import { googleLogin, loginRequest, passwordLoginAction, verifyUserDataAction } from '@/redux/actions/authActions';
import { RootState } from '@/redux/configureStore';

interface ModalProps {
  closeModal: () => void;
}

const LoginComponent: React.FC<ModalProps> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
    const userData = useSelector((state: RootState) => state.root?.userData);
  const googleVerifyRedux = useSelector(
    (state: RootState) => state.root.googleLogin
  );
  const userRedux = useSelector((state: RootState) => state?.root?.user);
  const googleLoginUser = useSelector(
    (state: RootState) => state?.root?.googleLogin
  );

  const dispatch = useDispatch(); // Use useDispatch

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    try {
      dispatch(passwordLoginAction({ email, password }));

      closeModal();
      router.push('/dashboard');
    } catch (err) {
      setError('Failed to log in. Please check your email and password.');
    }
  };
  const handleSignIn = () => {
    dispatch(loginRequest());
  };
    useEffect(() => {
    if (googleVerifyRedux) {
      const email = userRedux?.email;
      dispatch(verifyUserDataAction(email));
    }
  }, [googleVerifyRedux]);
    useEffect(() => {
    if (googleVerifyRedux) {
      const [firstName, lastName] = userRedux?.displayName.split(' ');
      const email = userRedux?.email;
      const payload = {
        firstName: firstName,
        lastName: lastName ? lastName : '',
        emailId: email,
        mobileNo: '',
      };
      if (!userData?.success) {
        dispatch(googleLogin(payload));
      }
    }
  }, [userRedux, googleLoginUser]);

  return (
    <div className="flex-col flex items-center ">
      
        <h2 className="text-2xl mb-4 text-white">Log in</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <label className="block mb-2">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded text-black"
              required
            />
          </label>
          <label className="block mb-2">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded text-black"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full text-white p-2 rounded mt-8"
            style={{
              background:
                'conic-gradient(from 180deg at 50% 50%, #C729B9 -28.32deg, #B52BBA 4.67deg, #A12CBC 23.65deg, #8C2EBE 44.86deg, #792FBF 72.46deg, #6C30C0 82.5deg, #4B32C3 127.99deg, #5831C2 160.97deg, #6330C1 178.46deg, #742FC0 189.48deg, #8D2DBE 202.95deg, #A62CBC 230.66deg, #B92ABA 251.35deg, #D029B8 276.44deg, #EC27B6 306.45deg, #C729B9 331.68deg, #B52BBA 364.67deg)',
            }}
          >
            Log in
          </button>
        </form>
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
     
    </div>
  );
};

export default LoginComponent;
