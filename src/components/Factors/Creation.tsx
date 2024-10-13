import * as React from 'react';

interface Step {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt?: string;
}

const steps: Step[] = [
  {
    title: 'Step 1',
    description:
      'Create Your AI Bot Agent: Start by building your custom chatbot using our intuitive no-code platform.',
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/31293fd8e465c3351e1a744b7090ec8c2fb0215c053660b8689d0a077cdf3908?placeholderIfAbsent=true&apiKey=555c811dd3f44fc79b6b2689129389e8',
    // imgSrc: "/steps/Step1.png",
  },
  {
    title: 'Step 2',
    description:
      "Customize Your AI Bot Agent: Tailor your chatbot's personality, appearance, and responses to match your brand and customer preferences.",
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/7b354690f6e5cc9b43dcaab7c88ea84b38ad56dae266259e5a856da42c02c563?placeholderIfAbsent=true&apiKey=555c811dd3f44fc79b6b2689129389e8',
    // imgSrc: "/steps/Step2.png",
  },
  {
    title: 'Step 3',
    description:
      'Embed Bot on Your Website: Integrate your chatbot seamlessly into your website to provide instant support to visitors.',
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1734152d010948f523dc08b705cec698c3f1fa07861de6be01bbd7302ea7ac38?placeholderIfAbsent=true&apiKey=555c811dd3f44fc79b6b2689129389e8',
    // imgSrc: "/steps/Step3.png",
  },
  {
    title: 'Step 4',
    description:
      'Integrate with your tools: Connect your chatbot to popular messaging platforms and other tools to reach customers where they are.',
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/5c3a41087c36590400e65eb851b6404022ff23308f0c83587cae29371af6c967?placeholderIfAbsent=true&apiKey=555c811dd3f44fc79b6b2689129389e8',
    // imgSrc: "/steps/Step4.png",
  },
  {
    title: 'Step 5',
    description:
      "Monitor and gain insights: Track your chatbot's performance, gather insights, and make data-driven improvements.",
    imgSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/3bb6729628cf4cc91c2b637f697fccdc63d525d31b37d4ee0e9933a7343562a0?placeholderIfAbsent=true&apiKey=555c811dd3f44fc79b6b2689129389e8',
    // imgSrc: "/steps/Step5.png",
  },
];

const Creation: React.FC = () => {
  return (
    <div className="flex flex-col px-16 py-24 max-md:px-5">
      <h1 className="self-center text-5xl font-medium text-gray-100 max-md:max-w-full max-md:text-4xl">
        How BotWot Works: A 5 Step Solution
      </h1>
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-wrap justify-center items-center px-24 my-10 w-full h-[268px] max-md:px-5 "
        >
          {index % 2 === 0 ? (
            <>
              <div className="flex flex-col flex-1 shrink self-stretch my-auto text-gray-100 basis-0 min-w-[240px]">
                <h2 className="text-4xl font-semibold">{step.title}</h2>
                <p className="mt-3 text-xl">{step.description}</p>
              </div>
              <img
                loading="lazy"
                srcSet={generateSrcSet(step.imgSrc)}
                className="object-contain aspect-[0.75] w-[426px] max-md:max-w-full"
                alt={step.imgAlt}
              />
            </>
          ) : (
            <>
              <img
                loading="lazy"
                srcSet={generateSrcSet(step.imgSrc)}
                className="object-contain aspect-[0.75] w-[426px] max-md:max-w-full"
                alt={step.imgAlt}
              />
              <div className="flex flex-col flex-1 shrink self-stretch my-auto text-gray-100 basis-0 min-w-[240px]">
                <h2 className="text-4xl font-semibold">{step.title}</h2>
                <p className="mt-2.5 text-xl">{step.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

// Helper function to generate srcSet for responsive images
const generateSrcSet = (src: string) => {
  const widths = [100, 200, 400, 800, 1200, 1600, 2000];
  return widths.map((width) => `${src}&width=${width} ${width}w`).join(', ');
};

export default Creation;
