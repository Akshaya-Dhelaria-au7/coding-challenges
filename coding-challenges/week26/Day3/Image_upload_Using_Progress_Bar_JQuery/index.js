const express = require('express')
const PORT = 5000
const app = express()

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/image_upload.html")
})

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
})