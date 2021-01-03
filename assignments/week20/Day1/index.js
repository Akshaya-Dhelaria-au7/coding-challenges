const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const loginRoute = require('./routes/login')
let port = 3000

var app = express();

mongoose.connect('mongodb://localhost/Tracker',({useUnifiedTopology:true,useNewUrlParser:true}))
.then(()=>console.log("Connected to Database"))
.catch((err)=>console.log("Error while connecting to Database!! " + err))

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))
app.set('views','view_engine');
app.set('view engine','hbs')

app.use('/api/user',loginRoute)
// app.use('/', loginRoute)

app.listen(port,()=>{
    console.log(`Listening to ${port} port`)
})