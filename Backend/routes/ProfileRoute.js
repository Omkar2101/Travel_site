const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { profilePicture, idProof, ...profileData } = req.body;

        // If files are present, convert them to Buffer and include in profileData
        if (req.files) {
            if (req.files.profilePicture) {
                profileData.profilePicture = {
                    data: req.files.profilePicture.data,
                    contentType: req.files.profilePicture.mimetype
                };
            }
            if (req.files.idProof) {
                profileData.idProof = {
                    data: req.files.idProof.data,
                    contentType: req.files.idProof.mimetype
                };
                
            }
        }
        // console.log(profileData)
        const existingUser = await Profile.findOne({ userid: profileData.userid });

        if (existingUser) {
            // Delete the existing user
            await Profile.deleteOne({ userid: profileData.userid });
            console.log(`Deleted existing user with userid: ${profileData.userid}`);
        }

        const newProfile = new Profile(profileData);
        await newProfile.save();
        res.status(201).json({ message: 'Profile created successfully!', profile: newProfile });

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
