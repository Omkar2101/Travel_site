const Razorpay = require('razorpay');

// Configure Razorpay instance
const razorpay = new Razorpay({
  key_id: 'rzp_test_IjP8RmI83ybZVb',  // Replace with your Razorpay Key ID
  key_secret: 'vT5MoRsPLIXKOH7epYQdRNzK',  // Replace with your Razorpay Secret Key
});

// // Create Razorpay order
// exports.createOrder = async (req, res) => {
//   const { amount } = req.body;
//   console.log(amount);
  
//   const options = {
//     amount: amount * 100,  // Convert to paise
//     currency: 'INR',
//     receipt: `receipt_${Date.now()}`,
//   };
//   console.log(options);
  

//   try {
//     const order = await razorpay.orders.create(options);
//     console.log(order);
    
//     res.status(200).json({ orderId: order.id });
//   } catch (error) {
//     res.status(500).json({ message: 'Unable to create order', error });
//   }
// };

exports.createOrder = async (req, res) => {
    console.log('Request received'); // Log to see if the request is hitting the function
  
    const { amount } = req.body;
    console.log('Amount:', amount); // Log to check if amount is coming through the request body
  
    if (!amount) {
      return res.status(400).json({ message: 'Amount is required' });
    }
  
    const options = {
      amount: amount * 100,  // Convert to paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };
  
    console.log('Options:', options); // Log to ensure options are set properly
  
    try {
      const order = await razorpay.orders.create(options);
      console.log('Order created:', order); // Log the created order
  
      res.status(200).json({ orderId: order.id });
    } catch (error) {
      console.error('Error:', error); // Log the error
      res.status(500).json({ message: 'Unable to create order', error });
    }
  };
  