'use Client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';

function EntryPoint() {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  }, []);

  return <></>;
}

export default EntryPoint;
