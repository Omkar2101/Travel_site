import React from 'react';
import RazorpayButton from '../components/RazorpayGatewaybtn';
import RazorpayGatewaybtn from '../components/RazorpayGatewaybtn';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Logo from "../assets/Logoo.svg";
const CheckoutPage = () => {

    
  const location = useLocation();
  const totalamount  = location.state || {};
  console.log('Amount is: ', totalamount)
  const amountToPay =totalamount

  return (
    <>
    
    <div className='overflow-x-hidden font-quicksand'>
        
        <div className='bg-zinc-800 relative text-white w-screen p-12 h-[250px]'>
          <div className='flex items-center justify-between'>
            <div className='h-[50px] w-[70px]'>
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className='z-20 absolute top-8 right-10'>
            <Sidebar />
          </div>
          <div className='text-orange-500 mt-6'>
            <h1 className='text-4xl'>Payment </h1>
            <h1>Please read all the details carefully before doing the payment</h1>
          </div>
        </div>
        {/* Adjusted card size and padding */}
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8">
            <h1 className='text-xl font-bold mb-4 '>1.Pay using the Razorpay </h1>
        <RazorpayGatewaybtn amount={amountToPay} />
        <h1 className='text-xl font-bold  mt-6'>2.Pay Manually </h1>
          <div className="p-6">
            
            <h2 className="text-2xl font-semibold mb-2">Account Details</h2>
            <div className="mb-4">
              <p className="text-gray-700"><strong>Account Holder Name:</strong> John Doe</p>
              <p className="text-gray-700"><strong>Account Number:</strong> 1234567890123456</p>
              <p className="text-gray-700"><strong>Bank Name:</strong> XYZ Bank</p>
              <p className="text-gray-700"><strong>IFSC Code:</strong> XYZB0001234</p>
              <p className="text-gray-700"><strong>Phone Number:</strong> +1-234-567-8901</p>
              <p className="text-gray-700"><strong>Amount:</strong>  €</p>
              
            </div>
            <h1 className='text-red-400 font-semibold'>*Please share the screenshot of payment to the provided mobile number</h1>
            
            {/* <CheckoutPage></CheckoutPage> */}
        
              
    
          </div>
        </div>
      </div>
    
    </>
  
  );
};

export default CheckoutPage;
