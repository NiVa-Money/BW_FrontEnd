'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
export default function PathnameHandler() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return null; // This component does not render anything
}
