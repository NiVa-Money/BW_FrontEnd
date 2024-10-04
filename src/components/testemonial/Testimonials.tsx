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
      '“Botwot\'s recommendation engine has been a game-changer for our platform. It\'s like having a personal beauty assistant that knows our users better than we do.”',
    img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b7ad23889c1acca2a12804f00c11b12980fc398725762c81489fd00c54554c07?apiKey=555c811dd3f44fc79b6b2689129389e8&',
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
    img: '/images/testPhoto4.jpg',
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
    <div className="flex flex-col w-screen items-start p-16 max-md:px-5">
      <h2 className="text-2xl font-semibold tracking-tight leading-7 text-gray-100">
        Testimonials
      </h2>
      <p className="mt-2 text-xl leading-6 text-zinc-500">See What Our Users Say</p>
      <div className="mt-12 w-full max-w-3xl mx-auto relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="flex flex-col items-center p-8 bg-white bg-opacity-10 rounded-lg">
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
                dotIndex === currentIndex % testimonials.length ? 'bg-white' : 'bg-gray-500'
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
