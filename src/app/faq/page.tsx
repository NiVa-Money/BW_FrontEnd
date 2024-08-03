import React from 'react';
import ResourceCard from './ResourceCard';
import TutorialCard from './TutorialCard';
import SectionHeader from './SectionHeader';
import Divider from './Divider';

// Resources data
const resources = [
  {
    title: 'Docs',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f06f5e3b7cf9aba144fec566daa94e25f75846be59eeb49943f224d9248e6cd8?apiKey=555c811dd3f44fc79b6b2689129389e8',
  },
  {
    title: 'Demos',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/80236ed57e710888f8dae2e4b9cb53f6eeade73363ca4f47a390dc3a06405d4e?apiKey=555c811dd3f44fc79b6b2689129389e8',
  },
  {
    title: 'FAQs',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/97d871d37e1997609d8de575111205fd492ac4e2186c9a8b1711df133cc3e624?apiKey=555c811dd3f44fc79b6b2689129389e8',
  },
  {
    title: 'Tutorials',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b9ebbcabf4b486023303abbbf7526a7d1eaf5aed60cdf73b27fa4622274d9197?apiKey=555c811dd3f44fc79b6b2689129389e8',
  },
];

// Getting Started Tutorials data
const gettingStartedTutorials = [
  {
    imageSrc: '/images/1.mp4',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9b9d365dd1cfe0493e38ca494929a2040135a9497260b3aaf8e3314f904296e3?apiKey=555c811dd3f44fc79b6b2689129389e8',
    tag: 'Introduction',
    title: 'UI kit for chat overview',
  },
  {
    imageSrc: '/images/3.mp4',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9ea5dbefe7f613ca4dbb4e632d72cc2fd6da4725a3ca179aa87aed359b5d70d6?apiKey=555c811dd3f44fc79b6b2689129389e8',
    tag: 'Tutorial',
    title: 'Build your bot in 2 steps',
  },
  {
    imageSrc: '/images/v5.mp4',
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9ea5dbefe7f613ca4dbb4e632d72cc2fd6da4725a3ca179aa87aed359b5d70d6?apiKey=555c811dd3f44fc79b6b2689129389e8',
    tag: 'Tutorial',
    title: 'Increase customer engagement',
  },
];

// Basic Tutorials data
const basicTutorials = [
  {
    imageSrc: '/images/v1.mp4',
  },
  {
    imageSrc: '/images/v3.mp4',
  },
  {
    imageSrc: '/images/v4.mp4',
  },
];

const HelpCenter: React.FC = () => {
  return (
    <main className="flex flex-col px-12 py-20 max-md:px-5">
      <h1 className="mt-5 text-5xl font-bold tracking-tighter text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Welcome to <br /> Help Center 👋
      </h1>
      <h2 className="mt-4 text-3xl leading-9 text-white max-md:max-w-full">Resources</h2>
      <section className="flex gap-5 py-2.5 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
        {resources.map((resource, index) => (
          <ResourceCard key={index} title={resource.title} iconSrc={resource.iconSrc} />
        ))}
      </section>
      <Divider />
      <SectionHeader title="Getting Started" />
      <section className="mt-1.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {gettingStartedTutorials.map((tutorial, index) => (
            <TutorialCard key={index} {...tutorial} />
          ))}
        </div>
      </section>
      <Divider />
      <SectionHeader title="Basic Tutorials" />
      <section className="pb-12 mt-1.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {basicTutorials.map((tutorial, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={tutorial.imageSrc}
                alt=""
                className="grow w-full rounded-xl border border-solid aspect-[1.52] border-neutral-700 max-md:mt-5"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HelpCenter;
