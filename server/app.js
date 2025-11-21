const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/config'); // Path to your config

const app = express();

// -------- SET EJS TEMPLATE ENGINE --------
app.set('views', path.join(__dirname, 'views')); // Ensure it's pointing to the correct 'views' folder
app.set('view engine', 'ejs');

// -------- MIDDLEWARE TO HANDLE FORM DATA --------
app.use(express.urlencoded({ extended: true })); // <-- REQUIRED FOR POST FORM SUBMISSION!

// -------- SERVE STATIC FILES --------
app.use(express.static(path.join(__dirname, 'public'))); // Correct path to serve static files

// -------- CONNECT TO MONGODB --------
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));

// -------- ROUTES --------
const indexRouter = require('./routes/index'); // Import the index router
app.use('/', indexRouter); // Use the indexRouter for the '/' route

// More routes can be added here as necessary

module.exports = app; 


