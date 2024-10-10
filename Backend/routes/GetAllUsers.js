const express = require('express');
const router = express.Router();

// Import the actual model
const AllUsers = require('../models/Participent'); 

// Route to get all users by a specific user ID
router.get('/alluser/:useridFromCookie', async function(req, res) {
    try {
        // Find all users with the specified userid
        const users = await AllUsers.find({ userid: req.params.useridFromCookie });
        
        // Check if no users were found
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'Users not found' });
        }

        // Send found users as JSON
        res.json(users);
    } catch (error) {
        // Return server error if something goes wrong
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
