<<<<<<< HEAD
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from '@/components/Pricing';
import Factors from '@/components/Factors';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
=======
import PricingCard from '../../components/PricingCard';
import FactorsCard from '../../components/FactorsCard';
import FeatureCard from '@/components/FeatureCards';
>>>>>>> feature/chatbots

const LandingPage: React.FC = () => {
  return (
    <>
      <main>
<<<<<<< HEAD
        <Hero />
        <Features />
        <Factors />
        <PricingCard />
=======
        <section>
        <div className="flex flex-col items-center px-5 pt-6">
          <header className="shrink-0 mt-6 max-w-full" />
          <h1 className="mt-4 text-6xl font-black text-center text-gray-100  max-md:text-4xl">
            Create Your Own No-Code <br /> AI Chatbot with Ease!
          </h1>
          <p className="mt-4 text-2xl text-center text-gray-100 w-[691px] ">
            Effortlessly build your AI chatbot with our no-code platform. Ideal for beginners and experts alike, start now to enhance your customer interactions!
          </p>
          <button className="flex gap-4 justify-center px-6 py-4 mt-20 text-2xl text-pink-200 bg-gray-800 rounded-[99px] max-md:px-5 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d93ba5668e07ac5641e3594021204163310d77646347ffedfc007d75ba09821?apiKey=555c811dd3f44fc79b6b2689129389e8&"
              alt="Google logo"
              className="shrink-0 self-start aspect-square w-[35px]"
            />
            <span>Sign in with Google</span>
          </button>
        </div>
        </section>
        <section>
          <div>
            <FeatureCard/>
          </div>            
        </section>
        <section>
          <div>
            <FactorsCard/>
          </div>
        </section>
        <section>
          <PricingCard/>
        </section>
>>>>>>> feature/chatbots
      </main>
    </>
  );
};

export default LandingPage;
