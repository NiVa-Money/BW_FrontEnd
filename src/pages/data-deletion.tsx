'use client';
import Toast, { notifySuccess } from '@/components/Toaster/toast';
import axiosInstance from '@/utils/axiosConfig';
import axios from 'axios';
import React, { useState } from 'react';

interface FormData {
  reason: string;
  customReason: string;
  email: string;
  otp: string;
  phoneNumber: string;
  userId:string
}

const DataDeletionPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    reason: '',
    customReason: '',
    email: '',
    otp: '',
    phoneNumber: '',
    userId:''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const reasonsData = [
    'Privacy Concerns',
    'No Longer Needed',
    'Difficult to Use',
    'Technical Issues',
    'Service Quality',
    'Better Alternatives',
    'Cost',
    'Account Security',
    'Personal Reasons',
    'Not Valuable',
    'Inactivity',
    'User Experience',
    'Other', // Adding "Other" option
  ];

  const verifyEmail = async () => {
    try {
      const response = await axiosInstance.post('/user/data-deletion/emailVerify', {
        emailId: formData.email,
      });
      notifySuccess('OTP sent on registered email');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axiosInstance.post('/user/data-deletion/otpVerify', {
        emailId: formData.email,
        otp: formData.otp,
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const deleteUser = async () => {
    try {
      const response = await axiosInstance.post(`/user/deleteUser/${formData.userId}`, {
        reason: formData.reason,
        otp: formData.reason==='Other'?formData.customReason:formData.reason,
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNext = () => {
    switch (step) {
      case 1:
        verifyEmail();
        break;
      case 2:
        verifyOTP();
        break;
      case 3:
        console.log('step', step);
        break;
      default:
        break;
    }
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
              placeholder="Please enter email"
            />
          </>
        );
      case 2:
        return (
          <>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-200 mt-4 mb-1">
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
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-200 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
              placeholder="Enter phone number"
            />
            <label htmlFor="reason" className="block text-sm font-medium text-gray-200 mb-1">
              Reason
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
            >
              <option value="">Select a reason</option>
              {reasonsData.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* Conditional rendering of input box if "Other" is selected */}
            {formData.reason === 'Other' && (
              <>
                <label
                  htmlFor="customReason"
                  className="block text-sm font-medium text-gray-200 mt-4 mb-1"
                >
                  Please specify your reason
                </label>
                <input
                  type="text"
                  id="customReason"
                  name="customReason"
                  value={formData.customReason}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded-md"
                  placeholder="Enter your reason"
                />
              </>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Account Deletion Form</h2>
        <p className="text-gray-300 mb-6">Please fill out this form with the required information</p>
        <div className="flex justify-between mb-6">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                num === step ? 'bg-purple-500' : 'bg-gray-700'
              }`}
              onClick={() => num <= step && setStep(num)}
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

export default DataDeletionPage;
