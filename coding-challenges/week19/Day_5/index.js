var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');
var indexRouter = require('./routes/index')

let app = express();

fs.readFile('data.json','utf-8',(err,data)=>{
	if(err) throw err;
	else console.log(data);
});

app.use('/' , indexRouter)


app.listen(8000,()=>{
	console.log(`Listening to ${port} port`)
})

module.exports = app;