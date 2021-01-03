var Repository = require('../model/attainustudent.model')

var attainController = {}

attainController.create=(req,res)=>{
    let result = new Repository(req.body)
    result.save((err,data)=>{
        if (err) return console.log(err)
        res.send(result) 
    })
}

attainController.findAll=((req,res)=>{
    Repository.find((err,data)=>{
    if(err) return console.log(err)
    res.send(data)
    })
})

attainController.filter=(req,res)=>{
    var query = { State:  req.body.State};
    Repository.find(query,(err,data)=>{
        if (err) throw err
        res.send(data)
    })
}

attainController.getEachStudent=(req,res)=>{
    var query = { Email:  req.body.Email};
    Repository.find(query,(err,data)=>{
        if (err) throw err
        res.send(data)
    })
}


module.exports = { attainController }