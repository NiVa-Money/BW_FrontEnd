'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';
import { BackgroundAnimation } from '../BackgroundAnimation/backgroundAnimation';

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    mobileNo: '',
    password: ''
  });

  const [error, setError] = useState('');
  const { signUpWithEmail } = useAuthContext();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    try {

      const user = await signUpWithEmail(formData.emailId, formData.password);

      if (user) {
        const response = await axios.post('http://13.235.189.116:8000/user/signup', {
          firstName: formData.firstName,
          lastName: formData.lastName,
          emailId: formData.emailId,
          mobileNo: formData.mobileNo
        });

        if (response.data.success) {
          const { token, user_id, emailId } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('userId', user_id);

          if (formData.emailId) {
            localStorage.setItem('emailId', formData.emailId);
          } else {
            localStorage.setItem('emailId', emailId);
          }

          closeModal();
          router.push('/dashBoard');
        } else {
          console.error('Signup verification failed:', response.data.message);
          setError(response.data.message);
        }
      } else {
        setError('Signup failed, Account Already Exist.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('An error occurred during signup. Please try again.');
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
        <BackgroundAnimation />
        <div className=" p-6 rounded-lg max-w-lg mx-auto relative">

          <div className="flex justify-end">
            <button onClick={closeModal} className="text-black-500 hover:text-black-800">
              &times;
            </button>
          </div>
          <h2 className="text-2xl mb-4">Sign Up</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="flex mb-2">
              <div className="w-1/2 pr-1">
                <label className="block text-white">
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-xl text-white bg-black"
                    placeholder='First Name'
                    required
                  />
                </label>
              </div>

              <div className="w-1/2 pl-1">
                <label className="block text-white">
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-xl text-white bg-black"
                    placeholder='Last Name'
                    required
                  />
                </label>
              </div>
            </div>
            <label className="block mb-2 text-white">
              Email:
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                className="w-full p-2 border rounded-xl text-white bg-black"
                placeholder='Email'
                required
              />
            </label>
            <label className="block mb-2 text-white">
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-xl text-white bg-black"
                placeholder='Password'
                required
              />
            </label>
            <label className="block mb-2 text-white">
              Mobile No:
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="w-full p-2 border rounded-xl text-white bg-black"
                placeholder='Mobile No'
                required
              />
            </label>
            
            <button
              type="submit"
              className="w-full text-white p-2 rounded mt-8"
              style={{
                background: 'conic-gradient(from 180deg at 50% 50%, #C729B9 -28.32deg, #B52BBA 4.67deg, #A12CBC 23.65deg, #8C2EBE 44.86deg, #792FBF 72.46deg, #6C30C0 82.5deg, #4B32C3 127.99deg, #5831C2 160.97deg, #6330C1 178.46deg, #742FC0 189.48deg, #8D2DBE 202.95deg, #A62CBC 230.66deg, #B92ABA 251.35deg, #D029B8 276.44deg, #EC27B6 306.45deg, #C729B9 331.68deg, #B52BBA 364.67deg)'
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

    </>
  );
};

export default Modal;
