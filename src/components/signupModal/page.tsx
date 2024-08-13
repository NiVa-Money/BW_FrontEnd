'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';
import  BackgroundAnimation  from '../BackgroundAnimation/backgroundAnimation';
import { fetchUserData } from '@/redux/services';
import { signUpDataAction, resetUserDataAction } from '@/redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/configureStore';
import SignUpModalOtp from '../signupModal/signUpOtpModal';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface ModalProps {
  closeModal: () => void;
  handleSignUp: (userData: any, router: any) => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal, handleSignUp }) => {
  const userSuccess = useSelector((state: RootState) => state?.root?.userVerify);
  const [viewOtp, setViewOtp] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    mobileNo: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    mobileNo: '',
    password: '',
  });
  const { signUpWithEmail } = useAuthContext();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (userSuccess === true) {
      setViewOtp(userSuccess);
    }
  }, [userSuccess]);

  const validateForm = () => {
    const { firstName, lastName, emailId, mobileNo, password } = formData;
    const namePattern = /^[A-Za-z]{2,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const mobilePattern = /^\d{10}$/;
    const newErrors = {
      firstName: '',
      lastName: '',
      emailId: '',
      mobileNo: '',
      password: '',
    };
  
    if (!namePattern.test(firstName)) {
      newErrors.firstName = 'First name should be more than 1 letter and contain no special characters or numbers.';
    }
    if (!namePattern.test(lastName)) {
      newErrors.lastName = 'Last name should be more than 1 letter and contain no special characters or numbers.';
    }
    if (!emailPattern.test(emailId)) {
      newErrors.emailId = 'Please enter a valid email address.';
    }
    if (!passwordPattern.test(password)) {
      newErrors.password = 'Password should be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.';
    }
    if (!mobilePattern.test(mobileNo)) {
      newErrors.mobileNo = 'Mobile number should be exactly 10 digits.';
    }
  
    return newErrors;
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some(error => error !== '');
    if (hasErrors) {
      return;
    }

    try {
      console.log('form', formData);
      localStorage.setItem('emailId', formData.emailId);
      dispatch(signUpDataAction(formData));
      // handleSignUp(formData, router);
    } catch (error) {
      setErrors(prevErrors => ({
        ...prevErrors,
        global: 'Error processing your request',
      }));
      console.error('Error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
        <BackgroundAnimation children={undefined} />
        <div className="p-6 rounded-lg max-w-lg mx-auto relative">
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="text-black-500 hover:text-black-800"
            >
              &times;
            </button>
          </div>
          <h2 className="text-2xl mb-4">Sign Up</h2>
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
                    placeholder="First Name"
                    required
                  />
                </label>
                {errors.firstName && <div className="text-red-500">{errors.firstName}</div>}
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
                    placeholder="Last Name"
                    required
                  />
                </label>
                {errors.lastName && <div className="text-red-500">{errors.lastName}</div>}
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
                placeholder="Email"
                required
              />
            </label>
            {errors.emailId && <div className="text-red-500">{errors.emailId}</div>}
            <label className="block mb-2 text-white">
              Password:
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl text-white bg-black"
                  placeholder="Password"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button type="button" onClick={togglePasswordVisibility} className="text-white focus:outline-none">
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </label>
            {errors.password && <div className="text-red-500">{errors.password}</div>}
            <label className="block mb-2 text-white">
              Mobile No:
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="w-full p-2 border rounded-xl text-white bg-black"
                placeholder="Mobile No"
                required
              />
            </label>
            {errors.mobileNo && <div className="text-red-500">{errors.mobileNo}</div>}
            <button
              type="submit"
              className="w-full text-white p-2 rounded mt-8"
              style={{
                background:
                  'conic-gradient(from 180deg at 50% 50%, #C729B9 -28.32deg, #B52BBA 4.67deg, #A12CBC 23.65deg, #8C2EBE 44.86deg, #792FBF 72.46deg, #6C30C0 82.5deg, #4B32C3 127.99deg, #5831C2 160.97deg, #6330C1 178.46deg, #742FC0 189.48deg, #8D2DBE 202.95deg, #A62CBC 230.66deg, #B92ABA 251.35deg, #D029B8 276.44deg, #EC27B6 306.45deg, #C729B9 331.68deg, #B52BBA 364.67deg)',
              }}
            >
              Sign Up
            </button>
          </form>
          {userSuccess && 
          <SignUpModalOtp viewOtp={userSuccess} setViewOtp={setViewOtp} />
          } 
        </div>
      </div>
    </>
  );
};

export default Modal;
