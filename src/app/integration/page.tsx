import React from 'react';
import Card from './cards';

const Integration = () => {
    const cardGroups = [
        [
            {
                image: "/images/whatsappimg.png",
                title: "Whatsapp",
                subTitle: "Integration",
                description: "Seamlessly integrate WhatsApp to stay connected with your customers in real-time, facilitating communication and enhancing user experience."
            },
            {
                image: "/images/slack.png",
                title: "Slack",
                subTitle: "Integration",
                description: "Integrate your calendar to streamline scheduling, manage appointments, and never miss an important event or meeting."
            }
        ],
        [
            {
                image: "/images/celanderImg.png",
                title: "Calendar",
                subTitle: "Integration",
                description: "Integrate your Slack to streamline scheduling, manage appointments, and never miss an important event or meeting."
            },
            {
                image: "/images/shopify.jpg",
                title: "Shopify",
                subTitle: "Integration",
                description: "Integrate your Shopify to streamline scheduling, manage appointments, and never miss an important event or meeting."
            }
        ]
    ];
    return (
        <>
            <div className="flex flex-col justify-center items-left mt-10">
                <h1 className="mt-5 text-5xl font-bold tracking-tighter text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Enable Integrations 🤝
                </h1>
                <h2 className="mt-4 text-xl text-gray-300 text-left max-md:max-w-full max-md:text-lg">
                    Get your chatbot seamlessly connected to other systems or platforms,<br />
                    allowing it to perform specific tasks beyond just answering user queries.
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-24 mt-10 justify-center">
                {cardGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="grid grid-cols-1 gap-y-9">
                        {group.map((card, cardIndex) => (
                            <Card
                                key={cardIndex}
                                image={card.image}
                                title={card.title}
                                subTitle={card.subTitle}
                                description={card.description}
                            />
                        ))}
                    </div>
                ))}
            </div>

        </>
    )
}

export default Integration;
