

// import React, { useState } from 'react';
// import { FaArrowDown } from "react-icons/fa";
// import { FaSpinner } from 'react-icons/fa'; // Import spinner icon for loading

// const RazorpayBtn = () => {
//     const [open, setOpen] = useState(false);
//     const [scriptId, setScriptId] = useState('');
//     const [isLoading, setIsLoading] = useState(false); // Add loading state

//     // Function to load the Payment button script
//     const loadPaymentScript = () => {
//         const script = document.createElement('script');
//         script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
//         script.setAttribute('data-payment_button_id', 'pl_OugzuCRgwgws8r');
//         script.async = true;
//         script.id = scriptId; // Assign the current scriptId to the script element

//         script.onload = () => {
//             setIsL oading(false); // Stop loading when script is loaded
//         };

//         document.getElementById('razorpay-button-container').appendChild(script);
//     };

//     const handlePayment = () => {
//         if (!open) {
//             const id = `razorpay-button-container`;
//             setScriptId(id);
//             setIsLoading(true); // Set loading to true when clicked
//             loadPaymentScript();
//         } else {
//             const scriptElement = document.getElementById(scriptId);
//             if (scriptElement) {
//                 scriptElement.remove();
//             }
//             setScriptId('');
//         }
//         setOpen(!open);
//     };

//     return (
//         <>
//             {/* Conditionally render the button or loading state */}
//             {open ? (
//                 isLoading ? (
//                     <button className="px-4 flex justify-center items-center gap-2 py-2 rounded-lg bg-gray-500 text-white font-semibold text-xl" disabled>
//                         Loading... <FaSpinner className="animate-spin" />
//                     </button>
//                 ) : (
//                     <button className="px-4 flex justify-center items-center gap-2 py-2 rounded-lg bg-green-600 text-white font-semibold text-xl">
//                         <p>Click Below </p><FaArrowDown />
//                     </button>
//                 )
//             ) : (
//                 <button className="px-4 py-2 rounded-lg bg-green-600 text-white font-semibold text-xl" onClick={handlePayment}>
//                     Pay via Razorpay
//                 </button>
//             )}

//             <div className="flex justify-start items-center mt-8">
//                 <form id="razorpay-button-container">
//                     {/* Razorpay button script will be appended here */}
//                 </form>
//             </div>
//         </>
//     );
// };

// export default RazorpayBtn;

import React, { useState } from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon for loading

const RazorpayBtn = () => {
    const [open, setOpen] = useState(false);
    const [scriptId, setScriptId] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Add loading state

    // Function to load the Payment button script
    const loadPaymentScript = () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.setAttribute('data-payment_button_id', 'pl_OugzuCRgwgws8r'); // Your actual payment button ID
        script.async = true;
        script.id = scriptId; // Assign the current scriptId to the script element

        // Script load event
        script.onload = () => {
            setIsLoading(false); // Stop loading when script is loaded
            console.log("Payment script loaded");
        };

        document.getElementById('razorpay-button-container').appendChild(script);
    };

    const handlePayment = () => {
        if (!open) {
            const id = `razorpay-button-container`;
            setScriptId(id);
            setIsLoading(true); // Set loading to true when clicked
            loadPaymentScript();
        } else {
            const scriptElement = document.getElementById(scriptId);
            if (scriptElement) {
                scriptElement.remove();
            }
            setScriptId('');
        }
        setOpen(!open);
    };

    const handlePaymentSuccess = () => {
        // Logic to redirect to /profile on success
        window.location.href = '/profile';
    };

    return (
        <>
            {/* Conditionally render the button or loading state */}
            {open ? (
                isLoading ? (
                    <button className="px-4 flex justify-center items-center gap-2 py-2 rounded-lg bg-gray-500 text-white font-semibold text-xl" disabled>
                        Loading... <FaSpinner className="animate-spin" />
                    </button>
                ) : (
                    <button className="px-4 flex justify-center items-center gap-2 py-2 rounded-lg bg-green-600 text-white font-semibold text-xl" >
                        <p>Click Below </p><FaArrowDown />
                    </button>
                )
            ) : (
                <button className="px-4 py-2 rounded-lg bg-green-600 text-white font-semibold text-xl" onClick={handlePayment}>
                    Pay via Razorpay
                </button>
            )}

            <div className="flex justify-start items-center mt-8">
                <form id="razorpay-button-container" onLoad={handlePaymentSuccess}>
                    {/* Razorpay button script will be appended here */}
                </form>
            </div>
        </>
    );
};

export default RazorpayBtn;





