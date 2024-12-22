import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const PackageSelector = ({eventName, amount}) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleBookNowClick = () => {
    // console.log(eventName)
      navigate('/participents', { state: {amount, eventName } });
    
  };
 
  
  return (
    <div className="px-4 md:px-40 font-quicksand bg-white">
      
        <div className='flex flex-row justify-between items-center p-3'>
         
          <div className="flex md:flex-row flex-col md:gap-2 gap-1 items-center">
            <h1 className="md:text-lg text-sm">From €{amount} / person</h1>
  
          </div>
          <button
            type="button"
            onClick={() => handleBookNowClick()}
            className="font-quicksand text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
          >
            Book Now
          </button>
        </div>
    </div>
  );
};

export default PackageSelector;
