'use client';
import { Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeModalOtp, verifyOtp } from '@/redux/actions/authActions';
import { RootState } from '@/redux/configureStore';
import { useRouter } from 'next/navigation';

interface OtpModalProps {
  viewOtp: boolean;
  setViewOtp: (value: boolean) => void;
}

const SignUpModalOtp: React.FC<OtpModalProps> = ({ viewOtp, setViewOtp }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const dispatch = useDispatch();
  const router = useRouter();
  const emailId = useSelector(
    (state: RootState) => state?.root?.userData.emailId
  );
  const resOtp = useSelector(
    (state: RootState) => state?.root?.otp
  );

  useEffect(() => {
    console.log("resOtp", resOtp);
    localStorage.setItem('user_id', resOtp?.data?.user_id);
    localStorage.setItem('token', resOtp?.data?.token);
    if(resOtp?.data?.success){
      router.push('/dashboard')
    }
  }, [resOtp]);

  useEffect(() => {
    console.log("emailId", emailId);
  }, [emailId]);

  const handleChange = (index: number, value: string) => {
    if (/^\d$/.test(value) || value === '') { // Allow only single digit or empty string
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length === 3 || otpValue.length === 4) {
      console.log("submit otp", otpValue, emailId);
      const data = {
        "emailId": emailId,
        otp: otpValue
      };
      // Handle OTP verification logic
      dispatch(verifyOtp(data));
      router.push('/login');
      console.log('OTP submitted:', otpValue);
    } else {
      console.error('OTP must be 3 or 4 digits');
    }
  };

  const otpModal = () => {
    dispatch(removeModalOtp());
  };

  return (
    <Modal
      open={viewOtp}
      onClose={() => setViewOtp(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="p-6 rounded-lg max-w-lg mx-auto relative bg-blue">
          <div className="flex justify-end">
            <button onClick={otpModal} className="text-black-500 hover:text-black-800">
              &times;
            </button>
          </div>
          <h2 className="text-2xl mb-4">Enter OTP</h2>
          <p className="mb-4">We have sent an OTP to the email address </p>
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-12 p-2 border rounded text-center"
                  maxLength={1}
                  pattern="\d*" // Allows only digits
                  style={{ color: 'black' }}
                  required
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full text-white p-2 rounded mt-4"
              style={{
                background:
                  'conic-gradient(from 180deg at 50% 50%, #C729B9 -28.32deg, #B52BBA 4.67deg, #A12CBC 23.65deg, #8C2EBE 44.86deg, #792FBF 72.46deg, #6C30C0 82.5deg, #4B32C3 127.99deg, #5831C2 160.97deg, #6330C1 178.46deg, #742FC0 189.48deg, #8D2DBE 202.95deg, #A62CBC 230.66deg, #B92ABA 251.35deg, #D029B8 276.44deg, #EC27B6 306.45deg, #C729B9 331.68deg, #B52BBA 364.67deg)',
              }}
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModalOtp;
