const express = require("express");
const multer = require("multer");
const hbs = require("hbs")
const path = require("path")
const port = 5000;

const storage = multer.diskStorage({
    destination: "./public/files",
    filename: (req,file,callback)=>{
        callback(null,file.originalname) /*path.extname(file.originalname)*/ //extname will give the extension of the file like"html","gif"
    }   
})

const upload = multer({
    storage: storage,
 // limits:{fileSize: 1000000}         //if we want the particular size of file to be uploaded, we can use limits  
}).single("image")                        //if we put .single, it will upload single image and if we put array , then it will upload multiple files

// const upload = multer({storage: storage}).array("image",4)        //to upload multiple files using array

const app = express();

//HBS
app.set("view engine" , "hbs")

//Public Folder
app.use(express.static("./public"))

app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/upload",(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.render('index',{
                msg: "Not uploaded"
            })
        }else{
            // console.log(req.file)
            res.send("Uploaded Successfully!!!")
        }
    })
})

app.listen(port,()=>{console.log(`Listening on port ${port}`)})