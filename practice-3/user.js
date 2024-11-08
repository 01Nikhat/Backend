// const http = require('http'); // Import the http module
// const fs  = require('fs');

// const server = http.createServer((req,res) =>{   
//   if (req.url === "/") {
//     res.write('<html>');
//       res.write('<head><title>Product</title></head>');
//       res.write('<body><h1>Enter Your Details</h1>');
//       res.write('<form action="/submit-details" method="POST">')
//       res.write('<input type="text" name="username" placeholder="Enter Your Name" /><br>');
//       res.write('<label for="male">Male</label>');
//       res.write('<input type="radio" id="male" name="gender value="male" /><br>');
//       res.write('<label for="female">Female</label>');
//       res.write('<input type="radio" id="female" name="gender value="female" /><br>');
//       res.write('<input type="submit" value="Submit"  />');
//       res.write('</form>');
//       res.write('</body>');
//       res.write('</html>');
//       return res.end();
 
    
//   }
//   else if(req.url.toLocaleLowerCase === "submit-details" && req.method === 'POST'){
//       fs.writeFileSync('user-Text','Nikhat');
//       res.statusCode(302);
//       res.setHeader('Location','/');
    
//   }
//   res.setHeader('content-Type','text/html');
//   res.write('<html>');
//   res.write('<head><title>Coding</title></head>');
//   res.write('<body><h1>Hey Nikki</h1></body>');
//   res.write('</html>');
//   return res.end();
      

// })

// // Start the server
// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
const http = require('http'); // Import the http module
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write('<html>');
    res.write('<head><title>Product</title></head>');
    res.write('<body><h1>Enter Your Details</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter Your Name" /><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" /><br>'); // Fixed value attribute
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" /><br>'); // Fixed value attribute
    res.write('<input type="submit" value="Submit" />');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  else if (req.url === "/submit-details" && req.method === 'POST') {
   
    fs.writeFileSync('user-Text','Nikhat');
    res.statusCode(302);
    res.setHeader('Location','/');
    
    
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Coding</title></head>');
  res.write('<body><h1>Hey Nikki</h1></body>');
  res.write('</html>');
  return res.end();
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
