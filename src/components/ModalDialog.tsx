// ModalDialog.tsx
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import apkQR from '@/public/assets/apkQr.png';
import mobileView from '@/public/assets/mobileView.png';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';

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
          borderRadius: '0.5rem', // Tailwind rounded-lg
        },
      }}
    >
      <DialogContent className="p-6">
        <div className="flex justify-center items-center h-full ">
          <div className="flex flex-col justify-center items-center w-2/5 h-full">
            <a
              href="https://www.installonair.com/app-download-link/PKtMr3"
              target="blank"
              className="text-[purple] underline font-bold"
            >
              Download Now!
            </a>
            <Image
              src={apkQR.src} // Replace with your image path
              alt="Lost"
              layout="responsive"
              objectFit="cover"
              width={400}
              height={400}
            />
          </div>
          <div style={{ width: '40%', height: '100%' }}>
            <Image
              src={mobileView.src} // Replace with your image path
              alt="Lost"
              objectFit="cover"
              width={375}
              className={'h-full'}
              height={60}
            />
          </div>
        </div>
        {/* <Link href="https://www.installonair.com/app-download-link/PKtMr3">
            <span>APK URL</span>
          </Link> */}
      </DialogContent>
      {/* <DialogActions className="p-4 bg-gray-200">
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default ModalDialog;
