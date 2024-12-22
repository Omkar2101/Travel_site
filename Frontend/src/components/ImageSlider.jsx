import React, { useRef, useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);
  const [showArrows, setShowArrows] = useState({ left: false, right: true });

  useEffect(() => {
    const updateArrowVisibility = () => {
      const slider = sliderRef.current;
      if (!slider) return; // Early return if slider is null
      const isAtStart = slider.scrollLeft === 0;
      const isAtEnd = slider.scrollWidth <= slider.clientWidth + slider.scrollLeft + 1;
  
      setShowArrows({
        left: !isAtStart,
        right: !isAtEnd,
      });
    };
   
    const handleResize = () => updateArrowVisibility();
    const handleScroll = () => updateArrowVisibility();
  
    const slider = sliderRef.current;
  
    if (slider) {
      window.addEventListener('resize', handleResize);
      slider.addEventListener('scroll', handleScroll);
  
      updateArrowVisibility(); // Initial check
    }
  
    return () => {
      if (slider) {
        window.removeEventListener('resize', handleResize);
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  

  const scroll = (direction) => {
    const scrollAmount = 300; // Adjust the scroll amount as needed
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex items-center">
        {showArrows.left && (
          <button
            onClick={() => scroll('left')}
            className="absolute md:w-15 w-10 h-10 md:h-15 left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-full z-10 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
            </svg>

          </button>
        )}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto whitespace-nowrap scrollbar-hide w-full gap-2 mx-5"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="w-80 h-40 object-cover flex-shrink-0 rounded-xl"
            />
          ))}
        </div>
        {showArrows.right && (
            <div onClick={() => scroll('right')}
            className="absolute md:w-15 w-10 h-10 md:h-15 right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-full z-10 flex items-center justify-center"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5" >
                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
            </svg>
            </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
