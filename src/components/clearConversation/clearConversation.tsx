'use client';
import React from 'react';
interface ModalProps {
  closeModal: () => void;
}

const ClearConversation: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-6 rounded-lg max-w-md mx-auto">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <h2 className="text-2xl mb-4">
          Please Confirm Do you want to delete it or Not!
        </h2>
        <div className="flex justify-between">
          <button
            onClick={closeModal}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Yes
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearConversation;
