// import React from 'react'
// import { RiCalendarScheduleLine } from "react-icons/ri";

// function Eventcards({ image, title, price, duration }) {
//   return (
//     <>
//      <div className="max-w-[370px] rounded-lg  overflow-hidden shadow-lg bg-white hover:cursor-pointer">

//             <div className='overflow-hidden  '>
//             <img className="  object-cover" src={image} alt={title} />
//             </div>
            
//             <div className="px-6 py-6">
//                 <div className="font-semibold text-orange-700 text-[14px] mb-2">{title}</div>
//                 <div className='flex gap-1 items-center'>
//                     <p className="text-gray-600 text-sm">
//                         From <span className="font-bold">
//                         €  {price}/- &nbsp; 
//                                     </span> 
//                     </p>
//                     <p className="text-gray-600 text-sm font-bold flex items-center mt-1">
//                         <i className="fas fa-calendar-alt mr-2"></i> <span className=''><RiCalendarScheduleLine size={18} /> </span> {duration}
//                     </p>
//                 </div>
                
//             </div> 
//         </div>
//     </>
//   )
// }

// export default Eventcards
import React from 'react';
import { motion } from 'framer-motion';
import { RiCalendarScheduleLine } from "react-icons/ri";

function Eventcards({ image, title, price, duration }) {
  return (
    <>
      <motion.div 
        className="max-w-[370px] rounded-lg overflow-hidden shadow-lg bg-white hover:cursor-pointer"
        whileHover={{ scale: 1.05 }} // The magnifying effect on hover
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className='overflow-hidden'>
          <motion.img 
            className="object-cover"
            src={image}
            alt={title}
            whileHover={{ scale: 1.1 }} // Zoom-in effect on the image itself
            // transition={{ type: "elastic", stiffness: 100 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            // transition={{ type: "inertia", velocity: 200, bounceStiffness: 300, bounceDamping: 10 }}


          />
        </div>
            
        <div className="px-6 py-6">
          <div className="font-semibold text-orange-700 text-[14px] mb-2">{title}</div>
          <div className='flex gap-1 items-center'>
            <p className="text-gray-600 text-sm">
              From <span className="font-bold">€ {price}/- &nbsp;</span> 
            </p>
            <p className="text-gray-600 text-sm font-bold flex items-center mt-1">
              <span className='mr-2'><RiCalendarScheduleLine size={18} /></span> {duration}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Eventcards;
