'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';

interface ModalProps {
  closeModal: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { handleSignInWithEmail } = useAuthContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSignInWithEmail(email, password);

      const response = await axios.post('http://13.235.189.116:8000/user/signup/verify', {
        emailId: email,
      });

      if (response.data.success) {
        const { token, user_id } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', user_id);
        localStorage.setItem('emailId', email);
        closeModal();
        router.push('/dashBoard');
      } else {
        setError('Verification failed. Please try again.');
      }
    } catch (err) {
      setError('Failed to log in. Please check your email and password.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-6 rounded-lg max-w-md mx-auto">
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
            &times;
          </button>
        </div>
        <h2 className="text-2xl mb-4">Log In</h2>
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
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
