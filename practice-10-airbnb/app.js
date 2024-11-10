
const express = require('express');//external module
const path = require('path');//core module
const userRouter = require("./routes/userRouter");//local module
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");

const app = express();



app.get((req,res,next) =>{
  console.log(req.url,req.method);
  next();
});


app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next) =>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})
//const server = http.createServer(app);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
