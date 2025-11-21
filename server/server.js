
const http = require('http');  // Import HTTP module
const app = require('./app');  // Import the app.js file which contains app logic
const port = process.env.PORT || 4000;  // Set port, default to 4000

// Create server using app.js
const server = http.createServer(app);

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

