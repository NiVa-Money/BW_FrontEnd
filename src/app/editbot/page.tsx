import { BackgroundCss } from '@/components/BackgroundAnimation/backgroundCss';
import EditBotComponent from '@/components/EditBotComponent/editBotComponent';

const EditBotPage: React.FC = () => {
  return (
    <>
      <main className='relative text-white h-[100%] overflow-hidden p-8'>
        <BackgroundCss/>
        <EditBotComponent />
      </main>
    </>
  );
};

export default EditBotPage;
