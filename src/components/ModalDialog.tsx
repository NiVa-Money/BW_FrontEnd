import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Image from 'next/image';
import apkQR from '@/public/assets/apkQr.png';

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
        <div className="flex flex-col justify-center items-center h-full space-y-4">
          <a
            href="https://www.installonair.com/app-download-link/PKtMr3"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-white text-2xl font-semibold text-center"
          >
            Available on <br />
            Android Devices
          </a>
          <div className="bg-white p-4 rounded-lg flex justify-center items-center">
            <Image
              src={apkQR}
              alt="Android QR Code"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDialog;
