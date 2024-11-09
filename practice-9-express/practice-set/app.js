const http = require('http'); // Import the http module
const express = require('express');//external module


const app = express();

app.use('/',(req,res,next) =>{
  console.log('came in first middleware',req.url,req.method);
   next();
});

app.use('/',(req,res,next) =>{
  console.log('came in second middleware',req.url,req.method);
  next();
});
app.get('/',(req,res,next) =>{
  console.log('came in third middleware',req.url,req.method);
  res.send("<p>Welcome to third middleware</p>"); 
});

app.get('/contact-us',(req,res,next) =>{
  res.send(
  `<html>
    <head><title>Practice set</title></head>
    <body>
    <h1>Enter Your Details</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="username" placeholder="Enter Your Name" />
    <input type="text" name="email" placeholder="Enter Your Email" />
    <input type="submit" value="Submit" />
    </form>
    </body>
  </html>`); 
});

app.post('/contact-us',(req,res,next) =>{
  console.log('constct-us for post',req.url,req.method);
  res.send("<p>Shortly Meet You Sonn</p>"); 
});

//const server = http.createServer(app);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
