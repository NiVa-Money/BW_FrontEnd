import Cards from './Card';

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
    <div className="flex gap-5 justify-between py-16 mt-10 w-full text-center bg-black">
      {factorsList.map((factor, index) => (
        <Cards
          key={index}
          title={factor.title}
          description={factor.description}
        />
      ))}
    </div>
  );
};

export default Factors;
