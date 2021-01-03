var Repository = require('../model/attainustudent.model')

var attainController = {}

attainController.create=(req,res)=>{
    let result = new Repository(req.body)                          
    result.save((err,data)=>{
        if (err) return console.log(err)
        res.send(result) 
    })
}

attainController.findAll=((req,res)=>{                                 //will get allthe records of the students
    Repository.find((err,data)=>{ 
    if(err) return console.log(err)
    res.send(data)
    })
})

// attainController.filter=(req,res)=>{
//     var query = { State:  req.body.State};
//     Repository.find(query,(err,data)=>{
//         if (err) throw err
//         res.send(data)
//     })
// }

// attainController.getEachStudent=(req,res)=>{
//     var query = { Email:  req.body.Email};                     //primary key(unique key) here will be emailid so we can differ info of all students
//     Repository.find(query,(err,data)=>{
//         if (err) throw err
//         res.send(data)
//     })
// }

// attainController.updating=(req,res)=>{
//     var query = {State: req.body.State}
//     var updating = {$set:{States: "Kerala"}}                   //to update the State
//     Repository.updateOne(query,updating,(err,data)=>{
//         if (err) throw err
//         console.log("One document updated")
//         res.send(data)
//     })
// }

// attainController.deleting=(req,res)=>{
//     var query = {First_Name: req.body.First_Name}            //delete a particular student 
//     Repository.deleteMany(query,(err,data)=>{
//         if(err) return err
//         console.log("1 Document deleted")
//         res.send(data)
//     })
// }

module.exports = { attainController }