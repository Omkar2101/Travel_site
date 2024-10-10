const express = require('express');
const router = express.Router();
const User = require('../models/Profile'); // Ensure the correct path to your User model

// Assuming you have a User model or collection in your database

router.get('/:formatPh', async (req, res) => {
    console.log('Searching for mobile:', req.params.formatPh); // Log the search parameter
    try {
        const user = await User.findOne({ mobile: req.params.formatPh });
        console.log('User found:', user); // Log the found user
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        console.error('Error while searching for user:', error); // Log any error
        res.status(500).json({ message: 'Server Error' });
    }
});



module.exports = router;

  
  