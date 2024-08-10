import React from 'react';
import ResourceCard from './ResourceCard';
import TutorialCard from './TutorialCard';
import SectionHeader from './SectionHeader';
import Divider from './Divider';
import Link from 'next/link';
// Resources data

const resources = [
  {
    title: 'Docs',
    iconSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/f06f5e3b7cf9aba144fec566daa94e25f75846be59eeb49943f224d9248e6cd8?apiKey=555c811dd3f44fc79b6b2689129389e8',
    link: '/faq/docs',
    available: true,
  },
  {
    title: 'Demos',
    iconSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/80236ed57e710888f8dae2e4b9cb53f6eeade73363ca4f47a390dc3a06405d4e?apiKey=555c811dd3f44fc79b6b2689129389e8',
    link: '/faq',
    available: false,
  },
  {
    title: 'FAQs',
    iconSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/97d871d37e1997609d8de575111205fd492ac4e2186c9a8b1711df133cc3e624?apiKey=555c811dd3f44fc79b6b2689129389e8',
    link: '/faq/questionsAns',
    available: true,
  },
  {
    title: 'Tutorials',
    iconSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/b9ebbcabf4b486023303abbbf7526a7d1eaf5aed60cdf73b27fa4622274d9197?apiKey=555c811dd3f44fc79b6b2689129389e8',
    link: '/faq',
    available: false,
  },
];

// Getting Started Tutorials data
const gettingStartedTutorials = [
  {
    imageSrc: '/images/1.mp4',
    tag: 'Introduction',
    title: 'UI kit for chat overview',
  },
  {
    imageSrc: '/images/3.mp4',
    tag: 'Tutorial',
    title: 'Build your bot in 2 steps',
  },
  {
    imageSrc: '/images/v5.mp4',
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
  console.log('basicTutorials',basicTutorials)
  return (
    <main className="flex flex-col px-12 py-20 max-md:px-5">
      <h1 className="mt-5 text-5xl font-bold tracking-tighter text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Welcome to <br /> Help Center 👋
      </h1>
      <h2 className="mt-4 text-3xl leading-9 text-white max-md:max-w-full">
        Resources
      </h2>
      <section className="flex gap-5 py-2.5 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
        {resources.map((resource, index) => (
          <Link key={index} href={resource.link} className="flex w-full">
            <div className="w-full">
              <ResourceCard
                key={index}
                available={resource.available}
                title={resource.title}
                iconSrc={resource.iconSrc}
              />
              {resource.available == false && (
                <div
                  className={`my-auto.ml-1 mt-1 text-center opacity-70 text-xs text-[color:var(--sds-color-text-brand-on-brand)]`}
                >
                  Coming Soon
                </div>
              )}
            </div>
          </Link>
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
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
            <video
              className="grow w-full rounded-xl border border-solid aspect-[1.52] border-neutral-700 max-md:mt-5"
              loop
              controls
              muted
            >
              <source src={tutorial.imageSrc} type="video/mp4"/>
            </video>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HelpCenter;
