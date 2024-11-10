const express = require('express'); // external module
const path = require('path');
const homeRouter = require('./routes/homeRoute');
const contactRouter = require('./routes/contactRouter');

const rootDir = require("./utils/pathUtils");

const app = express();

app.use(homeRouter);
app.use(contactRouter);

app.post('/contact-us',(req,res,next) =>{
  res.sendFile(path.join(rootDir,'views','contactSubmit.html'));
})

// 404 page not found middleware
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
