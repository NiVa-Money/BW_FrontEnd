"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/utils/auth';
// import { isAuthenticated } from '../utils/auth';

const withAuth = (WrappedComponent:any) => {
  return (props:any) => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.replace('/home');
      }
    }, []);

    // If we're not authenticated, we render nothing
    // This could be improved to show a loading spinner or similar
    if (!isAuthenticated()) {
      return null;
    }

    // If we're authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
