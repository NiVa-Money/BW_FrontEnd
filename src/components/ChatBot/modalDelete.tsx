import React from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="bg-black p-6 rounded shadow-lg z-10">
        <h2 className="text-xl mb-4 text-white">Are you sure ?</h2>
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-black rounded">No</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">Yes</button>
        </div>
      </div>
    </div>
  );
};


export default ConfirmModal;
