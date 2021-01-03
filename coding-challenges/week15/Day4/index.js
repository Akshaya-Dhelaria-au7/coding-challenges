const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = 5000;

let app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))


app.get("/" , (req,res)=>{
    res.send("Calculator is working")
});

app.post("/add/num1/num2" , (req,res)=>{
    let result = 0
    // console.log(req.body)
    let num1 = parseInt(req.body.num1)
    let num2 = parseInt(req.body.num2)
    result = num1 + num2
    res.send({ num1 , num2 , result })
})

app.post("/multiply/num1/num2" , (req,res)=>{
    let result = 0
    let num1 = parseInt(req.body.num1)
    let num2 = parseInt(req.body.num2)
    result = num1 * num2
    res.send({ num1 , num2 , result })
})

app.post("/division/num1/num2" , (req,res)=>{
    let result = 0
    let num1 = parseInt(req.body.num1)
    let num2 = parseInt(req.body.num2)
    result = num1 / num2
    res.send({ num1 , num2 , result })
})

app.post("/subtract/num1/num2" , (req,res)=>{
    let result = 0
    let num1 = parseInt(req.body.num1)
    let num2 = parseInt(req.body.num2)
    result = num1 - num2
    res.send({ num1 , num2 , result })
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});