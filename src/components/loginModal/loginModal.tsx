'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { useAuthContext } from '@/context/AuthContext';
import BackgroundAnimation from '../BackgroundAnimation/backgroundAnimation';
import { passwordLoginAction } from '@/redux/actions/authActions';

interface ModalProps {
  closeModal: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { handleSignInWithEmail } = useAuthContext();
  const router = useRouter();
  const dispatch = useDispatch(); // Use useDispatch

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    try {
      dispatch(passwordLoginAction({ email, password }));

      closeModal();
      router.push('/dashboard');

    } catch (err) {
      console.error('Login failed', err);
      setError('Failed to log in. Please check your email and password.');
    }
  };

  return (
    <div className="fixed h-[100vh] bg-[#0B031E] inset-0 z-50 flex items-center ">
        
        <div className="  p-6 rounded-lg  w-1/2 max-w-md mx-auto">
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
          <h2 className="text-2xl mb-4">Log in</h2>
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
        </div>
      </div>
  );
};

export default LoginModal;
