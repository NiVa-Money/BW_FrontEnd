'use client'

import LoginModal from '@/components/loginModal/loginModal'
import React from 'react'

export default function Login() {
  return (
    <LoginModal closeModal={function (): void {
          throw new Error('Function not implemented.')
      } }/>
  )
}
