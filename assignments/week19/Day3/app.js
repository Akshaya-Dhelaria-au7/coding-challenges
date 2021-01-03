import express from "express";
import bodyParser from "body-parser";

import indexRouter from './routes';

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/list' , indexRouter)
app.use('/post' , indexRouter)

app.listen(3000,()=>{
    console.log("Listening to server....")
});
