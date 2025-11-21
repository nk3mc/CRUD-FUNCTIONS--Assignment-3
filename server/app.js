const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/config'); // Path to config

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Failed to connect to MongoDB", err));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

module.exports = app;
