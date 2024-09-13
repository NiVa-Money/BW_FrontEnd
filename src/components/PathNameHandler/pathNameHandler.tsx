'use client';
import { setPathNameAction } from '@/redux/actions/globalActions';
import { AppDispatch, RootState } from '@/redux/configureStore';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function PathnameHandler() {
  const pathname = usePathname();
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(setPathNameAction(pathname));
  }, [pathname]);

  return null; // This component does not render anything
}
