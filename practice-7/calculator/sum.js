const sumRequestHandler = (req, res) => {
  console.log("in Sum Request Handler", req.url);
  const body = [];
  
  req.on('data', chunk => {
    body.push(chunk);
    console.log(chunk);
  });
  
  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    
    // Extract values as numbers
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log("Result:", result);
    
    // Send result back as HTML
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculation Result</title></head>');
    res.write('<body><h1>Calculation Result</h1>');
    res.write(`<p>The sum of ${bodyObj.first} and ${bodyObj.second} is: ${result}</p>`);
    res.write('<a href="http://localhost:3000/calculator">Go back to Calculator</a>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  });
};

module.exports = sumRequestHandler;
