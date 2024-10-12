import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

interface ContentCardPropsType {
  img: string;
  title: string;
  description: string;
  readTime: string;
}

function ContentCard({ img, title, description, readTime }: ContentCardPropsType) {
  return (
    <Card
      className="relative grid h-full rounded-xl"
      sx={{
        width: '100%',
        maxWidth: '30rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'black',
        border: '1px solid rgba(255, 255, 255, 0.3)', 
      }}
    >
      <img
        src={img}
        alt={title}
        className="h-50 w-full object-cover"
      />
      <CardContent className="flex flex-col p-4 justify-start items-start">
        <Typography
          variant="body2"
          className="text-[#AEB9E1] mb-2"
        >
          {readTime} min read
        </Typography>
        <Typography
          variant="h6"
          className="font-bold mb-4 text-white"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
         className="text-[#AEB9E1] mt-4"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

const contents = [
  {
    img: "/images/blog1.jpg",
    title: "Making AI Accessible with BotWot",
    description: "In the rapidly evolving landscape of artificial intelligence, one challenge has remained persistent: making AI technology accessible to businesses of all sizes",
    readTime: "2",
  },
  {
    img: "/images/blog2.jpg",
    title: "No-Code Revolution in Customer Engagement",
    description: "In the digital age, customer engagement is the lifeblood of business success. As consumer expectations evolve, companies are increasingly turning to AI-powered chatbots to meet these demands.",
    readTime: "5",
  },
  {
    img: "/images/blog3.jpg",
    title: "Breaking Language Barriers with BotWot",
    description: "In our increasingly globalized world, businesses face a growing challenge: providing seamless customer service across multiple languages.",
    readTime: "3",
  },
  {
    img: "/images/blog4.jpg",
    title: "Affordable AI: BotWot's Cost-Effective Approach",
    description: "In the rapidly evolving landscape of artificial intelligence, one of the most significant barriers to adoption has been the cost.",
    readTime: "5",
  },
];

const Blog = () => {
  return (
    <div className="py-16">
      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center ">
          <Typography
            variant="h3"
            className="text-white font-extrabold mb-8 text-center"
          >
            Build something great With BotWot!
          </Typography>
          <Typography
            variant="body1"
            className="text-[#AEB9E1] max-w-2xl mb-14 text-center"
          >
            To democratize AI-powered customer engagement by providing an intuitive, no-code platform that enables businesses of all sizes to create, deploy, and evolve intelligent chatbots.
          </Typography>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {contents.map((content, index) => (
              <ContentCard key={index} {...content} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

