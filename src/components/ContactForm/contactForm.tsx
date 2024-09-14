'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
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
      const response = await axios.post(
        'http://13.235.189.116:8000/user/contactus',
        {
          firstName: formData.name,
          lastName: formData.lastName,
          emailId: formData.email,
          question: formData.message,
        }
      );

      // Show success toast
      toast.success('Form submitted successfully!', {});

      // Clear form fields after submission
      setFormData({
        name: '',
        lastName: '',
        email: '',
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
        {/* <div
          className="shadow-xl rounded-2xl p-8 w-full md:w-1/3"
          style={{
            background: '#2B243C',
         
          }}
        >
          {/* <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded-[40px] text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gradient-to-br from-purple-900 to-purple-800 text-white border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gradient-to-br from-purple-900 to-purple-800 text-white border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gradient-to-br from-purple-900 to-purple-800 text-white border border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 rounded float-start"
              style={{
                backgroundImage:
                  'conic-gradient(#C729B9 -28.32deg, #B52BBA 4.67deg, #A12CBC 23.65deg, #8C2EBE 44.86deg, #792FBF 72.46deg, #6C30C0 82.5deg, #4B32C3 127.99deg, #5831C2 160.97deg, #6330C1 178.46deg, #742FC0 189.48deg, #8D2DBE 202.95deg, #A62CBC 230.66deg, #B92ABA 251.35deg, #D029B8 276.44deg, #EC27B6 306.45deg, #C729B9 331.68deg, #B52BBA 364.67deg)',
              }}
            >
              Submit
            </button>
          </form> */}
        {/* </div> */}
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
                  className="bg-black bg-opacity-30 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C00DC8]"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="bg-black bg-opacity-30 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#C00DC8]"
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-black bg-opacity-30 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#C00DC8]"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone no"
                className="w-full bg-black bg-opacity-30 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#C00DC8]"
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
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
