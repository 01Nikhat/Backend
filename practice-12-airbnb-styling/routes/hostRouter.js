const express = require('express');
const hostRouter = express.Router();
const path = require('path');

const rootDir = require("../utils/pathUtils");

hostRouter.get('/add-home',(req,res,next) =>{
  res.sendFile(path.join(rootDir,'views','add-home.html'));
  
});

hostRouter.post('/add-home',(req,res,next) =>{
  console.log(req.body);
  
  res.sendFile(path.join(rootDir,'views','registerSuccess.html'));
  
});

module.exports = hostRouter;