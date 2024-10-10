import React from 'react';
import Whats from "../assets/whatsapp.png"
const WhatsApp = ({ phoneNumber, message }) => {
  // Format the WhatsApp URL
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    
         <a
      aria-label="Chat on WhatsApp"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center   bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600 transition-colors"
    >
      {/* You can use an SVG or PNG image for the button */}
      <img
        alt="Chat on WhatsApp"
        src={Whats} // Make sure this path is correct
        className="w-12 h-12 "
      />
      
    </a>


   
  );
};

export default WhatsApp;
