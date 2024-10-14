'use client';

import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  quote: string;
  img: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Arthi Benjaram',
    quote:
      "“Botwot's recommendation engine has been a game-changer for our platform. It's like having a personal beauty assistant that knows our users better than we do.”",
    img: '/images/bot1.svg',
  },
  {
    name: 'Rishabh Agarwal',
    quote:
      '"BotWot has revolutionized our customer service. It\'s like having a 24/7 personal trainer helping customers find the perfect products."',
    img: '/images/bot1.svg',
  },
  {
    name: 'Swapnil',
    quote:
      '"BotWot\'s AI capabilities have been instrumental in refining our makeup recommendations, providing a truly personalized experience for our customers."',
    img: '/images/bot1.svg',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full justify-start px-4 py-14 items-center bg-black max-w-[1200px] mx-auto rounded-[20px]">
      <h2 className="text-2xl font-semibold tracking-tight leading-7 text-gray-100">
        Testimonials
      </h2>
      <p className="mt-2 text-xl leading-6 text-zinc-500">
        See What Our Users Say
      </p>
      <div className="mt-12 w-full max-w-3xl relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="flex flex-col items-center p-8 bg-[#0B031E] border-t border-l border-r border-gray-500 border-solid rounded-lg">
                  <img
                    src={testimonial.img}
                    className="w-16 h-16 rounded-full mb-4"
                    alt={`${testimonial.name}'s avatar`}
                  />
                  <p className="text-fuchsia-700 font-semibold mb-2">
                    {testimonial.name}
                  </p>
                  <blockquote className="text-xl text-gray-100 text-center font-semibold">
                    {testimonial.quote}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          {testimonials.map((_, dotIndex) => (
            <button
              key={dotIndex}
              className={`h-2 w-2 rounded-full mx-1 ${
                dotIndex === currentIndex % testimonials.length
                  ? 'bg-white'
                  : 'bg-gray-500'
              }`}
              onClick={() => setCurrentIndex(dotIndex)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
