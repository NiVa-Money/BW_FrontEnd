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
import PricingCard from "@/components/Pricing";

function App() {
  const { user, setUser } = useAuthContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr || null);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [setUser]);

  if (!user) {
    return <Home />;
  }

  return (
    <div>
      <Chat />
      <SideBar />
      <ChatbotList />
      {/* <KnowledgeBase />
       <BotMaker /> 
       <PricingCard /> */}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}
