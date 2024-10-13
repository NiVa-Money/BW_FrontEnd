interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => (
  <article className="flex flex-col grow justify-center items-center p-px">
    <div className="flex flex-col px-8 pt-6 pb-10 bg-black flex-1 rounded-3xl hover:shadow-[0_0_20px_10px_rgba(181,43,186,0.7)]">
      <img src={imageSrc} alt={title} className="w-6 aspect-square" />
      <h3 className="mt-3.5 text-2xl font-semibold tracking-tight leading-8 text-white">
        {title}
      </h3>
      <p className="mt-2 text-xl leading-5 text-neutral-400">{description}</p>
    </div>
  </article>
);

const Features: React.FC = () => {
  const cardData = [
    {
      imageSrc:
        '/images/Vectorrocket.png',
      title: 'Launch in minutes',
      description:
        'Choose and deploy pre-built conversational modules tailored to your business instantly.',
    },
    {
      imageSrc:
        '/images/Vectormagic.png',
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
    <div className="flex flex-col w-screen justify-center items-center px-20 py-20 max-md:px-5 max-md:mt-10 max-md:mr-0.5 ">
      <h3 className="ml-16 text-5xl font-black text-[#EEEEF0]">
        Learn more
      </h3>
      <p className=" ml-16 pt-2 text-base font-normal text-gray-500">
        Discover what's possible with BotWot
      </p>
      <section className="ml-16 pl-15 pr-10 mt-10 mb-2.5 w-full max-w-[1150px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0s">
          {cardData.map((card, index) => (
            <div key={index} className="flex gap-4 flex-col w-[33%] ">
              <Card {...card}  />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
