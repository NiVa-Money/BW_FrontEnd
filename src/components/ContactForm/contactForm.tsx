'use client';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axiosInstance from '@/utils/axiosConfig';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/user/contactus', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailId: formData.email,
        phoneNumber: formData.phone,
        question: formData.message,
      });

      // Show success toast
      toast.success('Form submitted successfully!', {});

      // Clear form fields after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      // Show error toast
      toast.error('Error submitting form. Please try again later.', {});
    }
  };

  return (
    <>
      <ToastContainer />
      <h1 className="mt-4 text-6xl font-black text-center text-gray-100 max-md:text-4xl mb-12">
        Contact Us
      </h1>
      <div className="flex justify-start pl-48">
        <div className="bg-[#2B243C] text-white w-full md:w-1/3 rounded-2xl flex items-center justify-center">
          <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl text-white font-bold mb-2 text-center">
              Get in Touch
            </h2>
            <p className="text-center text-white text-xl mb-8">
              You can reach us anytime
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName} // Bind value to formData
                  className="bg-black bg-opacity-30 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C00DC8]"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName} // Bind value to formData
                  className="bg-black bg-opacity-30 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C00DC8]"
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email} // Bind value to formData
                className="w-full bg-black bg-opacity-30 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#C00DC8]"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone no"
                value={formData.phone} // Bind value to formData
                className="w-full bg-black bg-opacity-30 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#C00DC8]"
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message} // Bind value to formData
                rows={4}
                className="w-full bg-black bg-opacity-30 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#C00DC8]"
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#3F2181] text-xl font-medium text-gray-100 py-2 px-4 rounded-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <p className="mt-4 text-2xl text-center text-gray-100 w-[691px] pl-12 pt-24">
          Have a question? Please let us know how we can help.
          <br />
          If you are looking for information about our products, please contact
          our{' '}
          <a href="https://botwot.io/" className="text-purple-400 underline">
            sales team
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default ContactForm;