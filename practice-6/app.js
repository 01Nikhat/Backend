const http = require('http'); // Import the http module
const requestHandler = require('./calculator')

const server = http.createServer(requestHandler)

// Start the server
server.listen(3000, () => {
  console.log('Server is running on address http://localhost:3000');
});
