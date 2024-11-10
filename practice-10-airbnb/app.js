
const express = require('express');//external module
const userRouter = require("./routes/userRouter");//local module
const hostRouter = require("./routes/hostRouter");

const app = express();



app.get((req,res,next) =>{
  console.log(req.url,req.method);
  next();
});


app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next) =>{
  res.status(404).send('<h1>404 Your page is not found on airbnb</h1>');
})
//const server = http.createServer(app);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
