const sumRequestHandler = require('./sum');

const requestHandler = (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    console.log("Welcome To Home");
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write('<body><h1>Welcome to Calculator</h1>');
    res.write('<a href="http://localhost:3000/calculator">Click On the Calculator</a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  else if (req.url === "/calculator") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write('<body><h1>Enter Two Numbers</h1>');
    res.write('<form action="/calculate-result" method="POST">');
    // Corrected input names to "first" and "second"
    res.write('<input type="number" name="first" placeholder="Enter first number" />');
    res.write('<input type="number" name="second" placeholder="Enter second number" /><br>');
    res.write('<input type="submit" value="Sum" />');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  else if (req.url === "/calculate-result" && req.method === 'POST') {
    return sumRequestHandler(req, res); // Call sumRequestHandler to process form data
  }
};

module.exports = requestHandler;
