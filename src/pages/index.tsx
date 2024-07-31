// src/pages/index.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/configureStore';
import { usePathname } from 'next/navigation';
import { setPathNameAction } from '@/redux/actions/globalActions';
import Home from '@/app/home/page';

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const pathName = useSelector((state: RootState) => state.root.pathName);

  useEffect(() => {
    dispatch(setPathNameAction(pathname));
  }, [pathname, dispatch]);

  return (
    <div>
      <h1>Current Path: {pathName}</h1>
      <Home />
    </div>
  );
};

export default IndexPage;
