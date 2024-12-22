// import React from 'react';
// import { motion } from 'framer-motion';
// import Footer from "../components/Footer";
// import Sidebar from '../components/Sidebar';
// import Ratansinghimg from "../assets/RatanSingh.jpg"
// import Nirbhaysinghimg from "../assets/NirbhaySingh.png"
// import TimelineAbout from '../components/TimelineAbout';

// const AboutUs = () => {

//   const timelineEvents = [
//     {
//       imgSrc: './assets/img/timeline-img-1.jpg',
//       title: 'Bootstrap 5',
//       subtitle: 'Active Support',
//       description: 'Powerful, extensible, and feature-packed frontend toolkit...',
//       updatedAt: '3 mins ago'
//     },
//     {
//       imgSrc: './assets/img/timeline-img-2.jpg',
//       title: 'Bootstrap 4',
//       subtitle: 'No Active Support',
//       description: 'Get started with Bootstrap...',
//       updatedAt: '2 months ago'
//     },
//     {
//       imgSrc: './assets/img/timeline-img-3.jpg',
//       title: 'Bootstrap 3',
//       subtitle: 'No Active Support',
//       description: 'Bootstrap is the most popular...',
//       updatedAt: '1 year ago'
//     },
//     {
//       imgSrc: './assets/img/timeline-img-4.jpg',
//       title: 'Bootstrap 2',
//       subtitle: 'No Active Support',
//       description: 'Sleek, intuitive, and powerful...',
//       updatedAt: '2 years ago'
//     }
//   ];
//   return (
//     <div className='overflow-x-hidden'>
//       <div className='z-20 absolute top-8 right-10 '>
//             <Sidebar></Sidebar>
//           </div>
//       <div className="relative">
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Background"
//             className="w-full h-96 object-cover"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="relative max-w-7xl mx-auto py-20 px-6">
//           <motion.div
//             className="text-center mb-20"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ type: "spring", stiffness: 100, damping: 20 }}
//           >
//             <h1 className="text-[60px] font-qwitcher-grypen-bold font-extrabold text-gray-800 mb-12">
//               Welcome to <span className="">Bonjour Inde Voyage</span>
//             </h1>
//             <p className="text-2xl font-quicksand font-semibold text-gray-800">
//               Where your journey through India becomes an unforgettable experience with a dedicated professional with over 25 years in international tourism, our company is rooted in a legacy of passion and expertise.
//             </p>
//           </motion.div>

//           {/* Our Mission Card */}
//           <motion.div
//             className="bg-white shadow-lg font-quicksand rounded-lg p-20 mb-10"
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ type: "spring", stiffness: 100, damping: 20 }}
//           >
//             <h2 className="text-4xl font-semibold text-gray-800 mb-4">
//               Our Mission
//             </h2>
//             <p className="text-lg text-gray-700">
//               At Bonjour Inde Voyage, our mission is simple: to be the most honest and trustworthy platform for international travelers. We aim to create a safe space where you can explore India’s wonders with confidence and joy. From the vibrant landscapes of Rajasthan to the serene beauty of Kerala, and from the historic charm of Agra to the breathtaking vistas of Kashmir, we offer group tours that showcase the best of India. We also cater to independent and private travelers, as well as corporate and educational groups upon request.
//             </p>
//           </motion.div>

//           {/* Meet Our Team Section */}
//           <motion.div
//             className="text-center font-quicksand mb-16"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ type: "spring", stiffness: 100, damping: 20 }}
//           >
//             <h2 className="text-4xl font-semibold font-quicksand text-gray-800 mb-8">
//               Meet Our Dedicated Team
//             </h2>
//           </motion.div>

       

           
//           {/* </div> */}  
//           <TimelineAbout  />
//           {/* What Sets Us Apart Card */}
//           <motion.div
//             className="bg-white shadow-lg font-quicksand rounded-lg p-20 mb-12 flex flex-col md:flex-row items-center"
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ type: "spring", stiffness: 100, damping: 20 }}
//           >
//             <div className="md:w-1/2 md:pr-10">
//               <h2 className="text-4xl font-semibold text-gray-800 mb-4">
//                 What Sets Us Apart
//               </h2>
//               <p className="text-lg text-gray-700">
//                 What sets us apart is our family-operated approach. We believe in transparency and integrity—there are no hidden fees, only genuine, memorable experiences. Our goal is to make you feel like part of our family, creating lifelong friendships and cherished memories.
//               </p>
//             </div>
//             <div className="md:w-1/2">
//               <img
//                 src="https://images.pexels.com/photos/14247658/pexels-photo-14247658.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="What Sets Us Apart"
//                 className="w-full h-auto rounded-lg"
//               />
//             </div>
//           </motion.div>

//           {/* Our Commitment to Community Card */}
//           <motion.div
//             className="bg-gray-600 shadow-lg font-quicksand rounded-lg p-20 mb-12"
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ type: "spring", stiffness: 100, damping: 20 }}
//           >
//             <h2 className="text-4xl font-semibold text-gray-800 mb-4">
//               Our Commitment to Community
//             </h2>
//             <p className="text-lg text-white">
//               Our diverse clientele includes travelers from France, Italy, the USA, Australia, and Spain. We are proud to give back to the community by donating bicycles, books, and stationery to underprivileged children in small villages, reflecting our commitment to positivity and trust.
//             </p>
//           </motion.div>
 
//           <motion.p
//             className="text-lg font-quicksand text-gray-800 mt-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ type: "spring", stiffness: 100, damping: 20 }}
//           >
//             Ready to start your adventure? Let’s make your journey memorable together!
//           </motion.p>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default AboutUs;
import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Footer";
import Sidebar from '../components/Sidebar';
import TimelineAbout from '../components/TimelineAbout';

const AboutUs = () => {

  return (
    <div className="overflow-x-hidden">
      <div className="z-20 absolute top-8 right-10">
        <Sidebar />
      </div>
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="relative max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h1 className="text-3xl sm:text-[60px] font-qwitcher-grypen-bold font-extrabold text-gray-800 mb-6 sm:mb-12">
              Welcome to <span>Bonjour Inde Voyage</span>
            </h1>
            <p className="text-lg sm:text-2xl font-quicksand font-semibold text-gray-800">
              Where your journey through India becomes an unforgettable experience with a dedicated professional with over 25 years in international tourism, our company is rooted in a legacy of passion and expertise.
            </p>
          </motion.div>

          {/* Our Mission Card */}
          <motion.div
            className="bg-white shadow-lg font-quicksand rounded-lg p-6 sm:p-10 lg:p-20 mb-6 sm:mb-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              At Bonjour Inde Voyage, our mission is simple: to be the most honest and trustworthy platform for international travelers. We aim to create a safe space where you can explore India’s wonders with confidence and joy. From the vibrant landscapes of Rajasthan to the serene beauty of Kerala, and from the historic charm of Agra to the breathtaking vistas of Kashmir, we offer group tours that showcase the best of India. We also cater to independent and private travelers, as well as corporate and educational groups upon request.
            </p>
          </motion.div>

          {/* Meet Our Team Section */}
          <motion.div
            className="text-center font-quicksand mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 sm:mb-8">
              Meet Our Dedicated Team
            </h2>
          </motion.div>

          {/* Timeline */}
          <TimelineAbout />

          {/* What Sets Us Apart Card */}
          <motion.div
            className="bg-white shadow-lg font-quicksand rounded-lg p-6 sm:p-10 lg:p-20 mb-6 sm:mb-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800 mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                What sets us apart is our family-operated approach. We believe in transparency and integrity—there are no hidden fees, only genuine, memorable experiences. Our goal is to make you feel like part of our family, creating lifelong friendships and cherished memories.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/14247658/pexels-photo-14247658.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="What Sets Us Apart"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          {/* Our Commitment to Community Card */}
          <motion.div
            className="bg-gray-600 shadow-lg font-quicksand rounded-lg p-6 sm:p-10 lg:p-20 mb-6 sm:mb-12"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-4">
              Our Commitment to Community
            </h2>
            <p className="text-base sm:text-lg text-white">
              Our diverse clientele includes travelers from France, Italy, the USA, Australia, and Spain. We are proud to give back to the community by donating bicycles, books, and stationery to underprivileged children in small villages, reflecting our commitment to positivity and trust.
            </p>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg font-quicksand font-bold text-gray-800 mt-6 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            Ready to start your adventure? Let’s make your journey memorable together!
          </motion.p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
