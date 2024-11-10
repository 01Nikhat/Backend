const express = require('express');
const hostRouter = express.Router();
const path = require('path');

hostRouter.get('/add-home',(req,res,next) =>{
  res.sendFile(path.join(__dirname,"../",'views','add-home.html'));
  
});

hostRouter.post('/add-home',(req,res,next) =>{
  console.log(req.body);
  
  res.sendFile(path.join(__dirname,"../",'views','registerSuccess.html'));
  
});

module.exports = hostRouter;