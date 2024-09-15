import React from 'react';
import Card from './cards';

const Integration = () => {
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

            <div className="flex justify-center gap-32 mt-10">
                <Card
                    image="/images/whatsappimg.png"
                    title="Whatsapp"
                    subTitle="Integration"
                    description="Seamlessly integrate WhatsApp to stay connected with your customers in real-time, facilitating communication and enhancing user experience."
                />
                <Card
                    image="/images/celanderImg.png"
                    title="Calendar"
                    subTitle="Integration"
                    description="Integrate your calendar to streamline scheduling, manage appointments, and never miss an important event or meeting."
                />

            </div>
        </>
    )
}

export default Integration;
