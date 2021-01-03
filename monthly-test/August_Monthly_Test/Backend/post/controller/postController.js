const postModel = require('../model/postModel')
const sequelize = require('sequelize')

var controller = {
    addPost: (req,res) => {
        let each_post = new postModel({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            likes: req.body.likes,
            comments: req.body.comments,
            user_id: req.app.get("data1").user_id
        })

        each_post.save()
        .then((val)=>{
            res.status(200).json({
                message:"Post created",
                data:each_post
            })
        })
        .catch((err) => {
            res.status(500).json({
                message:"Error in creating post",
                err:err.message
            })
        })
    },

    viewUserPost: (req,res) => {
        postModel.findAll({
            where:{
                user_id:req.app.get("data1").user_id
            }
        })
        .then((data)=>{
            // console.log("Data is" , data)
            if(data){
                res.status(200).json({
                    message:"Found your posts",
                    posts:data
                })
            }else{
                res.status(400).json({
                    message:"No post found"
                })
            }
        })
        .catch((err)=> {
            res.status(500).json({
                message:"Error in showing your post",
                err:err.message
            })
        })
    },

    viewAllPost : (req,res) => {
        postModel.findAll()
        .then((data) => {
            if(data.length>0){
                res.status(200).json({
                    message:"Posts",
                    posts:data
                })
            }
            else{
                res.status(400).json({
                    message:"No posts yet"
                })
            }
        })
        .catch((err) => {
            res.status(500).json({
                message:"Error while fetching post",
                error:err.message
            })
        })
    },


    like:(req,res)=>{
        postModel.findAll({
            where: {
                post_id:req.params.post_id
            }
        })
        .then((data)=>{
            console.log(data[0].likes)
            data[0].like += 1
            res.status(200).json({
                message:"Liked the post",
                data:data
            })
        })
        .catch((err)=>{
            console.log(err)
            res.json({
                error:err
            })
        })
    },
    deletePost : (req,res) => {
        postModel.destroy({
            where:{
                user_id: req.app.get("data1").user_id,
                [sequelize.Op.and]:{
                    post_id: req.params.post_id
                }
            }
        })
        .then((data) => {
            if(!data){
                res.status(404).json({
                    message:"No post found"
                })
            }
            else{
                res.status(200).json({
                    message:"Post deleted!!!"
                })
            }
        })
        .catch((err)=>{
            res.status(500).json({
                message:"Error while deleting post",
                error:err.message
            })
        })
    }

}

module.exports = controller