// Modal.tsx
import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  isError?: boolean; 
};

const PaymentModal: React.FC<ModalProps> = ({ isOpen, onClose, message, isError }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0B031E] bg-opacity-50 z-50">
      <div className={`bg-white p-5 rounded shadow-lg ${isError ? 'border border-red-500' : ''}`}>
        <h2 className={`text-lg font-bold ${isError ? 'text-red-500' : 'text-green-500'}`}>
          {isError ? 'Transaction Failed' : 'Transaction Completed'}
        </h2>
        <p>{message}</p>
        <button
          className="mt-4 px-4 py-2 bg-[#0B031E] text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
