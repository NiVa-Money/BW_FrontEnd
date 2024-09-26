import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  exportResponse: { success: boolean; url: string } | null;
}

const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  exportResponse,
}) => {
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = () => {
    if (exportResponse && exportResponse.url) {
      navigator.clipboard
        .writeText(`<script src="${exportResponse.url}"></script>`)
        .then(() => setCopySuccess('Copied to clipboard!'))
        .catch((err) => setCopySuccess('Failed to copy.'));
    }
  };

  const handleClose = () => {
    setCopySuccess(''); // Reset the copy success message when closing the modal
    onClose(); // Call the onClose function passed as a prop
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="md">
      <DialogContent dividers className="bg-gray-800 text-white p-6 shadow-xl">
        {exportResponse && exportResponse.success ? (
          <div>
            <p className="mb-2">
              Your bot has been successfully exported. Include the following
              script in your HTML:
            </p>
            <div className="mt-4 flex items-center mb-2">
              <button
                onClick={handleCopy}
                className=" my-2 min-w-[64px] px-[14px] py-[10px] rounded-[4px] text-white bg-[#0B031E]"
              >
                <ContentCopyIcon />
                <span> Copy to Clipboard</span>
              </button>
              {copySuccess && (
                <p className="text-green-400 ml-4">{copySuccess}</p>
              )}
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
          className=" my-2 min-w-[64px] px-[16px] py-[6px] rounded-[4px] text-white bg-[#0B031E]"
        >
          Close
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ExportModal;
