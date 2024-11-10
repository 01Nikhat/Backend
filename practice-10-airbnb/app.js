
const express = require('express');//external module
const userRouter = require("./routes/userRouter");//local module

const app = express();



app.get((req,res,next) =>{
  console.log(req.url,req.method);
  next();
});


app.use(express.urlencoded());

app.use(userRouter);

app.get('/host/add-home',(req,res,next) =>{
  res.send(
  `<h1>Register Your home here</h1>
  <form action="/host/add-home" method="POST">
      <input type="text" name="houseName" placeholder="Enter Your Name of your house"/>
      <input type="submit" />
      
  </form>`
  ); 
  
});

app.post('/host/add-home',(req,res,next) =>{
  console.log(req.body);
  
  res.send(
  `<h1>Register Successfully</h1>
  <a href="/">Go to home page</a>`
  ); 
  
});


//const server = http.createServer(app);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
