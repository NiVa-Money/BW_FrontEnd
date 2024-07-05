'use client';

import BotMaker from "@/components/ChatBot/BotMaker";
import KnowledgeBase from "@/components/ChatBot/KnowledgeBase";
import SideBar from "@/components/SideBar";
import ChatbotList from "@/pages/my-chatbots/page";

import Home from '@/pages/Home';
import { auth } from '@/auth/firebase';
import AuthContextProvider, { useAuthContext } from '@/context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import Chat from '@/pages/Chat';

function App() {
  const { user, setUser } = useAuthContext();

  useEffect(() => {
    onAuthStateChanged(auth, (usr: any) => {
      if (usr) {
        setUser(usr);
      } else {
        setUser(usr);
      }
    });
  }, [user]);

  if (!user) {
    return <Home />;
  }

  return <Chat />;
}

export default function () {
  return (
    <><AuthContextProvider>
      <App />
    </AuthContextProvider><>
        <SideBar />
        <ChatbotList />
        <KnowledgeBase />
        <BotMaker />

      </></>
  );
}
