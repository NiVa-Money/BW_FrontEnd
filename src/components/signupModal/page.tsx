'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    mobileNo: ''
  });

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
    try {
      const response = await axios.post('http://13.235.189.116:8000/user/signup', formData);
  
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
        console.error('Signup failed:', response.data.message);
      }
    } catch (error) {
      console.error('Signup error:', error);
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
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </label>
          <label className="block mb-2">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </label>
          <label className="block mb-2">
            Mobile No:
            <input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </label>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
