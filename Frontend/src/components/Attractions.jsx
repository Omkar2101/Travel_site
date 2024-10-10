import React, { memo } from 'react';

const AttractionCard = memo(({ img, tagName }) => {
    return (
        <div className="w-full h-50 md:w-full md:h-50 flex flex-col items-center">
            <img src={img} alt={tagName} className="w-full h-full rounded-lg" loading="lazy" />
            <h1 className="font-medium mt-2">{tagName}</h1>
        </div>
    );
});

const Attractions = ({ attractions }) => {
    return (
        <div className="px-4 md:px-40 font-quicksand bg-gray-100 pb-10 pt-10">
            <h1 className="text-2xl text-orange-600 pt-5 pb-5 font-semibold">Attractions</h1>
            <div className="flex flex-col lg:flex-row gap-10">
                {attractions.map((source, index) => (
                    <AttractionCard key={index} img={source.img} tagName={source.tagName} />
                ))}
            </div>
        </div>
    );
};



export default Attractions;
