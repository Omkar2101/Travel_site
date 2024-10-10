const express = require('express');
const Participent = require('../models/Participent');
const router = express.Router();

router.post('/', async (req, res) => { 
  try {
    const participants = req.body;
    // console.log("participants participants data: ", participants);

    const files = req.files;  
    // console.log(req.files)  
     
    // Transform the incoming data into an array of participant objects
    const participantsArray = [];
    Object.keys(participants).forEach(key => {
      const match = key.match(/(\d+)\[(.+)\]/);
      if (match) {
        const index = match[1];
        const field = match[2];
        console.log('')

        if (!participantsArray[index]) {
          participantsArray[index] = {}; // Initialize the participant object if it doesn't exist
        }

        participantsArray[index][field] = participants[key];
      }
    });

    Object.keys(files).forEach(key=>{
      const match = key.match(/(\d+)\[(.+)\]/);
      if(match){
        const index = match[1];
        const field = match[2];
        participantsArray[index][field] = files[key];
      }
    })

    console.log("Transformed participants data: ", participantsArray);

    const savedParticipants = await Participent.insertMany(participantsArray);
    res.status(201).json(savedParticipants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
