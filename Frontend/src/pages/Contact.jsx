import React from 'react';
import Logo from '../assets/Logoo.svg';
import Sidebar from '../components/Sidebar';
function Contact() {
  return (
    <>
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
      <h1 className='text-2xl'>Contact Us</h1>
     
    </div>
  </div>
    <div className="flex font-quicksand justify-center items-center mt-2 px-4">
      <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Contact Us</h2>
        <p className="text-gray-600 text-sm mb-6">
          We'd love to hear from you! Feel free to reach out with any questions or feedback.
        </p>

        <div className="text-gray-700 text-lg mb-8 space-y-2">
          <p><strong>Contact Number:</strong> +91 7726990969</p>
          <p><strong>Contact Email:</strong> accueil@bonjourinde.com</p>
        </div>
        
       
      </div>
    </div>
    </>
    
  );
}

export default Contact;
