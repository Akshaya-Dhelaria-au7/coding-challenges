const fs = require('fs')

//Using fs 
// let test = "Welcome"

// fs.writeFile("uppercase.txt",test,(err)=>{
//     console.log("New file created")            
// })
// fs.readFile("uppercase.txt",(err)=>{
//     var result = test.toUpperCase()
//     console.log(result)
// })

//===============================================================================================

//Using streams

stream=fs.createWriteStream("uppercase.txt")                          //writing in the file
stream.write("Hello, Welcome to AttainU. Happy Coding!!!")

var stream = fs.createReadStream(__dirname+'/uppercase.txt')          //reading the file

stream.on("data", function(data){
    var chunk = data.toString().toUpperCase()
    console.log(chunk)
})




