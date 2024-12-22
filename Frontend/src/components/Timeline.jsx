import React, { memo } from 'react';

const TimelineItem = memo(({ day, image, details, heading, description }) => {
    return (
        <li className="mb-10 ms-4 font-quicksand">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full -start-1.5 border border-white dark:border-orange-600 dark:bg-orange-600"></div>
            <time className="mb-1 text-sm font-semibold text-gray-400 dark:text-gray-500 ">DAY {day}</time>
            <h3 className="text-2xl font-medium text-gray-900">{heading}</h3>
            <div className="flex flex-row items-center mt-0 font-semibold text-lg ">
                <div className='flex flex-row gap-1'>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
                    <label htmlFor={`tc-modal-${day}`} className="flex flex-row gap-1 text-orange-600 hover:text-orange-700 cursor-pointer">  
                        <h1 className="flex flex-row gap-1 text-sm mt-1 font-medium text-orange-600 hover:text-orange-700">Know more</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 mt-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </label>
                </div>
                <input type="checkbox" id={`tc-modal-${day}`} className="peer fixed appearance-none opacity-0" />
                <Modal day={day} details={details} heading={heading} />
            </div>  
            {image && (
                <div className="w-2/5 h-48 md:w-2/5 md:h-80 overflow-hidden">
                    <img src={image} alt={`Schedule for Day ${day}`} className="w-full h-full object-cover rounded-lg" loading="lazy" />
                </div>
            )} 
        </li>
    );
});

const Modal = memo(({ day, details, heading }) => {
    return (
        <label
            htmlFor={`tc-modal-${day}`}
            className="pointer-events-none invisible fixed inset-0 flex items-center justify-center bg-slate-700/30 opacity-0 transition-opacity duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100"
        >
            <div className="max-h-[calc(100vh-5em)] max-w-lg p-6 bg-white rounded-md shadow-2xl transition-transform duration-200 transform scale-90 peer-checked:scale-100">
                <div className="flex justify-between mb-4">
                    <h2 className="text-2xl font-semibold">{heading}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="h-0.5 bg-gray-200 my-4"></div>
                <div className="flex flex-col gap-3">
                    {details.map((detail, index) => (
                        <div key={index} className='flex flex-row items-center gap-2'>
                            <span className="text-lg font-semibold text-gray-700">{detail.title} </span>
                            <p  className="text-sm text-gray-500">
                                 {detail.content}
                            </p>
                        </div>
                        
                    ))}
                </div>
            </div>
        </label>
    );

    
});

const Timeline = ({ schedule }) => {
    return (
        <div className="px-4 md:px-40 mt-10">
            <h1 className="font-quicksand text-2xl text-orange-600">Schedule</h1>
            <div className="mt-5">
                <ol className="relative border-s-2">
                    {schedule.map((item, index) => (
                        <TimelineItem key={index} day={index + 1} image={item.image} details={item.details} heading={item.heading} description={item.description} />
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Timeline;
