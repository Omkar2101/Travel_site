// import React from 'react';

// const Gallery = () => {
 
//   const images=[
//     //   './Complementry/Jeep_safari/1.jpg',
//     './Complementry/Block_Printing/Block_paint/5.jpg',
//       './Complementry/Jeep_safari/2.jpg',
//       './Complementry/Block_Printing/Block_paint/1.jpg',
//       './Complementry/Jeep_safari/3.jpg',
//       './Complementry/Jeep_safari/7.jpg',
//       './Complementry/Jeep_safari/5.jpg',
//       './Complementry/Jeep_safari/photo2jpg.jpg',
        
// ]
 
//   return (
//     <div className="container mx-auto my-10 px-4">
//       {/* <h2 className="text-4xl font-bold text-center mb-8">Traveller Gallery</h2> */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {/* Image 1 */}
//         <div className="relative overflow-hidden rounded-lg row-span-2">
//           <img
//             src={images[6]}
//             alt="Traveller 1"
//             className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
//           />
//         </div>

//         {/* Image 2 */}
//         <div className="relative overflow-hidden rounded-lg col-span-2">
//           <img
//             src={images[1]}
//             alt="Traveller 2"
//             className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
//           />
//         </div>

//         {/* Image 3 */}
//         <div className="relative overflow-hidden rounded-lg row-span-2">
//           <img
//             src={images[2]}
//             alt="Traveller 3"
//             className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
//           />
//         </div>

//         {/* Image 4 */}
//         <div className="relative overflow-hidden rounded-lg">
//           <img
//             src={images[0]}
//             alt="Traveller 4"
//             className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
//           />
//         </div>

//         {/* Image 5 */}
//         <div className="relative overflow-hidden rounded-lg">
//           <img
//             src={images[4]}
//             alt="Traveller 5"
//             className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
//           />
//         </div>

//         {/* Image 6 */}
//         <div className="relative overflow-hidden rounded-lg col-span-2">
//           <img
//             src={images[5]}
//             alt="Traveller 6"
//             className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
//           />
//         </div>
//          {/* Image 6 */}
//          <div className="relative overflow-hidden rounded-lg col-span-2">
//           <img
//             src={images[3]}
//             alt="Traveller 6"
//             className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;


import React from 'react';

const Gallery = () => {
  const images = [
    './Complementry/Block_Printing/Block_paint/5.jpg',
    './Complementry/Jeep_safari/2.jpg',
    './Complementry/Block_Printing/Block_paint/1.jpg',
    './Complementry/Jeep_safari/3.jpg',
    './Complementry/Jeep_safari/7.jpg',
    './Complementry/Jeep_safari/5.jpg',
    './Complementry/Jeep_safari/photo2jpg.jpg',
  ];

  return (
    <div className="container mx-auto my-10 px-4 sm:overflow-auto sm:h-auto overflow-y-scroll h-[calc(90vh-80px)]">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-lg ${index === 0 ? 'row-span-2' : ''}`}
          >
            <img
              src={image}
              alt={`Traveller ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;