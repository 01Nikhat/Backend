const http = require('http'); // Import the http module
const express = require('express');//external module
const requestHandler = require('./user')

const app = express();

app.use((req,res,next) =>{
  console.log('came in first middleware',req.url,req.method);
  
  next();
  
});

app.use((req,res,next) =>{
  console.log('came in second middleware',req.url,req.method);
  res.send("<p>Welcome to second middleware</p>");
  
  
})

//const server = http.createServer(app);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
