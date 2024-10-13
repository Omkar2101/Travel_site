const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); 
const fileUpload = require('express-fileupload');

// const multer = require('multer');

const multer = require('multer');

// const upload = multer();

const app = express();
app.use(cors());
// app.use(upload.array());

// Create a Router instance
const router = express.Router();
app.use(fileUpload());

// Middleware
app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.json());
app.use(express.json());

// MongoDB connection
mongoose.connect(`mongodb+srv://2024travelapp:h4pspMqgy7Jy3N0x@traveldatabase.6falk9q.mongodb.net/traveldb`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
    
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

  

  // Import routes
const ProfileRoute = require('./routes/ProfileRoute');
const GetuserRoute=require("./routes/Getuser")
const ParticipentRoute = require("./routes/ParticipentRoute")
const CheckUserRoute = require('./routes/CheckIfUserExist')
const GetAllUsersRoute =require("./routes/GetAllUsers")
const paymentRoutes = require('./routes/PaymentRoutes');
const BlogRoute = require("./routes/BlogRoute");
//Mongoose model
const Profile = require('./models/Profile');


app.use('/profile', ProfileRoute);
app.use('/api', GetuserRoute);
app.use('/user', CheckUserRoute);
app.use('/participent',ParticipentRoute)
app.use('/api',GetAllUsersRoute);
app.use('/api',paymentRoutes);
app.use('/blog/api',BlogRoute)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
