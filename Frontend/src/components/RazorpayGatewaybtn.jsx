// import React from "react";
// import axios from "axios";

// const RazorpayGatewaybtn = ({ amount }) => {
//   // Load Razorpay script
//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   // Handle payment process
//   const handlePayment = async () => {
//     const res = await loadRazorpayScript();

//     if (!res) {
//       alert("Failed to load Razorpay. Please check your internet connection.");
//       return;
//     }

//     // Create an order by calling backend
//     const result = await axios.post(
//       "http://localhost:5000/api/payment/create-order",
//       { amount },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
  
//   if (!result) {
//     alert("Server error. Please try again later.");
//     return;
//   }

//   const { orderId } = result.data;

//   // Configure Razorpay payment options
//   const options = {
//     key: "rzp_test_IjP8RmI83ybZVb", // Replace with your Razorpay Key ID
//     amount: amount * 100, // Amount in paise
//     currency: "INR",
//     name: "Bonjour Inde Voyage",
//     description: "Test Transaction",
//     order_id: orderId,
//     handler: (response) => {
//       alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
//     },
//     prefill: {
//       name: "John Doe",
//       email: "johndoe@example.com",
//       contact: "9999999999",
//     },
//     theme: {
//       color: "#F37254",
//     },
//   };

//   const paymentObject = new window.Razorpay(options);
//   paymentObject.open();
// };

// return (
//   <button
//     onClick={handlePayment}
//     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
//   >
//     Pay ₹{amount}
//   </button>
// );
// }
// export default RazorpayGatewaybtn;

import React, { useState } from "react";
import axios from "axios";

const RazorpayGatewaybtn = ({ amount }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle payment process
  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Failed to load Razorpay. Please check your internet connection.");
      return;
    }

    // Create an order by calling backend
    const result = await axios.post(
      `${BACKEND_URL}/api/payment/create-order`,
      { amount },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!result) {
      alert("Server error. Please try again later.");
      return;
    }

    const { orderId } = result.data;

    // Configure Razorpay payment options
    const options = {
      key: "rzp_test_IjP8RmI83ybZVb", // Replace with your Razorpay Key ID
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "Bonjour Inde Voyage",
      description: "Test Transaction",
      order_id: orderId,
      handler: (response) => {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
      },
      theme: {
        color: "#F37254",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text- font-semibold text-gray-800 text-center">
        Please fill in the details and click the Pay button
      </h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
        required
      />
      <input
        type="tel"
        name="contact"
        placeholder="Contact Number"
        value={formData.contact}
        onChange={handleChange}
        className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
        required
      />
      <button
        onClick={handlePayment}
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 shadow hover:shadow-lg"
      >
        Pay ₹{amount}
      </button>
    </div>
  );
};

export default RazorpayGatewaybtn;

