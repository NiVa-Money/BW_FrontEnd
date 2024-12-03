'use client'

import { signUpDataAction } from '@/redux/actions/authActions';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SignUp: React.FC = () => {
  // State to store input field values and errors
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const mobilePattern = /^\d{10}$/;

    const newErrors: { [key: string]: string } = {};

    if (!firstName) {
      newErrors.firstName = 'First name is required.';
    }

    if (!lastName) {
      newErrors.lastName = 'Last name is required.';
    }

    if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!passwordPattern.test(password)) {
      newErrors.password =
        'Password should be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.';
    }

    if (phone && !mobilePattern.test(phone)) {
      newErrors.phone = 'Mobile number should be exactly 10 digits.';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ''
    );
    if (hasErrors) {
      return;
    }

    try {
      // Prepare data to send in API format
      const formData = {
        firstName,
        lastName,
        emailId: email, // Map email to "emailId"
        mobileNo: phone, // Map phone to "mobileNo"
        password,
      };

      // Simulate saving to localStorage and dispatching signup action
      localStorage.setItem('email', email);
      dispatch(signUpDataAction(formData));
      console.log('Form Submitted with data:', formData);
      router.push('/dashboard');
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        global: 'Error processing your request',
      }));
    }
  };

  return (
    <div className="overflow-hidden py-4 pr-20 pl-4 bg-white rounded-none max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        {/* Left Image Section */}
        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <Image
            loading="lazy"
            src="/icons/SignUp.svg"
            width={500}
            height={500}
            alt="Main Banner"
            className="object-contain grow w-full rounded-none aspect-[0.78] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        {/* Right Content Section */}
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            {/* Header */}
            <div className="flex flex-col justify-center w-full max-md:max-w-full">
              <div className="flex gap-4 justify-center items-center self-start text-3xl font-semibold text-neutral-700">
                <Image
                  loading="lazy"
                  src="/icons/Botwot.png"
                  width={50}
                  height={50}
                  alt="BotWot Logo"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[50px]"
                />
                <div className="self-stretch my-auto">BotWot ICX</div>
              </div>
              <div className="mt-6 text-xl font-medium text-zinc-600">
                Create Account
              </div>
              <div className="mt-6 text-5xl font-bold text-neutral-800 max-md:max-w-full">
                Welcome to
                <br />
                Future of ICX
              </div>
            </div>
            {/* Input Fields */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center text-black self-center mt-10 rounded-[128px] max-w-full w-[600px]"
            >
              {[
                {
                  placeholder: 'Enter your first name',
                  imgSrc: '/icons/user-pen.svg',
                  value: firstName,
                  setValue: setFirstName,
                  type: 'text',
                  error: errors.firstName,
                },
                {
                  placeholder: 'Enter your last name',
                  imgSrc: '/icons/user-pen.svg',
                  value: lastName,
                  setValue: setLastName,
                  type: 'text',
                  error: errors.lastName,
                },
                {
                  placeholder: 'Enter your email',
                  imgSrc: '/icons/email-icon.svg',
                  value: email,
                  setValue: setEmail,
                  type: 'email',
                  error: errors.email,
                },
                {
                  placeholder: 'Enter your phone no',
                  imgSrc: '/icons/phone-icon.svg',
                  value: phone,
                  setValue: setPhone,
                  type: 'text',
                  error: errors.phone,
                },
                {
                  placeholder: 'Enter your password',
                  imgSrc: '/icons/pass-icon.svg',
                  value: password,
                  setValue: setPassword,
                  type: 'password',
                  error: errors.password,
                },
              ].map((field, index) => (
                <div
                  key={index}
                  className="flex gap-2.5 items-center px-8 py-4 mt-7 w-full bg-neutral-100 text-black rounded-[128px] max-md:px-5 max-md:max-w-full"
                >
                  <Image
                    loading="lazy"
                    src={field.imgSrc}
                    alt="Input Icon"
                    width={20}
                    height={20}
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[1.04]"
                  />
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => field.setValue(e.target.value)}
                    className="w-full bg-transparent outline-none"
                  />
                  {field.error && (
                    <div className="text-red-500 text-sm">{field.error}</div>
                  )}
                </div>
              ))}
              {/* Sign-Up Button */}
              <button
                type="submit"
                className="gap-2.5 self-stretch mt-8 px-2.5 py-4 w-full text-xl text-white whitespace-nowrap rounded-full bg-neutral-800 min-h-[63px]"
              >
                Sign-Up
              </button>
            </form>
            {/* Footer */}
            <div className="mt-8 text-base text-center font-medium text-black">
              - OR -
            </div>
            <div className="flex gap-1 justify-center items-start mt-8 text-base">
              <div className="text-center text-black">Already have an account?</div>
              <button 
               onClick={() => router.push("/home")}
              className="text-[#387D8C] cursor-pointer">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

