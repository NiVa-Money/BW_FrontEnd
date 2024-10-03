import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Image from 'next/image';

interface ModalDialogProps {
  open: boolean;
  onClose: () => void;
}

const ModalDialog: React.FC<ModalDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '70%',
          height: '70vh',
          borderRadius: '0.5rem',
          backgroundColor: '#0B031E',
        },
      }}
    >
      <DialogContent className="p-6 bg-[#1E1E2D] text-white">
        <div className="flex justify-between items-center h-full">
          <div className="flex flex-col justify-center items-center w-2/5 h-full space-y-4">
            <a
              href="https://www.installonair.com/app-download-link/PKtMr3"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 mb-2 text-white text-2xl font-semibold text-center"
            >
              Available on <br />
              Android Devices
            </a>
            <div className="bg-white p-4 rounded-lg">
              <Image
                src="/images/apkQr.png"
                alt="Android QR Code"
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
          </div>
          <div className="w-3/5 h-full flex justify-center items-center">
            <div className="w-full h-full relative">
              <Image
                src="/images/mobileView.png"
                alt="Mobile App Preview"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDialog;
