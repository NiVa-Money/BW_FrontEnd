import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

interface ContentCardPropsType {
  img: string;
  title: string;
  desc: string;
}

function ContentCard({ img, title, desc }: ContentCardPropsType) {
  return (
    <Card
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />
      <CardContent className="relative flex flex-col justify-end">
        <Typography variant="h4" color="white">
          {title}
        </Typography>
        <Typography color="white" className="my-2 font-normal">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

const contents = [
  {
    img: "/images/blog1.png",
    title: "What is a Knowledge Base",
    desc: "A knowledge base is a central repository for BotWot chatbot, offering FAQs, product information, company policies, and pre-written scripts, ensuring efficient and accurate responses to customer inquiries, enhancing the overall customer support experience.",
  },
  {
    img: "/images/blog2.png",
    title: " Enhance E-commerce Customer Service with a 24/7 Support Bot",
    desc: "Integrate a 24/7 BotWot chatbot into your e-commerce site to manage high volumes of customer inquiries. It handles order tracking, product recommendations, returns, and FAQs, improving customer satisfaction, increasing sales, and reducing operational costs.",
  },
  {
    img: "/images/blog3.png",
    title: "The Benefits of AI Chatbots for Businesses",
    desc: "Harness BotWot.io's no-code platform for revolutionizing customer service with 24/7 chatbot support, driving sales through engaging customer interactions, and optimizing operations for enhanced efficiency and cost savings.",
  },
];

const Blog = () => {
  return (
    <div>
      <section className="container mx-auto px-8 py-10 lg:py-28">
        <Typography
          variant="h2"
          color="blue-gray"
          className="!text-2xl !leading-snug lg:!text-3xl"
        >
          Build something great With BotWot !
        </Typography>
        <Typography className="mt-2 max-w-lg !font-normal !text-gray-500">
          To democratize AI-powered customer engagement by providing an intuitive, no-code platform that enables businesses of all sizes to create, deploy, and evolve intelligent chatbots.
        </Typography>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {contents.map(({ img, title, desc }) => (
            <ContentCard key={title} img={img} title={title} desc={desc} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
