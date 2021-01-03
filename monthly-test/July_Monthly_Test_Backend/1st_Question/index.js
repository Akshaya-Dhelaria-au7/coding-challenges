var express = require('express');
var mongoose = require('mongoose')
var fs = require('fs');
var xlsx = require('xlsx')
var mongooseSchema = require('./models/schema')
var PORT = 8080


mongoose.connect('mongodb://localhost/Uploads' , {useUnifiedTopology:true , useNewUrlParser:true})
  .then(()=> console.log("Connected to Database"))
  .catch((err) => console.log("Error" + err))

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.get('/uploads',(req,res)=>{
    let dataFile = xlsx.readFile("/home/gourav/Desktop/excel_data.ods");
    let data = xlsx.utils.sheet_to_json(dataFile.Sheets["Sheet1"]);
    fs.writeFileSync("downloads/data.json",JSON.stringify(data));
    var uploadDoc= new mongooseSchema()
    uploadDoc.save()
    var fullpath = __dirname + "/downloads/" + "data.json";
    res.send("Succesfully uploaded at this location: " +  fullpath);
})


app.listen(PORT,()=>{
    console.log("Listening to server")
})

module.exports = app;