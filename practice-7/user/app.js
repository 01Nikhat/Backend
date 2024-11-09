const http = require('http'); // Import the http module
const requestHandler = require('./user')

const server = http.createServer(requestHandler)

// Start the server
server.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
