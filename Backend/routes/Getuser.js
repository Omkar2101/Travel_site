const express = require('express');
const router = express.Router();
const User = require('../models/Profile'); // Ensure the correct path to your User model

router.get('/users/:useridFromCookie', async (req, res) => {
  try {
    const user = await User.findOne({ userid: req.params.useridFromCookie });
    console.log(user)
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router;
