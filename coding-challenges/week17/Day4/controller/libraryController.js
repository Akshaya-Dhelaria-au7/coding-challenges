var Library = require('../model/libraryCollection.model');

let libraryController = {}

libraryController.create = (req,res)=>{
    let eachEntry = new Library (req.body)
    eachEntry.save((err,data)=>{
        if(err) return console.log(err)
        res.send(eachEntry)
    })
}

libraryController.getAll = (req,res)=>{                     //will get all the entries
    Library.find((err,data)=>{
        if(err) return console.log(err)
        res.send(data) 
    })
}

libraryController.getBook=(req,res)=>{
    var array=[]
    Library.find((err,data)=>{
        if(err) return console.log(err)
        if(data){
            // console.log("Complete list is",data)
            for(let eachBook in data){
                // console.log("List of books" , data[eachBook].Book_Name)
                array.push(data[eachBook].Book_Name)
                // console.log(array)
            }res.send(array)
        }
    })
}

libraryController.getBooksBySameAuthor=(req,res)=>{
    var array=[]
    Library.find((err,data)=>{
        if (err) return console.log(err)
        if(data){
            for(let eachBook in data){
                if (data[eachBook].Book_Author == "Hitesh"){
                    array.push(data[eachBook].Book_Name)
                }
        }res.send(array)
    }
    })
}

module.exports = { libraryController }