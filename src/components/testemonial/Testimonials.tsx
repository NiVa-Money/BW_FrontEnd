'use client';

import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  text: string;
  quote: string;
  img: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Deepika Manhari',
    text: '"Conversational Alchemy": Transform inquiries into magic with BotWot Chatbot Builder. 🚀🤖',
    quote: '"BotWot transformed our customer interactions from mundane to magical. With its intuitive interface and powerful AI, our chatbots now engage users like never before."',
    img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b7ad23889c1acca2a12804f00c11b12980fc398725762c81489fd00c54554c07?apiKey=555c811dd3f44fc79b6b2689129389e8&',
  },
  {
    name: 'Gati savarkar',
    text: '"Always-On Assistants Description: Meet your new round-the-clock team members. BotWot chatbots never take a coffee break—they’re always there to assist.',
    quote: '"“BotWot’s chatbots are our 24/7 virtual assistants. They handle queries, collect leads, and even crack a joke or two. A reliable team member!.”"',
    img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b7ad23889c1acca2a12804f00c11b12980fc398725762c81489fd00c54554c07?apiKey=555c811dd3f44fc79b6b2689129389e8&',
  },
  {
    name: 'Faizal ameer',
    text: '"Discover the secret sauce behind successful e-commerce: BotWot chatbots. They guide users through the buying journey, turning clicks into sales.',
    quote: '"“BotWot transformed our e-commerce game. Their chatbots engage shoppers, recommend products, and boost conversions. Sales have never been smoother.”"',
    img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b7ad23889c1acca2a12804f00c11b12980fc398725762c81489fd00c54554c07?apiKey=555c811dd3f44fc79b6b2689129389e8&',
  },

];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-start self-stretch p-16 bg-black max-md:px-5">
      <h2 className="text-2xl font-semibold tracking-tight leading-7 text-gray-100">
        Testimonials
      </h2>
      <p className="mt-2 text-xl leading-6 text-zinc-500">
        See What Our Users Say
      </p>
      <div className="mt-12 w-full max-w-3xl mx-auto relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="flex flex-col items-center p-8 bg-slate-950 rounded-lg ">
                  <img
                    src={testimonial.img}
                    className="w-16 h-16 rounded-full mb-4"
                    alt={`${testimonial.name}'s avatar`}
                  />
                  <p className="text-fuchsia-700 font-semibold mb-2">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm mb-4">{testimonial.text}</p>
                  <blockquote className="text-xl text-gray-100 text-center font-semibold">
                    {testimonial.quote}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          {[0, 1, 2].map((dotIndex) => (
            <button
              key={dotIndex}
              className={`h-2 w-2 rounded-full mx-1 ${
                dotIndex === currentIndex % 3 ? 'bg-white' : 'bg-gray-500'
              }`}
              onClick={() => setCurrentIndex(dotIndex + Math.floor(currentIndex / 3) * 3)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;