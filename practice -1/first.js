console.log('heyy nikhat');
const fs = require("fs")
fs.writeFile("output text","writting files",(err)=>{
  if (err) {
    console.log("error occured");  
  }
  else{
      console.log("File written Successfully");
      
  }
})