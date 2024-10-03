import Card from './Card';

const Features: React.FC = () => {
  const cardData = [
    {
      imageSrc: '/images/Vectorrocket.png',
      title: 'Launch in minutes',
      description:
        'Choose and deploy pre-built conversational modules tailored to your business instantly.',
    },
    {
      imageSrc: '/images/Vectormagic.png',
      title: 'Seamless Integrations',
      description:
        'Effortlessly connect with your systems using our no-code, user-friendly platform.',
    },
    {
      imageSrc: '/images/Vectorchat.png',
      title: 'Personalized Interactions',
      description:
        "Train your AI chatbot to embody your brand's personality for precise responses.",
    },
  ];

  return (
    <div className="flex flex-col w-screen justify-center items-center px-20 py-20 mt-20 max-md:px-5 max-md:mt-10 max-md:mr-0.5 ">
      <h3 className="self-start ml-16 text-5xl font-black text-gray-100">
        Learn more
      </h3>
      <p className="self-start ml-16 pt-2 text-base font-normal text-gray-500">
        Discover what's possible with BotWot
      </p>
      <section className="self-start  ml-16 pl-15 pr-10 mt-10 mb-2.5 w-full max-w-[1150px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0s">
          {cardData?.map((card, index) => (
            <div key={index} className="flex gap-4 flex-col w-[33%] ">
              <Card {...card} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
