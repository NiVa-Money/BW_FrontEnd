import React from 'react';

interface CardProps {
    image: string;
    title: string;
    subTitle: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, title, subTitle, description }) => {
    return (
        <div className="bg-black text-white rounded-lg p-6 md:p-8 w-full sm:w-80 md:w-96 shadow-lg border border-gray-500 mx-auto my-4">
            <div className="flex items-center mb-4">
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-400">{subTitle}</p>
                </div>
                <div className="ml-auto">
                    <button className="text-gray-400">
                        ...
                    </button>
                </div>
            </div>
            <div className="flex justify-center mb-4">
                <img src={image} alt={`${title} icon`} className="h-24 object-contain" />
            </div>

            <p className="text-sm text-gray-300">{description}</p>
            <div className="flex justify-between mt-4">
                <button
                    className="text-white text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-white bg-transparent"
                >
                    Contact support
                </button>

                <button
                    className="text-white text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full"
                    style={{ backgroundColor: '#3F2181' }}
                >
                    Export
                </button>
            </div>

        </div>
    );
};

export default Card;
