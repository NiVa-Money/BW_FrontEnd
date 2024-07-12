'use client';

import { auth, provider } from '@/auth/firebase';
import { User, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import React, { PropsWithChildren, useLayoutEffect, useState } from 'react';

type SharedContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  handleSignIn: () => Promise<void>;
  handleSignOut: () => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<User | null>;
  handleSignInWithEmail: (email: string, password: string) => Promise<void>;
};

export const AuthContext = React.createContext({} as SharedContext);

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const handleSignOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      return result.user;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const handleSignInWithEmail = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
    } catch (error) {
      console.log(error);
      throw new Error('Failed to log in');
    }
  };

  useLayoutEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (usr: any) => {
      setUser(usr || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, handleSignIn, handleSignOut, signUpWithEmail,handleSignInWithEmail  }}
    >
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <svg
            className="animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            height={32}
            width={32}
          >
            <circle
              className=" opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);

export default AuthContextProvider;
