'use client';
import React, { useState } from 'react';

interface FormData {
  reason: string;
  email: string;
  otp: string;
  phoneNumber: string;
}

const AccountDeletionForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    reason: '',
    email: '',
    otp: '',
    phoneNumber: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
              placeholder="please enter email"
            />
          </>
        );
      case 2:
        return (
          <>
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-200 mt-4 mb-1"
            >
              OTP
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
              placeholder="Enter OTP"
            />
          </>
        );
      case 3:
        return (
          <>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
              placeholder="johndoe@email.com"
            />
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Reason
            </label>
            <input
              type="text"
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
              placeholder="johndoe@email.com"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">
          Account Deletion Form
        </h2>
        <p className="text-gray-300 mb-6">
          Please fill out this form with the required information
        </p>
        <div className="flex justify-between mb-6">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                num === step ? 'bg-purple-500' : 'bg-gray-700'
              }`}
            >
              {num}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          {renderStep()}
          <div className="mt-6">
            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors"
              >
                Done
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDeletionForm;
