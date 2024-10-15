import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface WhatsAppSaveConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  exportResponse: {
    success: boolean;
    data: { webhookUrl: string; secretToken: string };
  } | null;
}

const WhatsAppSaveConfirmationModal: React.FC<
  WhatsAppSaveConfirmationModalProps
> = ({ isOpen, onClose, exportResponse }) => {
  const [copyWebhookSuccess, setCopyWebhookSuccess] = useState('');
  const [copytokenSuccess, setCopyTokenSuccess] = useState('');

  const handleWebhookCopy = () => {
    if (exportResponse && exportResponse.data.webhookUrl) {
      navigator.clipboard
        .writeText(`${exportResponse.data.webhookUrl}`)
        .then(() => setCopyWebhookSuccess('Copied to clipboard!'))
        .catch((err) => setCopyWebhookSuccess('Failed to copy.'));
    }
  };
  const handleTokenCopy = () => {
    if (exportResponse && exportResponse.data.secretToken) {
      navigator.clipboard
        .writeText(`${exportResponse.data.secretToken}`)
        .then(() => setCopyTokenSuccess('Copied to clipboard!'))
        .catch((err) => setCopyTokenSuccess('Failed to copy.'));
    }
  };

  const handleClose = () => {
    setCopyWebhookSuccess('');
    setCopyTokenSuccess(''); // Reset the copy success message when closing the modal
    onClose(); // Call the onClose function passed as a prop
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="md">
      <DialogContent dividers className="bg-gray-800 text-white p-6 shadow-xl">
        {exportResponse && exportResponse.success ? (
          <div>
            <p className="mb-2">
              Your bot has been successfully integrated with WhatsApp. Please
              copy your webhookUrl and Secret Token.
            </p>
            <div className="mt-4 flex items-center mb-2">
              <button
                onClick={handleWebhookCopy}
                className=" my-2 min-w-[64px] px-[14px] py-[10px] rounded-[4px] text-white bg-[#0B031E]"
              >
                <ContentCopyIcon />
                <span> Copy to Clipboard</span>
              </button>
              {copyWebhookSuccess && (
                <p className="text-green-400 ml-4">{copyWebhookSuccess}</p>
              )}
            </div>
            <pre className="bg-gray-900 p-2 rounded whitespace-pre-wrap break-words">
              <code>{`${exportResponse.data.webhookUrl}`}</code>
            </pre>
            <div className="mt-4 flex items-center mb-2">
              <button
                onClick={handleTokenCopy}
                className=" my-2 min-w-[64px] px-[14px] py-[10px] rounded-[4px] text-white bg-[#0B031E]"
              >
                <ContentCopyIcon />
                <span> Copy to Clipboard</span>
              </button>
              {copytokenSuccess && (
                <p className="text-green-400 ml-4">{copytokenSuccess}</p>
              )}
            </div>
            <pre className="bg-gray-900 p-2 rounded whitespace-pre-wrap break-words">
              <code>{`${exportResponse.data.secretToken}`}</code>
            </pre>
          </div>
        ) : (
          <p className="text-red-400">WhatsApp Integration failed.</p>
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

export default WhatsAppSaveConfirmationModal;
