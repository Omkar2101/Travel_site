const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // Uncomment if required: required: [true, 'First name is required'],
        // Uncomment if needed: trim: true,  // Trims whitespace from the input
    },
    lastName: {
        type: String,
        required: [false, 'Last name is required'],
        trim: true,
    },
    birthDate: {
        type: Date,
        required: [false, 'Birth date is required'],
    },
    gender: {
        type: String,
        required: [false, 'Gender is required'],
        enum: ['Male', 'Female', 'Other'],  // Limits gender to these options
    },
    height: {
        type: Number,
        required: [false, 'Height is required'],
        min: [30, 'Height must be at least 30 cm'],  // Validates minimum height
    },
    weight: {
        type: Number,
        required: [false, 'Weight is required'],
        min: [1, 'Weight must be at least 1 kg'],  // Validates minimum weight
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,  // Ensures email is unique
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],  // Validates email format
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number'],  // Validates mobile number format
        unique: true,  // Ensures mobile number is unique
    },
    bloodGroup: {
        type: String,
        required: [false, 'Blood group is required'],
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'I don\'t know'],  // Limits blood group to these options
    },
    address: {
        type: String,
        required: [false, 'Address is required'],
        trim: true,
    },
    passportnumber: {
        type: String,  // Changed from Number to String
        required: [true, 'Passport number is required'],
    },
    userid: {
        type: String,
        unique: true,
        required: [true, 'User ID is required'],
    },
    profilePicture: {
        data: Buffer,
        contentType: String
    },
    idProof: {
        data: Buffer,
        contentType: String
    }
}, {
    timestamps: true,  // Adds createdAt and updatedAt timestamps automatically
});

module.exports = mongoose.model('Profile', ProfileSchema);
