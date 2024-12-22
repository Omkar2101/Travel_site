// src/components/ImageGallery.jsx
import React from 'react';

// Image data (you can use your own image URLs)
const images = [
  { id: 1, url: 'https://via.placeholder.com/600x400', title: 'Image 1' },
  { id: 2, url: 'https://via.placeholder.com/600x400', title: 'Image 2' },
  { id: 3, url: 'https://via.placeholder.com/600x400', title: 'Image 3' },
  { id: 4, url: 'https://via.placeholder.com/600x400', title: 'Image 4' },
  { id: 5, url: 'https://via.placeholder.com/600x400', title: 'Image 5' },
  { id: 6, url: 'https://via.placeholder.com/600x400', title: 'Image 6' },
];
 
const Componentimg = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{image.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Componentimg;
