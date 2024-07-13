import PricingCard from '@/components/Pricing'
import React from 'react'
import AuthContextProvider from '@/context/AuthContext';
const pricing = () => {
  return (
    <div>
       <AuthContextProvider>
     <PricingCard />
     </AuthContextProvider>
    </div>
  )
}

export default pricing
