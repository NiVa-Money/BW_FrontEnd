import React from 'react';

interface CardProps {
    image: string;
    title: string;
    subTitle: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, title, subTitle, description }) => {
    return (
        <div className="bg-black text-white rounded-lg p-8 w-96 shadow-lg border border-gray-500">
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
                <img src={image} alt={`${title} icon`} className="h-24" />
            </div>

            <p className="text-sm text-gray-300">{description}</p>
            <div className="flex justify-between mt-4">
                <button
                    className="text-white px-6 py-3 rounded-full border-2 border-white bg-transparent"
                >
                    Export
                </button>

                <button className="text-white px-6 py-3 rounded-full" style={{ backgroundColor: '#3F2181' }}>
                    Enabled
                </button>

            </div>
        </div>
    );
};

export default Card;
