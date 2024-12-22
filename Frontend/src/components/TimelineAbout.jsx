// import React from "react";
// import Nirbhaysinghimg from "../assets/NirbhaySingh.png"
// import Ratansinghimg from "../assets/RatanSingh.jpg"
// import TimelineAbout from '../components/TimelineAbout';
// const Timeline = () => {
//   const timelineItems = [
//     {
//       id: 1,
//       side: "right",
//       bgColor: "bg-gray-400",
//       img: Ratansinghimg, // Image URL for section 1
//     },
//     {
//       id: 2,
//       side: "left",
//       bgColor: "bg-gray-600",
//       title: "Ratan Singh",
//       description:
//         " A French language expert and seasoned Francophone guide with over 25 years of experience. Ratan's journey began in Jaisalmer, Rajasthan, and led him to France at a young age, where he developed his travel expertise.",
//     },
//     {
//       id: 3,
//       side: "right",
//       bgColor: "bg-gray-800",
//       img: Nirbhaysinghimg, // Image URL for section 3
//     }, 
//     {
//       id: 4,
//       side: "left",
//       bgColor: "bg-gray-600",
//       title: "Nirbhay Singh",
//       description:
//         " Founder of Bonjour Inde Voyage, manages hotel bookings, customer communications, and overall operations.",
//     },
//   ];

//   return (
//     <div className="container font-quicksand  mx-auto w-full h-full">
//       <div className="relative wrap overflow-hidden p-10 h-full">
//         <div
//           className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
//           style={{ left: "50%" }}
//         ></div>

//         {timelineItems.map((item) => (
//           <div
//             key={item.id}
//             className={`mb-8 flex justify-between items-center w-full ${
//               item.side === "right" ? "right-timeline" : "flex-row-reverse left-timeline"
//             }`}
//           >
//             <div className="order-1 w-5/12"></div>
//             <div className="z-20 flex items-center order-1 bg-gray-600 shadow-xl w-8 h-8 rounded-full">
//               <h1 className="mx-auto font-semibold text-lg text-white">{item.id}</h1>
//             </div>
//             <div className={`order-1 ${item.bgColor} rounded-lg shadow-xl w-5/12 `}>
//               {item.img ? (
//                 <img src={item.img} alt={`Timeline item ${item.id}`} className="w-full h-auto rounded-lg" />
//               ) : (
//                 <>
//                 <div className=" h-[300px] rounded-xl p-6 font-quicksand">
//                 <h3 className={`mb-3 font-bold ${item.side === "right" ? "text-gray-800" : "text-white"} text-2xl font-bold `}>
//                     {item.title}
//                   </h3>
//                   <p className={`text-xl ${item.side === "right" ? "text-gray-900" : "text-white"} leading-snug`}>
//                     {item.description}
//                   </p>
//                 </div>
                
//                 </>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;

import React from "react";
import Nirbhaysinghimg from "../assets/NirbhaySingh.png";
import Ratansinghimg from "../assets/RatanSingh.jpg";

const Timeline = () => {
  const timelineItems = [
    {
      id: 1,
      side: "right",
      bgColor: "bg-gray-400",
      img: Ratansinghimg,
    },
    {
      id: 2,
      side: "left",
      bgColor: "bg-gray-600",
      title: "Ratan Singh",
      description:
        "A French language expert and seasoned Francophone guide with over 25 years of experience. Ratan's journey began in Jaisalmer, Rajasthan, and led him to France at a young age, where he developed his travel expertise.",
    },
    {
      id: 3,
      side: "right",
      bgColor: "bg-gray-800",
      img: Nirbhaysinghimg,
    },
    {
      id: 4,
      side: "left",
      bgColor: "bg-gray-600",
      title: "Nirbhay Singh",
      description:
        "Founder of Bonjour Inde Voyage, manages hotel bookings, customer communications, and overall operations.",
    },
  ];

  return (
    <div className="container font-quicksand mx-auto w-full h-full px-4 sm:px-10">
      <div className="relative wrap overflow-hidden py-10">
        {/* Vertical line in the middle */}
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          style={{ left: "50%" }}
        ></div>

        {timelineItems.map((item) => (
          <div
            key={item.id}
            className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${
              item.side === "right" ? "right-timeline" : "md:flex-row-reverse left-timeline"
            }`}
          >
            {/* Spacing div for empty side */}
            <div className="order-1 w-0 md:w-5/12"></div>

            {/* Timeline number */}
            <div className="z-20 flex items-center order-1 bg-gray-600 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">{item.id}</h1>
            </div>

            {/* Timeline card */}
            <div
              className={`order-1 ${item.bgColor} rounded-lg shadow-xl w-full md:w-5/12 ${
                item.img ? "p-0" : "p-4 sm:p-6"
              }`} // p-0 for images, p-4 for text content
            >
              {item.img ? (
                <img
                  src={item.img}
                  alt={`Timeline item ${item.id}`}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <>
                  <div className="h-auto rounded-xl p-4 sm:p-6">
                    <h3
                      className={`mb-3 font-bold ${
                        item.side === "right" ? "text-gray-800" : "text-white"
                      } text-lg sm:text-2xl`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-xl ${
                        item.side === "right" ? "text-gray-900" : "text-white"
                      } leading-snug`}
                    >
                      {item.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
