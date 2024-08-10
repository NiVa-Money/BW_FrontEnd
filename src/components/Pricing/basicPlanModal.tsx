// PlanModal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const PlanModal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="absolute inset-0 opacity-50"></div>
       <div className="bg-[#0B031E] flex flex-col items-center justify-center p-8 rounded-lg shadow-lg z-10">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{message}</p>
        <button 
          onClick={onClose} 
          className="py-2 px-4 bg-white items-center justify-center text-black rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PlanModal;
