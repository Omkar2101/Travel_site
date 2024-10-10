import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faUtensils, faCampground, faFirstAid, faBusAlt } from '@fortawesome/free-solid-svg-icons';


const places=[
    {imageUrl:"https://images.unsplash.com/photo-1667849357658-16bfaec30885?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D",heading:"The Golden Triangle" },
    {imageUrl:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHRvdXJpc3QlMjBwbGFsY2VzJTIwaW5kaWF8ZW58MHwwfDB8fHww",heading:"Grand Rajasthan et Taj"},
    {imageUrl:"https://plus.unsplash.com/premium_photo-1661963369594-9b25cd53be4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGJlYXV0aWZ1bCUyMHRvdXJpc3QlMjBwbGFsY2VzJTIwaW5kaWF8ZW58MHwwfDB8fHww",heading:"Palais et temples : Khajurao, Orcha et Gwalior"},
    {imageUrl:"https://images.unsplash.com/photo-1706961121783-4ae6c933983a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF3YSUyMG1haGFsJTIwamFpcHVyJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",heading:"Villes sacrées du Gange : édition Varanasi"}
]


// export default EventCard;
const EventCard = ({ imageUrl, heading,onClick }) => {
  return (
    <div onClick={onClick} className="max-w-lg rounded-xl overflow-hidden shadow-lg relative cursor-pointer">
      {/* Background Image */}
      <img
        className="w-full h-[400px] object-cover"
        src={imageUrl}
        alt={heading}
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      {/* Title */}
      <div className="absolute top-6 w-full text-center">
        <h1 className="text-white p-2  text-[50px] font-semibold  font-dancing-script -tracking-wider lineheight leading-tight">
          {heading}
        </h1>
      </div>
      {/* Icons */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-6 text-white">
        <i className=" text-lg"></i>
        <i className=" text-lg"></i>
        <i className=" text-lg"></i>
        <i className=" text-lg"></i>
      </div>
    </div>
  );
};

export default EventCard;

