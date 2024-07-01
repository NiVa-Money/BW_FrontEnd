
import BotMaker from "@/components/ChatBot/BotMaker";
import KnowledgeBase from "@/components/ChatBot/KnowledgeBase";
import SideBar from "@/components/SideBar";
import ChatbotList from "@/pages/my-chatbots/page";

export default function Home() {
  return (
    <>
    <SideBar/>
    <ChatbotList/>
    <KnowledgeBase/>
    <BotMaker/>

    </>
  );
}
