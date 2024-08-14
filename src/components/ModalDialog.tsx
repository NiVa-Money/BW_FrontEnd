// ModalDialog.tsx
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import apkQR from '@/public/assets/apkQr.png';

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
          width: '50%',
          height: '70vh',
          borderRadius: '0.5rem', // Tailwind rounded-lg
        },
      }}
    >
      <DialogContent className="p-6">
          <Image
            src={apkQR.src} // Replace with your image path
            alt="Lost"
            layout="fill"
            objectFit="contain"
          />
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
