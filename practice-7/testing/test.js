const fs = require('fs');

console.log('1. start the script');

//synchronous blocking operation

console.log('2. reading file synchronously');
const dataSync = fs.readFileSync('user-details.text','utf8');
console.log('3. Synchronous Read Completely');

//Asynchronous (non-blocking ) operation
console.log('4. Reading file asynchronously');
fs.readFile('user-details.text','utf8',(err,dataAsync) =>{
  if (err) {
    throw err
  }
  console.log('6. Asynchrounous read completely');
  
})
console.log('5.End of script');


