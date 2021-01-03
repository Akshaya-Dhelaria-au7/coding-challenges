const userModel = require('../model/signup')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

var controller = {

    signing:(req,res)=> {
        let hashedPassword = bcrypt.hashSync(req.body.password,10)
        let sign_up= new userModel({
            name:req.body.name,
            email:req.body.email,
            password: hashedPassword
        })
        sign_up.save()
        .then((val)=>{
            res.status(201).json({
                message:"Successfully Signed in"
            })
        })
        .catch((err)=>{
            res.status(500).json({
                message:"Error while signing up",
                error:err
            })
        })
    },

    login : (req,res)=>{
        userModel.findOne({
            where:{
                email:req.body.email
            },
        })
        .then((data)=>{
            if(data === null){
                res.status(401).json({                                 
                    message:"Please check your email/password"
                })
            }
            else{
                let boolean = bcrypt.compareSync(req.body.password , data.password)
                if(boolean == true){
                    const token = jwt.sign({
                        email: data.email,
                        user_id: data.uuid
                    },"secret", {
                        expiresIn: "1h"
                    })
                    res.status(200).json({
                        message:"Successfully logged in!!!",
                        token: token
                    })
                }else{
                    res.status(401).json({
                        message:"Invalid Password!!"
                    })
                }
            }
        })
        .catch((err)=>{
                console.log("Error while login done by user ",JSON.stringify(err))
                res.status(500).json({
                    message:"Cannot log in",
                    error:err.message
                })
            })
        },

}

module.exports = controller