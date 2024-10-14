'use client'

import LoginModal from '@/components/loginModal/loginModal'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter(); 

  const closeModal = () => {
    setIsModalOpen(false); // This will close the modal
    router.back();
  };

  return (
    <>
      {isModalOpen && <LoginModal closeModal={closeModal} />} {/* Pass the actual closeModal function */}
    </>
  )
}
