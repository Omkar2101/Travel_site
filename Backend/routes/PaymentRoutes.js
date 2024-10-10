const express =require('express');
const {createOrder} =require("../Controllers/paymentController")
const router = express.Router();

router.post('/payment/create-order', createOrder);

module.exports = router;