import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  exportResponse: { success: boolean; url: string } | null;
}

const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, exportResponse }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = () => {
    if (exportResponse && exportResponse.url) {
      navigator.clipboard.writeText(`<script src="${exportResponse.url}"></script>`)
        .then(() => setCopySuccess('Copied to clipboard!'))
        .catch(() => setCopySuccess('Failed to copy.'));
    }
  };

  const saveUrlToFile = () => {
    if (exportResponse && exportResponse.url) {

      // Correct API route
      axios.post('/api/save', { url: `<script src="${exportResponse?.url}"></script>` })


        .then(response => {

        })
        .catch(error => {
          console.error('There was an error saving the URL:', error); 
          console.error('Error details:', error.response ? error.response.data : error.message); 
        });
    } else {
      console.warn('exportResponse or exportResponse.url is missing'); 
    }
  };
  

  const handleClose = () => {
    setCopySuccess('');  // Reset the copy success message when closing the modal
    onClose();           // Call the onClose function passed as a prop
  };

  useEffect(() => {
    if (exportResponse && exportResponse.success) {
      saveUrlToFile();
    }
  }, [exportResponse]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}  // Use the updated handleClose function
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75"
    >
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">Export Bot Profile</h2>

        {exportResponse && exportResponse.success ? (
          <div>
            <p className="mb-2">Your bot has been successfully exported. Include the following script in your HTML:</p>
            <div className="mt-4 flex items-center mb-2">
              <button 
                onClick={handleCopy} 
                className="px-4 py-2 bg-[#0B031E] text-white rounded-md flex items-center"
              >
                <FontAwesomeIcon icon={faCopy} className="mr-2" />
                Copy to Clipboard
              </button>
              {copySuccess && <p className="text-green-400 ml-4">{copySuccess}</p>}
            </div>
            <pre className="bg-gray-900 p-2 rounded whitespace-pre-wrap break-words">
              <code>{`<script src="${exportResponse.url}"></script>`}</code>
            </pre>
          
          </div>
        ) : (
          <p className="text-red-400">Failed to export bot profile.</p>
        )}
        <button 
          onClick={handleClose} 
          className="mt-6 px-4 py-2 bg-[#0B031E] text-white rounded-md"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ExportModal;
