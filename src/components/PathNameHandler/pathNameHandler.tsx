'use client';
import { setPathNameAction } from '@/redux/actions/globalActions';
import { AppDispatch } from '@/redux/configureStore';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
export default function PathnameHandler() {
  const pathname = usePathname();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    console.log(pathname);
    dispatch(setPathNameAction(pathname));
  }, [pathname]);

  return null; // This component does not render anything
}
