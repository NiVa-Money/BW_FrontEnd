type FactorsCardProps = {
  title: string;
  description: string;
};

const Cards: React.FC<FactorsCardProps> = ({ title, description }) => (
  <section className="flex flex-col p-10 bg-[#0B031E] rounded-md  hover:shadow-[0_0_20px_10px_rgba(151,71,255,0.7)]">
    <h2 className=" text-3xl text-left font-semibold leading-10 text-white z-10">
      {title}
    </h2>
    <p className="relative mt-2 text-lg text-left leading-7 text-[#8D8997] z-10">
      {description}
    </p>
  </section>
);

const factorsList = [
  {
    title: 'Key Factors & Functionalities',
    description:
      'Botwot simplifies AI chatbot creation, empowering businesses to boost service and spur growth effortlessly.',
  },
  {
    title: 'Competitive Pricing Model',
    description:
      'Botwot offers a competitive pricing model, making AI chatbots accessible to businesses of all sizes.',
  },
  {
    title: 'Advanced AI & ML',
    description:
      'Botwot leverages advanced AI and machine learning to optimize chatbot performance and customer interactions.',
  },
  {
    title: 'Data Security & Privacy',
    description:
      'Botwot prioritizes data security and privacy, ensuring safe and reliable interactions between businesses and customers.',
  },
];

const Factors: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B031E] via-[#C00DC8] to-black opacity-30" />
      <div className="flex gap-4 justify-between py-10 mt-10 w-full text-center relative z-10">
        {factorsList.map((factor, index) => (
          <Cards
            key={index}
            title={factor.title}
            description={factor.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Factors;
