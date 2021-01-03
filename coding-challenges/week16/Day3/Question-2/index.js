const fs = require("fs")
const args = require("minimist")(process.argv.slice(2),{
    string: ["lorem"]                                           //command will be node index.js --lorem=lorem.txt
})


// console.log(args)

if (args.lorem === "lorem.txt"){
   fs.readFile("lorem.txt","utf8",(err,data)=>{
    
    fs.writeFile("loremFile.txt",data,(err,data)=>{
        console.log(data)
    })
})
}else{
    console.log("File not found")
}


