import express from "express";
var router = express.Router();

router.get('/', (req,res)=>{
    res.send("Retrieving all items")
})

router.post('/' , (req,res)=>{
    let item = req.body
    for (let eachItem in item){
        item.append(eachItem);
    }
    res.send(item);
})

module.exports= router;