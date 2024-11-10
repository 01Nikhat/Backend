const express = require('express');
const hostRouter = express.Router();

hostRouter.get('/add-home',(req,res,next) =>{
  res.send(
  `<h1>Register Your home here</h1>
  <form action="/host/add-home" method="POST">
      <input type="text" name="houseName" placeholder="Enter Your Name of your house"/>
      <input type="submit" />
      
  </form>`
  ); 
  
});

hostRouter.post('/add-home',(req,res,next) =>{
  console.log(req.body);
  
  res.send(
  `<h1>Register Successfully</h1>
  <a href="/">Go to home page</a>`
  ); 
  
});

module.exports = hostRouter;