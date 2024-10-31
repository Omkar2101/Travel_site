// import React from 'react'
// import EventCard from '../components/EventCard'
// import Logo from "../assets/Logoo.svg"
// import Sidebar from '../components/Sidebar'
// import Footer from '../components/Footer'
// import Eventcards from '../components/Eventcards'
// import { useNavigate } from 'react-router-dom'
// function Events() {

//   const navigate = useNavigate();

//   const events =[
//     {
//       image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHRvdXJpc3QlMjBwbGFsY2VzJTIwaW5kaWF8ZW58MHwwfDB8fHww', // Replace with actual image URL
//       title: 'Golden Triangle',
//       price: '799',
//       duration: '8 days / 7 nights',
//       route: '/manali'
//   },
//   {
//       image: 'https://plus.unsplash.com/premium_photo-1697730421382-bc8dd92f83ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEpvZGhwdXJ8ZW58MHwwfDB8fHww', // Replace with actual image URL
//       title: 'Grand Rajasthan et Taj',
//       price: '500',
//       duration: '8 days / 7 nights',
//       route: '/manali'
//   },
//   {
//       image: 'https://images.unsplash.com/photo-1671219823697-5894526ffeb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9kaHB1cnxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URL
//       title: 'Jodhpur',
//       price: '700',
//       duration: '5 days / 4 nights',
//       route: '/manali'
//   },
//   {
//     image: 'https://images.unsplash.com/photo-1671219823697-5894526ffeb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9kaHB1cnxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URL
//     title: 'Jodhpur',
//     price: '700',
//     duration: '5 days / 4 nights',
//     route: '/manali'
// },

//   ]

//   const handleCardClick = (route) => {
//     navigate(route);
//   };


  
//   return (
//     <>
//     <div className='overflow-x-hidden'>
//     <div className="overflow-x-hidden">
//       <div className='container  w-screen  font-quicksand'>
//         <div className='bg-zinc-800 relative text-white w-screen p-12 h-[250px]'>
//           <div className='flex items-center justify-between'>
//             <div className=' h-[50px] w-[70px]'>
//               <img src={Logo} alt="" />
//             </div>
           
//           </div>
//           <div className='z-20 absolute top-8 right-10'>
//             <Sidebar></Sidebar>
//           </div>
          
//           <div className='text-orange-500 mt-6'>
//             <h1 className='text-2xl'>Events</h1>
//             <h1>Life is either a thrilling ride or a stagnant existence</h1>
//           </div>
          
        
//         </div>
//         <div className='h-screen '>
//           <div className="flex space-x-6 justify-center py-8">
//               {events.map((event, index) => (
//                   <div onClick={() => handleCardClick(event.route)}>
//                     <Eventcards key={index} {...event} />
//                   </div>
                  
//               ))}
//           </div>
//         </div>
        
//       </div>
//       <Footer></Footer>
//     </div>
//     </div>
   
//     </>
//   )
// }

// export default Events

import React from 'react';
import Eventcards from '../components/Eventcards';
import Logo from '../assets/Logoo.svg';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Events() {
  const navigate = useNavigate();

  const events = [
    {
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHRvdXJpc3QlMjBwbGFjZXMlMjBpbmRpYXxlbnwwfDB8fDB8fHww',
      title: 'Golden Triangle',
      price: '73026',
      duration: '8 days / 7 nights',
      route: '/golden-traingle',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1697730421382-bc8dd92f83ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEpvZGhwdXJ8ZW58MHwwfDB8fHww',
      title: 'Grand Rajasthan et Taj',
      price: '146235',
      duration: '14 days / 13 nights',
      route: '/grand-rajasthan',
    },
    {
      image: 'https://media.istockphoto.com/id/481494314/photo/gwalior-fort.webp?a=1&b=1&s=612x612&w=0&k=20&c=h8E5w6dI9Khz4Ny4-x8GoYqjKt2vV1IcylcOUpUJGvg=',
      title: 'Palais et temples : Khajurao, Orcha et Gwalior',
      price: '109676',
      duration: '8 days / 7 nights',
      route: '/gwalior',
    },
    {
      image: 'https://media.istockphoto.com/id/537988165/photo/varanasi.webp?a=1&b=1&s=612x612&w=0&k=20&c=12qNJSzaD01LG-v0C0VZhv6tp7HTLnGtBK-a0rvpRiw=',
      title: 'Villes sacrées du Gange : édition Varanasi',
      price: '109676',
      duration: '8 days / 7 nights',
      route: '/varanasi',
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className='overflow-x-hidden'>
        <div className='container w-screen font-quicksand'>
          <div className='bg-zinc-800 relative text-white w-screen p-12 h-[250px]'>
            <div className='flex items-center justify-between'>
              <div className='h-[50px] w-[70px]'>
                <img src={Logo} alt='' />
              </div>
            </div>
            <div className='z-20 absolute top-8 right-10'>
              <Sidebar />
            </div>
            <div className='text-orange-500 mt-6'>
              <h1 className='text-2xl'>Events</h1>
              <h1>Life is either a thrilling ride or a stagnant existence</h1>
            </div>
          </div>

          <div className='py-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
              {events.map((event, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(event.route)}
                  className='cursor-pointer'
                >
                  <Eventcards {...event} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Events;
