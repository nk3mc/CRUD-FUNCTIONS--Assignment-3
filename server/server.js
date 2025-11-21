
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const app = require('./app');

const PORT = process.env.PORT || 4000;

// Connect to MongoDB
mongoose.connect(config.mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Failed to connect to MongoDB", err));

// Start server directly on Express app (important for Render!)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
