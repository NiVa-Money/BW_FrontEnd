import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PricingCard from '../../components/PricingCard';
import '../../styles/LandingPage.css';
import FactorsCard from '../../components/FactorsCard';
import FeatureCard from '@/components/FeatureCards';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
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
          {/* <div className="container">
            <h2>Flexible Pricing for Everyone</h2>
            <div className="pricing-cards">
              <PricingCard plan="Basic" price="Free" sessions="Suitable for up to 100 chat messages per month." features={["Manage 1 Bot Profile with 1 Knowledge Base.", "Text uploads allowed for content."]} />
              <PricingCard plan="BotWot Exclusive" price="$4.99/M" sessions="Suitable for up to 10,000 chat messages per month." features={["Manage 2 Bot Profiles with 2 Knowledge Bases.", "Text uploads allowed for content."]} />
              <PricingCard plan="Starter" price="$34.9/M" sessions="Suitable for up to 20,000 chat messages per month." features={["Manage 3 Bot Profiles with 4 Knowledge Bases.", "Text, PNG, and JPEG uploads allowed."]} />
              <PricingCard plan="Professional" price="$69.9/M" sessions="Suitable for up to 50,000 chat messages per month." features={["Manage 5 Bot Profiles with 8 Knowledge Bases.", "Text, PNG, JPEG, and PDF uploads allowed."]} />
            </div>
          </div> */}
          
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
