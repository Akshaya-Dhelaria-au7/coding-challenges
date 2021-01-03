const express = require("express");
const cookieParser = require("cookie-parser");
const port = 3001


//Creating Object
let app = express()

//Middleware
app.use(express.json())
app.use(cookieParser("test"))

app.get("/" , (req,res)=>{
    const cookieConfig = {
        secure: false,                                
        httponly: true,
        maxAge: 1000*60*10,                        //time limit for 10 minutes
        signed: true                                   //it will encrypt the value                                    
    }
    res.cookie("someKey" , "someValue" , cookieConfig)
    // console.log(res.cookie)
    res.send("Hello")
})

// app.get("/getCookie" , (req,res)=>{
//     let newCookie = req.cookies
//     console.log(newCookie)
//     res.send("Got the cookie")
// })
    
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

