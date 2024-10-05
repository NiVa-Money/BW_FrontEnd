import React, { useState } from 'react';
import axiosInstance from '@/utils/axiosConfig';
import { XCircle } from 'lucide-react';

interface FeedbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
  sessionId: string;
}

type Rating = 'Good' | 'Neutral' | 'Bad';

const FeedbackPopup: React.FC<FeedbackPopupProps> = ({ isOpen, onClose, sessionId }) => {
  const [showRating, setShowRating] = useState<boolean>(false);
  const [initialResponse, setInitialResponse] = useState<boolean | null>(null);

  if (!isOpen) return null;

  const handleInitialResponse = (response: boolean): void => {
    setInitialResponse(response);
    setShowRating(true);
  };

  const handleRating = async (rating: Rating): Promise<void> => {
    try {
      const feedback = `${initialResponse ? 'Satisfied' : 'Not satisfied'} - ${rating}`;
      await axiosInstance.post('/feedback-endpoint', {
        sessionId,
        userFeedback: feedback
      });
      onClose();
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-gray-800 text-white rounded-lg p-6 shadow-xl z-10 w-96 relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          <XCircle size={24} />
        </button>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            {!showRating ? 'Chat Feedback' : 'Rate Your Experience'}
          </h2>
          <p className="text-center text-gray-300">
            {!showRating 
              ? 'Are you satisfied with our responses?' 
              : 'Please rate your experience'}
          </p>
        </div>

        <div className="flex justify-center gap-4">
          {!showRating ? (
            <>
              <button
                onClick={() => handleInitialResponse(true)}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors"
              >
                Yes
              </button>
              <button
                onClick={() => handleInitialResponse(false)}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
              >
                No
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleRating('Good')}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors"
              >
                Good
              </button>
              <button
                onClick={() => handleRating('Neutral')}
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-full transition-colors"
              >
                Neutral
              </button>
              <button
                onClick={() => handleRating('Bad')}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors"
              >
                Bad
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPopup;