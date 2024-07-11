import { auth } from '@/auth/firebase';
// import { useAuthContext } from '@/context/AuthContext';
import React from 'react';

const Chat = () => {
  // const { user } = useAuthContext();

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="min-h-screen flex justify-center flex-col items-center text-center text-neutral-400">
      <h1 className="font-bold text-4xl">Welcome </h1>
      <span className="text-xl font-medium">
        Chat page to start conversation. Coming Soon.
      </span>
      <button
        className="text-xl font-medium bg-yellow-200 px-4 py-2 rounded text-slate-950 mt-4"
        onClick={signOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Chat;
