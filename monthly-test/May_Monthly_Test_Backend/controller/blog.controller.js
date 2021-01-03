var blogModel = require('../model/library.model')
var controller = {}

//Create
controller.create=(req,res)=>{
    let each_blog = new blogModel({
        Blog_Title: req.body.Blog_Title,
        Author: req.body.Author,
        Genre: req.body.Genre,
        Rating:req.body.Rating,
        Comment: req.body.Comment,
        Year_Of_Release:req.body.Year_Of_Release
    })
    each_blog.save((err)=>{
        if(err){
            res.status(400).send("OOPS!!!!Couldn't Make A Blog")
        }else{
            res.send({
                message:"Your Blog Created",
                data:each_blog
            })
        }
    })
}

//Find all blogs 
controller.findAll=(req,res)=>{
    blogModel.find((err,data)=>{
        if(err){
            res.send("Error in getting all blogs " + err )
        }else{
            res.send({
                message: "Complete list of blogs",
                data:data
            })
        }
    })
}

//Find a blog on the basis of ID
controller.findone=(req,res)=>{
    var find_query = {"_id": req.params._id}
    blogModel.findOne(find_query,(err,data)=>{
        if(err){
            res.send("Error in getting a blog " + err )
        }else{
            res.send({
                message:"One blog sent",
                data: data
            })
        }
    })
}

//Update a blog on the basis of ID
controller.update=(req,res)=>{
    var query = {"_id":req.params._id}
    var updateQuery = {
        $set: {"Blog_Title": req.body.Blog_Title}
    }
    blogModel.updateOne(query,updateQuery,(err)=>{
        if(err){
            res.send("Cannot updated as " + err )
        }else{
            res.send({
                message:"Updated"
            })
        }
    })
}

//Delete a blog on the basis of ID
controller.delete=(req,res)=>{
    var delete_query = {"_id":req.params._id}
    blogModel.deleteOne(delete_query,(err)=>{
        if(err){
            res.send("Error in deleting " + err)
        }else{
            res.send({
                message:"Deleted"
            })
        }
    })
}

//Search Author or Blog_Title and if given invalid Author or Blog_Title, will show "No Blog Found" and sort according to title and rating
controller.search=(req,res)=>{
    var search_query;
    if(req.params.Author != null) {
        search_query = {"Author": req.params.Author};
    } else {
        search_query = {"Blog_Title":req.params.Blog_Title}
    }

    blogModel.find(search_query,(err,data)=>{
        if(err){
            res.send("Error in getting a blog " + err )
        }else if (data == null) {
            res.send({
                message:"No blog found!!!"
            })
        }
        else{
            res.send({
                message:"One blog sent",
                data: data
            })
        }
    }).sort({"Rating":1, "Blog_Title":1})
}

module.exports = {controller}
